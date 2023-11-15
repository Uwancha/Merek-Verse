import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getSkillDetails } from '../actions/skillsAction';

import "../styles/skills-detail-page.css";
import Nav from '../components/Header';
import Footer from '../components/Footer';

const SkillDetailsPage = ({ skillDetails, getSkillDetails }) => {
  const { category, skillId } = useParams();

  useEffect(() => {
    getSkillDetails(category, skillId);
  }, [category, skillId, getSkillDetails]);

  let resourceElements;

if(skillDetails?.resources) {
  resourceElements = skillDetails.resources.map(resource => (
    <div key={resource.id}>
      <h3>{resource.name}</h3>
      <p>{resource.website}</p>  
      <h4>Key Features</h4>
      <ul>
        {resource?.features?.map(feat => (
            <li>{feat}</li>
        ))}
      </ul>  
    </div>
  ));
}


  return (
    <>
    <Nav />
    <div className='skillsDetailPage'>
      {skillDetails && (
        <>
          <h2>{skillDetails.name}</h2>
          <p>{skillDetails.description}</p>
          <h2>Resources</h2>
          {resourceElements}
        </>
      )}
    </div>
    <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  skillDetails: state.skills.skillDetails,
});

export default connect(mapStateToProps, { getSkillDetails })(SkillDetailsPage);
