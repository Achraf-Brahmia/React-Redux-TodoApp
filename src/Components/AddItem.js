import React, {useState} from 'react'
import { useDispatch } from 'react-redux';

import { AddItems } from '../Redux/ListSlice';

import '../style/AddItem.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddItem() {

  const dispatch = useDispatch();

  const [input, setInput] = useState(null);
  


  const HandleAdd = () =>{  

     if(input === null || input===''){

      document.getElementById('Add').classList.add('Add-container-Errors')
      
    }

     else{
      dispatch(AddItems(
        {title:input, id:Date.now()}
      ))
     }
  }

  return (
    <div className='Add-container' id='Add'>
         <input placeholder='Add Item' 
         onChange={(e) => {
           document.getElementById('Add').classList.remove('Add-container-Errors')
           ;setInput(e.target.value)}} />

         <FontAwesomeIcon icon={faPlus} className='btn'
           onClick={()=>{HandleAdd()}} />
    </div>
  )
}

export default AddItem