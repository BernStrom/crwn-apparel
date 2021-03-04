import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';
import { checkUserSession } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelectors';
import { GlobalStyle } from './global.styled';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'));
const SignInAndSignUpPage = lazy(() => import('./pages/SignInAndSignUpPage/SignInAndSignUpPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage/CheckoutPage'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
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
