import React from 'react';

const cards = [
  {
    title: 'End to End Content',
    description: "We've got everything you need from start to finish – the best places to stay, cool guides, smooth rides, and more. Your trip's in good hands!",
    bgColor: 'bg-red-300',
    icon: '🌍',
  },
  {
    title: 'No Visa Worries',
    description: "You focus on fun planning, and we'll handle all the boring visa stuff.",
    bgColor: 'bg-blue-300',
    icon: '🛂',
  },
  {
    title: 'Dreamy Stays & Flights',
    description: "Getting to your dream spots is a breeze. We'll make sure you stay in awesome places and catch your flights without a hitch.",
    bgColor: 'bg-teal-300',
    icon: '✈️',
  },
  {
    title: 'Local Buddies',
    description: 'Our buddies on the ground will help you explore the heart of every place you visit.',
    bgColor: 'bg-orange-300',
    icon: '👥',
  },
  {
    title: 'Picture-Perfect Moments',
    description: "We've got a team that can help you snap those amazing pics you'll cherish forever.",
    bgColor: 'bg-green-300',
    icon: '📸',
  },
  {
    title: 'Travel Magic Makers',
    description: 'We make sure your adventure is not just hassle-free but sprinkled with the pixie dust of unforgettable memories.',
    bgColor: 'bg-purple-300',
    icon: '✨',
  },
];

const BeyondOrdinary = () => {
  return (
    <div className="p-8">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">
          Beyond <span className="text-blue-600">Ordinary?</span>
        </h1>
        <p className="text-xl mt-4 text-gray-600">
          We're firm believers that business trips should be anything but ordinary.
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
            <div className="text-5xl mb-4">
              {card.icon}
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-white mb-4">
              {card.title}
            </h2>

            {/* Description */}
            <p className="text-white">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeyondOrdinary;
