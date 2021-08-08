import { 
     REGISTER_LOADING, 
     REGISTER_SUCCESS, 
     REGISTER_FAIL, 
     CLEAR_AUTH_STATE, 
     LOGIN_LOADING, 
     LOGIN_SUCCESS,
     LOGIN_FAIL,
     LOGOUT_USER
} from './../../constants/actionTypes/index';



const auth = (state, {type, payload}) => {
     switch (type) {
          case LOGIN_LOADING:
          case REGISTER_LOADING:
               return {
                    ...state,
                    loading: true
               };
          case REGISTER_SUCCESS:
               return {
                    ...state,
                    loading: false,
                    data: payload
               };
          case LOGIN_SUCCESS:
               return {
                    ...state,
                    loading: false,
                    data: payload,
                    isLoggedIn: true
               };

          case LOGOUT_USER:
               return {
                    ...state,
                    loading: false,
                    data: null,
                    isLoggedIn: false
               };

          case REGISTER_FAIL:
          case LOGIN_FAIL:
               return {
                    ...state,
                    loading: false,
                    error: payload
               };
          case CLEAR_AUTH_STATE:
               return {
                    ...state,
                    loading: false,
                    data: null,
                    error: null
               };
     
          default:
               return state;
     }
};

export default auth;