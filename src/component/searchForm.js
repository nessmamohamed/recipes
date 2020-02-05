import React from 'react'


const SeacrchForm = ({onSubmit}) => {
    return(
        <div className='container pt-5 text-center' style={{margin: '20px auto', width: 'fit-content'}}>
           
            <form onSubmit={onSubmit}>
              <div className='row'>
                  <div className='col-12 col-sm-7 '>
                  <input type='text' placeholder='Ex- Chicken' name='search'
                   className = 'pl-3'
                  style={{border:'none', borderBottom:'2px solid rgba(40, 167, 69, 0.52)'}} />
                  </div>
                  <div className='col-12 col-sm-5 mt-3 mt-sm-0'>
                  <button className=' btn btn-success btn-sm '
                      style={{fontSize: '1rem'}}>Get recipes</button>
                      
                  </div>
              </div>
           </form>
        </div>
    )
}

export default SeacrchForm;