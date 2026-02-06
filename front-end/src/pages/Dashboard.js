import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";


import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  XAxis,
  YAxis,
  Bar
} from 'recharts';




function OrgList({ organizations }) {
  return (
    <div>
      {organizations.map(org => (
        <div key={org.id}>
          <h3>{org.name}</h3>
          <Link to={`/dashboard/${org.id}`}>Go to Dashboard</Link>
        </div>
      ))}
    </div>
  );
}



function Dashboard() {


  const navigate = useNavigate();

  const { id, campaignId } = useParams();

  const [org, setOrg] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState({
    total_donations: 0,
    total_money_amount: 0,
    waiting_donations: 0,
    received_donations: 0,
    donations_by_type: []
  });
  
  const [donations, setDonations] = useState([]);
  const [requests, setRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [loadingDonations, setLoadingDonations] = useState(true);
  const [loadingRequests, setLoadingRequests] = useState(true);
  const [showMoreDonations, setShowMoreDonations] = useState(false);
  const [showMoreRequests, setShowMoreRequests] = useState(false);
  
  const VISIBLE_ROWS = 4;
  const COLORS = ["#107361", "#FEDA79"];

  const pieData = stats ? [
  { name: "Received", value: stats.received_donations || 0 },
  { name: "Waiting", value: stats.waiting_donations || 0 },
] : [];

//chart data
const barData = stats && Array.isArray(stats.donations_by_type)
  ? stats.donations_by_type.map(d => ({
      type: d.donation_type,
      count: d.count,
      totalAmount: d.total_amount || 0
    }))
  : [];

   useEffect(() => {
    if (!id) return;

    const fetchOrg = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/organizations/${id}`, {
          credentials: "include",
        });
        const data = await res.json();
        if (res.ok) setOrg(data);
      } catch (err) {
        console.error("Failed to fetch org", err);
      }
    };

    fetchOrg();
  }, [id]);


  // Fetch statistics
   useEffect(() => {
  fetch(`http://127.0.0.1:8000/api/dashboard/statistics?org_id=${id}`, {
  credentials: "include",
})
    .then(res => res.json())
    .then(data => setStats(data.data ?? data))
    .catch(console.error);
  }, []);



  useEffect(() => {
    if (stats) {
      console.log("pieData:", pieData);
      console.log("barData:", barData);
    }
  }, [stats]);




  // Fetch all donations
  useEffect(() => {
  fetch(`http://127.0.0.1:8000/api/dashboard/donations?org_id=${id}`, {
  credentials: "include",
  })
    .then(res => res.json())
    .then(data => {
      console.log('API Response:', data); // See full response
      console.log('Donations array:', data.data); // See the donations array
      console.log('Number of donations:', data.data?.length); // Count
      setDonations(Array.isArray(data.data) ? data.data : []);
      setLoadingDonations(false);
    })
    .catch((err) => {
      console.error('Error fetching donations:', err);
      setLoadingDonations(false);
    });
}, []);


  //Fetch all requests
  useEffect(() => {
  if (!id) return; // make sure org id exists

  setLoadingRequests(true);
  fetch(`http://127.0.0.1:8000/api/dashboard/requests/${id}`, { credentials: "include" })
    .then(res => res.json())
    .then(data => {
      setRequests(Array.isArray(data.data) ? data.data : []);
      setLoadingRequests(false);
    })
    .catch(err => {
      console.error('Error fetching requests:', err);
      setLoadingRequests(false);
    });
}, [id]);


  



  // Handle status change
const handleStatusChange = async (donationId, newStatus) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/donations/${donationId}/status`,
      {
        method: 'PATCH',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          donation_received: newStatus === 'received',
        }),
      }
    );

    const result = await response.json();

    if (response.ok && result.success) {
      setDonations(prev =>
        prev.map(d =>
          d.id === donationId
            ? { ...d, donation_received: result.data.donation_received }
            : d
        )
      );
    }
  } catch (error) {
    console.error('Error updating status:', error);
  }
};

const handleDeleteDonation = async (id) => {
  if (!window.confirm('Delete this donation?')) return;

  try {
    const res = await fetch(
      `http://127.0.0.1:8000/api/donations/${id}`,
      {
        method: 'DELETE',
        credentials: "include",
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    const data = await res.json();
    console.log('DELETE response:', data);

    if (!res.ok) {
      throw new Error(data.message || 'Delete failed');
    }

    setDonations(prev => prev.filter(d => d.id !== id));

  } catch (error) {
    alert(error.message);
  }
};





