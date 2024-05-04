// Education.jsx


const Education = ({ education }) => {
  return (
    <section className="bg-gray-100 py-8 px-8">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index} className="mb-4">
            <strong className="font-bold">{edu.institution}</strong> - {edu.degree} ({edu.date})
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
