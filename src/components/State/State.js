import React from "react";

const State = ({ states, selectedState, setSelectedState }) => {
  const handleStateSelect = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div className="container">
      <div className="display-option">
        <label htmlFor="state">States:</label>
        <select id="state" value={selectedState} onChange={handleStateSelect}>
          {states.map((item, itemIndex) => {
            return (
              <option key={itemIndex} value={itemIndex}>
                {item.name}
              </option>
            );
          })}
        </select>
        
      </div>
      <div className="display-info">
        <div id="state-name" style={{fontWeight:"bold"}}>{states[selectedState].name}</div>
        <div id="state-description">
          {states[selectedState].description}
        </div>
      </div>
      <br />
    </div>
  );
};

export default State;
