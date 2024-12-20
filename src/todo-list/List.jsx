import React from 'react'

export default function List(props) {
    // console.log("-------",props);
    // console.log("=======",props.data[0]);
    
    
  return (
    <div>
        <ul className="list-group mx-5">

            {
                props.data.length>0 ?props.data.map((item,index)=>{
                    return   <li  className="list-group-item d-flex justify-content-between " key={index}>{item}
                               <button type="button" className="btn btn-success " onClick={()=>props.deleteTodo(index)}>Delete</button>
                               <button onClick={()=>props.editTodo(index)}>edit</button>
                    </li>
                }) :<li class="list-group-item" >no todo</li>
            }

       

</ul>
      
    </div>
  )
}
