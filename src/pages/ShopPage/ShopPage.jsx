import React from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import { selectCollections } from '../../redux/shop/shopSelectors';

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  collections: selectCollections(state),
});

export default connect(mapStateToProps)(ShopPage);
