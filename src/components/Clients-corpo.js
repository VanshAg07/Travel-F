import React from 'react';

const ClienteleHallOfFame = () => {
  const clients = [
    { name: 'Paytm', logo: 'https://i.pinimg.com/736x/28/95/13/28951353b130bec9a53afd9f5303638a.jpg' },
    { name: 'GoHighLevel', logo: 'path-to-gohighlevel-logo' },
    { name: 'Concentrix', logo: 'path-to-concentrix-logo' },
    { name: 'Spring Works', logo: 'path-to-springworks-logo' },
    { name: 'TVS', logo: 'path-to-tvs-logo' },
    { name: 'ACMA', logo: 'path-to-acma-logo' },
    { name: 'Adobe', logo: 'path-to-adobe-logo' },
    { name: 'Biconomy', logo: 'path-to-biconomy-logo' },
    { name: 'Endress+Hauser', logo: 'path-to-endress-logo' },
    { name: 'OfBusiness', logo: 'path-to-ofbusiness-logo' },
    { name: 'BlackRock', logo: 'path-to-blackrock-logo' },
  ];

  return (
    <div className="p-8 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">Our Clientele <span className="text-gray-800">Hall of Fame</span></h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {clients.map((client, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={client.logo} alt={client.name} className="h-16 w-auto mb-4" />
            <p className="text-lg font-medium">{client.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClienteleHallOfFame;