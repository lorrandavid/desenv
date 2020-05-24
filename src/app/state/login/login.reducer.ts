import { LoginActions, LoginActionsTypes } from './login.actions';

export interface User {
  userName: string;
}

export interface LoginState {
  user: User;
  isLoggedIn: boolean | null;
}

export const initialState: LoginState = {
  user: {
    userName: ''
  },
  isLoggedIn: null
};

export function loginReducer(state = initialState, action: LoginActions): LoginState {
  switch (action.type) {
    case LoginActionsTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: true
      };
    }

    default:
      return state;
  }
}
