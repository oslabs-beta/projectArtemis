import React from 'https://esm.sh/react';
import { useEffect } from 'https://esm.sh/react';
import { Action } from '../typings/viewController.d.ts';

const useArrow = (setView: React.Dispatch<Action>) => {
  useEffect(() => {
    // listen for a right or left arrow keypress
    document.addEventListener('keydown', (e: any) => {
      // if right or left arrow, cycle through tabs over graph
      if (e.key === 'ArrowRight') setView({ type: 'NEXT' });
      if (e.key === 'ArrowLeft') setView({ type: 'PREV' });
    });
  }, []);
};

export default useArrow;
