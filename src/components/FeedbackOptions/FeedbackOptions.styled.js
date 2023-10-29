import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const BtnList = styled.button`
  width: 80px;
  height: 40px;
  font-weight: 500;
  font-size: 18px;
  border: transparent;
  border-radius: 2px;
  box-shadow: 1px 1px 2px #201e20;
`;

export const ListItem = styled.li`
  :hover {
    background-color: grey;
  }
`;
