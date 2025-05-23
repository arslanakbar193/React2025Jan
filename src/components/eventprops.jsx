import React from 'react'

const Eventprops = () => {
    const handlewelcomeUser = (user) => {
        alert(`hi ${user}`)
    }
    const handleHover = () => {
        console.log(`hi i am hovered`)
    }
  return (
    <div>
        <WelcomeUser onButtonClick={() => handlewelcomeUser("arslan")} onMouseEnter={handleHover}/>
    </div>
  )
}

const WelcomeUser  = ({ onButtonClick, onMouseEnter }) => {
    const hanldeGreetings = () => {
        alert(`hi greetings`);
        onButtonClick();
    }
    return (
        <>
                <button onClick={onButtonClick}>Click Me</button><br/>
                <button onMouseEnter={onMouseEnter}>Hover Me</button><br/>
                <button onClick={hanldeGreetings}>Grettings</button>
        </>
    )
}

export default Eventprops