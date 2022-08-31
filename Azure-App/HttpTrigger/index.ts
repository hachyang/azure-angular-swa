import { AzureFunction, Context, HttpRequest } from "@azure/functions"
//const Client = require('azure-iothub').Client;
//const Message = require('azure-iot-common').Message;
import { Client } from 'azure-iothub';
import { Message } from 'azure-iot-common';
const connectionString = 'HostName=hachsc.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=qM/GKO2p2jmuKfTz8FyT+quDmkJ4BnT3z5PvDN27oxk=';
//const targetDevice = 'cl17sc';
const serviceClient = Client.fromConnectionString(connectionString);
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const target = (req.query.Module || (req.body && req.body.Module));
    const name = (req.query.Device || (req.body && req.body.Device));
    const location = (req.query.Location || (req.body && req.body.Location));
    // fail if incoming data is required
    if (!target || !name || !location) {

        context.res = {
            status: 400
        };
        return;
    }
    
    try {
        await serviceClient.open()
        context.log('Service client connected');
        //   serviceClient.getFeedbackReceiver(receiveFeedback);
        const msgPayload = {Device: name, Location: location};
        const csdMessage = new Message(JSON.stringify(msgPayload));
        csdMessage.ack = 'full';
        csdMessage.messageId = "My Message ID";
        context.log('Sending message: ' + csdMessage.getData());
        await serviceClient.send(target, csdMessage);
    }
    catch(err){
         context.log('Could not connect: ' + err.message);
    }
            // Construct response
            /*
            const responseJSON = {
                "name": name,
                "sport": sport,
                "message": message,
                "success": true
            }
            */
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a device name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        //contentType: 'application/json',
        body: responseMessage
    };

};

export default httpTrigger;