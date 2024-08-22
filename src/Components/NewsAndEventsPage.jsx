// src/components/NewsAndEvents.js

import React from 'react';

const videos = [
  {
    id: '1',
    title: 'Hospital Introduction',
    url: 'https://www.youtube.com/embed/lId6H20rWrc?si=XefbOFwcXyF0HVpn',
  },
  {
    id: '2',
    title: 'Inauguration',
    url: 'https://www.youtube.com/embed/GB-KWIsuSM0?si=SNJksz3H4cHurMEI',
  },
  {
    id: '3',
    title: 'Diabetic Awareness Campaign',
    url: 'https://www.youtube.com/embed/t1_6c2fWvxI?si=PypDil5eAgfmnCk3',
  },
  {
    id: '4',
    title: 'Our New Derma & Comsmetic Clinic',
    url: 'https://www.youtube.com/embed/YB0TenQQgNU?si=oOgYvKBViFRk7JH2',
  },
  {
    id: '5',
    title: 'Diabetic Awareness at Lulu',
    url: 'https://www.youtube.com/embed/svs43INHur4?si=b89SfCFmgxk07bNw',
  },
  // Add more video objects as needed
];

const NewsAndEventsPage = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto  py-16">
      {/* <h1 className="text-3xl font-bold text-center mb-8">News and Events</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {videos.map((video) => (
          <div key={video.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <iframe
              className="w-[500px] h-64"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{video.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndEventsPage;


