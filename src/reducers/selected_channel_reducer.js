const selectedChannel = (state, action) => {
  if (state === undefined) {
    return null;
  }

  switch (action.type) {
    case 'SET_SELECTED_CHANNEL':
      return action.payload;
    default:
      return state;
  }
};

export default selectedChannel;
