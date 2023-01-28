import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavlink = styled(NavLink)`
  color: blue;
  text-decoration: none;
  &.active {
    color: green;
  }
`;