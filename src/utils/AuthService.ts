import { isTokenExpired, decodeToken } from './jwtHelper'

export default class AuthService {
  static logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('kind')
    localStorage.removeItem('token')
    localStorage.removeItem('company')
    localStorage.removeItem('acceptTermsOfUse')
  }

  static isAuthenticated() {
    // Checks if there is a saved token and it's still valid
    const token = localStorage.getItem('token')

    if (token) {
      return !isTokenExpired(token)
    }

    return false
  }

  static getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('token')
  }

  static finishAuthentication(token: string, company: string) {
    localStorage.setItem('token', token)
    localStorage.setItem('company', company)
  }

  static decode() {
    const token = this.getToken()
    if (token) {
      return decodeToken(token)
    }
    return null
  }
}
