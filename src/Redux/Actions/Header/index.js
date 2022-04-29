import React from "react";

export const fetchSearchData = () => {
  return async () => {
    // Initiate loading state
    dispatch({
      type: FETCH_SEARCH_DATA,
    });
    try {
      // Call the API
      const result = await fetchSearchData();

      // Update payload in reducer on success
      dispatch({
        type: FETCH_SEARCH_SUCCESS,
        payload: result,
      });
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: FETCH_DATA_ERROR,
        error: err,
      });
    }
  };
};
