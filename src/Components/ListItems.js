import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { DeleteItem, UpdateItem } from '../Redux/ListSlice';

import '../style/ListItems.css';
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListItems() {

  const dispatch = useDispatch()
  const Items = useSelector((state) => state.CRUD.Items)

  
  
  const List = Items.length!=0?Items.map((Item) => {
    return(
      <div className='Item' key={Item.id}>
          
          <input defaultValue={Item.title} id={Item.id+'I'} readOnly
           onBlur={(e) => {
                if(e.target.value === '')dispatch(DeleteItem(Item.id))
 
                else{
                 
                  dispatch(UpdateItem({title:e.target.value, id:Item.id}));

                  e.target.readOnly=true; 
                }
            }} 
          />

          <FontAwesomeIcon icon={faPen} style={{cursor:'pointer'}}
           onClick={() => {
             document.getElementById(Item.id+'I').readOnly=false;
             document.getElementById(Item.id+'I').focus();
           }}
          />
          

          <FontAwesomeIcon icon={faXmark} style={{cursor:'pointer'}}  
           onClick={() => {
             dispatch(
                  DeleteItem(Item.id)
             )
           }}

          />  
      </div>
    )
  }):<div style={{textAlign:'center'}}>Empty List</div>



  return (
    <div className='container List-container'>
    <div className='Scrol-list'>
    <div style={{width: "90%"}}>
         {List}
    </div>    
    </div>
    </div>
  )
}

export default ListItems