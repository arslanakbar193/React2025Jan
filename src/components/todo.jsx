import { SiWelcometothejungle } from "react-icons/si";
import { SiTemporal } from "react-icons/si";
import { CiEdit } from "react-icons/ci";
import { MdAddToQueue } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { RiEditCircleFill } from "react-icons/ri";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = () => {
  const [inputValue, setinputValue] = useState("");
  const [items, setitems] = useState([
    { id: "1", name: "Apple iPhone 15" },
    { id: "2", name: "Samsung Level U" },
    { id: "3", name: "Lenove Ideapad Slim" },
    { id: "4", name: "Sports Stainless Steel" },
    { id: "5", name: "Hp Elite Boook" },
    { id: "6", name: "Ericsson" },

  ]);
  const [showError, setShowError] = useState(false);
  const [toggleICon, settoggleIcon] = useState(true);
  const [editingItem,seteditingItem] = useState(null);
  const [showpopup, setShowpopup] = useState(false);
  const [showdeletepopup, setShowdeletepopup] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // Add Products
  const addItems = () => {
    if (!inputValue) {
      setShowError(true);
      return false;
    }else if(inputValue && !toggleICon){
      setitems(items.map((curElem) => {
        if(curElem.id === editingItem) {
          toast.success("Product updated successfully!");
          return {...curElem,name:inputValue}
        }
        return curElem;
      }))
      settoggleIcon(true);
      setinputValue("");
      seteditingItem(null);
    } 
    else {
      const allinputValues = {id: new Date().getTime().toString() , name:inputValue}
      setitems([...items, allinputValues]);
      setinputValue("");
      setShowError(false);
      toast.success("Product added successfully!");
    }
  };

  // Delete Products
  const deleteItem = (id) => {
    setShowdeletepopup(true);
    setDeleteId(id);
    
  }

  const confirmSingleDelete = () => {
    const updatedItems = items.filter((curElem) => {
        return curElem.id !== deleteId;
    });
    setitems(updatedItems);
    setShowdeletepopup(false);
    setDeleteId(null);
  }

  const cancelSingleDelete = () => {
    setShowdeletepopup(false);
    setDeleteId(null);
  }

  //Edit Products
  const editItem = (id) => {
    let editedItem = items.find((curElem) => {
        return curElem.id === id;
    });
    settoggleIcon(false);
    setinputValue(editedItem.name);
    seteditingItem(id);

  }

  // Delete All Products

  // const removeAll = () => {
  //   setitems([]); 
  // }

  const removeAll = () => {
  setShowpopup(true);
};

const confirmDelete = () => {
  setitems([]);
  setShowpopup(false);
};

const cancelDelete = () => {
  setShowpopup(false);
};
  return (
    <>
    <ToastContainer position="top-left" autoClose={3000} />
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
              <RiEditCircleFill className="w-5 h-5 text-yellow-500 mr-2"/>
                <input
                  type="text"
                  placeholder="Add Products..."
                  className="focus:border-none focus:outline-none w-full pb-1"
                  value={inputValue}
                  onChange={(e) => setinputValue(e.target.value)}
                />
                {
                  toggleICon ?   <MdAddToQueue
                  className="w-6 h-6 text-yellow-500 ml-2 cursor-pointer pb-1 hover:text-blue-600 transition duration-200"
                  onClick={addItems}
                /> :  <CiEdit
                className="w-6 h-6 text-yellow-500 ml-2 cursor-pointer pb-1 hover:text-blue-600 transition duration-200"
                onClick={addItems}
              />
                }
               
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
           
            {items.length > 0 && (
            <div className="header-row flex justify-between mb-3 font-bold  pb-2 border-b">
              <div className="w-2/4">Products</div>
              <div className="w-1/4 text-left">Quantity</div>
              <div className="w-1/4 text-center">Action</div>
            </div>
          )} 

            <div className="added-items flex justify-between flex-col">
              {items.map((curElem) => {
                return (
                  <div className="w-full flex justify-between pb-3 mb-3 border-b border-b-gray-300" key={curElem.id}>
                    <div className="w-2/4  flex items-center justify-between">
                      <h3>{curElem.name}</h3>
                    </div>
                    <div className="w-1/4">
                      <h2 className="pl-3">5</h2>
                    </div>
                    <div className="w-1/4 text-right">
                      <button className="relative cursor-pointer text-center items-center w-24 bg-green-500 hover:bg-green-300 text-white text-sm font-medium py-2 px-4 rounded-md transition duration-200 mr-2" onClick={() => editItem(curElem.id)}>
                      <CiEdit className="left-2 absolute w-5 h-5 text-white-500 ml-2" />Edit
                      </button>
                      <button className="cursor-pointer relative w-24 text-end bg-red-500 hover:bg-red-300 text-white text-sm  font-medium py-2 px-4 rounded-md transition duration-200" onClick={() => deleteItem(curElem.id)}>
                      <MdDeleteOutline className="left-2 absolute w-5 h-5 text-white-500 ml-2"/>Delete
                      </button>
                      {showdeletepopup && (
                        <div className="fixed inset-0 bg-black-custom bg-opacity-25 flex items-center justify-center z-50">
                          <div className="bg-white p-6 rounded shadow-md text-center">
                            <p className="mb-4">Are you sure you want to delete this product?</p>
                            <div className="space-x-4">
                              <button className="bg-red-500 text-white px-8 py-2 rounded cursor-pointer" onClick={confirmSingleDelete}>
                                Yes
                              </button>
                              <button className="bg-gray-300 px-8 py-2 rounded cursor-pointer" onClick={cancelSingleDelete}>
                                No
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="cursor-pointer w-28 mt-4 bg-blue-500 hover:bg-blue-400 text-white font-medium py-2 px-4 rounded-md transition duration-200"  onClick={removeAll}>
              Clear All
            </button>
            {showpopup && (
              <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded shadow-md text-center">
                  <p className="mb-4">Are you sure you want to delete all products?</p>
                  <div className="space-x-4">
                    <button className="bg-red-500 text-white px-8 py-2 rounded cursor-pointer hover:bg-red-300" onClick={confirmDelete}>Yes</button>
                    <button className="bg-gray-300 px-8 py-2 rounded cursor-pointer hover:bg-gray-200" onClick={cancelDelete}>No</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;


