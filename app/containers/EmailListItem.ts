import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import EmailListItem from '../components/EmailListItem';
import EmailsActions from '../actions/emails';

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(EmailsActions, dispatch);
}

export default connect(null, mapDispatchToProps)(EmailListItem);
