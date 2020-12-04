import React from 'https://esm.sh/react';
import '../../../style/tabs.css';

interface Props {
  label: string;
  index: number;
  length: number;
  highlight: boolean | null;
  view: number;
  setView: (action: string | number) => void;
}

const Tab = (props: Props) => {
  const { label, index, length, highlight, view, setView } = props;

  return (
    <button
      className="tab"
      style={{
        // checks the a border should be present near for the highlighted tab + border logic for the rest of the tabs
        borderRightColor: highlight ? 'rgba(0, 0, 0, 0)': index === length ? 'rgba(0, 0, 0, 0)' : (view - 1) === index ? 'rgba(0, 0, 0, 0)': 'rgb(170, 170, 170)',
        backgroundColor: highlight ? 'rgb(127, 90, 240)' : undefined,
        color: highlight ? 'rgb(0, 0, 0)' : undefined,
        borderTopRightRadius: highlight ? '10px' : undefined,
        borderTopLeftRadius: highlight ? '10px' : undefined,
      }}
      onClick={() => setView(index)}
    >
      {label}
    </button>
  );
};

export default Tab;
