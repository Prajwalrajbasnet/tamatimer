export function timestampMinute(timeInMilis) {
	const mins = Math.floor(timeInMilis / 60000); //converting to minutes
	const seconds = Math.floor((timeInMilis % 60000) / 1000); //converting to seconds
	const centiSeconds = Math.floor((timeInMilis % 1000) / 10); //converting to centiseconds 100cs = 1s
	return (
		mins.toString().padStart(2, 0) + ':' + seconds.toString().padStart(2, 0)
	);
}

export function getRemainingTimeByProgress(total, progressPercentage) {
	return total - (progressPercentage / 100) * total;
}
