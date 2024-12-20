import { useState } from "react";
import Input from "./todo-list/Input";
import List from "./todo-list/List";
// import Prrops from "./Prrops";

function Counter(){
  let [data,setdata]=useState([]);
    let catchdata=(datacoming)=>{
      setdata([...data,datacoming])
             
    }
let [editIndex,seteditIndex] = useState(null)
let [newval,setnewval]     = useState('')

function deleteTodo(ind){
  let newTodo=[...data]
  newTodo.splice(ind,1)
  console.log(newTodo,ind)
  setdata(newTodo)

}


function editTodo(index){
  let newTodo=[...data]
  newTodo.splice(index,1,newval)
setdata(newTodo)
seteditIndex(index)
console.log(index)
}

function getnewVal(val){
setnewval(val)
console.log(newval)
}
  return (
    <>
     
    <Input catchdata={catchdata} getval={getnewVal}  editIndex={editIndex} data={data}/> 
    <List data={data} deleteTodo={deleteTodo} editTodo={editTodo}/>  
   {/* <Prrops /> */}
        
    </>
  )

}


export default Counter;
