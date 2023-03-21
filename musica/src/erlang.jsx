import { useState, useEffect } from "react";

const MyComponent = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch("/api/message");
      const data = await response.json();
      setMessage(data.message);
    };
    fetchMessage();
  }, []);

  return <div>{message}</div>;
};

export default MyComponent;
