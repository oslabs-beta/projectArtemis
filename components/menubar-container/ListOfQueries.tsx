import React, { useState } from 'https://esm.sh/react';
import { Hamburger } from '../Logos.tsx';

interface Props {
  setToggle: (Boolean: boolean) => void;
  toggle: boolean;
}

// TODO fix query expanding without restrictions
// TODO fix query list formatting queries_list
const ListOfQueries = (props: Props) => {
  const { toggle, setToggle } = props;
  // items in this array will be jsx elements
  const [queries, setQueries] = useState([
    <p className='queries_list_item'>hello</p>,
    <p className='queries_list_item'>hello</p>,
    <p className='queries_list_item'>hello</p>,
  ]);

  return (
    <div className="flex-menubar container-queries">
      <div onClick={() => setToggle(!toggle)}>
        <Hamburger />
      </div>
      <div className="queries_list">{queries}</div>
    </div>
  );
};

export default ListOfQueries;
