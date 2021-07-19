import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ImageMotion = styled(motion.img)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 50%;
`;

export const ButtonMotion = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  border: none;
  margin: 0 3rem;
  svg {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
