import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'

import App from './component/App'
import Recipes from './component/recipes'
import Recipe from './component/recipe'
import Weight from './component/weight'

import 'bootstrap/dist/css/bootstrap.min.css'





export default class Root extends React.Component{

    state={
      lastScrollY: 0
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
       
      }
    
      

      handleScroll = () => {
        this.setState({
            lastScrollY: window.scrollY
        })
    
      };

      

  render(){
     
      return(
          <div>
           
           <nav  className="navbar navbar-light  fixed-top " style={{backgroundColor: this.state.lastScrollY <= 43 ? '#000008': 'rgba(0, 0, 8, 0.35)' ,
           transition: 'background 500ms'  , height:'60px', zIndex: '1', boxShadow: '0 .9px 10px rgba(0,0,0,.15)'}}>
           
                  <a className="navbar-brand ml-5 text-light border-bottom border-top" href="/recipes" 
                  style={{fontSize: 'xlarge'}}>Recipes</a>
                 </nav>
                
           <Router>
               <Route exact path='/recipes' component = {App} />
               <Route path='/recipes/nutrition' component ={Recipes}/>
               <Route path='https://nessmamohamed.github.io/recipes/nutrition/:id' component= {Recipe}/>
               <Route  path ='/recipes/weight' component={Weight}/>
           </Router>

          
          </div>
      )
  }
}