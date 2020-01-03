import React from 'react';
import { remote } from 'electron';
import timestampToHumanDate from '../../helpers/timestampToHumanDate';
import Action from './Action';
import { EmailModel } from '../../models';
const styles = require('./index.scss');

type Props = {
  email: EmailModel | null;
  updateEmail: (emailId: number, email: EmailModel) => void;
  removeEmail: Function;
};

const EmailContent = (props: Props) => {
  const { email } = props;

  if (!email) {
    return null;
  }

  const toggleRead = () => {
    props.updateEmail(email.id, {
      ...email,
      unread: !email.unread
    });
  };

  const showDeleteConfirmation = async () => {
    const { response } = await remote.dialog.showMessageBox({
      message: 'Move it to trash?',
      buttons: ['&Yes', '&Cancel']
    });
    const confirmed = response === 0;
    if (confirmed) {
      props.removeEmail(email.id);
    }
  };

  const ActionToolbar = () => (
    <div className={styles.actions}>
      <Action
        icon={`fas fa-envelope${email.unread ? '-open' : ''}`}
        title={email.unread ? 'Mark as read' : 'Mark as unread'}
        onClick={toggleRead}
      />
      {!email.deleted && (
        <Action
          icon={`fas fa-trash`}
          title="Delete email"
          onClick={() => showDeleteConfirmation()}
        />
      )}
    </div>
  );

  const dateStr = timestampToHumanDate(email.timestamp);
  return (
    <div className={styles.content}>
      <ActionToolbar />
      <h3>
        <strong>{email.subject}</strong>
      </h3>
      <section className={styles.highlight}>
        <div className={styles.header}>
          <div className={styles.split}>
            <div>From: {email.from}</div>
            <div className={styles.date}>{dateStr}</div>
          </div>
          <div>To: {email.to}</div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: email.body }} />
      </section>
    </div>
  );
};

export default EmailContent;
