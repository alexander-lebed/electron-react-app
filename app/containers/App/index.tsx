import React from 'react';
import Folders from '../../containers/Folders';
import EmailList from '../../containers/EmailList';
import EmailContent from '../../containers/EmailContent';
import Loading from '../../containers/Loading';
const styles = require('./index.scss');

const App = () => {
  return (
    <>
      <Loading />
      <div className={styles.app}>
        <Folders />
        <EmailList />
        <EmailContent />
      </div>
    </>
  );
};

export default App;
