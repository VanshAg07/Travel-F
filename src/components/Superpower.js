import React from 'react';

const SuperpowerZone = () => {
  const superpowers = [
    {
      icon: '🤝', // Replace with your icons
      title: 'Team Outings',
      description: 'Bring your work crew together for a day of bonding and enjoyment outside the office.',
    },
    {
      icon: '💼',
      title: 'Corporate Trips',
      description: 'Elevate team spirit and performance with incentive trips that turn dreams into reality.',
    },
    {
      icon: '🏆',
      title: 'Incentive Tour',
      description: 'Bring your work crew together for a day of bonding and enjoyment outside the office.',
    },
    {
      icon: '🏖️',
      title: 'Workcations',
      description: 'Why work in the same old way when you can do the same in your favorite destinations with our Workations?',
    },
    {
      icon: '📅',
      title: 'Conferences',
      description: 'Transform ordinary conferences into extraordinary journeys combined with innovation, networking, and adventure.',
    },
    {
      icon: '🏛️',
      title: 'Exhibition',
      description: 'Discover, connect, and inspire, elevate your brand at global exhibitions.',
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center">
        Our <span className="text-gray-700">Superpower</span> Zone
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {superpowers.map((power, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-center">
            <div className="text-5xl mb-4">{power.icon}</div> {/* Replace with Icon component */}
            <h2 className="text-xl font-semibold mb-2">{power.title}</h2>
            <p className="text-gray-600">{power.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuperpowerZone;
