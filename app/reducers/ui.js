export default (state = {}, action) => {
  switch (action.type) {
    case 'WHITE_NAVIGATION':
      return Object.assign({}, state, { whiteNavigation: action.value });
    case 'SHOW_FULLSCREEN_SUBSCRIBE':
      return Object.assign({}, state, {
        showFullscreenSubscribe: action.value,
        subscribeFormSent: false,
      });
    case 'SUBSCRIBE_FORM_SENT':
      return Object.assign({}, state, { subscribeFormSent: action.value });
    default:
      return state;
  }
};

