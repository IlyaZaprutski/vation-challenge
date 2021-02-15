import React, { useCallback, useState, useMemo } from 'react';

import useFetch from 'hooks/useFetch';
import useDebounce from 'hooks/useDebounce';
import UsersList from 'components/usersList';
import Spinner from 'components/spinner';
import ErrorBoundary from 'components/errorBoundary';

import './App.scss';

function App() {
  const [filter, setFilterStr] = useState<string>('');

  const { status, data, error } = useFetch<User[]>(`${process.env.REACT_APP_API_URL}/users`);

  const debouncedFilter = useDebounce<string>(filter);

  const changeSearchStr = useCallback((str: string) => {
    setFilterStr(str.toLocaleLowerCase());
  }, []);

  const filteredUsers = useMemo(() => {
    if (!data) {
      return [];
    }

    return data.filter(({ name }) => {
      return name.toLocaleLowerCase().includes(debouncedFilter);
    });
  }, [data, debouncedFilter]);

  return (
    <div className="app">
      <div className="app__container">
        <ErrorBoundary>
          {status === 'fetching' && (
            <div className="app__spinnerContainer">
              <Spinner />
            </div>
          )}
          {status === 'error' && <p className="app__errorMsg">{error?.message || 'something went wrong'}</p>}

          {status === 'fetched' && (
            <div className="app__usersListContainer">
              <UsersList users={filteredUsers} onSearchChange={changeSearchStr} />
            </div>
          )}
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
