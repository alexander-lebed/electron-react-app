import React, { memo } from 'react';
import { FOLDER_ICON, FOLDERS } from '../../types';
import SidebarItem from '../SidebarItem';
const styles = require('./index.scss');

type Props = {
  name: FOLDERS;
  isSelected: boolean;
  onClick: Function;
};

const Folder = (props: Props) => {
  return (
    <SidebarItem
      name={props.name}
      icon={FOLDER_ICON[props.name]}
      className={props.isSelected ? styles.selected : ''}
      onClick={() => props.onClick()}
    />
  );
};

export default memo(Folder);
