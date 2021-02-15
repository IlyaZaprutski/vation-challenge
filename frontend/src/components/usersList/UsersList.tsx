import { ChangeEvent, memo } from 'react';
import './UsersList.scss';

type Props = {
  users: User[];
  onSearchChange: (str: string) => void;
};

function UsersList({ users, onSearchChange }: Props) {
  const changeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="usersList">
      <div className="usersList__header">
        <h4 className="usersList__headerTitle">User Filter</h4>
        <input className="usersList__headerSearch" type="text" placeholder="Search by name" onChange={changeSearch} />
      </div>

      <ul className="usersList__list">
        {users.map(({ id, name, country, city }) => {
          return (
            <li className="usersList__user" key={id}>
              <p className="usersList__userName">{name}</p>
              <p className="usersList__userAddress">{`${country}, ${city}`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default memo(UsersList);
