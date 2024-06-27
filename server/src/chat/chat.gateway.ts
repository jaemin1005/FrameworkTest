import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:3000',
    credentials: true,
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  private activeUsers: Set<string> = new Set();

  afterInit(server: Server): void {
    console.log('WebSocket server initialized' + server._checkNamespace);
  }

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
    this.activeUsers.add(client.id);
    this.server.emit('activeUsers', Array.from(this.activeUsers));
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    this.activeUsers.delete(client.id);
    this.server.emit('activeUsers', Array.from(this.activeUsers));
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string): string {
    // 모든 클라이언트에게 메시지 전송
    this.server.emit('message', data);
    return data;
  }
}
