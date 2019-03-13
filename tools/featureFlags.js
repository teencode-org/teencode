const dotenv = require('dotenv');
dotenv.config();
console.log('process', process.env)
module.exports = {
  'CURRICULUM_ENABLED': process.env.CURRICULUM_ENABLED,
  'FACILITATOR_GUIDE_ENABLED': process.env.FACILITATOR_GUIDE_ENABLED,
  'LESSON_NOTES_ENABLED': process.env.LESSON_NOTES_ENABLED,
  'ABOUT_US_ENABLED': process.env.LESSON_NOTES_ENABLED,
  'CONTACT_US_ENABLED': process.env.CONTACT_US_ENABLED,
  'VOLUNTEER_PAGE_ENABLED': process.env.VOLUNTEER_PAGE_ENABLED,
  'MISSION_PAGE_ENABLED': process.env.MISSION_PAGE_ENABLED,
  'BLOG_PAGE_ENABLED': process.env.BLOG_PAGE_ENABLED
};
