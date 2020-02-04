import React from 'react'


const SeacrchForm = ({onSubmit}) => {
    return(
        <div className='container pt-5 text-center' style={{margin: '0 auto', width: 'fit-content'}}>
           <form onSubmit={onSubmit}>
              <div className='row'>
                  <div className='col-12 col-sm-7 '>
                  <input type='text' placeholder='search ex-chicken' name='search'
                   className = 'text-center'
                  style={{border:'none', borderBottom:'2px solid #28a745'}} />
                  </div>
                  <div className='col-12 col-sm-5 mt-3 mt-sm-0'>
                      <button className=' btn btn-success btn-sm '>Search</button>
                  </div>
              </div>
           </form>
        </div>
    )
}

export default SeacrchForm;