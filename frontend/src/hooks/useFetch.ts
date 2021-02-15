import { useReducer, useEffect } from 'react';

type Action<T> = { type: 'request' } | { type: 'success'; payload: T } | { type: 'failure'; payload: Error };

type State<T> = {
  status: 'init' | 'fetching' | 'error' | 'fetched';
  data?: T;
  error?: Error;
};

function useFetch<T>(url: string, options?: RequestInit): State<T> {
  const initialState: State<T> = {
    status: 'init',
    error: undefined,
    data: undefined,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'request':
        return { ...initialState, status: 'fetching' };
      case 'success':
        return { ...initialState, status: 'fetched', data: action.payload };
      case 'failure':
        return { ...initialState, status: 'error', error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      dispatch({ type: 'request' });

      try {
        const res = await fetch(url, options);
        const data = await res.json();

        if (!signal.aborted) {
          dispatch({ type: 'success', payload: data });
        }
      } catch (error) {
        if (!signal.aborted) {
          dispatch({ type: 'failure', payload: error });
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url, options]);

  return state;
}

export default useFetch;
