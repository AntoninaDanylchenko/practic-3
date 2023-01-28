import { StyledNavlink } from './AddBar.styled';

export const AddBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledNavlink to="/">Home</StyledNavlink>
        </li>
        <li>
          <StyledNavlink to="/add">Add contact</StyledNavlink>
        </li>
      </ul>
    </nav>
  );
};
