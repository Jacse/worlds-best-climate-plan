import { useState, useCallback, useEffect } from 'react';

function getDimensions(node) {
  const { width, height } = node.getBoundingClientRect();
  return { width, height };
}

function useDimensions() {
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState(null);

  const ref = useCallback(node => {
    setNode(node);
  }, []);

  useEffect(() => {
    if (node) {
      window.requestAnimationFrame(() => setDimensions(getDimensions(node)));
    }
  }, [node]);

  return [ref, dimensions];
}

export default useDimensions;
