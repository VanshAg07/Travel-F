import React, { useEffect, useState } from "react";

const ClienteleHallOfFame = () => {
  const [clients, setClients] = useState([]);

  const fetchHallOfFame = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/corporate/hall-of-frame");
      const data = await res.json();
      if (!res.ok) {
        throw new Error("Failed to fetch clients");
      }
      setClients(data.data); // Use data.data to access the array
    } catch (error) {
      console.error("Failed to fetch clients:", error);
    }
  };

  useEffect(() => {
    fetchHallOfFame();
  }, []);

  return (
    <div className="p-8 bg-white text-center">
      <h2 className="text-xl md:text-3xl mb-8 lg:text-4xl font-bold leading-tight sm:text-xl">
        Our Clientele <span className="text-gray-800">Hall of Fame</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
        {clients.map((client, index) => (
          <div key={client._id} className="flex flex-col items-center">
            <img
              src={client.image[0]} // Access the first image URL from the array
              alt={`Client logo ${index + 1}`}
              className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 object-contain mb-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClienteleHallOfFame;