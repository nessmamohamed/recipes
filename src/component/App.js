import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

import recipe from '../background/recipe9.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'

const App = () => {

  return(
           
            <div className='App'>
             
             <div >
             <img src = {recipe} alt='img' className='image' />
             <div className='head'>
             <h1 className='head1' > nutrition and healthy recipes ! </h1>
             <Link to = {{pathname: '/recipes'}}
             className='btn btn-success btn-sm px-3 ' id='btn'>start now
             <FontAwesomeIcon icon={faPizzaSlice} className='ml-3'/>
             </Link>
             
             </div>
             </div>
             
             
            </div>
  )    
}

export default App