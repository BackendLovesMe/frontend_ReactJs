import { useEffect, useState } from "react";

console.log("✅ GettingOnline Status");

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
      console.log("🚨 I am in Windows eventlistener online one");
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
