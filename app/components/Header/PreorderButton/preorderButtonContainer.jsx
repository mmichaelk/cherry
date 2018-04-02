import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { showFullscreenSubscribe } from 'actions/ui';

const preorderButtonContainer = (PreorderButton) => {
  class PreorderButtonContainer extends React.Component {
    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    }

    onClick() {
      this.props.showFullscreenSubscribe(true);
    }

    render() {
      return (
        <PreorderButton {...this.props} onClick={this.onClick} />
      );
    }
  }

  PreorderButtonContainer.propTypes = {
    showFullscreenSubscribe: PropTypes.func,
  };

  return PreorderButtonContainer;
};

const mapStateToProps = (state) => {
  let visibleOrder = false;
  const pathname = state.router.location.pathname;

  if (
    pathname === '/plus' ||
    pathname === '/ultimate' ||
    pathname === '/basic' ||
    pathname === '/products' ||
    pathname === '/done' ||
    pathname === '/reservation' ||
    pathname === '/privacypolicy' ||
    pathname === '/terms'
  ) { visibleOrder = true; }

 return {
   hidden: !state.ui.whiteNavigation && state.router.location.pathname !== '/about',
   visibleOrder
 }
};

export default compose(
  connect(mapStateToProps, { showFullscreenSubscribe }),
  preorderButtonContainer,
);
