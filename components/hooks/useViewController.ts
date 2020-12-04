import { useReducer } from 'https://esm.sh/react';
import { InitialState, Action } from '../typings/viewController.d.ts';

const reducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case 'NEXT': {
      if (state >= 3) {
        return 0;
      } else {
        return state + 1;
      }
    }
    case 'PREV': {
      if (state <= 0) {
        return 3;
      } else {
        return state - 1;
      }
    }
    case 'SET': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const initialState: InitialState = 0;

const useViewController = () => {
  const [view, viewDispatch] = useReducer(reducer, initialState);

  return [view, viewDispatch] as const;
};

export default useViewController;
