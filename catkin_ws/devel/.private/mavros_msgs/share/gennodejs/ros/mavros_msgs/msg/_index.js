
"use strict";

let RTKBaseline = require('./RTKBaseline.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let Trajectory = require('./Trajectory.js');
let WaypointList = require('./WaypointList.js');
let Thrust = require('./Thrust.js');
let PositionTarget = require('./PositionTarget.js');
let CellularStatus = require('./CellularStatus.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let Mavlink = require('./Mavlink.js');
let HilStateQuaternion = require('./HilStateQuaternion.js');
let OverrideRCIn = require('./OverrideRCIn.js');
let LandingTarget = require('./LandingTarget.js');
let DebugValue = require('./DebugValue.js');
let MountControl = require('./MountControl.js');
let CameraImageCaptured = require('./CameraImageCaptured.js');
let GPSRTK = require('./GPSRTK.js');
let OnboardComputerStatus = require('./OnboardComputerStatus.js');
let Waypoint = require('./Waypoint.js');
let VehicleInfo = require('./VehicleInfo.js');
let CompanionProcessStatus = require('./CompanionProcessStatus.js');
let WaypointReached = require('./WaypointReached.js');
let ParamValue = require('./ParamValue.js');
let Param = require('./Param.js');
let EstimatorStatus = require('./EstimatorStatus.js');
let LogEntry = require('./LogEntry.js');
let ESCStatusItem = require('./ESCStatusItem.js');
let HilGPS = require('./HilGPS.js');
let ESCTelemetryItem = require('./ESCTelemetryItem.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');
let HilControls = require('./HilControls.js');
let Vibration = require('./Vibration.js');
let RCIn = require('./RCIn.js');
let ESCInfoItem = require('./ESCInfoItem.js');
let StatusText = require('./StatusText.js');
let GPSINPUT = require('./GPSINPUT.js');
let VFR_HUD = require('./VFR_HUD.js');
let ESCStatus = require('./ESCStatus.js');
let ESCInfo = require('./ESCInfo.js');
let BatteryStatus = require('./BatteryStatus.js');
let SysStatus = require('./SysStatus.js');
let FileEntry = require('./FileEntry.js');
let TerrainReport = require('./TerrainReport.js');
let Tunnel = require('./Tunnel.js');
let CamIMUStamp = require('./CamIMUStamp.js');
let NavControllerOutput = require('./NavControllerOutput.js');
let Altitude = require('./Altitude.js');
let ADSBVehicle = require('./ADSBVehicle.js');
let GPSRAW = require('./GPSRAW.js');
let ExtendedState = require('./ExtendedState.js');
let TimesyncStatus = require('./TimesyncStatus.js');
let PlayTuneV2 = require('./PlayTuneV2.js');
let ActuatorControl = require('./ActuatorControl.js');
let CommandCode = require('./CommandCode.js');
let WheelOdomStamped = require('./WheelOdomStamped.js');
let RCOut = require('./RCOut.js');
let State = require('./State.js');
let ManualControl = require('./ManualControl.js');
let ESCTelemetry = require('./ESCTelemetry.js');
let HilSensor = require('./HilSensor.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let MagnetometerReporter = require('./MagnetometerReporter.js');
let RTCM = require('./RTCM.js');
let HomePosition = require('./HomePosition.js');
let RadioStatus = require('./RadioStatus.js');
let LogData = require('./LogData.js');

module.exports = {
  RTKBaseline: RTKBaseline,
  AttitudeTarget: AttitudeTarget,
  Trajectory: Trajectory,
  WaypointList: WaypointList,
  Thrust: Thrust,
  PositionTarget: PositionTarget,
  CellularStatus: CellularStatus,
  HilActuatorControls: HilActuatorControls,
  Mavlink: Mavlink,
  HilStateQuaternion: HilStateQuaternion,
  OverrideRCIn: OverrideRCIn,
  LandingTarget: LandingTarget,
  DebugValue: DebugValue,
  MountControl: MountControl,
  CameraImageCaptured: CameraImageCaptured,
  GPSRTK: GPSRTK,
  OnboardComputerStatus: OnboardComputerStatus,
  Waypoint: Waypoint,
  VehicleInfo: VehicleInfo,
  CompanionProcessStatus: CompanionProcessStatus,
  WaypointReached: WaypointReached,
  ParamValue: ParamValue,
  Param: Param,
  EstimatorStatus: EstimatorStatus,
  LogEntry: LogEntry,
  ESCStatusItem: ESCStatusItem,
  HilGPS: HilGPS,
  ESCTelemetryItem: ESCTelemetryItem,
  OpticalFlowRad: OpticalFlowRad,
  HilControls: HilControls,
  Vibration: Vibration,
  RCIn: RCIn,
  ESCInfoItem: ESCInfoItem,
  StatusText: StatusText,
  GPSINPUT: GPSINPUT,
  VFR_HUD: VFR_HUD,
  ESCStatus: ESCStatus,
  ESCInfo: ESCInfo,
  BatteryStatus: BatteryStatus,
  SysStatus: SysStatus,
  FileEntry: FileEntry,
  TerrainReport: TerrainReport,
  Tunnel: Tunnel,
  CamIMUStamp: CamIMUStamp,
  NavControllerOutput: NavControllerOutput,
  Altitude: Altitude,
  ADSBVehicle: ADSBVehicle,
  GPSRAW: GPSRAW,
  ExtendedState: ExtendedState,
  TimesyncStatus: TimesyncStatus,
  PlayTuneV2: PlayTuneV2,
  ActuatorControl: ActuatorControl,
  CommandCode: CommandCode,
  WheelOdomStamped: WheelOdomStamped,
  RCOut: RCOut,
  State: State,
  ManualControl: ManualControl,
  ESCTelemetry: ESCTelemetry,
  HilSensor: HilSensor,
  GlobalPositionTarget: GlobalPositionTarget,
  MagnetometerReporter: MagnetometerReporter,
  RTCM: RTCM,
  HomePosition: HomePosition,
  RadioStatus: RadioStatus,
  LogData: LogData,
};
