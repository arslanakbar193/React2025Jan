import { SiWelcometothejungle } from "react-icons/si";

const Todo = () => {
  return (
    <>
     <div className="min-h-screen bg-gray-100">
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <SiWelcometothejungle className="w-12 h-12 text-blue-500 mb-6"/>
      <h1 className="text-2xl font-bold text-left text-gray-800 mb-6">
           Welcome to Ecommerce Website 
          </h1>
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-6">
       
          
          <p className="text-gray-600 textleft">
            Add Items through below
          </p>
          <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-200">
            Click Me
          </button>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Todo;