import React, { memo } from 'react';
import { EmailModel } from '../../models';
import timestampToHumanDate from '../../helpers/timestampToHumanDate';
import stringFromHtml from '../../helpers/stringFromHtml';
import styles from './index.scss';

type Props = {
  email: EmailModel;
  isSelected: boolean;
  selectEmail: Function;
};

const EmailListItem = (props: Props) => {
  const { email, isSelected } = props;
  const dateStr = timestampToHumanDate(email.timestamp);
  const bodyStr = stringFromHtml(email.body);
  return (
    <div
      className={`${styles.item} ${isSelected ? styles.selected : ''}`}
      onClick={() => props.selectEmail(email)}
    >
      <div className={styles.header}>
        <div>
          <strong>{email.from}</strong>
        </div>
        <div className={styles.date}>{dateStr}</div>
      </div>
      <div className={styles.subject}>{email.subject}</div>
      <div className={styles.body}>{bodyStr}</div>
    </div>
  );
};

export default memo(EmailListItem);
