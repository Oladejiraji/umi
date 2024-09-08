"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

interface ContextType {
  images: Array<{
    image: string;
    id: number;
  }>;
  addImage: (image: string) => void;
}

const ImageContext = createContext<ContextType>({
  images: [],
  addImage: () => {},
});

export const useImageContext = () => {
  return useContext(ImageContext);
};

const ImagesContextProvider = ({ children }: { children: ReactNode }) => {
  const [images, setImages] = useState<
    Array<{
      image: string;
      id: number;
    }>
  >([]);

  const addImage = (image: string) => {
    if (images.length === 0) {
      setImages((prev) => [...prev, { id: 1, image }]);
    } else {
      setImages((prev) => [
        ...prev,
        { id: images[images.length - 1].id + 1, image },
      ]);
    }
  };

  const memoizedValue = useMemo(
    () => ({
      images,
      addImage,
    }),
    [images],
  );

  return (
    <ImageContext.Provider value={memoizedValue}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImagesContextProvider;
