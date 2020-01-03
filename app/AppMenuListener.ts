import { ipcRenderer } from 'electron';
import { removeEmail, updateEmail } from './actions/emails';

class AppMenuListener {
  constructor(store) {
    ipcRenderer.on('delete-email', () => {
      const { email } = store.getState().emails;
      if (email) {
        store.dispatch(removeEmail(email.id));
      } else {
        alert('Select email to apply an action.');
      }
    });

    ipcRenderer.on('toggle-read-email', () => {
      const { email } = store.getState().emails;
      if (email) {
        store.dispatch(
          updateEmail(email.id, {
            ...email,
            unread: !email.unread
          })
        );
      } else {
        alert('Select email to apply an action.');
      }
    });
  }
}

export default AppMenuListener;
