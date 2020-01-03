import React from 'react';
const styles = require('./index.scss');

type Props = {
  children: React.ReactNode;
  onConfirm: Function;
  onCancel: Function;
};

const ConfirmationModal = (props: Props) => {
  return (
    <div className={styles.modal}>
      <section className={styles.modalMain}>
        {props.children}
        <div className={styles.btnToolbar}>
          <button onClick={() => props.onConfirm()}>Yes</button>
          <button onClick={() => props.onCancel()}>Cancel</button>
        </div>
      </section>
    </div>
  );
};

export default ConfirmationModal;
