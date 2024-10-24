import React, { useState } from "react";
import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, settLeft] = useState(0);

  const activeTab = (tab, index) => {
    settLeft(index * 100); // 100% width for each tab
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab);
  };

  // console.log("data");
  // console.log(data);
  
  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span 
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
            </span>
        ))}

        <span className="movingBg" style={{ left }}/>
      </div>
    </div>
  )
	
};

export default SwitchTabs;
