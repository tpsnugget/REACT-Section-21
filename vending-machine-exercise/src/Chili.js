import React, { Component } from "react"
import "./Chili.css"

class Chili extends Component {

   render() {
      return (
         <div className="Chili-container">
            <h1 className="Chili-title">Chili</h1>
            <img className="Chili-img" src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=945&q=80" 
                 alt="bowl of chili" />
         </div>
      )
   }
}

export default Chili