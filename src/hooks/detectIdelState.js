import { useState, useEffect, useCallback, useRef } from 'react';

const useIdle = (timeout = 10000) => {
  const [isIdle, setIsIdle] = useState(false);
  const timeoutIdRef = useRef(null);

  const handleActivity = useCallback(() => {
    setIsIdle(false);
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }
    timeoutIdRef.current = setTimeout(() => setIsIdle(true), timeout);
  }, [timeout]);

  useEffect(() => {
    const events = ['mousemove', 'mousedown', 'keypress', 'scroll', 'touchstart'];

    events.forEach(event => window.addEventListener(event, handleActivity));

    timeoutIdRef.current = setTimeout(() => setIsIdle(true), timeout);

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
      events.forEach(event => window.removeEventListener(event, handleActivity));
    };
  }, [handleActivity, timeout]);

  return isIdle;
};

export default useIdle;
