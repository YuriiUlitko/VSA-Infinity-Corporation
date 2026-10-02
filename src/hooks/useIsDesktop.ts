import { useEffect, useState } from 'react';

/** Desktop layout breakpoint (matches Tailwind `lg`). */
export function useIsDesktop(query = '(min-width: 1024px)') {
  const [isDesktop, setIsDesktop] = useState(() =>
  typeof window !== 'undefined' ? window.matchMedia(query).matches : true
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [query]);

  return isDesktop;
}
