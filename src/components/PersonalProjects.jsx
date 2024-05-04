// PersonalProjects.jsx


const PersonalProjects = ({ projects }) => {
  return (
    <section className="bg-gray-100 py-8 px-8">
      <h2 className="text-2xl font-bold mb-4">Personal Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index} className="mb-4">
            <strong className="font-bold">{project.name}</strong> ({project.date})
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PersonalProjects;
