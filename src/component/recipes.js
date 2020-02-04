import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {Wave} from 'react-animated-text'
import {Fade} from 'react-reveal'
import SearchForm from './searchForm'



const Recipes = () => {

      //locale state 
      const useLocaleState = (item)=>{
        const [loc , setState] = useState(localStorage.getItem(item))
         const setLoc = (newItem) => {
             localStorage.setItem(item, newItem)
             setState(newItem)
          }
        return[loc, setLoc]
      }

    const [recipes , setReccipes] = useState([])
    const [recipe , setReccipe] = useLocaleState('')
    const [loaded, setLoaded] = useState(false)
    
    useEffect(() => {
      
             // call api
            const getRecipes = async () =>{
              
              
            const api_key = 'cb24963c536c2a7496406a81381491ea'
            const app_id = '15075e4e'
            //get recipes
            const request = await fetch(`https://api.edamam.com/search?q=${recipe}&app_id=${app_id}&app_key=${api_key}&from=0&to=12&calories=591-722&health=alcohol-free`)
            const response = await request.json()

              //set recipes 
              setReccipes(response.hits)
              
              setLoaded(true)
           }
     
           getRecipes()

           setLoaded(false)
    }, [ recipe])
        

     
       
       // on click
       const onSubmit = (e) => {
         e.preventDefault()
         let newRecipe = e.target.elements.search.value
         
         setReccipe(newRecipe)
         
       }

       return(
           <div>
               <SearchForm onSubmit={onSubmit}/>

               <div  className='container mt-5'>
                  <div className ='row text-center'>
                {!loaded? <div className='mx-auto' style={{fontSize:'1.4rem'}}>
                  <Wave text='loading ...' effect='stretch' effectChange='1.2'  />
                  </div> : 
              recipes.map(recipe => (
                <Fade key= {recipe.recipe.calories}>
                  <div  className ='col '>
                  <div className='card my-4 mx-auto' style={{width: '18rem'}}>
                          <div className='card-body'>
                           <img className= 'card-img-top' src={recipe.recipe.image} alt='img'/>

                              <h3 className='card-title mt-2'>{recipe.recipe.label.length < 20 ?
                               recipe.recipe.label: recipe.recipe.label.substring(0,25)}...</h3>

                              <Link to={{pathname: `/recipe/${recipe.recipe.calories}`,
                                         state:{recipes: recipe.recipe}}}
                              className='btn btn-success btn-md'>view ingredients</Link>

                              <button className='btn btn-outline-danger btn-md mx-2'>
                              <FontAwesomeIcon icon={faHeart}  id = 'icon'/>
                              </button>
                          </div>
                     
                  </div>
              </div>
              </Fade>
              ))} 
               </div>
                      </div>
           </div>
       )
}

export default Recipes 