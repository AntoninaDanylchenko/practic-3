import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from 'redux/usersSelector';
import { deleteUser } from 'redux/usersSlice';

export const HomePage = () => {
  const contacts = useSelector(selectUsers);
  const dispatch = useDispatch();

  return contacts.length === 0 ? (
    <p>No users</p>
  ) : (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Avatar</th>
          <th>Name</th>
          <th>Age</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(({ id, name, age }, index) => (
          <tr key={id}>
            <td>{index + 1}</td>
            <td>{name.charAt(0)}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>
              <button type="button" onClick={() => dispatch(deleteUser(id))}>
                Del
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
