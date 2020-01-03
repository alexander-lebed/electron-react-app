import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Folders from '../components/Folders';
import EmailsActions from '../actions/emails';
import { RootState } from '../reducers';

function mapStateToProps(state: RootState) {
  return {
    folder: state.emails.folder
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(EmailsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Folders);
