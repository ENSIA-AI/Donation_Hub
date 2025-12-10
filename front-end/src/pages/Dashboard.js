import React, { useState, useEffect } from 'react';
import '../styles/dashboard.css';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState(null);
  const [donations, setDonations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch statistics
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/dashboard/statistics')
      .then(res => res.json())
      .then(data => {
        console.log('Stats:', data);
        setStats(data.data);
      })
      .catch(error => console.error('Error fetching stats:', error));
  }, []);

  // Fetch all donations
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/dashboard/donations')
      .then(res => res.json())
      .then(data => {
        console.log('Donations:', data);
        setDonations(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching donations:', error);
        setLoading(false);
      });
  }, []);

  // Handle status change
  const handleStatusChange = async (donationId, newStatus) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/dashboard/donations/${donationId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          donation_received: newStatus === 'received'
        })
      });

      if (response.ok) {
        // Update local state
        setDonations(donations.map(d => 
          d.id === donationId ? { ...d, donation_received: newStatus === 'received' } : d
        ));
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  // Filter donations by search
  const filteredDonations = donations.filter(donation => 
    donation.donor_firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donation.donor_lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donation.donor_email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donation.donation_type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', margin: 0, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: '#f4f4f9' }}>
      {/* Sidebar */}
      <div className="sidebar">
        <div className="info">
          <div className="logo">
            <img src="/logo.png" alt="Logo" />
          </div>
          <div className="org-name">Organization Name</div>
          <div className="profile">
            <a href="#"><i className="fas fa-user"></i>View Profile</a>
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
      </div>

      {/* Main Content */}
      <div className="main-content">
        
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="tab-content" style={{ display: 'block' }}>
            <h2 className="section-title">Dashboard Statistics</h2>
            {stats && (
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
            )}
          </div>
        )}

        {/* Donations Tab */}
        {activeTab === 'donations' && (
          <div className="tab-content" style={{ display: 'block' }}>
            <div className="donations-container">
              
              <div className="top-bar">
                <div className="search-filter-wrapper">
                  <div className="search-box">
                    <i className="fas fa-search"></i>
                    <input 
                      type="text" 
                      placeholder="Search" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <button className="filter-btn">
                    <i className="fas fa-filter"></i> Filter
                  </button>
                </div>
              </div>

              <h2 className="section-title">Donations ({filteredDonations.length})</h2>

              {loading ? (
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
                    {filteredDonations.map((donation) => (
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
                            className="status-select"
                            value={donation.donation_received ? 'received' : 'waiting'}
                            onChange={(e) => handleStatusChange(donation.id, e.target.value)}
                            style={{
                              background: donation.donation_received ? '#d0f0dc' : '#f2f2f2',
                              borderColor: donation.donation_received ? '#2e8b57' : '#aaa'
                            }}
                          >
                            <option value="waiting">Waiting</option>
                            <option value="received">Received</option>
                          </select>
                        </td>
                        <td>{new Date(donation.donation_date).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              <button className="add-btn">+</button>
            </div>
          </div>
        )}

        {/* Requests Tab */}
        {activeTab === 'requests' && (
          <div className="tab-content" style={{ display: 'block' }}>
            <h2 className="section-title">Requests</h2>
            <p>Requests content will go here...</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;