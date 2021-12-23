import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'

import LoginPage from 'pages/LoginPage'
import ForgotPasswordPage from 'pages/ForgotPasswordPage'
import ResetPasswordPage from 'pages/ResetPasswordPage'
import Dashboard from 'pages/Dashboard'

import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

const Routes: React.FC = () => (
  <Switch>
    <Route
      path="/login"
      element={
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      }
    />
    <Route
      path="/forgot"
      element={
        <PublicRoute>
          <ForgotPasswordPage />
        </PublicRoute>
      }
    />
    <Route
      path="/reset-password/:token"
      element={
        <PublicRoute>
          <ResetPasswordPage />
        </PublicRoute>
      }
    />
    <Route
      path="/"
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    />

    <Route path="*" element={<h2>No match!</h2>} />
  </Switch>
)

export default Routes
