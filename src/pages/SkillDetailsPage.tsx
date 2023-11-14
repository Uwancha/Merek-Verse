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
      <p>{resource.title}</p>
      <p>{resource.type}</p>    
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
          <h4>Resources</h4>
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
