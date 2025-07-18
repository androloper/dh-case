export function formatValue(value) {
    console.log(value);
    if (value>0 && value<1000) {
        return `${value.toFixed(2)}`
    } else if (value <= 999999999999 && value > 999999999) {
        return (value / 1000000).toFixed(1) + 'b'
    }  else if (value <= 999999999 && value > 999999) {
        return (value / 1000000).toFixed(1) + 'm'
    } else if (value > 999 && value<=999999) {
        return (value / 1000).toFixed(1) + 'k'
    } else {
        return value.toString()
    }
}
