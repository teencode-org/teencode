import React from 'react';
import BlogListArticle from './BlogListArticle';
import MediaShare from '../media_share';

const BlogList = () => {
  return (
    <div className="container">
      <div className="blog-list">
        <h3>Top articles</h3>
        <BlogListArticle
          imageUrl="http://via.placeholder.com/300x300"
          title="There will be no prisons if our minds were free"
          author="by Rowland Henshaw"
          summary="The alarms that wake us up, the tools with which we plan our day, our interactions with friends and colleagues, 
          automations in business processes, you name it"
        />

        <BlogListArticle
          imageUrl="http://via.placeholder.com/300x300"
          title="Gender balance in tech could be achieved if only we start early."
          author="by Rowland Henshaw"
          summary="The alarms that wake us up, the tools with which we plan our day, our interactions with friends and colleagues, 
          automations in business processes, you name it"
        />
      </div>

      <div className="load-more-container">
        <i className="fa fa-refresh" />
        <p>Going to classrooms to fetch more articles ...</p>
      </div>
      <MediaShare />
    </div>
  );
}

export default BlogList;