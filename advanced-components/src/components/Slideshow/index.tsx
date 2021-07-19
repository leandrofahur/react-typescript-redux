import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { images } from '../../images';

import { ImageMotion, ButtonMotion, Container } from './styles';

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export const Slideshow: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: any) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <AnimatePresence initial={false} custom={direction}>
      <Container>
        <ButtonMotion
          whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)}
        >
          <BiChevronLeft />
        </ButtonMotion>
        <ImageMotion
          key={page}
          src={images[imageIndex]}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 300 },
            opacity: { duration: 1 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
        />
        <ButtonMotion
          whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
        >
          <BiChevronRight />
        </ButtonMotion>
      </Container>
    </AnimatePresence>
  );
};
