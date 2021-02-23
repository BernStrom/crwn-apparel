import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CategoryPage/CollectionPage';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`}>
      <CollectionsOverview />
    </Route>
    <Route path={`${match.path}/:collectionId`}>
      <CollectionPage />
    </Route>
  </div>
);

export default ShopPage;
