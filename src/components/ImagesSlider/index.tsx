import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
import { Photo } from '../../dtos/CarDTO';
import { Bullet } from '../Bullet';

import { Container, ImageIndexses, CarImageWrapper, CarImage } from './styles';

interface ImagesSliderProps {
  images: Photo[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImagesSlider({ images }: ImagesSliderProps): JSX.Element {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const imageIndexChange = useRef((info: ChangeImageProps) => {
    setActiveImageIndex(info.viewableItems[0].index!);
  });

  return (
    <Container>
      <ImageIndexses>
        {images.map((item, index) => (
          <Bullet key={String(item.id)} active={index === activeImageIndex} />
        ))}
      </ImageIndexses>

      <FlatList
        data={images}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item.photo }} resizeMode="contain" />
          </CarImageWrapper>
        )}
        onViewableItemsChanged={imageIndexChange.current}
      />
    </Container>
  );
}
