// Languages.jsx


const Languages = ({ languages }) => {
  return (
    <section className="bg-gray-100 py-8 px-8">
      <h2 className="text-2xl font-bold mb-4">Languages</h2>
      <ul>
        {languages.map((lang, index) => (
          <li key={index} className="mb-2">
            <strong className="font-bold">{lang.name}</strong> - {lang.proficiency}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Languages;
