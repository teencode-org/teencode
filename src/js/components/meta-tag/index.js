import React from 'react';
import MetaTags from 'react-meta-tags';

const MetaTag = (props) => {
  return (<MetaTags>
    <meta id="og-title" property="og:title" content={props.title} />
    <meta id="meta-description" property="og:description" content={props.description} />
    <meta id="og-url" property="og:url" content={props.url} />
    <meta id="og-image" property="og:image" content={props.imageUrl} />
    <meta id="og-type" property="og:type" content="article" />
  </MetaTags>);
}

MetaTag.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  url: React.PropTypes.string,
  imageUrl: React.PropTypes.string
};

export default MetaTag;
