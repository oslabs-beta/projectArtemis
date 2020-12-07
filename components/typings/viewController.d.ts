export type InitialState = number;

export type Action =
  | { type: 'NEXT' }
  | { type: 'PREV' }
  | { type: 'SET'; payload: number };

