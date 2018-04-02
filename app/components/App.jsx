import React from 'react';

import { Route, Switch } from 'react-router';

import styled from 'styled-components';
import { mobile, desktop } from 'lib/theme';

import GlobalStyle from 'components/lib/GlobalStyle';
import MetaTags from 'components/lib/MetaTags';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Promo from 'components/Promo';
import PreorderButton from 'components/Header/PreorderButton';
import FullscreenPreorderForm from 'components/preorder/FullscreenPreorderForm';
import About from 'components/Promo/About';
import Order from 'components/Promo/Order';
import Products from 'components/Promo/Products';
import Done from 'components/Promo/Done';
import Privacy from 'components/Promo/Privacy';
import Terms from 'components/Promo/Terms';
import Reservation from 'components/Promo/Reservation';
// import PrivacyPage from 'components/PrivacyPage/PrivacyPage';

const StyledPreorderButton = styled(PreorderButton)`
  ${desktop(`
    display: none;
    
  `)}
  ${mobile(`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 200;
  `)}
`;

const App = () => (
  <GlobalStyle>
    <MetaTags />
    <Header />
    <StyledPreorderButton />
    <Switch>
      <Route exact path="/" component={Promo} />
      <Route path="/about" component={About} />
      <Route path="/ultimate" component={Order} />
      <Route path="/plus" component={Order} />
      <Route path="/basic" component={Order} />
      <Route path="/products" component={Products} />
      <Route path="/done" component={Done} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/reservation" component={Reservation} />
    </Switch>
    <Footer />
    <FullscreenPreorderForm />
  </GlobalStyle>
);

export default App;
