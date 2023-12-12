import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class ListGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: any, ...args: any[]) {
    console.log('CLIENT CONNECTED');
  }

  handleDisconnect(client: any) {
    console.log('CLIENT DISCONNECT');
  }

  @SubscribeMessage('lists')
  onNewMessage(@MessageBody() body: any) {
    console.log('BODY: ', body);
    this.server.emit('onMessage', { msg: 'New message', content: body });
  }
}
