export function saveSearchResults(results) {
  return async (dispatch) => {
    dispatch({
      type: "SAVE_SEARCH_RESULTS",
      payload: results,
    });
  };
}
