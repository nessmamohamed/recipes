import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

import recipe from '../background/recipe9.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice , faHamburger} from '@fortawesome/free-solid-svg-icons'

const App = () => {

  return(
           
            <div className='App'>
             
             <div >
             <img src = {recipe} alt='img' className='image' />
             <div className='head '>
             <h1 className='head1 px-2' > Nutrition and healthy recipes ! </h1>
             <div id='border' className='mx-auto mb-5'></div>
             <Link to = {{pathname: '/recipes'}}
             className='btn btn-success btn-sm px-md-3 py-2' id='btn'>Start now
             <FontAwesomeIcon icon={faHamburger} className='ml-3' style={{color: 'wheat'}}/>
             </Link>
             
             </div>
             </div>
             
             
            </div>
  )    
}

export default App