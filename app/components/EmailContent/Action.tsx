import React from 'react';

type Props = {
  icon: string;
  title: string;
  onClick: Function;
};

const Action = (props: Props) => (
  <i
    className={props.icon}
    title={props.title}
    onClick={() => props.onClick()}
  />
);

export default Action;
