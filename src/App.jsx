// App.jsx

import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';

const App = () => {
  const about = {
    name: "Madhusudan Gautam",
    title: "Full Stack Web Developer",
    summary: "Looking forward to obtain a challenging position in which I can utilize my current technical and mechanical skills and redirect my energy in fulfilling the organization's goals.",
    email: "madhusudangautam003@gmail.com",
    location: "Faridabad, India",
    phone: "8920104578",
  };

  const skills = [
    "C, C++",
    "HTML, CSS, JavaScript",
    "Python with Django",
    "Java with ReactJS and Node.js",
    "Data Structure",
    "Database Management using MySQL and MongoDB"
  ];

  const education = [
    {
      institution: "P.t Jawahar Lal Nehru college Faridabad",
      degree: "Bachelor of Science in Computer Science",
      date: "06/2020 - 06/2023"
    },
    {
      institution: "Prince Sr. secondary School",
      degree: "Intermediate",
      date: "04/2019 - 04/2020",
      location: "Faridabad"
    }
  ];

  const languages = [
    { name: "Hindi", proficiency: "Full Professional Proficiency" },
    { name: "English", proficiency: "Full Professional Proficiency" }
  ];

  const interests = [
    "Problem solving in mathematics, physics, and data structure",
    "Artistic hobbies like sketching, image editing, writing poems"
  ];

  const workExperience = [
    {
      company: "One Tick",
      title: "Backend Developer on Java",
      date: "04/2021 - 10/2021",
      tasks: [
        "Bug fixing",
        "Manage Database",
        "Create required modules and Class"
      ]
    },
    {
      company: "Ease prints",
      title: "Frontend Developer",
      date: "04/2023 - Present",
      tasks: [
        "Designing on SVG",
        "Create Templates",
        "Make SVG Templates Dynamic"
      ]
    }
  ];

  const personalProjects = [
    { name: "Shopping Cart E-Commerce website using Python and Django", date: "03/2022 - 03/2022" },
    { name: "Chess Game", date: "07/2022 - 07/2022" }
  ];

  const strengths = ["Punctuality", "Creativity", "Soft Skills"];

  return (
    <div className="resume">
      <Header name={about.name} title={about.title} />
      < div className="grid grid-cols-6 gap-5 bg-gray-100">
      <Aside skills={skills} languages={languages} interests={interests} />
      <Main about={about} workExperience={workExperience} education={education} personalProjects={personalProjects} strengths={strengths} />
      </div>
    </div>
  );
};

export default App;
