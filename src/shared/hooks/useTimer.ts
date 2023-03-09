import { useEffect, useRef } from 'react';

export const useTimer = (callback: () => void, time: number | null) => {
  const refCallback = useRef(callback);
  const idRef = useRef<number | null>(null);

  useEffect(() => {
    refCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (time === null) {
      if (idRef.current) {
        clearInterval(idRef.current);
      }
      return;
    }
    idRef.current = setInterval(() => refCallback.current(), time);
    return () => {
      if (idRef.current) {
        clearInterval(idRef.current);
      }
    };
  }, [time]);
};
