// src/pages/index.tsx
import React from 'react';
import { text } from '../styles/styles.css';
import { GetStaticProps } from 'next';
import io from 'socket.io-client';

const socket = io('http://localhost:3010', {
  withCredentials: true
});


interface HomePageProps {
  nextMessage: string;
}

// React.FC는 타입스크립트에서 React 함수형 컴포넌트를 정의하는 데 사용됩니다.
const HomePage: React.FC<HomePageProps> = ({ nextMessage }) => {

  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState<string[]>([]);

  React.useEffect(() => {
    // 'message' 이벤트를 수신하여 messages 상태를 업데이트
    socket.on('message', (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      socket.off('message');
    };
  }, []);

  // 메시지를 서버로 전송하는 함수
  const sendMessage = () => {
    socket.emit('message', message);
    setMessage('');
  };

  return (
    <div>
      <h1 className={text}>{nextMessage}</h1>
      <div>
        <h1>WebSocket Chat</h1>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3010/book');
  const data = await res.text();  // if the response is a plain text, use res.text()

  console.log(data);

  return {
    props: {
      nextMessage: data,
    },
  };
}

// HomePage 컴포넌트를 기본 익스포트로 설정하여 이 파일을 페이지로 사용합니다.
export default HomePage;