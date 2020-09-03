import styled, { css } from 'styled-components/native';

interface ContainerProps {
  selected?: boolean;
  disabled?: boolean;
  available?: boolean;
}

export const Container = styled.Text<ContainerProps>`
  height: 36px;
  line-height: 36px;
  border-radius: 10px;
  margin: 4px;

  flex: 1;
  text-align: center;

  font-family: 'RobotoSlab-Medium';
  color: #f4ede8;
  font-size: 16px;

  ${props =>
    props.available &&
    css`
      background: #3e3b47;
    `}

  ${props =>
    props.disabled &&
    css`
      background: transparent;
    `}

  ${props =>
    props.selected &&
    css`
      background: #ff9000;
      color: #232129;
    `}

  ${props =>
    props.selected &&
    !props.available &&
    css`
      background: #c53030;
    `}
`;
