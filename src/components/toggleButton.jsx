import React, { useState } from 'react';

const ToggleButton = () => {
    const [btnText,setbtnText] = useState("ON");
    const [btnClr,setbtnClr] = useState("white");
    const ToggleBtn = () => {
        if(btnText == "ON"){
            setbtnText("OFF");
            setbtnClr("gold");
        }
        else{
            setbtnText("ON");
            setbtnClr("white");
        }
        
    }
  return (
    <>
    <div style={{width:"100px",borderRadius:"20px",backgroundColor:"gray",height:"40px",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div onClick={() => ToggleBtn()} style={{color:btnClr}}>{btnText}</div>
    </div>
        
    </>
  )
}

export default ToggleButton