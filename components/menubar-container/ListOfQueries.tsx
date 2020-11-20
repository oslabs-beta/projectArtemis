import React, { useState } from 'https://esm.sh/react';
import { Hamburger } from '../Logos.tsx';

interface Props {
  setToggle: (Boolean: boolean) => void;
  toggle: boolean;
}

// TODO fix query expanding without restrictions
const ListOfQueries = (props: Props) => {
  const { toggle, setToggle } = props;
  // items in this array will be jsx elements
  const [queries, setQueries] = useState([
    <p>hello</p>,
    <p>hello</p>,
    <p>hello</p>,
    <p>hello</p>,
    <p>hello</p>,
    <p>hello</p>,
    <p>hello</p>,
    <p>hello</p>,
    <p>hello</p>,
    <p>hello</p>,
    <p>hello</p>,
    <p>hello</p>,
    <p>hello</p>,
    <p>hello</p>,
    <p>hello</p>,
    <p>hello</p>,
    <p>hello</p>,
    <p>hello</p>,
    <p>hello</p>,
  ]);

  return (
    <div className="sidebar container-queries">
      <div onClick={() => setToggle(!toggle)}>
        <Hamburger />
      </div>
      <div className="queries_list">{queries}</div>
    </div>
  );
};

export default ListOfQueries;
