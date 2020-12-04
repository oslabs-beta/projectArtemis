import { useReducer } from 'https://esm.sh/react';

interface InitialState {
  view: number;
}

type Action =
  | { type: 'NEXT' }
  | { type: 'PREV' }
  | { type: 'SET'; payload: number };

const reducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case 'NEXT': {
      if (state.view >= 3) {
        return { view: 0 };
      } else {
        return { view: state.view + 1 };
      }
    }
    case 'PREV': {
      if (state.view <= 0) {
        return { view: 3 };
      } else {
        return { view: state.view - 1 };
      }
    }
    case 'SET': {
      return {
        view: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const initialState: InitialState = { view: 0 };

const useViewController = () => {
  const [view, viewDispatch] = useReducer(reducer, initialState);

  return [view, viewDispatch] as const;
};

export default useViewController;
