import { useEffect } from 'https://esm.sh/react';

const useArrow = () => {
  // on document mount,
  useEffect(() => {
    // listen for a right or left arrow keypress
    document.addEventListener('keydown', (e) => {
      // if right or left arrow, cycle through tabs over graph
      // side note: buttons are invisible on the DOM
      if (e.key === 'ArrowRight') document.querySelector('#increment').click();
      if (e.key === 'ArrowLeft') document.querySelector('#decrement').click();
    });
  }, []);
};

export default useArrow;
