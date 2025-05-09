import { SiWelcometothejungle } from "react-icons/si";
import { SiTemporal } from "react-icons/si";
import { CiEdit } from "react-icons/ci";
// import { PiHandPeaceLight } from "react-icons/pi";
// import { IoMdAddCircle } from "react-icons/io";
import { MdAddToQueue } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";

const Todo = () => {
  const [inputValue, setinputValue] = useState("");
  const [items, setitems] = useState([]);
  const [showError, setShowError] = useState(false);

  // Add Products
  const addItems = () => {
    if (!inputValue) {
      setShowError(true);
      return false;
    } else {
      setitems([...items, inputValue]);
      setinputValue("");
      setShowError(false);
    }
  };

  // Delete Products
  const deleteItem = (id) => {
    console.log(id)
    const updatedItems = items.filter((curElem,ind) => {
        return ind !== id;
    });
    setitems(updatedItems);
  }

  // Delete All Products
  const removeAll = () => {
    setitems([]);
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <SiWelcometothejungle className="w-12 h-12 text-blue-500 mb-6" />
          <h1 className="text-5xl font-bold text-left text-gray-800 mb-6">
            Welcome to Ecommerce Website
          </h1>
          <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 textleft flex text-2xl font-bold items-center mb-4">
              Add Your Products Here{" "}
              <SiTemporal className="w-6 h-6 text-yellow-500 ml-2" />
            </p>
            <div className="add-items flex justify-between mb-5">
              <div className="w-full border-solid border-b-2 border-yellow-500 flex items-center justify-between relative">
                <input
                  type="text"
                  placeholder="Add Products..."
                  className="focus:border-none focus:outline-none w-full pb-1"
                  value={inputValue}
                  onChange={(e) => setinputValue(e.target.value)}
                />
                <MdAddToQueue
                  className="w-6 h-6 text-yellow-500 ml-2 cursor-pointer pb-1 hover:text-blue-600 transition duration-200"
                  onClick={addItems}
                />
                {showError && (
                  <p
                    style={{ color: "red" }}
                    className="absolute text-xs -bottom-5 "
                  >
                    Field cannot be empty!
                  </p>
                )}
              </div>
            </div>
            <div className="added-items flex justify-between flex-col">
              {items.map((curElem, ind) => {
                return (
                  <div className="w-full flex justify-between mb-3" key={ind}>
                    <div className="w-3/4  flex items-center justify-between">
                      <h3>{curElem}</h3>
                    </div>
                    <div className="w-1/5 text-right">
                      <button className="relative cursor-pointer text-center items-center w-24 bg-green-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md transition duration-200 mr-2">
                      <CiEdit className="left-2 absolute w-5 h-5 text-white-500 ml-2"/>Edit
                      </button>
                      <button className="relative w-24 text-end bg-red-500 hover:bg-blue-600 text-white text-sm  font-medium py-2 px-4 rounded-md transition duration-200" onClick={() => deleteItem(ind)}>
                      <MdDeleteOutline className="left-2 absolute w-5 h-5 text-white-500 ml-2"/>Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="w-28 mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-200" onClick={() => removeAll()}>
              Clear All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
