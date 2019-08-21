const currentUserNameReducer = (state, action) => {
  if (state === undefined) {
    return `john_doe-${Math.floor(Math.random()*100)}`;
  }

  switch (action.type) {
    case 'SET_CURRENT_USER_NAME':
      return action.payload;
    default:
      return state;
  }
};

export default currentUserNameReducer;
