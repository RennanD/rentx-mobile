import styled from 'styled-components/native';

type BullelItem = {
  active: boolean;
};

export const Container = styled.View<BullelItem>`
  width: 6px;
  height: 6px;
  border-radius: 3px;

  margin-left: 5px;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};
`;
