// WorkExperience.jsx


const WorkExperience = ({ experiences }) => {
  return (
    <section className="bg-gray-200 py-8 px-8">
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      <ul>
        {experiences.map((experience, index) => (
          <li key={index} className="mb-4">
            <strong className="font-bold">{experience.company}</strong> - {experience.title} ({experience.date})
            <ul className="list-disc pl-8 mt-2">
              {experience.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkExperience;
