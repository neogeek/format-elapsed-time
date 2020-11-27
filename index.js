const formatElapsedTime = (a, b) => {
    const diff = Math.abs(a - b) || 0;

    const hours = Math.floor(diff / 3600 / 1000) % 24;
    const minutes = Math.floor(diff / 60 / 1000) % 60;
    const seconds = Math.floor((diff / 1000) % 60);
    const milliseconds = Math.floor(diff % 1000);

    return `${hours.toString().padStart(2, 0)}:${minutes
        .toString()
        .padStart(2, 0)}:${seconds
        .toString()
        .padStart(2, 0)}.${milliseconds.toString().padEnd(3, 0)}`;
};

export default formatElapsedTime;
