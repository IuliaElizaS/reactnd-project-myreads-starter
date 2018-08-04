import React from 'react'
import './App.css'

class NoMatch extends React.Component {
  render (){
    return (
      <div className="page-error">
        <h1> Error 404</h1>
        <p>We can not find the page you are looking for</p>
      </div>
    )
  }
}

export default NoMatch;
