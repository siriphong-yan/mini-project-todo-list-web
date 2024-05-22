import { SIGNIN_SUCESS, SIGNOUT_SUCESS } from "@/constasts/appConstats";

const initialState = {
  userAuth: null
};

const UsersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SIGNIN_SUCESS :
      return state = {
        ...state,
        userAuth: action.payload
      };
    case SIGNOUT_SUCESS :
      return state = {
        ...state,
        userAuth: null
      };
    default: {
      return state;
    }
  }
};

export default UsersReducer;

