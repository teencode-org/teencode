import React from 'react'
import { Link } from 'react-router'

class HomePage extends React.Component {
  constructor(props, context){
    super(props)

   }

   render () {
     return (
       <div className="jumbotron">
        <h1>React + Bootstrap + Test tutorial by Cent</h1>
        <p>Setting up development environment, routing and tests</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
       </div>
     )
   }
 }
 export default HomePage
