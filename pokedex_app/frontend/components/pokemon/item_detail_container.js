import {connect} from 'react-redux';
import ItemDetail from './item_detail';

export const mapStateToProps = state => {
  return {
    items: state.entities.items
  };
};

export const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
