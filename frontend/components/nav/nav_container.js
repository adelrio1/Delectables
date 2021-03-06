import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import Nav from './nav';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: guest => dispatch(login(guest)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
