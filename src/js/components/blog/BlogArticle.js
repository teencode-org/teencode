import React, { PropTypes } from 'react';
import SocialLinks from './SocialLinks';
import { Article } from './mockData';

class BlogArticle extends React.Component {
  componentDidMount() {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(Article.body, "text/html");
    this.articleBody.innerHTML = htmlDoc.body.innerHTML;
  }

  setArticleBody = (articleBody) => {
    this.articleBody = articleBody;
  }

  render() {
    return (
      <div className="blog-full-article">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="article-title">{Article.title}</h2>
              <div className="blog-article-author">
                <img src={Article.author.imageUrl} />
                <p className="article-author">{Article.author.name}</p>
                <p className="article-tagline">{Article.author.tagline}</p>
              </div>
            </div>
          </div>
        </div>
        <img className="article-image" src={Article.imageUrl} />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SocialLinks />
              <div className="article-body" ref={this.setArticleBody} />
              <SocialLinks />
              <div className="suggested-reading row">
                <div className="col-md-12">
                  <h2 className="suggested-reading-title">Suggested Reads</h2>
                </div>
                {Article.suggested.map((article, index) => (
                  <div
                    key={`suggested-${index}`} 
                    className="col-md-6 col-sm-12"
                  >
                    <div
                      className="suggested-reading-link"
                      style={{ background: `url(${article.imageUrl}) no-repeat` }}
                    >
                      <h4 className="suggested-reading-name">{article.title}</h4>
                      <p>by {article.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
  }
}

export default BlogArticle;
