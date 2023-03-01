import React from 'react';

type Props = {
  banner?: JSX.Element;
  buttons?: React.ReactElement;
};

export const ContentHeader: React.FC<Props> = ({ banner, buttons }) => {
  const TopButtons = buttons;
  return (
    <div>
      <div>{buttons}</div>
      <div>{banner}</div>
    </div>
  );
};
