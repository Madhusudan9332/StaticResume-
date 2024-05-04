// Skills.jsx


const Skills = ({ skills }) => {
  return (
    <section className="bg-gray-200 py-8 px-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-1 gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="bg-gray-300 p-2 rounded">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
