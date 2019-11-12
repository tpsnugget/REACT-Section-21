import React, { Component } from "react"
import "./Pizza.css"

class Pizza extends Component {

   render() {
      return (
         <div className="Pizza-container">
            <h1 className="Pizza-title">Pizza</h1>
            <img className="Pizza-img" src="https://images.unsplash.com/photo-1545016803-a7e357a737e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
               alt="pizza" />
         </div>
      )
   }
}

export default Pizza