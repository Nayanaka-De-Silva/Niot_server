require("dotenv").config();
import mqtt, { IClientOptions, MqttClient } from "mqtt";

const mqtt_server = process.env.MQTT_SERVER;
const mqtt_port = process.env.MQTT_PORT;

export enum MQTT_STATE {
  ACTIVE,
  BUSY,
  CLOSED,
}

class Mqtt {
  private static instance: Mqtt;                        // Instance of the MQTT Client  
  private state: MQTT_STATE = MQTT_STATE.CLOSED; // Default state of the MQTT Client instance should be CLOSED
	
  static client: mqtt.MqttClient;
  private static mqtt_options: IClientOptions;

  private constructor() {
      // Start the MQTT Instance in a closed state. 
      // This indicates that the connection to the broker is not established yet.
      this.state = MQTT_STATE.CLOSED;
  }

  /**
   * @returns The instance of the object that controls the MQTT object
   */
  static getInstance = () => {
    if (!Mqtt.instance) {
      Mqtt.instance = new Mqtt();
    }
    return Mqtt.instance;
  };

  // static connectMQTT = (): void => {
	// 	this.client = mqtt.connect(mqtt_server, this.mqtt_options);
	// 	this.client.on("connect", () => {
	// 		console.log(`Connected to: ${mqtt_server}\nOn Port: ${mqtt_port}`);
  //     this.instance.state = MQTT_STATE.ACTIVE;
	// 	});
	// };

  static sendMessage = (subject: string, topic: string): void => {
    return;
  }

	public getState(): MQTT_STATE{
		return this.state;
	}
}

//module.exports = client;
export default Mqtt;
