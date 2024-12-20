import React from 'react'
import { useState,useEffect } from 'react'

export default function Input(props) {
let editIndex= props.editIndex
let getval= props.getval
  let [newlist,setnewlist]=useState("")

    let [editted,setEditted]  = useState("")
  
  useEffect(()=>{
    setnewlist(props.data[editIndex])
  },[editIndex])




  let fun=(e)=>{

    if(editIndex){
setEditted(e.target.value)
getval(editted)
    }
    else{
      setnewlist(e.target.value)
    }

    
  
  }
  let todo=()=>{
    props.catchdata(newlist)
    setnewlist('')
  }
 
  

     

  return (
    <div>

     <form>
  <div className="form-row">
    <div className="col-4 mx-5 my-4  " >
        <label htmlFor="">Password</label>
      <input type="text" className="form-control " placeholder="Add todo list...!" onChange={fun} value={newlist}/>
      <button type="button" className="btn btn-dark " onClick={todo}>Add Todo</button>
    </div>
   
  </div>
</form>      
    </div>
  )
}

