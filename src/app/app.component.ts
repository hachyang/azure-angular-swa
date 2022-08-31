import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation, OnInit,AfterViewInit,ViewChild, ElementRef, OnDestroy } from '@angular/core';
//import { Paho } from 'ng2-mqtt/mqttws31';
import { Observable, Subscription } from 'rxjs';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import uibuilder from 'node-red-contrib-uibuilder/front-end/src/uibuilderfe';
import Keyboard from "simple-keyboard";
//import { Client } from 'azure-iothub';
//import { Message } from 'azure-iot-common';
//const Client = require('azure-iothub').Client;
//const Message = require('azure-iot-common').Message;
//const connectionString = 'HostName=hachsc.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=qM/GKO2p2jmuKfTz8FyT+quDmkJ4BnT3z5PvDN27oxk=';
//const targetDevice = 'cl17sc';
//const serviceClient = Client.fromConnectionString(connectionString);
@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ["../../node_modules/simple-keyboard/build/css/index.css",
  './app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit,OnDestroy {
  // private mqttClient: Paho.MQTT.Client;
  private subscription: Subscription;
  private message: String;
  //topicname: any;
  //msg: any;
  isConnected: boolean = false;
  show: boolean = false;
  //private layout: any = 'alphanumeric';
  controlTopic:string;
  unitsGetTopic: string;
  unitsSetTopic: string;
  deviceName:string = "CL17sc";
  inputName = "topicname";
  inputs = {
    topicname: "cl17sc",
    msg: "hello!",
    units: this.deviceName
  };
  keyboard: Keyboard;
  state = {
                // Example of retrieving data from uibuilder
                feVersion: uibuilder.get('version'),
    
                socketConnectedState: false,
                serverTimeOffset: '[unknown]',
    
                msgRecvd: {},
                msgsReceived: 0,
                msgCtrl: '[Nothing]',
                msgsControl: 0,
    
                msgSent: '[Nothing]',
                msgsSent: 0,
                msgCtrlSent: '[Nothing]',
                msgsCtrlSent: 0,
            };
 

 //connectionString:string = 'HostName=hachsc.azure-devices.net;SharedAccessKeyName=service;SharedAccessKey=wuEwDqFg/2jywdNB8WVJ078Eagt9KErhqSQLmG405kw=';
 //serviceClient = Client.fromConnectionString(this.connectionString);
//serviceClient:any;
 @ViewChild('msglog', { static: true }) msglog: ElementRef;
  constructor(private _mqttService: MqttService, private http: HttpClient) {
         /** **REQUIRED** Start uibuilder comms with Node-RED @since v2.0.0-dev3
         * Pass the namespace and ioPath variables if hosting page is not in the instance root folder
         * e.g. If you get continual `uibuilderfe:ioSetup: SOCKET CONNECT ERROR` error messages.
         * e.g. uibuilder.start('/nr/uib', '/nr/uibuilder/vendor/socket.io') // change to use your paths/names
         */
        uibuilder.start();


        /** You can use the following to help trace how messages flow back and forth.
         * You can then amend this processing to suite your requirements.
         */

        //#region ---- Trace Received Messages ---- //
        // If msg changes - msg is updated when a standard msg is received from Node-RED over Socket.IO
        // newVal relates to the attribute being listened to.
        uibuilder.onChange('msg', (newVal) => {

            this.state.msgRecvd = newVal;
            this.subscribeDefaultTopic();
            console.info('[uibuilder.onChange] msg received from Node-RED server:', newVal);
        });

        // As we receive new messages, we get an updated count as well
        uibuilder.onChange('msgsReceived', (newVal) => {
            console.info('[uibuilder.onChange] Updated count of received msgs:', newVal);

            this.state.msgsReceived = newVal;
            
        });

        // If we receive a control message from Node-RED, we can get the new data here - we pass it to a Vue variable
        uibuilder.onChange('ctrlMsg', (newVal) => {
            console.info('[uibuilder.onChange:ctrlMsg] CONTROL msg received from Node-RED server:', newVal);

            this.state.msgCtrl = newVal;
        });
        // Updated count of control messages received
        uibuilder.onChange('msgsCtrl', (newVal) => {
            console.info('[uibuilder.onChange:msgsCtrl] Updated count of received CONTROL msgs:', newVal);

            this.state.msgsControl = newVal;
        });
        //#endregion ---- End of Trace Received Messages ---- //

        //#region ---- Trace Sent Messages ---- //
        // You probably only need these to help you understand the order of processing //
        // If a message is sent back to Node-RED, we can grab a copy here if we want to
        uibuilder.onChange('sentMsg', (newVal) => {
            console.info('[uibuilder.onChange:sentMsg] msg sent to Node-RED server:', newVal);

            this.state.msgSent = newVal;
        });
        // Updated count of sent messages
        uibuilder.onChange('msgsSent', (newVal) => {
            console.info('[uibuilder.onChange:msgsSent] Updated count of msgs sent:', newVal);

            this.state.msgsSent= newVal;
        });

        // If we send a control message to Node-RED, we can get a copy of it here
        uibuilder.onChange('sentCtrlMsg', (newVal) => {
            console.info('[uibuilder.onChange:sentCtrlMsg] Control message sent to Node-RED server:', newVal);

            this.state.msgCtrlSent = newVal;
        });
        // And we can get an updated count
        uibuilder.onChange('msgsSentCtrl', (newVal) => {
            console.info('[uibuilder.onChange:msgsSentCtrl] Updated count of CONTROL msgs sent:', newVal);

            this.state.msgsCtrlSent = newVal;
        });
        //#endregion ---- End of Trace Sent Messages ---- //

        // If Socket.IO connects/disconnects, we get true/false here
        uibuilder.onChange('ioConnected', (newVal) => {
            console.info('[uibuilder.onChange:ioConnected] Socket.IO Connection Status Changed to:', newVal)

            this.state.socketConnectedState = newVal;
        });
        // If Server Time Offset changes
        uibuilder.onChange('serverTimeOffset', (newVal) => {
            console.info('[uibuilder.onChange:serverTimeOffset] Offset of time between the browser and the server has changed to:', newVal)

            this.state.serverTimeOffset =newVal;
        });

        //Manually send a message back to Node-RED after 2 seconds
        window.setTimeout(function () {
            console.info('Sending a message back to Node-RED-after2sdelay');
          
            uibuilder.send({'topic': 'uibuilderfe', 'payload': 'I am a message sent from the uibuilder sensor front end'})
        }, 2000);  
       // this.serviceClient = Client.fromConnectionString(this.connectionString);
 }

  ngOnInit(): void {
    // Broker connection on startup
    // this.connectToMQTTBroker();
    //this.serviceClient = Client.fromConnectionString(this.connectionString);
  }

  ngAfterViewInit() {
    /*
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button)
    });
    */
    //this.subscribeDefaultTopic();
    this.keyboard = new Keyboard({
     //debug: true,
      inputName: this.inputName,
      onChange: (input) => this.onChange(input),
      onKeyPress: (button) => this.onKeyPress(button),
      preventMouseDownDefault: true // If you want to keep focus on input
    });

    /**
     * Since we have default values for our inputs,
     * we must sync them with simple-keyboard
     */
    this.keyboard.replaceInput(this.inputs);
  }
  onInputFocus = (event: any) => {
    this.inputName = event.target.id;
    this.show = true;
    /*
    this.keyboard = new Keyboard({
      //debug: true,
       inputName: this.inputName,
       onChange: (input) => this.onChange(input),
       onKeyPress: (button) => this.onKeyPress(button),
      //preventMouseDownDefault: true // If you want to keep focus on input
     });
     this.keyboard.replaceInput(this.inputs);
     */
    console.log("Focused input", this.inputName);

    this.keyboard.setOptions({
      inputName: event.target.id
    });
  };
  onInputBlur = (event: any) => {
    this.show = false;
  };
  setInputCaretPosition = (elem: any, pos: number) => {
    if (elem.setSelectionRange) {
      elem.focus();
      elem.setSelectionRange(pos, pos);
    }
  };

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value, event.target.id);
  };

  onChange = (input: string) => {
    this.inputs[this.inputName] = input;
    console.log("Input changed", input);

    /**
     * Synchronizing input caret position
     * This part is optional and only relevant if using the option "preventMouseDownDefault: true"
     */
    let caretPosition = this.keyboard.caretPosition;

    if (caretPosition !== null)
      this.setInputCaretPosition(
        document.querySelector(`#${this.inputName}`),
        caretPosition
      );

    console.log("caretPosition", caretPosition);
  };

  onKeyPress = (button: string) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  handleShift = () => {
    let currentLayout = this.keyboard.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  };
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  /*
  onInputFocus() {
    this.keyboard = new Keyboard({
          onChange: input => this.onChange(input),
          onKeyPress: button => this.onKeyPress(button)
        });
    }


  onChange = (input: string) => {
    this.msg = input;
    console.log("Input changed", input);
  };

  onKeyPress = (button: string) => {
    console.log("Button pressed", button);

  
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  };

  handleShift = () => {
    let currentLayout = this.keyboard.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  };
  */
  subscribeDefaultTopic() {
    interface UiBuilderMsg {
      topic: String,
      payload: String
      //_socketId: String, 
      //_msgid: String 
    }

    //this.state.msgRecvd = {topic: "hello", payload:"baba",_socketId:"kkkop",_msgid: "977yhh"};
    const msgData:UiBuilderMsg = JSON.parse(JSON.stringify(this.state.msgRecvd));
    this.deviceName = msgData.payload.toString();
    //const msgData:UiBuilderMsg = JSON.parse(uibuilder.get('msg'));
    this.inputs.topicname = '/devices/' + msgData.payload.toString() + '/reading';
    this.subscribeNewTopic();
    this.inputs.topicname = '/devices/' + msgData.payload.toString() + '/units';
    this.unitsGetTopic = this.inputs.topicname;
    this.unitsSetTopic = '/devices/' + msgData.payload.toString() + '/set_units';
    this.subscribeNewTopic();
    this.inputs.topicname = '/devices/' + msgData.payload.toString() +  '/control';
    this.controlTopic = this.inputs.topicname;
    //this.subscribeNewTopic(); 
    this._mqttService.unsafePublish(this.inputs.topicname, "GetUnits", { qos: 1, retain: true })

  }

  subscribeNewTopic(): void {
    console.log('inside subscribe new topic')
    this.subscription = this._mqttService.observe(this.inputs.topicname).subscribe((message: IMqttMessage) => {
      //this.msg = message;
      console.log('msg: ', message)
      if (message.topic == this.unitsGetTopic) {
          this.inputs.units = message.payload.toString();
      }
      else {
          this.logMsg('Message: ' + message.payload.toString() + '<br> for topic: ' + message.topic);
      }
    });
    this.logMsg('subscribed to topic: ' + this.inputs.topicname)
  }

  sendmsg(): void {
    // use unsafe publish for non-ssl websockets
    //this._mqttService.unsafePublish(this.inputs.topicname, this.inputs.msg, { qos: 1, retain: true });
    const apiUrl = '/api/HttpTrigger?Module=' + this.inputs.topicname + '&Device=' + this.inputs.units + '&Location=' + this.inputs.msg;
    
    this.logMsg(apiUrl);
    this.http.get(apiUrl).subscribe((resp: any) =>  this.logMsg(resp.text));
    this.inputs.msg = ''
  }
  changeUnits(): void {
    this.deviceName = this.inputs.units;
    // use unsafe publish for non-ssl websockets
    this._mqttService.unsafePublish(this.unitsSetTopic, this.inputs.units, { qos: 1, retain: true })
  }
  // onConnected(): void {
  //   this.logMsg('Connected to broker!');
  //   this.isConnected = true;
  // }

  logMsg(message): void {
    this.msglog.nativeElement.innerHTML = '<br><hr>' + message;
  }

  clear(): void {
    this.msglog.nativeElement.innerHTML = '';
  }
/*

 printResultFor(op): any {
  return (err, res) => {
    if (err) console.log(op + ' error: ' + err.toString());
    if (res) console.log(op + ' status: ' + res.constructor.name);
  };
}
receiveFeedback(err, receiver):void {
  receiver.on('message',  (msg) => {
    console.log('Feedback message:')
    console.log(msg.getData().toString('utf-8'));
  });
}

SendC2DMessage(): void {
    this.serviceClient.open( (err) => {
      if (err) {
        console.error('Could not connect: ' + err.message);
      } 
      else {
        console.log('Service client connected');
        this.serviceClient.getFeedbackReceiver(this.receiveFeedback);
        var payload = JSON.stringify({
          Device: this.inputs.units,
          Location: this.inputs.msg,
        });
        var message = new Message(payload);
        message.ack = 'full';
        message.messageId = "My Message ID";
        console.log('Sending message: ' + message.getData());
        this.serviceClient.send(this.inputs.units.toLowerCase(), message, this.printResultFor('send'));
      }
    });

  }
  */
}
