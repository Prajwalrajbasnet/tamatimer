/**
 * Create a timeStamp in format of mm:ss for given time in miliseconds.
 *
 * @param {Number} timeInMilis
 * @returns {String}
 */
export function timestampMinute(timeInMilis) {
  const mins = Math.floor(timeInMilis / 60000); // converting to minutes
  const seconds = Math.floor((timeInMilis % 60000) / 1000); // converting to seconds

  return mins.toString().padStart(2, 0) + ':' + seconds.toString().padStart(2, 0);
}

/**
 * Calculate time respective to percentage given the total time.
 *
 * @param {Number} total
 * @param {Number} progressPercentage
 * @returns {Number}
 */
export function getRemainingTimeByProgress(total, progressPercentage) {
  return total - (progressPercentage / 100) * total;
}

/**
 * Find timebox type according to the position as first timebox would be pomodoro, second break and so on.
 *
 * @param {Number} timeboxIndex
 * @returns {String}
 */
export function getTimeboxType(timeboxIndex) {
  return (timeboxIndex + 1) % 2 === 0 ? 'break' : 'pomodoro';
}
