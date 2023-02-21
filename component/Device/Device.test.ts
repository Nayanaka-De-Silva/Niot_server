import {Device, DeviceMode} from "./Device.class";

describe('Device Setup', () => {
  let device: Device;

  beforeEach(() => {
    device = new Device();
  })

  afterEach(() => {
    device = null as any;
  })

  test('Can create a device object', () => {
    expect(device).toBeInstanceOf(Device);
  })

  test('Set device mode to Sensor mode', () => {
    device.setMode(DeviceMode.MODE_SENSOR);
    expect(device.mode).toBe(DeviceMode.MODE_SENSOR);
  })

  test('Create Device with predefined mode', () => {
    device = new Device(DeviceMode.MODE_ACTUATOR);
    expect(device.mode).toBe(DeviceMode.MODE_ACTUATOR);
  })

})