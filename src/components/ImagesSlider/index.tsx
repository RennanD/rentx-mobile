import React from 'react';

import {
  Container,
  ImageIndexses,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from './styles';

interface ImagesSliderProps {
  imagesUrl: string[];
}

export function ImagesSlider({ imagesUrl }: ImagesSliderProps): JSX.Element {
  return (
    <Container>
      <ImageIndexses>
        <ImageIndex active />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexses>

      <CarImageWrapper>
        <CarImage source={{ uri: imagesUrl[0] }} resizeMode="contain" />
      </CarImageWrapper>
    </Container>
  );
}
