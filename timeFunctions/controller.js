const timeConverter = (num) => {
const date = new Date();

// Get the Unix timestamp in seconds
    const unixTimestamp = Math.floor(date.getTime() / 1000);

// Create an array of weekday names and month names

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const weekday = weekdays[date.getUTCDay()];
    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    const formattedDateTime = `${weekday}, ${day.toString().padStart(2, '0')} ${month.toString().padStart(2, '0')} ${year} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} GMT`;
}

exports.module = timeConverter;
