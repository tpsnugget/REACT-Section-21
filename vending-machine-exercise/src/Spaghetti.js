import React, { Component } from "react"
import "./Spaghetti.css"

class Spaghetti extends Component {

   render() {
      return (
         <div className="Spaghetti-container">
            <h1 className="Spaghetti-title">Spaghetti</h1>
            <img className="Spaghetti-img" src="https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
               alt="plate of spaghetti" />
         </div>
      )
   }
}

export default Spaghetti