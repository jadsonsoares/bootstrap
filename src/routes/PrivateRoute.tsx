import React from 'react'
import { Navigate } from 'react-router-dom'

import AuthService from 'utils/AuthService'

const PrivateRoute = ({ children }) =>
  AuthService.isAuthenticated() ? children : <Navigate to="/login" replace />

export default PrivateRoute
