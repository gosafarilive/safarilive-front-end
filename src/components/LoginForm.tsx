import React from 'react'
import { ILoginFormAction, ILoginFormState } from 'utils/types'

const initialState: ILoginFormState = {
  username: '',
  password: '',
  hasError: false,
}

const reducer = (
  state: ILoginFormState,
  action: ILoginFormAction
): ILoginFormState => {
  if (action.type === 'input') {
    return {
      ...state,
      [action.name || '']: action.value,
      hasError: false,
    }
  } else if (action.type === 'fail') {
    return {
      ...state,
      hasError: true,
    }
  } else {
    return state
  }
}

export function LoginForm() {
  const [isSubmit, setIsSubmit] = React.useState(false)
  const [state, dispatch] = React.useReducer(reducer, initialState)
  React.useEffect(() => {}, [])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    dispatch({
      type: 'input',
      name,
      value,
    })
  }
  React.useEffect(() => {
    if (state.password === '' || state.username === '') {
      dispatch({
        type: 'fail',
        name: '',
        value: '',
      })
    }
    setIsSubmit(state.hasError)
  }, [state.hasError, state.password, state.username])
  return (
    <form>
      <p>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={state.username}
          onChange={(e) => handleChange(e)}
        />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={state.password}
          onChange={(e) => handleChange(e)}
        />
      </p>
      <p role="alert"></p>
      <p>
        <button disabled={isSubmit}>Login</button>
      </p>
    </form>
  )
}
