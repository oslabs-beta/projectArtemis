import React from 'https://esm.sh/react';
import '../../../style/tabs.css';

interface Props {
  label: string;
  index: number;
  length: number;
  highlight: object | null;
  updateViewIndex: (action: string | number) => void;
}

const Tab = (props: Props) => {
  const { label, index, length, highlight, updateViewIndex } = props;

  // // declare a function that will take in a number (an index)
  // const borderRightColorTabStyle = (index: number) => {
  //   const currentTab: HTMLElement = document.getElementById(`${index}`);
  //   // check if index is last, return no color
  //   if (index === length - 1) return 'rgb(0, 0, 0, 0)';
  //   // else if current tab has a .style.backgroundColor that is rgba(127, 90, 240)
  //   if (currentTab && currentTab.style.backgroundColor === 'rgb(127, 90, 240)') {
  //     console.log(currentTab.id);
  //     const prevTab: HTMLElement = document.getElementById(`${index - 1}`);
  //     // erase the style of the previous tab border color
  //     if (prevTab) prevTab.style.borderRightColor = 'rgb(50, 112, 198)';
  //     // return no color
  //     return 'rgb(100, 100, 100)';
  //   }
  //   // else return rgba(128, 128, 128)
  //   else return 'rgb(170, 170, 170)';
  // };
  console.log(index, length - 1)
  console.log((index === 0 || index === length - 1) || (index % 2 === 0))

  return (
    <button
      className="tab"
      style={{
        borderRightColor: (index === 0 || index === length - 1) || (index % 2 === 0) ? 'rgba(0, 0, 0, 0)' : 'rgb(190, 190, 190)',
        borderLeftColor: (index === 0 || index === length - 1) || (index % 2 === 0) ? 'rgba(0, 0, 0, 0)' : 'rgb(140, 140, 140)',
        backgroundColor: highlight ? 'rgb(127, 90, 240)' : null,
        color: highlight ? 'rgb(0, 0, 0)' : null,
        borderTopRightRadius: highlight ? '10px' : null,
        borderTopLeftRadius: highlight ? '10px' : null,
      }}
      onClick={() => updateViewIndex(index)}
    >
      {label}
    </button>
  );
};

export default Tab;
