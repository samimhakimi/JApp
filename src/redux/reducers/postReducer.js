import { postConstants } from "../constants/postConstants";
const initialState = {
  isLoading: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case postConstants.CREATE_POST_LOADING:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export default postReducer;
