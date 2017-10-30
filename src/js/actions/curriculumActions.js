import actionTypes from '../constants/actionTypes';
import { handleApiCall, baseActions } from './helpers';
import guideData from '../components/curriculum/guideDummyData';

export const getCurriculum = () => {
  let actions = baseActions({
    requestType: actionTypes.REQUEST_GET_CURRICULUM,
    receiveType: actionTypes.RECEIVE_GET_CURRICULUM,
    failType: actionTypes.FAIL_GET_CURRICULUM
  });
  
  return handleApiCall({
    actions,
    data: {},
    errorMessage: 'An error occurred while trying to load the curriculum',
    caller: 'curriculum',
    route: '/curriculum_sessions',
    requestMethod: 'GET'
  });
}

export const getFacilitatorGuide = (curriculumSessionId, guideId) => {
  let actions = baseActions({
    requestType: actionTypes.REQUEST_GET_FACILITATOR_GUIDE,
    receiveType: actionTypes.RECEIVE_GET_FACILITATOR_GUIDE,
    failType: actionTypes.FAIL_GET_FACILITATOR_GUIDE
  });

  return handleApiCall({
    actions,
    data: {},
    errorMessage: 'An error occurred while trying to load the facilitator guide',
    caller: 'curriculum',
    route: `/curriculum_sessions/${curriculumSessionId}/facilitator_guides/${guideId}`,
    requestMethod: 'GET'
  });
}

export const getLessonNotes = (curriculumSessionId, lessonNotesId) => {
  let actions = baseActions({
    requestType: actionTypes.REQUEST_GET_LESSON_NOTES,
    receiveType: actionTypes.RECEIVE_GET_LESSON_NOTES,
    failType: actionTypes.FAIL_GET_LESSON_NOTES
  });

  return handleApiCall({
    actions,
    data: {},
    errorMessage: 'An error occurred while trying to load the lesson notes',
    caller: 'curriculum',
    route: `/curriculum_sessions/${curriculumSessionId}/lesson_notes/${lessonNotesId}`,
    requestMethod: 'GET'
  });
}
