import React from 'react';import { MdDeleteOutline } from "react-icons/md";
import { MdCheck } from "react-icons/md";

const TodoList = ({onDelete,data}) => {
  return (
    <>
         <li>
                                <span>{data}</span>
                                <button><MdCheck/></button> 
                                <button onClick={() => onDelete(data)}><MdDeleteOutline/></button>
                            </li>
    </>
  )
}

export default TodoList