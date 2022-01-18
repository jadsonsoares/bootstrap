import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'

import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

const LoginPage = React.lazy(() => import('../pages/LoginPage'))
const ResetPasswordPage = React.lazy(() => import('../pages/ResetPasswordPage'))
const Dashboard = React.lazy(() => import('../pages/Dashboard'))
const ForgotPasswordPage = React.lazy(
  () => import('../pages/ForgotPasswordPage')
)

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const Routes: React.FC = () => (
  <Switch>
    <Route
      path="/login"
      element={
        <React.Suspense fallback={loading}>
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        </React.Suspense>
      }
    />
    <Route
      path="/forgot"
      element={
        <React.Suspense fallback={loading}>
          <PublicRoute>
            <ForgotPasswordPage />
          </PublicRoute>
        </React.Suspense>
      }
    />
    <Route
      path="/reset-password/:token"
      element={
        <React.Suspense fallback={loading}>
          <PublicRoute>
            <ResetPasswordPage />
          </PublicRoute>
        </React.Suspense>
      }
    />
    <Route
      path="/"
      element={
        <React.Suspense fallback={loading}>
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        </React.Suspense>
      }
    />

    <Route path="*" element={<h2>No match!</h2>} />
  </Switch>
)

export default Routes
