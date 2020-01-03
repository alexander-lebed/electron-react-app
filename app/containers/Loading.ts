import { connect } from 'react-redux';
import Loading from '../components/Loading';
import { RootState } from '../reducers';

function mapStateToProps(state: RootState) {
  return {
    loading: state.app.loading
  };
}

export default connect(mapStateToProps, null)(Loading);
