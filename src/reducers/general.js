const INITIAL_STATE = {
  message: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return Object.assign({}, state, {
        message: action.payload,
      });
    default:
      return state;
  }
};
