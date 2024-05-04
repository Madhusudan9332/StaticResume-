import About from './About';
import Education from './Education';
import WorkExperience from './WorkExperience';
import PersonalProjects from './PersonalProjects';
import Strengths from './Strengths';

const Main = ({about,workExperience,education,personalProjects,strengths}) => {
    return (
      <main className="col-span-4">
        <About summary={about.summary} email={about.email} location={about.location} phone={about.phone} />
      <WorkExperience experiences={workExperience} />
      <Education education={education} />      
      <Strengths strengths={strengths} />
      <PersonalProjects projects={personalProjects} />
      </main>
    );
  };
  
  export default Main;