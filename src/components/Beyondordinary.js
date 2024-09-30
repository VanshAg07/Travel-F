import React from 'react';

const cards = [
  {
    title: 'Full Spectrum Services',
    description: "Everything You Need for a Flawless Experience – premier stays, insightful guides, effortless travel, and more. Relax and let us handle the details!",
    bgColor: 'white',
    icon: '🌍',
  },
  {
    title: 'Hassle-Free Passports',
    description: "Plan your journey, and leave the passport hassles to us!",
    bgColor: 'white',
    icon: '🛂',
  },
  {
    title: 'Luxurious Escapes & Air Travel',
    description: "Reaching your dream destinations is effortless. We’ll ensure you enjoy lavish accommodations and seamless flights!",
    bgColor: 'white',
    icon: '✈️',
  },
  {
    title: 'Friendly Locals',
    description: 'Your friendly locals are ready to take you on an unforgettable journey through each unique locale.',
    bgColor: 'white',
    icon: '👥',
  },
  {
    title: 'Frame-Worthy Experiences',
    description: "We've got a team that can help you snap those amazing pics you'll cherish forever.",
    bgColor: 'white',
    icon: '📸',
  },
  {
    title: 'Timeless Memories',
    description: 'We guarantee a seamless adventure, enriched with lasting memories that you’ll hold close to your heart.',
    bgColor: 'white',
    icon: '✨',
  },
];

const BeyondOrdinary = () => {
  return (
    <div className="p-8">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">
        Extraordinary  <span className="text-blue-600">Experiences</span>
        </h1>
        <p className="text-xl mt-4 text-gray-600">
        We believe that business travels should always be extraordinary experiences.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} p-6 rounded-lg shadow-lg flex flex-col items-start min-h-[250px]`} 
          >
            {/* Icon */}
            <div className="text-5xl mb-4 ml-20  ">
              {card.icon}
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-black mb-4">
              {card.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeyondOrdinary;
