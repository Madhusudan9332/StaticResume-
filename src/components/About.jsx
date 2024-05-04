// About.jsx
import React from 'react';

const About = ({ summary, email, location, phone }) => {
  return (
    <section className="bg-gray-100 py-8 px-8">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="text-lg">{summary}</p>
      <p className="mt-4">Email: {email}</p>
      <p>Location: {location}</p>
      <p>Phone: {phone}</p>
    </section>
  );
};

export default About;
