import React from 'react';

const services = [
  {
    id: 1,
    icon: '🌍',
    title: 'Personalized solutions designed to fit your organization’s unique requirements.',
  },
  {
    id: 2,
    icon: '💼',
    title: 'Professional event organizers to ensure everything runs smoothly.',
  },
  {
    id: 3,
    icon: '🗺️',
    title: 'Unique itineraries and experiences crafted to support your objectives.',
  },
  {
    id: 4,
    icon: '📋',
    title: 'Thorough attention and devotion to creating outstanding experiences.',
  },
];

function App() {
  return (
    <div className="bg-gray-50 flex flex-col items-center">
      {/* Heading Section */}
      <header className="w-[80%] text-center mt-10">
        <h1 className="text-4xl font-bold">
        Our Secret to  <span className="text-blue-500">Spellbinding</span>{' '}
          <span className="text-blue-500"> Moments</span>
        </h1>
      </header>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 w-4/5 md:w-3/4 lg:w-2/3 text-center mb-20">
        {services.map(service => (
          <div key={service.id} className="flex flex-col items-center">
            {/* Icon */}
            <div className="text-6xl mb-4">{service.icon}</div>

            {/* Description */}
            <p className="text-gray-600 text-lg">
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
