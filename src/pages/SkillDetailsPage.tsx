import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getSkillDetails } from '../actions/skillsAction';

import "../styles/skills-detail-page.css"

const SkillDetailsPage = ({ skillDetails, getSkillDetails }) => {
  const { category, skillId } = useParams();

  useEffect(() => {
    getSkillDetails(category, skillId);
  }, [category, skillId, getSkillDetails]);

  return (
    <div className='skillsDetailPage'>
      {skillDetails && (
        <>
          <h2>{skillDetails.name}</h2>
          <p>{skillDetails.description}</p>
          <p><strong>Industries:</strong> {skillDetails.industries}</p>
          <p><strong>Roles:</strong> {skillDetails.roles}</p>
          <p><strong>Career Outlook:</strong> {skillDetails.careerOutlook}</p>
          <p><strong>Learning Outcomes:</strong> {skillDetails.learningOutcomes}</p>
          <p><strong>Prerequisites:</strong> {skillDetails.prerequisites}</p>
          <p><strong>Difficulty:</strong> {skillDetails.difficulty}</p>
          <h4>Resources</h4>
          <p>{skillDetails.resources && skillDetails.resources.forEach(resource => {
             <div>
             <p>{resource.title}</p>
             <p>{resource.type}</p>
            </div>
          }) }
          </p>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  skillDetails: state.skills.skillDetails,
});

export default connect(mapStateToProps, { getSkillDetails })(SkillDetailsPage);
