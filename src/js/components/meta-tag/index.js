import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTag = (props) =>
  <Helmet>
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta property="og:url" content={props.url} />
    <meta property="og:image" content={props.imageUrl} />
    <meta property="og:type" content="article" />
  </Helmet>

MetaTag.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  url: React.PropTypes.string,
  imageUrl: React.PropTypes.string
};

export default MetaTag;
