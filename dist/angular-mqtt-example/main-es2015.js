(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Sensor Setup: {{deviceName}}</h1>\r\n\r\n<table>\r\n    <tr>\r\n        <td>ioT Device: </td>\r\n        <td>\r\n\r\n                <input\r\n                id=\"topicname\"\r\n                [(ngModel)]=\"inputs.topicname\"\r\n                class=\"input\"\r\n                placeholder=\"Topic Name\"\r\n                (focus)=\"onInputFocus($event)\"\r\n                (change)=\"onInputChange($event)\"\r\n                (blur)=\"onInputBlur($event)\"\r\n              />\r\n\r\n        </td>\r\n        <td><button mat-raised-button color=\"primary\" type=\"button\" (click)=\"subscribeNewTopic()\">Subscribe Topic</button></td>\r\n    </tr>\r\n    <tr>\r\n        <td>Location: </td>\r\n        <td>\r\n\r\n                <input\r\n                id=\"msg\"\r\n                [(ngModel)]=\"inputs.msg\"\r\n                class=\"input\"\r\n                placeholder=\"Msg Sent\"\r\n                (focus)=\"onInputFocus($event)\"\r\n                (change)=\"onInputChange($event)\"\r\n                (blur)=\"onInputBlur($event)\"\r\n              />\r\n\r\n        </td>\r\n        <td><button mat-raised-button color=\"accent\" type=\"button\" (click)=\"sendmsg()\">Send</button></td>\r\n    </tr>\r\n    <tr>\r\n        <td>Device ID: </td>\r\n        <td>\r\n\r\n                <input\r\n                id=\"units\"\r\n                [(ngModel)]=\"inputs.units\"\r\n                class=\"input\"\r\n                placeholder=\"Change Units\"\r\n                (focus)=\"onInputFocus($event)\"\r\n                (change)=\"onInputChange($event)\"\r\n                (blur)=\"onInputBlur($event)\"\r\n              />\r\n\r\n        </td>\r\n        <td><button mat-fab color=\"accent\" type=\"button\" (click)=\"changeUnits()\">Change</button></td>\r\n    </tr>\r\n    <tr>\r\n        <td></td>\r\n        <td>&nbsp;&nbsp;<button mat-raised-button color=\"warn\" type=\"button\" (click)=\"clear()\">Clear Log</button></td>\r\n        <td></td>\r\n    </tr>\r\n</table>\r\n<div style=\"text-align:center\" [ngClass]=\"!show ? 'hide-keyboard' : ''\">\r\n<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"simple-keyboard\"></div>\r\n</div>\r\n<mat-form-field appearance=\"fill\">\r\n  <mat-label>Choose a date</mat-label>\r\n<!-- #docregion toggle -->\r\n  <input matInput [matDatepicker]=\"picker\">\r\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker></mat-datepicker>\r\n<!-- #enddocregion toggle -->\r\n</mat-form-field>\r\n<div><a href=\"http://192.168.0.43:1880/ui\"><h1>Go Home</h1></a>\r\n</div>\r\n           <div>\r\n\r\n                <div className=\"d1\">\r\n                    <div>Last msg Received:</div>\r\n                    <div> {{ state.msgRecvd | json }} </div>\r\n                    <div>Number of Msgs Received: {{ state.msgsReceived  }} </div>\r\n                </div>\r\n\r\n                <div className=\"d1\">\r\n                    <div>last Ctl Msg Received:</div>\r\n                    <div> {{state.msgCtrl | json }} </div>\r\n                    <div>Number of Control Msgs Received: {{ state.msgsControl }}</div>\r\n                </div>\r\n\r\n                <div className=\"d1\">\r\n                    <div>last Msg Sent</div>\r\n                    <div> {{ state.msgSent | json }} </div>\r\n                    <div>Number of msgs Sent: {{ state.msgsSent }}</div>\r\n                </div>\r\n\r\n                <div className=\"d1\">\r\n                    <div>Socket Connected?: {{ state.socketConnectedState }}</div>\r\n                    <div>uibuilderfe Version: {{ state.feVersion }}</div>\r\n                    <div>Server Time Offset from browser: {{ state.serverTimeOffset }}</div>\r\n                </div>\r\n\r\n</div>\r\n\r\n<br /><br />\r\n<div #msglog>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    text-align: center;\r\n  }\r\n  \r\n  input {\r\n    width: 100%;\r\n    height: 50px;\r\n    padding: 20px;\r\n    font-size: 20px;\r\n    border: none;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  .simple-keyboard {\r\n    max-width: 850px;\r\n  }\r\n  \r\n  .hide-keyboard {\r\n    overflow: hidden;\r\n    height: 0;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixTQUFTO0VBQ1giLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgLnNpbXBsZS1rZXlib2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDg1MHB4O1xyXG4gIH1cclxuICAuaGlkZS1rZXlib2FyZCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_mqtt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-mqtt */ "./node_modules/ngx-mqtt/src/index.js");
/* harmony import */ var node_red_contrib_uibuilder_front_end_src_uibuilderfe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-red-contrib-uibuilder/front-end/src/uibuilderfe */ "./node_modules/node-red-contrib-uibuilder/front-end/src/uibuilderfe.js");
/* harmony import */ var node_red_contrib_uibuilder_front_end_src_uibuilderfe__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_red_contrib_uibuilder_front_end_src_uibuilderfe__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var simple_keyboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! simple-keyboard */ "./node_modules/simple-keyboard/build/index.js");
/* harmony import */ var simple_keyboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(simple_keyboard__WEBPACK_IMPORTED_MODULE_5__);






