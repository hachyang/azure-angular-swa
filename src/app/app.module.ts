import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { IMqttMessage, MqttModule, IMqttServiceOptions } from "ngx-mqtt";
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatKeyboardModule } from 'angular-onscreen-material-keyboard';
//import { NgxVirtualKeyboardModule }  from 'ngx-virtual-keyboard';
//import { IKeyboardLayouts, keyboardLayouts, MAT_KEYBOARD_LAYOUTS, MatKeyboardModule } from '@ngx-material-keyboard/core';
export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: '192.168.0.43',
  port: 9001,
  path: '/mqtt'
}
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
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //NgxVirtualKeyboardModule,
        // Material modules  
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    //MatRippleModule,
    MatDatepickerModule, 
    //MatKeyboardModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    BrowserAnimationsModule
  ],
 providers: [],
 //   { provide: MAT_KEYBOARD_LAYOUTS, useValue: customLyouts }
 //],
  bootstrap: [AppComponent]
})
export class AppModule { }
