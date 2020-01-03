import React, { memo } from 'react';
import EmailListItem from '../../containers/EmailListItem';
import { useEmails } from '../../helpers/hooks/emails';
import { EmailModel } from '../../models';
const styles = require('./index.scss');

type Props = {
  selectedEmail: EmailModel;
};

const EmailList = (props: Props) => {
  const emails = useEmails();
  return (
    <div className={styles.emails}>
      {emails.map(item => (
        <EmailListItem
          key={item.id}
          isSelected={
            props.selectedEmail ? props.selectedEmail.id === item.id : false
          }
          email={item}
        />
      ))}
    </div>
  );
};

export default memo(EmailList);
