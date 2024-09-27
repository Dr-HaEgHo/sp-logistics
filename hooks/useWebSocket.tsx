// hooks/useWebSocket.ts
import { useEffect, useRef, useState } from 'react';

const useWebSocket = (url: string) => {
  const [chats, setChats] = useState<string[]>([]);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(url);
    socketRef.current = socket;

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      setChats((prevMessages) => [...prevMessages, event.data]);
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      socket.close();
    };
  }, [url]);

  const sendChat = (message: string) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(message);
    } else {
      console.error('WebSocket connection is not open');
    }
  };

  return { chats, sendChat };
};

export default useWebSocket;
