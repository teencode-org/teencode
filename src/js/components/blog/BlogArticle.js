import React, { PropTypes } from 'react';
import SocialLinks from './SocialLinks';
import { Article } from './mockData';
import ArticleThread from './ArticleThread';
import { DISQUS_SHORT_NAME } from './constants';

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
      url: window.location.href,
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
        <div className="article-thread">
          <ArticleThread
            articleId={this.props.params.id}
            articleTitle={Article.title}
            shortName={DISQUS_SHORT_NAME}
          />
        </div>
      </div>
    );
  }
}

BlogArticle.propTypes = {
  params: PropTypes.object.isRequired
}

export default BlogArticle;
