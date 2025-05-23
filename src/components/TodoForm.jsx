import React,{useState} from 'react';
import { SiTemporal } from "react-icons/si";

const TodoForm = ({addtodo}) => {
    const [inputValue, setinputValue] = useState({});
    const handleInputChange = (value) => {
        setinputValue({id:value,content:value,checked:false});
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        addtodo(inputValue);
        setinputValue({id:"",content:"",checked:false});
  }
      
  return (
    <div>
         <form onSubmit={handleSubmit}>
                        <p className="text-gray-600 textleft flex text-2xl font-bold items-center mb-4">
                        Add Your Products Here{" "}
                        <SiTemporal className="w-6 h-6 text-yellow-500 ml-2" />
                        </p>
                        <div className="">
                        <input
                            type="text"
                            placeholder="Enter Product Name...."
                            value={inputValue.content}
                            onChange={(event) => handleInputChange(event.target.value)}
                        />
                        </div>
                        <button type="submit">Add task</button>
                    </form>
    </div>
  )
}

export default TodoForm