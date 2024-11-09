import { useState } from "react";
import './Sidebar.css'

function Sidebar(){
  const [isExpanded,setIsExpanded]=useState(false);

  const toggleMenu=()=>{
    setIsExpanded(!isExpanded);
  };

  return(
    <div className={`sidebar ${isExpanded?'expanded':''}`}>
      <button onClick={toggleMenu} className="toggle-button">
        {isExpanded?'Close Menu': 'Open Menu'}
      </button>
      <ul className="menu-list">
        <li>Dashboard</li>
        <li>Reports</li>
        <li>Settings</li>
        <li>Dashboard</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </div>
  )
}
export default Sidebar;