export function whiteNavigation(value = true) {
  return {
    type: 'WHITE_NAVIGATION',
    value,
  };
}

export function showFullscreenSubscribe(value = true) {
  return {
    type: 'SHOW_FULLSCREEN_SUBSCRIBE',
    value,
  };
}

export function subscribeFormSent(value = true) {
  return {
    type: 'SUBSCRIBE_FORM_SENT',
    value,
  };
}

export default { showFullscreenSubscribe };

