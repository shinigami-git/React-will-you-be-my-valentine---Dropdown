import React from 'react'

const Landmark = ({states,selectedState,selectedCity,selectedLandmark,setSelectedLandmark}) => {
    const handleLandmarkSelect = (event) => {
        setSelectedLandmark(event.target.value);
    };
    return (
        <div className="container">
      <div className="display-option">
        <label htmlFor="landmark">Towns:</label>
        <select id="landmark" value={selectedLandmark} onChange={handleLandmarkSelect}>
          {states[selectedState].city[selectedCity].landmarks.map((item, itemIndex) => {
            return (
              <option key={itemIndex} value={itemIndex}>
                {item.name}
              </option>
            );
          })}
        </select>
        
      </div>
      <div className="display-info">
      <div id="landmark-name" style={{fontWeight:"bold"}}>{states[selectedState].city[selectedCity].landmarks[selectedLandmark].name}</div>
        <div id="landmark-description">
          {states[selectedState].city[selectedCity].landmarks[selectedLandmark].description}
        </div>
      </div>
      <br />
    </div>
    )
}

export default Landmark
