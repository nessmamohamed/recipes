import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

import recipe from './background/recipe.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faWeight} from '@fortawesome/free-solid-svg-icons'
import {Fade} from 'react-reveal'
import {Zoom} from 'react-reveal'
const App = () => {

  return(
           
            <div className='App' >
             
             <div id='content-wrap'>

             <img src = {recipe} alt='img' className='image' />
             <div className='head '>
               <Fade top >
               <h1 className='head1 px-2 pb-3 pb-sm-5' > Nutrition and healthy recipes! </h1>
               </Fade>
              <Zoom >
              <div id='border' className='mx-auto mb-5'></div>
              </Zoom>
              <div>
              <Link to = {{pathname: 'recipes/recipes-nutrition'}}
             className='btn btn-success btn-sm rounded px-md-3 py-2 mr-2' id='btn'>Start now
             <FontAwesomeIcon icon={faHamburger} className='ml-3' style={{color: 'wheat'}}/>
             </Link>

             <Link to = {{pathname: '/recipes/weight'}}
             className='btn btn-danger btn-sm rounded ml-2 mt-2 mt-sm-0 px-md-3 py-1 ' id='btn' >Calories
             <FontAwesomeIcon icon={faWeight} className='ml-3' />
             </Link>
              </div>
             
             </div>
           
             </div>
         
            
            </div>
  )        
}

export default App