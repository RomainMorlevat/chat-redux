const messagesReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case 'CREATE_MESSAGE':
      const newMessagesList = state.slice(0);
      newMessagesList.push(action.payload);
      return newMessagesList;
    case 'FETCH_MESSAGES':
      return action.payload.messages;
    default:
      return state;
  }
};

export default messagesReducer;
