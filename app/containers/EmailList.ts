import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import EmailList from '../components/EmailList';
import EmailsActions from '../actions/emails';
import { RootState } from '../reducers';

function mapStateToProps(state: RootState) {
  return {
    selectedEmail: state.emails.email
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(EmailsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailList);
