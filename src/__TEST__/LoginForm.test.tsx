import { LoginForm } from '../components/LoginForm'
import { render, screen } from '@testing-library/react'
import '@testing-library/react'
function getFields() {
  const username = screen.getByLabelText(/username/i)
  const loginButton = screen.getByRole('button', { name: /login/i })
  const password = screen.getByLabelText(/password/i)

  return {
    loginButton,
    username,
    password,
  }
}
describe('UI', () => {
  test('has input field "username", "password", "login button"', () => {
    render(<LoginForm />)
    const { username, password, loginButton } = getFields()
    expect(username).toBeInTheDocument()
    expect(username).toHaveAttribute('type', 'text')
    expect(password).toBeInTheDocument()
    expect(password).toHaveAttribute('type', 'password')
    expect(loginButton).toBeInTheDocument()
  })
})

describe('UI functionality', () => {
  test('disables button, if "username" and "password" are empty', () => {
    render(<LoginForm />)
    const { loginButton } = getFields()
    expect(loginButton).toBeDisabled()
  })
})
