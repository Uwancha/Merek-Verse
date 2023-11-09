import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getSkillDetails } from '../actions/skillsAction';

const SkillDetailsPage = ({ skillDetails, getSkillDetails }) => {
  const { category, skillId } = useParams();

  useEffect(() => {
    getSkillDetails(category, skillId);
  }, [category, skillId, getSkillDetails]);

  return (
    <div>
      {skillDetails && (
        <>
          <h2>{skillDetails.description}</h2>
          <h4>{skillDetails.name}</h4>
          <p>{skillDetails.description}</p>
          <h2>Industries</h2>
          <p>{skillDetails.industries}</p>
          <h2>Roles</h2>
          <p>{skillDetails.roles}</p>
          <h2>Career Outlook</h2>
          <p>{skillDetails.careerOutlook}</p>
          <h2>Learning Outcomes</h2>
          <p>{skillDetails.learningOutcomes}</p>
          <h2>prerequisites</h2>
          <p>{skillDetails.prerequisites}</p>
          <h2>Difficulty</h2>
          <p>{skillDetails.difficulty}</p>
          <h2>Resources</h2>
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
