import React, { Component } from "react"
import "./VendingMachine.css"
import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar"
import Chili from "./Chili"
import Spaghetti from "./Spaghetti"
import Pizza from "./Pizza"

class VendingMachine extends Component {

   render() {
      return (
         <div className="VendingMachine">
         <NavBar />
            <Switch>
               <Route exact path="/chili" render={() => <Chili />} />
               <Route exact path="/spaghetti" render={() => <Spaghetti />} />
               <Route exact path="/pizza" render={() => <Pizza />} />
            </Switch>
         </div>
      )
   }
}

export default VendingMachine