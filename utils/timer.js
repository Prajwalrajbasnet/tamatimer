export function timestampMinute(timeInSeconds) {
	const mins = Math.floor(timeInSeconds / 60); //converting to minutes
	const seconds = Math.floor(timeInSeconds % 60); //converting to seconds
	const centiSeconds = Math.floor((timeInSeconds * 100) % 100); //converting to centiseconds 100cs = 1s
	return (
		mins.toString().padStart(2, 0) + ':' + seconds.toString().padStart(2, 0)
	);
}
