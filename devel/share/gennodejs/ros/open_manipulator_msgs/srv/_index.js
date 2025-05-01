
"use strict";

let GetJointPosition = require('./GetJointPosition.js')
let SetDrawingTrajectory = require('./SetDrawingTrajectory.js')
let SetKinematicsPose = require('./SetKinematicsPose.js')
let SetActuatorState = require('./SetActuatorState.js')
let GetKinematicsPose = require('./GetKinematicsPose.js')
let SetJointPosition = require('./SetJointPosition.js')

module.exports = {
  GetJointPosition: GetJointPosition,
  SetDrawingTrajectory: SetDrawingTrajectory,
  SetKinematicsPose: SetKinematicsPose,
  SetActuatorState: SetActuatorState,
  GetKinematicsPose: GetKinematicsPose,
  SetJointPosition: SetJointPosition,
};
