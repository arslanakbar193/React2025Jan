import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const handlegoback = () => {
    navigate(-1);
  }
  console.log(error)
  return (
    <div>
      <div>404 Error Page</div>
      <div><button onClick={handlegoback}>Go Back</button></div>
      </div>
  )
}

export default Error;