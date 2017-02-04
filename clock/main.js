/**
 * Created by nick on 4/2/17.
 */
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegree = ((seconds / 60) * 360) + 90;
    document.querySelector('.seconds').style.transform = `rotate(${secondDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + 90;
    document.querySelector('.hours').style.transform = `rotate(${hoursDegree}deg)`;

    const minutes = now.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + 90;
    document.querySelector('.minutes').style.transform = `rotate(${minutesDegree}deg)`;
}

setInterval(setDate, 1000);