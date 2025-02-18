import React from 'react';

const MapComponent = () => (
  <iframe
    src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A42.85952164290271%2C%22lon%22%3A74.60700631141664%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22bishkek%22%7D%2C%22org%22%3A%2270000001087443887%22%7D"
    width="90%"
    height="90%"
    style={{ border: "1px solid #a3a3a3", boxSizing: "border-box" }}
  ></iframe>
);

export default MapComponent;
