import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'

import App from './component/App'
import Recipes from './component/recipes'
import Recipe from './component/recipe'


import 'bootstrap/dist/css/bootstrap.min.css'



export default class Root extends React.Component{
  render(){
      return(
          <div>

           <nav className="navbar navbar-dark" style={{backgroundColor: '#282c34', height:'53px', zIndex: '1'}}>
                  <a className="navbar-brand ml-5 " id='navbar-brand' href="/">Recipes</a>
                 </nav>

           <Router>
               <Route exact path='/' component = {App} />
               <Route path='/recipes' component ={Recipes}/>
               <Route path='/recipe/:id' component= {Recipe}/>
               
           </Router>

          
          </div>
      )
  }
}