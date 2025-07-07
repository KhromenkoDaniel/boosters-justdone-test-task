'use client';

import { useCallback, useReducer } from 'react';

import { getValidateText } from '@/utils/getValidateText';
import { Action, State } from '@/types';

const initialState: State = {
  status: 'initial',
  error: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_STATUS':
      return { ...state, status: action.payload, error: null };
    case 'SET_ERROR':
      return { ...state, status: 'error', error: action.payload };
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
}

export default function useParaphraseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClear = useCallback(() => dispatch({ type: 'CLEAR' }), []);

  const handleParaphrase = useCallback(async (text: string, setText: (text: string) => void) => {
    const validationError = getValidateText(text);
    if (validationError) {
      dispatch({ type: 'SET_ERROR', payload: validationError });
      return;
    }

    dispatch({ type: 'SET_STATUS', payload: 'loading' });

    try {
      const res = await fetch('/api/paraphrase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: `Paraphrase: ${text}` }),
      });

      const data = await res.json();

      if (!data?.result) {
        dispatch({ type: 'SET_ERROR', payload: 'Invalid server response.' });
        return;
      }

      setText(data.result);
      dispatch({ type: 'SET_STATUS', payload: 'success' });
    } catch (err) {
      dispatch({
        type: 'SET_ERROR',
        payload: err instanceof Error ? err.message : 'Unexpected error.',
      });
    }
  }, []);

  const setReadyOrInitial = useCallback((text: string) => {
    dispatch({ type: 'SET_STATUS', payload: text.trim() ? 'ready' : 'initial' });
  }, []);

  return {
    status: state.status,
    error: state.error,
    handleClear,
    handleParaphrase,
    setReadyOrInitial,
  };
}