const filteredDonations = donations.filter(donation => {
  const matchesSearch =
     (donation.donor_firstName ?? '').toLowerCase().includes(searchTerm.toLowerCase()) ||
     (donation.donor_lastName ?? '').toLowerCase().includes(searchTerm.toLowerCase()) ||
     (donation.donor_email ?? '').toLowerCase().includes(searchTerm.toLowerCase()) ||
     (donation.donation_type ?? '').toLowerCase().includes(searchTerm.toLowerCase());
  
  const matchesStatus = 
     statusFilter === 'all' ||
     (statusFilter === 'received' && donation.donation_received) ||
     (statusFilter === 'waiting' && !donation.donation_received);


  return matchesSearch && matchesStatus;
});
    
  const visibleDonations = showMoreDonations ? filteredDonations : filteredDonations.slice(0, VISIBLE_ROWS);


const filteredRequests = requests.filter(request =>
  (request.rec_firstName ?? '').toLowerCase().includes(searchTerm.toLowerCase()) ||
  (request.rec_lastName ?? '').toLowerCase().includes(searchTerm.toLowerCase()) ||
  (request.rec_email ?? '').toLowerCase().includes(searchTerm.toLowerCase()) ||
  (request.rec_type ?? '').toLowerCase().includes(searchTerm.toLowerCase())
);
  
  const visibleRequests = showMoreRequests ? filteredRequests : filteredRequests.slice(0, VISIBLE_ROWS);
