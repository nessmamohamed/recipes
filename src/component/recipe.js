import React from 'react'
import {Link} from 'react-router-dom'
import {Fade} from 'react-reveal'

const Recipe = ({location})=>{
   
    //get recipe 
    const recipe = location.state.recipes
    
    const nut = recipe.totalNutrients
 
    const obj2 = Object.values(nut)

    
    return(
         <div>
             <Fade duration={800}>
            <div className = 'container py-5 ' >
                <div className='row ' style={{paddingTop: 'inherit'}}>
                 <div className='col-12 col-md-7 col-lg-8 mx-auto' >
                  <div className = 'card mx-auto shadow'>
                      <div className='card-body text-center'>
                      
                       <h1 className='card-title '>{recipe.label}</h1>
                       <img className='card-img-top pt-3 pb-3 rounded' src={recipe.image} alt='img'
                       style={{height: '50vh', width: '80%'}}/>
                        <ul className='my-3 pl-0 pb-3'>
                            {recipe.ingredientLines.map((ingred, c=1) => (
                                <li id = 'recipe-list'  key ={c++}>{ ingred}</li>
                            ))}
                        </ul>
                        <div className='d-md-flex border-bottom mx-auto justify-content-center mb-4' style={{width: '60%'}}>
                        <p className='text-warning'>calories({Math.floor(recipe.calories/recipe.yield)+' /serv'})</p>
                            <p className='text-warning pl-4  '>{recipe.yield} Serving</p>
                            
                        </div>
                        <p className='pt-4 pt-lg-0 '><a href={recipe.url}  style={{color: '#6189b5'}}>Click here for recipe preparation</a></p>
                        <Link to = '/recipes' className = 'btn btn-success btn-xl d-table ' >Back to Recipes</Link>
                       
                      </div>
                  </div>
                 </div>
                 <div className='col-9  col-md-5 col-lg-4 mt-4 mt-md-0 text-center mx-auto'>
                     
                     <div className='card shadow'>
                       <div className='card-header bg-success text-light text-center'>-health label-  {recipe.dietLabels}</div>
                       <div className='card-body '>
                       <ul className='my-3 pl-0'>
                       {recipe.healthLabels.map((label, i=1) => (
                                <li id = 'recipe-list'  key ={i++}>{ label}</li>
                            ))}
                        </ul>
                       </div>
                     </div>
                     <div>
                     <div className='card mt-4 shadow'>
                       <div className='card-header bg-danger text-light '> Total Nutrients</div>
                       <div className='card-body mx-auto'>
                       
                       <ul className='pl-0  '>
                       
                       {obj2.map((val, x=0)=>(
                           <li id='recipe-list-2' key={x++} className='d-flex pl-3 justify-content-left ' >
                               <p className='pr-3' >{val.label+ ' :'} </p>
                       <p style={{color: 'dimgray'}}>{Math.floor(val.quantity/recipe.yield) + ' '+  val.unit}</p>
                           </li>
                       ))}
                       </ul>
                        
                       </div>
                     </div>
                     </div>
                     
                 </div>
                </div>
            </div>
              </Fade>
         </div>
    )
}

export default Recipe