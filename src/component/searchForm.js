import React from 'react'


const SeacrchForm = ({onSubmit, onChange, onChange2 , diet, health}) => {
    
    
    return(
        <div className='container pt-5 text-center' style={{margin: '20px auto', width: 'fit-content'}}>
           
            <form onSubmit={onSubmit}>
              <div className='row'>
                  
                  <div className='col-12 col-sm-7 '>
                  <input  type='text' placeholder='Ex- Chicken' name='search'
                   className = 'pl-3'
                  style={{border:'none', borderBottom:'2px solid rgba(40, 167, 69, 0.52)'}} />
                  </div>
                  <div className='col-12 col-sm-5 mt-3 mt-sm-0'>
                  <button className=' btn btn-success btn-sm '
                      style={{fontSize: '1rem'}}>Get recipes</button>
                      
                  </div>
              </div>
           </form>

           <div  className='row mt-4 '>
               <div className='col pl-3'>
               <div className="custom-control custom-checkbox" id='form'>
                <input name='vegetarian' className="custom-control-input position-static mr-2 vegetarian" defaultChecked={health.includes('vegetarian')} onChange={onChange2} type="checkbox" id="blank1" />
                <label className='custom-control-label' htmlFor='blank1' >vegetarian</label>
                </div>
                <div className="custom-control custom-checkbox" id='form'>
                <input name='vegan' className="custom-control-input position-static mr-2 vegan" defaultChecked={health.includes('vegan')} onChange={onChange2} type="checkbox" id="blank2" />
                <label className='custom-control-label' htmlFor='blank2'>vegan</label>
                </div>
                <div className="custom-control custom-checkbox" id='form'>
                <input name='paleo' className="custom-control-input position-static mr-2" defaultChecked={health.includes('paleo')} onChange={onChange2} type="checkbox" id="blank3" />
                <label className='custom-control-label' htmlFor='blank3'>paleo</label>
                </div>
                <div className="custom-control custom-checkbox" id='form'>
                <input name='high-fiber' className="custom-control-input position-static mr-2" defaultChecked={diet.includes('high-fiber')} onChange={onChange} type="checkbox" id="blank4" />
                <label className='custom-control-label' htmlFor='blank4'>high-fiber</label>
                </div>
                <div className="custom-control custom-checkbox" id='form'>
                <input name='high-protein' className="custom-control-input position-static mr-2" defaultChecked={diet.includes('high-protein')} onChange={onChange}  type="checkbox" id="blank5" />
                <label className='custom-control-label' htmlFor='blank5'>high-protein</label>
                </div>
               </div>
               <div className='col pl-3'>
               <div className="custom-control custom-checkbox" id='form'>
                <input name='low-carb' className="custom-control-input position-static mr-2" defaultChecked={diet.includes('low-carb')} onChange={onChange} type="checkbox" id="blank6" />
                <label className='custom-control-label' htmlFor='blank6'>low-carb</label>
                </div>
                <div className="custom-control custom-checkbox" id='form'>
                <input name='low-fat' className="custom-control-input position-static mr-2" defaultChecked={diet.includes('low-fat')} onChange={onChange} type="checkbox" id="blank7" />
                <label className='custom-control-label' htmlFor='blank7'>low-fat</label>
                </div>
                <div className="custom-control custom-checkbox" id='form'>
                <input name='low-sodium' className="custom-control-input position-static mr-2" defaultChecked={diet.includes('low-sodium')} onChange={onChange} type="checkbox" id="blank8" />
                <label className='custom-control-label' htmlFor='blank8'>low-sodium</label>
                </div>
                <div className="custom-control custom-checkbox" id='form'>
                <input name='balanced' className="custom-control-input position-static mr-2 " defaultChecked={diet.includes('balanced')} onChange={onChange}
                 type="checkbox" id="blank9" />
                <label className='custom-control-label' htmlFor='blank9'>balanced</label>
                </div>
                <div className="custom-control custom-checkbox" id='form'>
                <input name='alcohol-free' className="custom-control-input position-static mr-2" checked type="checkbox" id="blank10" />
                <label className='custom-control-label' htmlFor='blank10'>alcohol-free</label>
                </div>
               </div>
           </div>
            
        </div>
    )
}

export default SeacrchForm;