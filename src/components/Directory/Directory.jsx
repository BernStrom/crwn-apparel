import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../MenuItem/MenuItem';
import { selectDirectorySections } from '../../redux/directory/directorySelectors';
import { DirectoryMenuContainer } from './Directory.styled';

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = (state) => ({
  sections: selectDirectorySections(state),
});

export default connect(mapStateToProps)(Directory);
