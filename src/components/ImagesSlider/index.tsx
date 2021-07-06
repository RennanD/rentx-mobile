import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
import { Bullet } from '../Bullet';

import { Container, ImageIndexses, CarImageWrapper, CarImage } from './styles';

interface ImagesSliderProps {
  imagesUrl: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImagesSlider({ imagesUrl }: ImagesSliderProps): JSX.Element {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const imageIndexChange = useRef((info: ChangeImageProps) => {
    setActiveImageIndex(info.viewableItems[0].index!);
  });

  return (
    <Container>
      <ImageIndexses>
        {imagesUrl.map((_, index) => (
          <Bullet key={String(index)} active={index === activeImageIndex} />
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
        onViewableItemsChanged={imageIndexChange.current}
      />
    </Container>
  );
}
