import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUsers } from 'redux/usersSlice';

export const AddContactPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = { id: nanoid(), name, age };
    dispatch(addUsers(newUser));
    reset();
  };

  const reset = () => {
    setAge('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          placeholder="Name"
          value={name}
          type="text"
          name="name"
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Age
        <input
          placeholder="Age"
          value={age}
          name="age"
          onChange={e => setAge(e.target.value)}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
