import React, { useState } from 'https://esm.sh/react';
import '../../../style/tabs.css';

interface Props {
  label: string;
  index: number;
  length: number;
}

const Tab = (props: Props) => {
  const { label, index, length } = props;
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <button
      className={`tab ${toggle ? 'colored' : 'tab'}`}
      style={
        index === length - 1 ? { borderRightColor: 'rgba(0, 0, 0, 0)' } : null
      }
      onClick={() => {
        console.log(toggle);
        setToggle(!toggle);
      }}
    >
      {label}
    </button>
  );
};

export default Tab;
