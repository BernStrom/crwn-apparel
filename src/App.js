import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import { checkUserSession } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelectors';
import './App.css';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
        <Route exact path="/signin">
          {currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />}
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
