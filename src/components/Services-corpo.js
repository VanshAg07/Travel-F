import React from 'react';

const services = [
  {
    id: 1,
    icon: '🌍', // You can replace this with an actual icon image or use an icon library
    title: 'Customized experiences tailored to your organization’s needs and preferences',
  },
  {
    id: 2,
    icon: '💼',
    title: 'Dedicated event planners to ensure smooth execution',
  },
  {
    id: 3,
    icon: '🗺️',
    title: 'Personalized itineraries and activities to align with your goals and objectives',
  },
  {
    id: 4,
    icon: '📋',
    title: 'Attention to detail and commitment to delivering exceptional experiences',
  },
];

function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Heading Section */}
      <header className="w-[80%] text-center mt-10">
        <h1 className="text-4xl font-bold">
          Our Way of <span className="text-blue-500">Making</span>{' '}
          <span className="text-blue-500">Magic</span>
        </h1>
      </header>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 w-4/5 md:w-3/4 lg:w-2/3 text-center">
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
