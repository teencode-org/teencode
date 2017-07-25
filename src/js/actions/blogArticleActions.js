import actionTypes from '../constants/actionTypes';
import { handleApiCall, baseActions } from './helpers';

export const getBlogArticle = (id) => {
  let actions = baseActions({
    requestType: actionTypes.REQUEST_GET_BLOG,
    receiveType: actionTypes.RECEIVE_GET_BLOG_ARTICLE,
    failType: actionTypes.FAIL_GET_BLOG
  });
  
  return handleApiCall({
    actions,
    errorMessage: 'Something prevented getting blog article',
    caller: 'blog',
    route: `/blogs/${id}`,
    requestMethod: 'GET'
  });
}

