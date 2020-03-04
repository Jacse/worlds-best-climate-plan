import React, { useState, useEffect } from 'react';

const debounce = (ms, fn) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn(...args);
    }, ms);
  };
};

export default () => {
  const [width, setWidth] = useState(
    (typeof window !== 'undefined' && window.innerWidth) || 0
  );
  const getWidth = debounce(150, () => {
    setWidth(window.innerWidth);
  });
  useEffect(() => {
    window.addEventListener('resize', getWidth);
    return () => {
      window.removeEventListener('resize', getWidth);
    };
  });
  return {
    xl: width >= 1280,
    lg: width >= 1024,
    md: width >= 768,
    sm: width >= 640,
    xs: width >= 420,
  };
};
