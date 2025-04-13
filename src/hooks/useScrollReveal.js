import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = (selectors, options = {}) => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 100,
      reset: true,
      ...options,// extra options দিলে সেগুলোও যোগ হয়
    });

    selectors.forEach((selector) => {
      sr.reveal(selector.name, selector.options || {});
    });
  }, [selectors, options]);
};

export default useScrollReveal;
