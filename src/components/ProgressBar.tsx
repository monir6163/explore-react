import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import LoadingBar, { type LoadingBarRef } from "react-top-loading-bar";

export default function ProgressBar() {
  const ref = useRef<LoadingBarRef>(null);
  const location = useLocation();

  useEffect(() => {
    ref.current?.continuousStart();
    const timer = setTimeout(() => {
      ref.current?.complete();
    }, 1);
    return () => clearTimeout(timer);
  }, [location.pathname]);
  return <LoadingBar ref={ref} color="#f11946" height={2} shadow={true} />;
}
