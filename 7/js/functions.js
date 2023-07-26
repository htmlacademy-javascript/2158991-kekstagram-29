const IsTimeRange = (workStart, workEnd, meetingStart, meetingLength) => {
  const timeToNum = (time) => time.split(":")[0] * 60 + parseInt(time.split(":")[1]);
  return timeToNum(workStart) <= timeToNum(meetingStart) && timeToNum(workEnd) >= timeToNum(meetingStart) + meetingLength;
};

console.log(IsTimeRange('08:00', '17:30', '14:00', 90)); // true
console.log(IsTimeRange('8:0', '10:0', '8:0', 120)); // true
console.log(IsTimeRange('08:00', '14:30', '14:00', 90)); // false
console.log(IsTimeRange('14:00', '17:30', '08:0', 90)); // false
console.log(IsTimeRange('8:00', '17:30', '08:00', 900)); // false
