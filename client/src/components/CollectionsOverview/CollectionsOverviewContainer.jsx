import { compose } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { selectIsCollectionFetching } from '../../redux/shop/shopSelectors';
import WithSpinner from '../WithSpinner/WithSpinner';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = (state) => ({
  isLoading: selectIsCollectionFetching(state),
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
