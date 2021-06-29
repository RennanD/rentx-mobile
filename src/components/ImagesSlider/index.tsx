import React from 'react';
import { FlatList } from 'react-native';

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
        {imagesUrl.map((_, index) => (
          <ImageIndex active={index === 0} />
        ))}
      </ImageIndexses>

      <FlatList
        data={imagesUrl}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarImageWrapper>
        )}
      />
    </Container>
  );
}
