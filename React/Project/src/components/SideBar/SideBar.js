import React, { useState } from "react";
import plusicon from "../../assest/plus.png";
import "./SideBar.css";

function SideBar(props) {
    const [listopen,setlistopen] = useState(false);
    const listopenhandler = () => {
      setlistopen(!listopen)
    };
    
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
  return (
    
    <div className="sidebar">
      <img src={plusicon} alt="Add" onClick={listopenhandler}/>
      <ul className={`sidebar_list ${listopen ?'sidebar_list_active' : "" }`}>
        {colors.map((items, index) => (
          <li
            key={index}
            className="sidebar_list_items"
            style={{ backgroundColor: items }}
            onClick={() => props.addnote(items)}
          />
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
