import React, { useState } from 'https://esm.sh/react';
import { Hamburger } from '../Logos.tsx';

interface Props {
  setState: (Boolean: boolean) => void;
  state: boolean;
}

const HamburgerDrop = (props: Props) => {
  // items in this array will be jsx elements
  const [queries, setQueries] = useState([<p>hello</p>, <p>hello</p>, <p>hello</p>, <p>hello</p>]);
  return (
    <div>
      <div onClick={() => props.setState(!props.state)}>
        <Hamburger />
      </div>
      <div className="hamburgerDrop">{queries}</div>
    </div>
  );
};

export default HamburgerDrop;
