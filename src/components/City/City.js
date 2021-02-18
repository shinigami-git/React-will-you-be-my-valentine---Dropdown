import React from 'react'

const City = ({states,selectedCity,setSelectedCity,selectedState}) => {
    const handleCitySelect =(event) => {
        setSelectedCity(event.target.value);
    };
    return (
        <div className="container">
      <div className="display-option">
        <label htmlFor="city">Cities:</label>
        <select id="city" value={selectedCity} onChange={handleCitySelect}>
          {states[selectedState].city.map((item, itemIndex) => {
            return (
              <option key={itemIndex} value={itemIndex}>
                {item.name}
              </option>
            );
          })}
        </select>
        
      </div>
      <div className="display-info">
      <div id="city-name" style={{fontWeight:"bold"}}>{states[selectedState].city[selectedCity].name}</div>
        <div id="city-description">
          {states[selectedState].city[selectedCity].description}
        </div>
      </div>
      <br />
    </div>
    )
}

export default City
