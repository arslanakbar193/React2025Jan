import './App.css'
import AdvanceCounter from './components/advanceCounter';
import Eventprops from './components/eventprops';
import { BioProvider } from './components/hooks/contextAPI';
import Home from './components/hooks/contextAPI/home';
import Usereducerhook from './components/hooks/contextAPI/usereducerhook';
import ReactEcom from './ecom';
import About from './ecom/about';
import Cart from './ecom/cart';
import Contact from './ecom/contact';
import Productdetail from './ecom/productdetail';
import Products from './ecom/products';
import Error from './ecom/error';
import Useeffect from './components/hooks/useeffect';
import RegistrationForm from './components/registrationForm';
import SeriesCard from './components/seriesCard';
import TodoLocalStorage from './components/todolocalStorage';
import ToggleButton from './components/toggleButton';
import { BrowserRouter , Routes , Route , createBrowserRouter , createRoutesFromElements, RouterProvider } from 'react-router-dom';
import AppLayout from './ecom/AppLayout';
// import Todo from './components/todo';


function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[
        {
          path:"/",
          element:<ReactEcom/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/products",
          element:<Products/>
        },
        {
          path:"/productdetail/:id",
          element:<Productdetail/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/cart",
          element:<Cart/>
        }
      ]
    }
    
  ])

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //     <Route path="/" element={<ReactEcom/>}></Route>
  //     <Route path="/about" element={<About/>}></Route>
  //     <Route path="/products" element={<Products/>}></Route>
  //     <Route path="/productdetail/:id" element={<Productdetail/>}></Route>
  //     <Route path="/contact" element={<Contact/>}></Route>
  //     <Route path="/cart" element={<Cart/>}></Route>
  //     <Route path="*" element={<Error/>}></Route>
  //   </Route>
  //   )
  //  )

  return (
    <>
     {/* <Todo/> */}
     {/* <SeriesCard/> */}
     {/* <Eventprops/> */}
     {/* <ToggleButton/> */}
     {/* <TodoLocalStorage/> */}
     {/* <AdvanceCounter/> */}
     {/* <RegistrationForm /> */}
     {/* <Useeffect/> */}
     {/* <BioProvider>
      <Home/>
     </BioProvider> */}
     {/* <Usereducerhook/> */}
     {/* <BrowserRouter>
      
     </BrowserRouter> */}
     <RouterProvider router={router} />

    
    </>
  )
  
}

export default App
