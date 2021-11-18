import axios from "axios";
import { postConstants } from "../constants/postConstants";

export const createPost = (data) => (dispatch) => {
  dispatch({
    type: postConstants.CREATE_POST_LOADING,
  });
  const config = {
    url: "https://jozeko.herokuapp.com/post",
    method: "POST",
    data: data,
  };
  axios(config)
    .then((res) => {
      dispatch({
        type: postConstants.CREATE_POST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: postConstants.CREATE_POST_FAILURE,
        error: err,
      });
    });
};

export const getPost = () => (dispatch) => {
  dispatch({
    type: postConstants.GET_ALL_POST,
  });
  const config = {
    url: "https://jozeko.herokuapp.com/getAllPosts",
    method: "GET",
  };
  axios(config)
    .then((res) => {
      dispatch({
        type: postConstants.GET_ALL_POST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: postConstants.GET_ALL_POST_FAILURE,
        payload: err,
      });
    });
};
