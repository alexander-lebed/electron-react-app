import React, { useState, useCallback } from 'react';
import Folder from '../../components/Folder';
import { VISIBLE_FOLDERS_AMOUNT } from '../../constants';
import { FOLDERS } from '../../types';
import SidebarItem from '../SidebarItem';
const styles = require('./index.scss');

type Props = {
  folder: FOLDERS;
  selectFolder: Function;
};

const Folders = (props: Props) => {
  const [showMore, setShowMore] = useState(false);

  const folders = Object.values(FOLDERS);
  const visibleFolders = folders.slice(0, VISIBLE_FOLDERS_AMOUNT);
  const hiddenFolders = folders.slice(VISIBLE_FOLDERS_AMOUNT, folders.length);

  const clickHandlers = {};
  folders.forEach(name => {
    clickHandlers[name] = useCallback(() => props.selectFolder(name), [
      props.selectFolder
    ]);
  });

  const renderFolder = name => (
    <Folder
      key={name}
      name={name}
      isSelected={name === props.folder}
      onClick={clickHandlers[name]}
    />
  );

  return (
    <ul className={styles.folders}>
      {visibleFolders.map(name => renderFolder(name))}
      {hiddenFolders.length > 0 && (
        <>
          <SidebarItem
            name={showMore ? 'Less' : 'More'}
            icon={showMore ? 'fas fa-angle-up' : 'fas fa-angle-down'}
            onClick={() => setShowMore(!showMore)}
          />
          {showMore && hiddenFolders.map(name => renderFolder(name))}
        </>
      )}
    </ul>
  );
};

export default Folders;
