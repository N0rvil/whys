export const shortDate = (d) => {
    const date = new Date(d)
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const pad = (n) => { 
        return ("0"+n).slice(-2);
      }

    const getTime = (time) => {
        const date = new Date(time * 1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return pad(hours)+":"+pad(minutes)
    }

    return `${getTime(date)} ${day}.${month+1}.${year}`
}

export const getDateAndTime = (d) => {
    const date = new Date(d)
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const pad = (n) => { 
        return ("0"+n).slice(-2);
      }

    const getHours = (time) => {
        const date = new Date(time * 1000);
        const hours = date.getHours();
        return pad(hours)
    }

    const getMinutes = (time) => {
        const date = new Date(time * 1000);
        const minutes = date.getMinutes();
        return pad(minutes)
    }
    return new Date(year, month, day, getHours(date), getMinutes(date))
}