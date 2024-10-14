
"use strict";

let FileChecksum = require('./FileChecksum.js')
let SetMavFrame = require('./SetMavFrame.js')
let CommandTriggerControl = require('./CommandTriggerControl.js')
let MountConfigure = require('./MountConfigure.js')
let FileRename = require('./FileRename.js')
let CommandBool = require('./CommandBool.js')
let FileClose = require('./FileClose.js')
let CommandLong = require('./CommandLong.js')
let WaypointPull = require('./WaypointPull.js')
let ParamSet = require('./ParamSet.js')
let MessageInterval = require('./MessageInterval.js')
let CommandTOL = require('./CommandTOL.js')
let WaypointPush = require('./WaypointPush.js')
let FileOpen = require('./FileOpen.js')
let ParamGet = require('./ParamGet.js')
let LogRequestData = require('./LogRequestData.js')
let ParamPull = require('./ParamPull.js')
let FileWrite = require('./FileWrite.js')
let LogRequestList = require('./LogRequestList.js')
let FileRemove = require('./FileRemove.js')
let WaypointClear = require('./WaypointClear.js')
let SetMode = require('./SetMode.js')
let CommandAck = require('./CommandAck.js')
let CommandVtolTransition = require('./CommandVtolTransition.js')
let ParamPush = require('./ParamPush.js')
let FileTruncate = require('./FileTruncate.js')
let CommandTriggerInterval = require('./CommandTriggerInterval.js')
let VehicleInfoGet = require('./VehicleInfoGet.js')
let StreamRate = require('./StreamRate.js')
let LogRequestEnd = require('./LogRequestEnd.js')
let FileRemoveDir = require('./FileRemoveDir.js')
let WaypointSetCurrent = require('./WaypointSetCurrent.js')
let CommandInt = require('./CommandInt.js')
let FileRead = require('./FileRead.js')
let CommandHome = require('./CommandHome.js')
let FileList = require('./FileList.js')
let FileMakeDir = require('./FileMakeDir.js')

module.exports = {
  FileChecksum: FileChecksum,
  SetMavFrame: SetMavFrame,
  CommandTriggerControl: CommandTriggerControl,
  MountConfigure: MountConfigure,
  FileRename: FileRename,
  CommandBool: CommandBool,
  FileClose: FileClose,
  CommandLong: CommandLong,
  WaypointPull: WaypointPull,
  ParamSet: ParamSet,
  MessageInterval: MessageInterval,
  CommandTOL: CommandTOL,
  WaypointPush: WaypointPush,
  FileOpen: FileOpen,
  ParamGet: ParamGet,
  LogRequestData: LogRequestData,
  ParamPull: ParamPull,
  FileWrite: FileWrite,
  LogRequestList: LogRequestList,
  FileRemove: FileRemove,
  WaypointClear: WaypointClear,
  SetMode: SetMode,
  CommandAck: CommandAck,
  CommandVtolTransition: CommandVtolTransition,
  ParamPush: ParamPush,
  FileTruncate: FileTruncate,
  CommandTriggerInterval: CommandTriggerInterval,
  VehicleInfoGet: VehicleInfoGet,
  StreamRate: StreamRate,
  LogRequestEnd: LogRequestEnd,
  FileRemoveDir: FileRemoveDir,
  WaypointSetCurrent: WaypointSetCurrent,
  CommandInt: CommandInt,
  FileRead: FileRead,
  CommandHome: CommandHome,
  FileList: FileList,
  FileMakeDir: FileMakeDir,
};
