import React,{useState} from 'react'
import { TbBackground } from 'react-icons/tb'

const RegistrationForm = () => {
    const [user,setuser] = useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        password:"",
    });
    const handleInputChange = (e) => {
        const {name,value} = e.target; 
        setuser((prev) => ({...prev,[name]:value}) )       
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // const formData = {
        //     firstname:user.firstname,
        //     lastname:user.lastname,
        //     email:user.email,
        //     phone:user.phone,
        //     password:user.password,
        // }
        console.log(user);
    }
  return (
    <>
        <form onSubmit={handleFormSubmit}>
            <div style={{marginBottom:"10px",marginTop:"10px"}}>
                <label>First Name: </label>
                <input type='text' name="firstname" placeholder='Enter First Name' value={user.firstname} onChange={handleInputChange}/>
            </div>
            <div style={{marginBottom:"10px",marginTop:"10px"}}>
                <label>Last Name: </label>
                <input type='text' name="lastname" placeholder='Enter Last Name' value={user.lastname} onChange={handleInputChange} />
            </div>
            <div style={{marginBottom:"10px",marginTop:"10px"}}>
                <label>Email: </label>
                <input type='text' name="email" placeholder='Enter Email Address' value={user.email} onChange={handleInputChange}/>
            </div>
            <div style={{marginBottom:"10px",marginTop:"10px"}}>
                <label>Phone Number: </label>
                <input type='text' name="phone" placeholder='Enter Phone Number' value={user.phone} onChange={handleInputChange}/>
            </div>
            <div style={{marginBottom:"10px",marginTop:"10px"}}>
                <label>Password: </label>
                <input type='password' name="password" placeholder='Enter Password' value={user.password} onChange={handleInputChange}/>
            </div>
            <div>
                <button type='submit' style={{backgroundColor:"gray",color:"#fff",padding:"10px",cursor:"pointer"}}>Submit</button>
            </div>
        </form>
    </>
  )
}

export default RegistrationForm;


