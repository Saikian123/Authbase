import { useState } from "react";
import './Sidebar.css';
import expand from '../assets/expand.svg'
import collapse from '../assets/collapse.svg'

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
    console.log(isExpanded)
  };

  return (
    <div className={`sidebar ${isExpanded ? "expand-menu" : "collapse-menu"}`}>
      <button onClick={toggleMenu} className="toggle-button">
        {isExpanded ? <img className="icon-size"  src={collapse} alt="collapse" title="Close" /> : <img className="icon-size" src={expand} alt="expand" title="Open" />}
        {isExpanded}
      </button>
      <ul className="menu-list">
        <li>Home</li>
        <li>About</li>
        <li>Settings</li>
        <li>DashBoard</li>
        <li>Reports</li>
        <li>Contact US</li>
        
      </ul>
    </div>
  )
}
export default Sidebar;