import Mqtt, { MQTT_STATE } from "./Mqtt.class";

describe('Mqtt Basic Tests', () => {
  let mqtt: Mqtt;

  beforeEach(() => {
    // Reset the MQTT instance
    mqtt = Mqtt.getInstance();
  })

  test(`Test Active State of the MQTT`, () => {
    expect(mqtt.getState()).toBe(MQTT_STATE.CLOSED);
  })
  
})