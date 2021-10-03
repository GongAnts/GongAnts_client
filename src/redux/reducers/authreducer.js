import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from 'redux/types';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  userEmail: '',
  userName: '',
  errorMsg: '',
  successMsg: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case LOGOUT_REQUEST:
      return {
        ...state,
        errorMsg: '',
        isLoading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        userName: action.payload.user_name,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        userName: action.payload.user_name,
        userEmail: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        isAuthenticated: false,
        isLoading: false,
        userEmail: null,
        userName: null,
        errorMsg: '',
      };

    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
    case LOGOUT_FAILURE:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: false,
        isLoading: false,
        errorMsg: action.payload.data.msg,
      };
    default:
      return state;
  }
};

export default authReducer;
