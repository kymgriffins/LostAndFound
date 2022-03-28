import React from 'react'
import {Navigate,  Outlet} from 'react-router-dom'
const PrivateRoute = ({isLogged}) => {
    // console.log('Private Route works!')
    
  return isLogged ? <Outlet />:< Navigate to="/login"/>
}

export default PrivateRoute