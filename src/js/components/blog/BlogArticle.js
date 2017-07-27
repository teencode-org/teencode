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
    const shareProps = {
      url: 'https://www.google.com' || window.location.href,
      title: Article.title,
      imageUrl: Article.imageUrl,
      description: Article.description || ''
    };

    return (
      <div className="row blog-full-article">
        <h2 className="article-title">{Article.title}</h2>
        <div className="blog-article-author">
          <img src={Article.author.imageUrl} />
          <p className="article-author">{Article.author.name}</p>
          <p className="article-tagline">{Article.author.tagline}</p>
        </div>
        <img className="article-image" src={Article.imageUrl} />
        <SocialLinks {...shareProps} />
        <div className="article-body">
          <div ref={this.setArticleBody} />
          <SocialLinks {...shareProps} style={{ textAlign: 'left' }} />
        </div>
        <div className="suggested-reading">
          <h2>Suggested Reads</h2>
          {Article.suggested.map((article, index) => (
            <div
              key={`suggested-${index}`}
              style={{ background: `url(${article.imageUrl}) no-repeat` }}
              className="col-md-5"
            >
              <h4>{article.title}</h4>
              <p>by {article.author}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BlogArticle;
