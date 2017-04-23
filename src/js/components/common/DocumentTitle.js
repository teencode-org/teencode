import React from 'react'

const DocumentTitle = (title) => (WrappedComponent) => {
  return class DocumentTitle extends React.Component {
    componentDidMount() {
      document.title = `Teencode | ${title}`;
    }

    render () {
      return false
    }
  }
}

export default DocumentTitle;
