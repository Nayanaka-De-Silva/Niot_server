/**
 * Device
 * 
 * Contains the information required for a single device on the network.
 * The device has the following attributes
 * 
 * Parameters:
 *  _mode: The mode of the device. This will help to classify the devices into specific categories.
 */

enum DeviceMode {
  MODE_SENSOR   = 0,
  MODE_ACTUATOR = 1,
  MODE_HYBRID   = 2,
}

class Device {

  private static DEF_MODE: DeviceMode = DeviceMode.MODE_SENSOR;
  private _mode: DeviceMode;

  constructor(mode: DeviceMode = Device.DEF_MODE) {
    this._mode = mode;
  }

  setMode(mode: DeviceMode): void {
    this._mode = mode;
  }

  get mode(): DeviceMode {
    return this._mode;
  }

}

export {Device, DeviceMode};