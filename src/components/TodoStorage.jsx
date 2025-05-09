




import { useState, useEffect } from "react";
import { SiWelcometothejungle, SiTemporal } from "react-icons/si";
import { CiEdit } from "react-icons/ci";
import { MdAddToQueue, MdDeleteOutline } from "react-icons/md";

const Todo = () => {
  // Initial default products (can be modified)
  const initialDefaultProducts = [
    "Laptop",
    "Smartphone",
    "Headphones",
    "Keyboard",
    "Mouse",
    "Monitor",
    "USB Cable"
  ];

  // State management
  const [inputValue, setInputValue] = useState("");
  const [defaultItems, setDefaultItems] = useState(initialDefaultProducts);
  const [customItems, setCustomItems] = useState([]);
  const [showError, setShowError] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Load saved items on component mount
  useEffect(() => {
    const savedDefaults = localStorage.getItem("defaultProducts");
    const savedCustom = localStorage.getItem("customProducts");
    
    if (savedDefaults) setDefaultItems(JSON.parse(savedDefaults));
    if (savedCustom) setCustomItems(JSON.parse(savedCustom));
  }, []);

  // Save to localStorage when items change
  useEffect(() => {
    localStorage.setItem("defaultProducts", JSON.stringify(defaultItems));
    localStorage.setItem("customProducts", JSON.stringify(customItems));
  }, [defaultItems, customItems]);

  // Combined list for display
  const allItems = [...defaultItems, ...customItems];

  // Add new product
  const addItem = () => {
    if (!inputValue.trim()) {
      setShowError(true);
      return;
    }
    setCustomItems([...customItems, inputValue]);
    setInputValue("");
    setShowError(false);
  };

  // Delete product
  const deleteItem = (index) => {
    if (index < defaultItems.length) {
      // Delete from defaults
      setDefaultItems(defaultItems.filter((_, i) => i !== index));
    } else {
      // Delete from customs
      const customIndex = index - defaultItems.length;
      setCustomItems(customItems.filter((_, i) => i !== customIndex));
    }
  };

  // Start editing
  const startEdit = (index, value) => {
    setEditingIndex(index);
    setEditValue(value);
  };

  // Save edit
  const saveEdit = () => {
    if (!editValue.trim()) return;
    
    if (editingIndex < defaultItems.length) {
      // Edit in defaults
      setDefaultItems(defaultItems.map((item, i) => 
        i === editingIndex ? editValue : item
      ));
    } else {
      // Edit in customs
      const customIndex = editingIndex - defaultItems.length;
      setCustomItems(customItems.map((item, i) => 
        i === customIndex ? editValue : item
      ));
    }
    
    setEditingIndex(null);
    setEditValue("");
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditingIndex(null);
    setEditValue("");
  };

  // Clear all custom products
  const removeAll = () => {
    setCustomItems([]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <SiWelcometothejungle className="w-12 h-12 text-blue-500 mb-6" />
        <h1 className="text-5xl font-bold text-left text-gray-800 mb-6">
          Welcome to Ecommerce Website
        </h1>
        
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 text-left flex text-2xl font-bold items-center mb-4">
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
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addItem()}
              />
              <MdAddToQueue
                className="w-6 h-6 text-yellow-500 ml-2 cursor-pointer pb-1 hover:text-blue-600 transition duration-200"
                onClick={addItem}
              />
              {showError && (
                <p className="absolute text-xs text-red-500 -bottom-5">
                  Field cannot be empty!
                </p>
              )}
            </div>
          </div>
          
          <div className="added-items flex justify-between flex-col">
            {allItems.map((item, index) => (
              <div className="w-full flex justify-between mb-3" key={index}>
                {editingIndex === index ? (
                  <div className="w-full flex items-center">
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="border-b-2 border-blue-500 flex-grow mr-2 focus:outline-none"
                      autoFocus
                    />
                    <button 
                      className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                      onClick={saveEdit}
                    >
                      Save
                    </button>
                    <button 
                      className="bg-gray-500 text-white px-3 py-1 rounded"
                      onClick={cancelEdit}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="w-3/4 flex items-center">
                      <h3 className="mr-2">{item}</h3>
                      {index < defaultItems.length && (
                        <span className="text-xs text-gray-400">(Default)</span>
                      )}
                    </div>
                    <div className="w-1/5 text-right">
                      <div className="flex justify-end">
                        <button 
                          className="relative flex items-center justify-center w-24 bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-md transition duration-200 mr-2"
                          onClick={() => startEdit(index, item)}
                        >
                          <CiEdit className="absolute left-2 w-4 h-4" />
                          <span className="ml-4">Edit</span>
                        </button>
                        <button 
                          className="relative flex items-center justify-center w-24 bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded-md transition duration-200"
                          onClick={() => deleteItem(index)}
                        >
                          <MdDeleteOutline className="absolute left-2 w-4 h-4" />
                          <span className="ml-4">Delete</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          
          {customItems.length > 0 && (
            <button 
              className="w-28 mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-200 cursor-pointer"
              onClick={removeAll}
            >
              Clear All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
