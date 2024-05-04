import Skills from './Skills';
import Interests from './Interests';
import Languages from './Languages';

const Aside = ({skills,languages,interests}) => {
    return (
      <aside className="col-span-2">
        <Skills skills={skills} />
      <Languages languages={languages} />
      <Interests interests={interests} />
      </aside>
    );
  };
  
  export default Aside;