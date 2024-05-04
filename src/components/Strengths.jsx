

const Strengths = ({ strengths }) => {
  return (
    <section className="bg-gray-200 py-8 px-8">
      <h2 className="text-2xl font-bold mb-4">Strengths</h2>
      <ul>
        {strengths.map((strength, index) => (
          <li key={index} className="mb-2">
            {strength}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Strengths;
