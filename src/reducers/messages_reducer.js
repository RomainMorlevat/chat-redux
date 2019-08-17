const messagesReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case 'ADD_MESSAGE':
      return action.payload;
    case 'FETCH_MESSAGES':
      // to avoid emptying messages when LeWagon API return empty list
      if (action.payload.messages.length > 0) {
        return action.payload.messages;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default messagesReducer;
