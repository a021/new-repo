import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
       .online {
            color: white;
       }
  `, 'node_modules/bootstrap/dist/css/bootstrap.min.css'],
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverID = 10;
  serverStatus = 'offline';
  serverName = 'testserver';
  isServerCreated = false;
  servers = ['server 1', 'server 2'];
  constructor() {
    setTimeout(()=>{
    this.allowNewServer = true;
  },2000);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }
    onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.isServerCreated = true;
    }
   onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
   }

   getColor() {
   console.log(this.serverStatus);
    return this.serverStatus === 'online' ? 'green' : 'red';

   }
}
