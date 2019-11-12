import React, {Component} from "react"
import { NavLink } from "react-router-dom"
import "./NavBar.css"

class NavBar extends Component{



   render(){

      const activeStyle = {
         fontWeight: "bold",
         color: "white"
      }

      return(
         <div className="NavBar">
            <NavLink className="NavBar-link" exact to="/chili" activeStyle={activeStyle}>Chili</NavLink>
            <NavLink className="NavBar-link" exact to="/Spaghetti" activeStyle={activeStyle}>Spaghetti</NavLink>
            <NavLink className="NavBar-link" exact to="/pizza" activeStyle={activeStyle}>pizza</NavLink>
         </div>
      )
   }
}

export default NavBar