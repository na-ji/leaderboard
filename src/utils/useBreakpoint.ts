import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const tailwindBreakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

const isSSR =
  typeof window === 'undefined' || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);

const useIsomorphicLayoutEffect = isSSR ? useEffect : useLayoutEffect;

// https://github.com/kodingdotninja/use-tailwind-breakpoint
export const useBreakpoint = (breakpoint: keyof typeof tailwindBreakpoints): boolean => {
  const [matchBreakpoint, setMatchBreakpoint] = useState<boolean>(false);
  const matchRef = useRef(false);

  useIsomorphicLayoutEffect(() => {
    if (isSSR || !('matchMedia' in window)) {
      return undefined;
    }

    const trackBreakpoint = () => {
      const value = tailwindBreakpoints[breakpoint] ?? '999999px';
      const query = window.matchMedia(`(min-width: ${value})`);

      if (matchRef.current !== query.matches) {
        matchRef.current = query.matches;
        setMatchBreakpoint(matchRef.current);
      }
    };

    window.addEventListener('resize', trackBreakpoint);
    trackBreakpoint();

    return () => window.removeEventListener('resize', trackBreakpoint);
  }, []);

  return matchBreakpoint;
};