//import { Client } from 'azure-iothub';
//import { Message } from 'azure-iot-common';
//const Client = require('azure-iothub').Client;
//const Message = require('azure-iot-common').Message;
//const connectionString = 'HostName=hachsc.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=qM/GKO2p2jmuKfTz8FyT+quDmkJ4BnT3z5PvDN27oxk=';
//const targetDevice = 'cl17sc';
//const serviceClient = Client.fromConnectionString(connectionString);
let AppComponent = class AppComponent {
    constructor(_mqttService, http) {
        this._mqttService = _mqttService;
        this.http = http;
        //topicname: any;
        //msg: any;
        this.isConnected = false;
        this.show = false;
        this.deviceName = "CL17sc";
        this.inputName = "topicname";
        this.inputs = {
            topicname: "cl17sc",
            msg: "hello!",
            units: this.deviceName
        };
        this.state = {
            // Example of retrieving data from uibuilder
            feVersion: node_red_contrib_uibuilder_front_end_src_uibuilderfe__WEBPACK_IMPORTED_MODULE_4___default.a.get('version'),
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
        this.onInputFocus = (event) => {
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
        this.onInputBlur = (event) => {
            this.show = false;
        };
        this.setInputCaretPosition = (elem, pos) => {
            if (elem.setSelectionRange) {
                elem.focus();
                elem.setSelectionRange(pos, pos);
            }
        };
        this.onInputChange = (event) => {
            this.keyboard.setInput(event.target.value, event.target.id);
        };
        this.onChange = (input) => {
            this.inputs[this.inputName] = input;
            console.log("Input changed", input);
            /**
             * Synchronizing input caret position
             * This part is optional and only relevant if using the option "preventMouseDownDefault: true"
             */
            let caretPosition = this.keyboard.caretPosition;
            if (caretPosition !== null)
                this.setInputCaretPosition(document.querySelector(`#${this.inputName}`), caretPosition);
            console.log("caretPosition", caretPosition);
        };
        this.onKeyPress = (button) => {
            console.log("Button pressed", button);
            /**
             * If you want to handle the shift and caps lock buttons
             */
            if (button === "{shift}" || button === "{lock}")
                this.handleShift();
        };
        this.handleShift = () => {
            let currentLayout = this.keyboard.options.layoutName;
            let shiftToggle = currentLayout === "default" ? "shift" : "default";
            this.keyboard.setOptions({
                layoutName: shiftToggle
            });
        };
        /** **REQUIRED** Start uibuilder comms with Node-RED @since v2.0.0-dev3
        * Pass the namespace and ioPath variables if hosting page is not in the instance root folder
        * e.g. If you get continual `uibuilderfe:ioSetup: SOCKET CONNECT ERROR` error messages.
        * e.g. uibuilder.start('/nr/uib', '/nr/uibuilder/vendor/socket.io') // change to use your paths/names
        */
        node_red_contrib_uibuilder_front_end_src_uibuilderfe__WEBPACK_IMPORTED_MODULE_4___default.a.start();
        /** You can use the following to help trace how messages flow back and forth.
         * You can then amend this processing to suite your requirements.
         */
        //#region ---- Trace Received Messages ---- //
        // If msg changes - msg is updated when a standard msg is received from Node-RED over Socket.IO
        // newVal relates to the attribute being listened to.
        node_red_contrib_uibuilder_front_end_src_uibuilderfe__WEBPACK_IMPORTED_MODULE_4___default.a.onChange('msg', (newVal) => {
            this.state.msgRecvd = newVal;
            this.subscribeDefaultTopic();
            console.info('[uibuilder.onChange] msg received from Node-RED server:', newVal);
        });
        // As we receive new messages, we get an updated count as well
        node_red_contrib_uibuilder_front_end_src_uibuilderfe__WEBPACK_IMPORTED_MODULE_4___default.a.onChange('msgsReceived', (newVal) => {
            console.info('[uibuilder.onChange] Updated count of received msgs:', newVal);
            this.state.msgsReceived = newVal;
        });
        // If we receive a control message from Node-RED, we can get the new data here - we pass it to a Vue variable
        node_red_contrib_uibuilder_front_end_src_uibuilderfe__WEBPACK_IMPORTED_MODULE_4___default.a.onChange('ctrlMsg', (newVal) => {
            console.info('[uibuilder.onChange:ctrlMsg] CONTROL msg received from Node-RED server:', newVal);
            this.state.msgCtrl = newVal;
        });
        // Updated count of control messages received
        node_red_contrib_uibuilder_front_end_src_uibuilderfe__WEBPACK_IMPORTED_MODULE_4___default.a.onChange('msgsCtrl', (newVal) => {
            console.info('[uibuilder.onChange:msgsCtrl] Updated count of received CONTROL msgs:', newVal);
            this.state.msgsControl = newVal;
        });
        //#endregion ---- End of Trace Received Messages ---- //
        //#region ---- Trace Sent Messages ---- //
        // You probably only need these to help you understand the order of processing //
        // If a message is sent back to Node-RED, we can grab a copy here if we want to
        node_red_contrib_uibuilder_front_end_src_uibuilderfe__WEBPACK_IMPORTED_MODULE_4___default.a.onChange('sentMsg', (newVal) => {
            console.info('[uibuilder.onChange:sentMsg] msg sent to Node-RED server:', newVal);
            this.state.msgSent = newVal;
        });
        // Updated count of sent messages
        node_red_contrib_uibuilder_front_end_src_uibuilderfe__WEBPACK_IMPORTED_MODULE_4___default.a.onChange('msgsSent', (newVal) => {
            console.info('[uibuilder.onChange:msgsSent] Updated count of msgs sent:', newVal);
            this.state.msgsSent = newVal;
        });
        // If we send a control message to Node-RED, we can get a copy of it here
        node_red_contrib_uibuilder_front_end_src_uibuilderfe__WEBPACK_IMPORTED_MODULE_4___default.a.onChange('sentCtrlMsg', (newVal) => {
            console.info('[uibuilder.onChange:sentCtrlMsg] Control message sent to Node-RED server:', newVal);
            this.state.msgCtrlSent = newVal;
        });
        // And we can get an updated count
        node_red_contrib_uibuilder_front_end_src_uibuilderfe__WEBPACK_IMPORTED_MODULE_4___default.a.onChange('msgsSentCtrl', (newVal) => {
            console.info('[uibuilder.onChange:msgsSentCtrl] Updated count of CONTROL msgs sent:', newVal);
            this.state.msgsCtrlSent = newVal;
        });
        //#endregion ---- End of Trace Sent Messages ---- //
        // If Socket.IO connects/disconnects, we get true/false here
        node_red_contrib_uibuilder_front_end_src_uibuilderfe__WEBPACK_IMPORTED_MODULE_4___default.a.onChange('ioConnected', (newVal) => {
            console.info('[uibuilder.onChange:ioConnected] Socket.IO Connection Status Changed to:', newVal);
            this.state.socketConnectedState = newVal;
        });
        // If Server Time Offset changes
        node_red_contrib_uibuilder_front_end_src_uibuilderfe__WEBPACK_IMPORTED_MODULE_4___default.a.onChange('serverTimeOffset', (newVal) => {
            console.info('[uibuilder.onChange:serverTimeOffset] Offset of time between the browser and the server has changed to:', newVal);
            this.state.serverTimeOffset = newVal;
        });
        //Manually send a message back to Node-RED after 2 seconds
        window.setTimeout(function () {
            console.info('Sending a message back to Node-RED-after2sdelay');
            node_red_contrib_uibuilder_front_end_src_uibuilderfe__WEBPACK_IMPORTED_MODULE_4___default.a.send({ 'topic': 'uibuilderfe', 'payload': 'I am a message sent from the uibuilder sensor front end' });
        }, 2000);
        // this.serviceClient = Client.fromConnectionString(this.connectionString);
    }
    ngOnInit() {
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
        this.keyboard = new simple_keyboard__WEBPACK_IMPORTED_MODULE_5___default.a({
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
    ngOnDestroy() {
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
        //this.state.msgRecvd = {topic: "hello", payload:"baba",_socketId:"kkkop",_msgid: "977yhh"};
        const msgData = JSON.parse(JSON.stringify(this.state.msgRecvd));
        this.deviceName = msgData.payload.toString();
        //const msgData:UiBuilderMsg = JSON.parse(uibuilder.get('msg'));
        this.inputs.topicname = '/devices/' + msgData.payload.toString() + '/reading';
        this.subscribeNewTopic();
        this.inputs.topicname = '/devices/' + msgData.payload.toString() + '/units';
        this.unitsGetTopic = this.inputs.topicname;
        this.unitsSetTopic = '/devices/' + msgData.payload.toString() + '/set_units';
        this.subscribeNewTopic();
        this.inputs.topicname = '/devices/' + msgData.payload.toString() + '/control';
        this.controlTopic = this.inputs.topicname;
        //this.subscribeNewTopic(); 
        this._mqttService.unsafePublish(this.inputs.topicname, "GetUnits", { qos: 1, retain: true });
    }
    subscribeNewTopic() {
        console.log('inside subscribe new topic');
        this.subscription = this._mqttService.observe(this.inputs.topicname).subscribe((message) => {
            //this.msg = message;
            console.log('msg: ', message);
            if (message.topic == this.unitsGetTopic) {
                this.inputs.units = message.payload.toString();
            }
            else {
                this.logMsg('Message: ' + message.payload.toString() + '<br> for topic: ' + message.topic);
            }
        });
        this.logMsg('subscribed to topic: ' + this.inputs.topicname);
    }
    sendmsg() {
        // use unsafe publish for non-ssl websockets
        //this._mqttService.unsafePublish(this.inputs.topicname, this.inputs.msg, { qos: 1, retain: true });
        const apiUrl = '/api/HttpTrigger?Module=' + this.inputs.topicname + '&Device=' + this.inputs.units + '&Location=' + this.inputs.msg;
        this.logMsg(apiUrl);
        this.http.get(apiUrl).subscribe((resp) => this.logMsg(resp.text));
        this.inputs.msg = '';
    }
    changeUnits() {
        this.deviceName = this.inputs.units;
        // use unsafe publish for non-ssl websockets
        this._mqttService.unsafePublish(this.unitsSetTopic, this.inputs.units, { qos: 1, retain: true });
    }
    // onConnected(): void {
    //   this.logMsg('Connected to broker!');
    //   this.isConnected = true;
    // }
    logMsg(message) {
        this.msglog.nativeElement.innerHTML = '<br><hr>' + message;
    }
    clear() {
        this.msglog.nativeElement.innerHTML = '';
    }
};
AppComponent.ctorParameters = () => [
    { type: ngx_mqtt__WEBPACK_IMPORTED_MODULE_3__["MqttService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('msglog', { static: true })
], AppComponent.prototype, "msglog", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ../../node_modules/simple-keyboard/build/css/index.css */ "./node_modules/simple-keyboard/build/css/index.css"), __webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MQTT_SERVICE_OPTIONS, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MQTT_SERVICE_OPTIONS", function() { return MQTT_SERVICE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_mqtt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mqtt */ "./node_modules/ngx-mqtt/src/index.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");












//import { MatKeyboardModule } from 'angular-onscreen-material-keyboard';
//import { NgxVirtualKeyboardModule }  from 'ngx-virtual-keyboard';
//import { IKeyboardLayouts, keyboardLayouts, MAT_KEYBOARD_LAYOUTS, MatKeyboardModule } from '@ngx-material-keyboard/core';
const MQTT_SERVICE_OPTIONS = {
    hostname: '192.168.0.43',
    port: 9001,
    path: '/mqtt'
};
/*
const customLyouts: IKeyboardLayouts = {
  ...keyboardLayouts,
  'Custom Layout你的布局': {
    'name': 'Awesome layout',
    'keys': [
      [
        ['1', '!'],
        ['2', '@'],
        ['3', '#'],
        ['4', '$']
      ]
    ],
    'lang': ['Chinese中文']
  }
};
*/
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            //NgxVirtualKeyboardModule,
            // Material modules  
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
            //MatRippleModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            //MatKeyboardModule,
            ngx_mqtt__WEBPACK_IMPORTED_MODULE_6__["MqttModule"].forRoot(MQTT_SERVICE_OPTIONS),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
        ],
        providers: [],
        //   { provide: MAT_KEYBOARD_LAYOUTS, useValue: customLyouts }
        //],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ryang\Projects\AngularMqttApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map