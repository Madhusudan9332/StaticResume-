// Interests.jsx


const Interests = ({ interests }) => {
  return (
    <section className="bg-gray-200 py-8 px-8">
      <h2 className="text-2xl font-bold mb-4">Interests</h2>
      <ul>
        {interests.map((interest, index) => (
          <li key={index} className="mb-2">
            {interest}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Interests;
