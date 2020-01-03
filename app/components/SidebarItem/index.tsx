import React, { memo } from 'react';
const styles = require('./index.scss');

type Props = {
  name: string;
  icon: string;
  className?: string;
  onClick: Function;
};

const SidebarItem = (props: Props) => {
  const className = props.className
    ? `${styles.item} ${props.className}`
    : styles.item;
  return (
    <li className={className} onClick={() => props.onClick()}>
      <i className={`${props.icon} ${styles.icon}`} />
      <span>{props.name}</span>
    </li>
  );
};

export default memo(SidebarItem);
