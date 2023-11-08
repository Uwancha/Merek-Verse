// SkillDetailsPage.js

import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getSkillDetails } from '../actions/skillsAction';

const SkillDetailsPage = ({ match, skillDetails, getSkillDetails }) => {
  const { category, skillId } = useParams();
  console.log(category)

  useEffect(() => {
    getSkillDetails(category, skillId); // Dispatch action to get individual skill details
  }, [category, skillId, getSkillDetails]);

  return (
    <div>
      {skillDetails && (
        <>
          <h2>{skillDetails.name}</h2>
          {/* Display other details of the skill using skillDetails */}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  skillDetails: state.skills.skillDetails,
});

export default connect(mapStateToProps, { getSkillDetails })(SkillDetailsPage);
