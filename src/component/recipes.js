import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {Fade} from 'react-reveal'
import SearchForm from './searchForm'



const Recipes = () => {

     

    const [recipes , setReccipes] = useState([])
    const [recipe , setReccipe] = useState( !localStorage.recipe ? '' : JSON.parse(localStorage.getItem('recipe')))
    const [diet, setDiet] = useState( !localStorage.diet ? [] : JSON.parse(localStorage.getItem('diet')) )
    const [health , setHealth] = useState( !localStorage.health ? ['alcohol-free'] : JSON.parse(localStorage.getItem('health')))
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)
    const [request, setRequest] = useState(false)
    // call api
    const getRecipes = async () =>{
      setLoaded(false)
      try{
        const api_key = 'cb24963c536c2a7496406a81381491ea'
      const app_id = '15075e4e'
     

      //get recipes
      const request = await fetch(`https://api.edamam.com/search?q=${recipe}&app_id=${app_id}&app_key=${api_key}&from=0&to=16&calories=50-600${diet.length > 0 ? `&diet=${diet.join('&')}` : ''}&health=${health.join('&')}`)
      const response = await request.json()

        //set recipes 
        setReccipes(response.hits)
        setError(false)
        setLoaded(true)

        if(response.hits.length === 0){
          setError(true)
        }
      }catch (e){
            setError(true)
            setLoaded(false)
            console.log(e)
      }
     }
   
    useEffect(() => {
           getRecipes()
  
   }, [ recipe, request])
        

       // on click
       const onSubmit = (e) => {
         e.preventDefault()
         let newRecipe = e.target.elements.search.value
         
         setReccipe(newRecipe)
         setRequest(!request)
        
       }
      
       //on change
    const onChange = (e)=>{
     if(e.target.checked ){
       if(!diet.includes(e.target.name)){
        setDiet([...diet, e.target.name])
       }} else{
       setDiet(diet.filter(name => name !== e.target.name))
     }
    }
    
     
      //on change2 
      const onChange2 =(e) =>{
        if(e.target.checked){
          if(!health.includes(e.target.name)){
            setHealth([...health, e.target.name])
           }}else{
          setHealth(health.filter(name => name !== e.target.name))
        } 
        
      }
      //store health and diet
      localStorage.setItem("diet", JSON.stringify(diet))
      localStorage.setItem("health", JSON.stringify(health))
      localStorage.setItem("recipe", JSON.stringify(recipe))
      
      
       return(
           <div  style={{minHeight:'100vh'}}>
           
             
              
               <SearchForm onSubmit={onSubmit}
                          onChange = {onChange}
                          onChange2 = {onChange2}
                          recipe={recipe}
                          diet = {diet}
                          health = {health}/>

               <div  className='container-fluid mt-3 ' style={{padding: '0 7%', minHeight:'100vh'}}>
                  <div className ='row text-center'>
                { error ?  <div className="alert alert-danger mx-auto pt-1 px-5 pb-0" role="status">
                                       <p className='mb-1 mx-5'>Sorry .. recipes not founed</p>
                                  </div> :
                !loaded? <div className="spinner-border text-dark mx-auto" role="status">
                   <span className="sr-only">Loading...</span>
                          </div>
                           :
                           
              recipes.map((recipe, p=200)=> (
                <Fade key= {p++}>
                  <div  className ='col '>
                  <div className='card my-4 mx-auto shadow' style={{width: '20rem'}}>
                          <div className='card-body'>
                           <img className= 'card-img-top shadow rounded' src={recipe.recipe.image} alt='img'/>
           
                              <h3 className='card-title mt-4'>{recipe.recipe.label.length < 15 ?
                              `${recipe.recipe.label}` : `${recipe.recipe.label.substring(0, 15)}...`}</h3>
                                      
                              <p className='mt-2 text-warning'>calories({Math.floor(recipe.recipe.calories/recipe.recipe.yield) + ' /serv'})</p>                                                                              
                              
                               <Link to={{pathname: `recipes/recipes-nutrition/${recipe.recipe.calories}`,
                                         state:{recipes: recipe.recipe}}}
                              className='btn btn-outline-success btn-md'>view ingredients</Link>

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
                      <footer  className='bg-light text-dark text-center py-3'>
                     developed by @Nessma M. Nazir <br/>
                     contact info: nessomohamed555@gmail.com <br/>
                     K𝓪reem11222 (Gaster)™️ ✘#5136 <br/>
                     Nesso™ ✘#2257
                            </footer>
           </div>
       )
}

export default Recipes 