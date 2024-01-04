import React, { useState } from "react";

const WebsiteVisitorsInfoSearch: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [totalUsers, setTotalUsers] = useState<number | null>(null);
  const [inputActive, setInputActive] = useState<boolean>(false);


  const handleSearch = () => {
    fetch(`https://ip-map-explorer-backend.onrender.com/users-count?country=${selectedCountry}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.totalUsers);
        setTotalUsers(data.totalUsers);
      })
      .catch((error) => {
        console.error('Error fetching total users:', error);
        setTotalUsers(null);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCountry(e.target.value);
    setTotalUsers(null);
    setInputActive(!!e.target.value);
  };

  return (
    <div className="text-white flex-wrap ">
      <h2 className="font-bold">Number of Visitors per Country</h2>
      <div className="mt-4 mb-4">
        <label className="text-white">Search by Country:</label>
        <input
          className="border border-gray-400 text-black rounded px-2 py-1 ml-2 focus:outline-none focus:border-blue-500"
          type="text"
          value={selectedCountry}
          onChange={handleInputChange}
        />
        <button
          className="ml-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {totalUsers !== null && (
        <p className="mt-4">
          Total users in {selectedCountry}: {totalUsers}
        </p>
      )}
    </div>
  );
};

export default WebsiteVisitorsInfoSearch;
