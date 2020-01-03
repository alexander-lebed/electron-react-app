import React from 'react';
const styles = require('./index.scss');

type Props = {
  loading: boolean;
};

const Loading = (props: Props) =>
  props.loading && (
    <div className={styles.loading}>
      <div className={styles.loadingBlinker}>Loading...</div>
    </div>
  );

export default Loading;
