import React from 'react'
import { Link } from 'react-router'

class HomePage extends React.Component {
  constructor(props, context){
    super(props)

   }

   render () {
     return (
       <div className="jumbotron">
        <h1>Welcome to Teencode's really amazing site</h1>
        <p>Empowering the future generation of Africa's tech leaders</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
       </div>
     )
   }
 }
 export default HomePage
