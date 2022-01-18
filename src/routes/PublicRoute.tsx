import React from 'react'
import { Navigate } from 'react-router-dom'

import AuthService from 'utils/AuthService'

const PublicRoute = ({ children }) =>
  !AuthService.isAuthenticated() ? children : <Navigate to="/" replace />

export default PublicRoute
