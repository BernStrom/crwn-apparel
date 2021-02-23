import React from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { selectCollections } from '../../redux/shop/shopSelectors';
import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  collections: selectCollections(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
