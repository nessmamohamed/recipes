import React, {useState} from 'react'
import {Zoom} from 'react-reveal'

const Weight =()=>{
     const [male, setMale]= useState(false)
     const [female, setFemale]= useState(true)
     let [activity , setActivity] = useState(0)
     let[Height, setHeight] = useState()
     let [Weight , setWEIGHT] =useState()
     let [age, setAge] = useState()
     let [totalCalories , setTotalCalories] = useState()
     const [empty , setEmpty] = useState(false)
     const [valid, setValid] = useState(true)

     const onclickMale= ()=>{
         setMale(true)
         setFemale(false)
     }

     const onClickFemale =()=>{
         setMale(false)
         setFemale(true)
     }

     const onChange =(e) =>{
        if(e.target.checked ){
            setActivity(e.target.value)
           
        } else{
            setActivity(e.target.value)
          
          }
     }
     
    const onChange2 =(e)=>{
        setHeight(e.target.value)
      
    }

    const onChange3 =(e)=>{
        setWEIGHT(e.target.value)
        
    }

    const onChange4 =(e)=>{
        setAge(e.target.value)
    }

    const equation=()=>{
        let calories 
         male? calories = 10 * Weight + 6.25 * Height -  5 * age + 5 :
               calories = (10 * Weight) + (6.25 * Height) - ( 5 * age) - 161
           
        let totalCaloriess = activity ? calories * activity : calories
         setTotalCalories(Math.floor(totalCaloriess))

         if( !Weight || !Height || !age ){
           setEmpty(true)
         } else{
             setEmpty(false)
         }
           
        
        
    }
    
     
    return(
       <div className='pt-5 text-center' >
           
        

        <div className='container col-lg-5 col-md-8 col-10 pt-5' style={{minHeight:'100vh'}}>
            <div className='card shadow mb-4'>
             <div className='card-title px-3'>
             <h4 className='mt-5 mb-3 '>Calculate daily calories by mifflin sant's equation</h4>
        <Zoom>
        <div className=' mx-auto border2'></div>
        </Zoom>


             </div>
             <div className='card-body  '>

                 <div className=' mb-4 justify-content-center '>
                    
                 <button onClick={onclickMale} style = {{backgroundColor: male? '#dc3545' : 'white', color: male? 'white': '#dc3545'}}
                  className=' mr-sm-5  my-2 px-4 btn btn-outline-danger mx-auto'>male</button>
                <button onClick = {onClickFemale} style = {{backgroundColor: female? '#dc3545' : 'white', color: female? 'white': '#dc3545'}}
                 className=' ml-sm-5 my-2  px-4 btn btn-outline-danger'>female</button>
                 </div>
                 
                 <div className='mb-4'>
                 <label>Weight: </label>
                <input type='number' min= '10' max='300' title='weight must contain numbers from 10 to 300' 
                 onChange={onChange3} type='text' className='input ml-3 mr-2 text-center' required/> <span>Kg</span>
                 </div>
                 <div className='mb-4'>
                 <label>Height: </label>
                <input type='number' min='15' max='250' title='height must contain numbers from 15 to 250'
                onChange={onChange2} type='text' className='input ml-3 mr-2 text-center' required/> <span>Cm</span>
                 </div>
                  
                  <div className= 'mb-4'>
                  <label>Age: </label>
                <input type ='number' min='1' max='100' title='age must contain numbers from 5 to 100'
                 onChange={onChange4} type='text' className='input ml-3 mr-2 text-center' required/> 
                  </div>

                  <div>
                      <h5>body Activity</h5>

                      <div  className='mt-3 '>
               <div className='col mx-auto ' style={{maxWidth:'fit-content'}}>
               <div className="custom-control custom-radio " id='form'>
                <input type='radio' value='1.200' name="customRadio" className="custom-control-input position-static mr-2 " 
                 onChange={onChange}  id="blank1" />
                <label className='custom-control-label' htmlFor='blank1' >light active</label>
                </div>
                <div className="custom-control custom-radio" id='form'>
                <input type='radio' value='1.375' name="customRadio" className="custom-control-input position-static mr-2 "  onChange={onChange} id="blank2" />
                <label className='custom-control-label' htmlFor='blank2'> active</label>
                </div>
                <div className="custom-control custom-radio" id='form'>
                <input type='radio' value='1.550' name="customRadio"
                className="custom-control-input position-static mr-2"  onChange={onChange}  id="blank3" />
                <label className='custom-control-label' htmlFor='blank3'>average active</label>
                </div>
                <div className="custom-control custom-radio" id='form'>
                <input type='radio' value='1.725' name="customRadio" className="custom-control-input position-static mr-2"  onChange={onChange}  id="blank4" />
                <label className='custom-control-label' htmlFor='blank4'>high active</label>
                </div>
               
              
               <div className="custom-control custom-radio" id='form'>
                <input type='radio' value='1.900' name="customRadio" className="custom-control-input position-static mr-2"  onChange={onChange}  id="blank6" />
                <label className='custom-control-label' htmlFor='blank6'>very high active</label>
                </div>
                
                
                
                
               </div>
           </div>
                  </div>

                  <button onClick={equation} className ='btn btn-md btn-outline-danger my-4 px-4'>Submit</button>
                  { empty ? <p className='text-danger'>Please enter all fields !</p> :
                    
                  totalCalories ?
                   <p className='text-info mb-4'>Your total daily calories is {totalCalories}</p> : ''}
                    
             </div>
            </div>
        </div>

        <footer  className='bg-light text-dark py-3'>
            Copy rights @Nessma M. Nazir <br/>
            contact info: nessomohamed555@gmail.com <br/>
                          K𝓪reem11222 (Gaster)™️ ✘#5136 <br/>
                          Nesso™ ✘#2257 
                          
        </footer>
       </div>

    )
}

export default Weight