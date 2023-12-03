import styled from "styled-components";
import { BsFileImage } from 'react-icons/bs';

export const ListItem = styled.li`
  padding: 8px;`

export const MovieName = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: navy;

  &:hover,
  &:focus {
    text-decoration: underline
  }
`;
export const MovieImg = styled.img`
  display: block;
  height: 330px;
  max-width: 100%;
  margin-bottom: 5px;
  filter: grayscale(0.4);

  transition: all 200ms ease-in-out;
`;
export const ImageTemplate = styled(BsFileImage)`
  width: 200px;
  height: 330px;
`;

