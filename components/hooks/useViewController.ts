import { useReducer } from 'https://esm.sh/react';
import { InitialState, Action } from '../typings/viewController.d.ts';

const startView: number = 0;
const maxViews: number = 4;

const reducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case 'NEXT': {
      if (state >= maxViews) {
        return startView;
      } else {
        return state + 1;
      }
    }
    case 'PREV': {
      if (state <= 0) {
        return maxViews;
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
