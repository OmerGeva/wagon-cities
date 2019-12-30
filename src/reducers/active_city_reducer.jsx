const activeCityReducer = (state, action) => {
  if (state === undefined) {
    return 'null';
  }

  if (action.type === "SET_ACTIVE_CITY") {
    return action.payload;
  }
  return state;
};

export default activeCityReducer;
