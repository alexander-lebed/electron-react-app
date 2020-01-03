import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import EmailContent from '../components/EmailContent';
import EmailsActions from '../actions/emails';
import { RootState } from '../reducers';

function mapStateToProps(state: RootState) {
  return {
    email: state.emails.email
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(EmailsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailContent);
