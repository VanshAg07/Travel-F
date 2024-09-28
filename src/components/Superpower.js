import React from 'react';

const SuperpowerZone = () => {
  const superpowers = [
    {
      icon: '🤝', // Replace with your icons
      title: 'Team Escapades',
      description: 'Bring your team together for an exciting day of shared experiences and laughter outside the workplace.',
    },
    {
      icon: '💼',
      title: 'Corporate Adventures',
      description: 'Enhance team dynamics and productivity through adventures that transform aspirations into achievements.',
    },
    {
      icon: '🏆',
      title: 'Inspiration Expedition',
      description: 'Join your work crew for an exciting day that fuels inspiration and teamwork in a fresh setting.',
    },
    {
      icon: '🏖️',
      title: 'Work Retreats',
      description: 'Why work from the same place when you can achieve your goals in inspiring environments with our Work Retreats?',
    },
    {
      icon: '📅',
      title: 'Workshops',
      description: 'Turn typical workshops into inspiring adventures that blend skill-building, networking, and real-world applications.',
    },
    {
      icon: '🏛️',
      title: 'Exhibition',
      description: 'Uncover opportunities, network, and ignite creativity while enhancing your brand at global exhibitions.',
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center">
      Our <span className="text-gray-700">Strengths</span> Hub 
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
