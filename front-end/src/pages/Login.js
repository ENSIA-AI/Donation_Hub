import { NavLink } from "react-router-dom";

const SidebarItem = ({ iconClass, label, to }) => {
  return (
    <li className="dash_sidebar_item">
      <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
        <i className={`fa-solid ${iconClass} sidebar_btn`}></i>
        {label}
        <span className="active_indicator"></span>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
