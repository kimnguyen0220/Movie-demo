import { useState, useEffect } from "react";
export const useNavigatorStatus = () => {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    setOnline(window.navigator.onLine);
  });

  return { online };
};