const handleOrgLogout = async () => {
  try {
    await fetch("http://127.0.0.1:8000/api/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("organization");

    navigate("/login");

  } catch (error) {
    console.error("Logout failed:", error);
  }
};

  return (
    <div style={{ display: 'flex', margin: 0, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: '#f4f4f9' }}>
      {/* Sidebar */}
      <div className="sidebar">
        <div className="info">
          <div className="logo">
            <img src={org?.logo_url || "/default-logo.png"} alt={org?.name || "Org Logo"} />
          </div>
          <div className="org-name">{org?.name || "Organization Name"}</div>
          <div className="profile">


            <div className="profile">
              <Link to={`/OrgProfile/${org?.id || id}`}>
                <i className="fas fa-user"></i> View Profile
              </Link>

            </div>
            


          </div>
        </div>

        <nav>
          <a 
            href="#" 
            className={`tab-link ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveTab('dashboard'); }}
          >
            <i className="fas fa-chart-line"></i> Dashboard
          </a>
          <a 
            href="#" 
            className={`tab-link ${activeTab === 'donations' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveTab('donations'); }}
          >
            <i className="fas fa-hand-holding-heart"></i> Donations
          </a>
          <a 
            href="#" 
            className={`tab-link ${activeTab === 'requests' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveTab('requests'); }}
          >
            <i className="fas fa-envelope-open-text"></i> Requests
          </a>
        </nav>
        <div className="dash_logout">
              <button onClick={handleOrgLogout}>
                Logout
              </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        
        {/* Dashboard Tab */}
          <div className={`tab-content ${activeTab === 'dashboard' ? 'active' : 'hidden'}`}>
            <h2 className="section-title">Dashboard Statistics</h2>
            {stats ? (
              <>
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>Total Donations</h3>
                  <p className="stat-number">{stats.total_donations}</p>
                </div>
                
                <div className="stat-card">
                  <h3>Total Money Amount</h3>
                  <p className="stat-number">{stats.total_money_amount} DZD</p>
                </div>
                
                <div className="stat-card waiting">
                  <h3>Waiting</h3>
                  <p className="stat-number">{stats.waiting_donations}</p>
                  <small>{stats.waiting_money_amount} DZD</small>
                </div>
                
                <div className="stat-card received">
                  <h3>Received</h3>
                  <p className="stat-number">{stats.received_donations}</p>
                  <small>{stats.received_money_amount} DZD</small>
                </div>
              </div>
            
              {/* Charts */}
                <div className='charts'>
                  <div className='chart-container' style={{ width: '100%', height: 300 }}>
                  {pieData.length > 0 && (
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie 
                         data={pieData} 
                         dataKey="value" 
                         nameKey="name" 
                         cx="50%" 
                         cy="50%" 
                         outerRadius={80} 
                         label
                      >
                        {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                  )}
                </div>

                <div className='chart-container' style={{ width: '100%', height: 300 }}>
                  {barData.length > 0 && (
                  <ResponsiveContainer>
                    <BarChart data={barData}>
                      <XAxis dataKey="type" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" fill="#FEDA79" name="Number of Donations" />
                      <Bar dataKey="totalAmount" fill="#107361" name="Total Amount (DZD)" />
                    </BarChart>
                  </ResponsiveContainer>
                  )}
                </div>
            </div>
              </>
              ) : (
              <p>Loading stats...</p>

            )}
          </div>
        
        {/* Donations Tab */}
          <div className={`tab-content ${activeTab === 'donations' ? 'active' : 'hidden'}`}>
            <div className="donations-container">
              
              <div className="top-bar">
                <div className="search-filter-wrapper">
                  <div className="search-boxx">
                    <i className="fas fa-search"></i>
                    <input 
                      type="text" 
                      placeholder="Search" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <select className='filter_btn' value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                     <option value="all">All</option>
                     <option value="received">Received</option>
                     <option value="waiting">Waiting</option>
                  </select>
                    
                </div>
              </div>

              <h2 className="section-title">Donations ({filteredDonations.length})</h2>

              {loadingDonations ? (
                <p>Loading donations...</p>
              ) : filteredDonations.length === 0 ? (
                <p>No donations found.</p>
              ) : (
                <table className="donations-table">
                  <thead>
                    <tr>
                      <th>Donor</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Donation</th>
                      <th>Status</th>
                      <th>Date</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {visibleDonations.map((donation) => (
                      <tr key={donation.id}>
                        <td>{donation.donor_firstName} {donation.donor_lastName}</td>
                        <td>{donation.donor_email}</td>
                        <td>{donation.donor_phoneNumber}</td>
                        <td>
                          {donation.donation_type}
                          {donation.donation_amount && (
                            <><br /><small>{donation.donation_amount} DA</small></>
                          )}
                        </td>
                        <td>
                          <select
                              className={`status-select ${donation.donation_received ? 'status-received' : 'status-waiting'}`}
                              value={donation.donation_received ? 'received' : 'waiting'}
                              onChange={(e) => handleStatusChange(donation.id, e.target.value)}
                          >
                            <option value="waiting">Waiting</option>
                            <option value="received">Received</option>
                          </select>

                        </td>
                        <td>{new Date(donation.donation_date).toLocaleDateString()}</td>
                        <td>
                           <button
                               className="delete-btn"
                               onClick={() => handleDeleteDonation(donation.id)}
                            >
                             Delete</button>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              <button className="add-btn"
                onClick={() => setShowMoreDonations(!showMoreDonations)}>{showMoreDonations ? '-' : '+' }</button>
            </div>
          </div>
        

        {/* Requests Tab */}
          <div className={`tab-content ${activeTab === 'requests' ? 'active' : 'hidden'}`}>
            <div className="requests-container">
              <div className="top-bar">
                <div className="search-filter-wrapper">
                  <div className="search-boxx">
                    <i className="fas fa-search"></i>
                    <input 
                      type="text" 
                      placeholder="Search" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
              
                </div>
              </div>

              <h2 className="section-title">Requests</h2>

              {loadingRequests ? (
                <p>Loading requests...</p>
              ) : filteredRequests.length === 0 ? (
                <p>No requests found.</p>
              ) : (
                <table className="requests-table">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Type</th>
                      <th>Message</th>
                      <th>Date</th>
                      <th>File</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleRequests.map((request) => (
                      <tr key={request.id}>
                        <td>{request.rec_firstName} {request.rec_lastName}</td>
                        <td>{request.rec_email}</td>
                        <td>{request.rec_phoneNumber}</td>
                        <td>{request.rec_type}</td>
                        <td>{request.rec_message}</td>
                        <td>{new Date(request.rec_date).toLocaleDateString()}</td>
                        <td>
                          {request.rec_file_path ? (
                            <a
                               href={`http://localhost:8000/storage/${request.rec_file_path}`} 
                               target="_blank" 
                               rel="noreferrer"
                            >
                               View File
                            </a>
                          ) : (
                             'No File'
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              <button className="add-btn"
              onClick={() => setShowMoreRequests(!showMoreRequests)}>{showMoreRequests? '-' : '+'}</button>
            </div>
          </div>
        

      </div>
    </div>
  );


}

export default Dashboard;

