// Question No. 1

function describeValue(value) {

    if (typeof value === "string" && value) {
        return "string | truthy";

    } else if (typeof value === "string" && !value) {
        return "string | falsy";

    } else if (typeof value === "number" && value) {
        return "number | truthy";

    } else if (typeof value === "number" && !value) {
        return "number | falsy";

    } else if (typeof value === "boolean" && value) {
        return "boolean | truthy";

    } else if (typeof value === "boolean" && !value) {
        return "boolean | falsy";

    } else if (typeof value === "object" && value === null) {
        return "object | falsy";

    } else if (typeof value === "undefined") {
        return "undefined | falsy";

    } else {
        return "kisu painai";
    }
}

// Question No. 2



function getDayType(day) {

    let lowerCase = day.toLowerCase()
    switch (lowerCase) {
        case "friday":
            return "Weekend";

        case "saturday":
            return "Weekend";

        case "monday":
            return "Working Day";
        case "tuesday":
            return "Working Day";
        case "wednesday":
            return "Working Day";
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day"
    }

}

// Question No. 3


function validateUsername(name) {
    const lenName = name.length
    const spaName = " "
    const resName = "admin"

    if (lenName < 4) {
        return "Too Short"

    } else if (name.includes(spaName)) {
        return "No Space Allowed"

    } else if (name.toLowerCase().includes(resName)) {
        return "Reserved Word"

    } else
        return "Available"

}

// Question No. 4

function getCngFare(distance, isNight = false, waitingMinutes = 0) {

    let fare = 50;

    if (distance <= 2) {
        fare = 50;

    } else {
        const extraDis = distance - 2;
        fare = fare + (extraDis * 15);
    }

    if (waitingMinutes > 0) {
        fare = fare + (waitingMinutes * 2);
    }

    if (isNight) {
        fare = fare * 1.20;
    }

    return fare;
}


// Question No. 5



const getChaseVerdict = (target, scored, ballsLeft) => {

    const runsNeed = target - scored;

    if (runsNeed <= 0) {
        return "Won";

    } else if (ballsLeft <= 0) {
        return "Lost";

    } else {

        const requirRate = (runsNeed / ballsLeft) * 6;

        if (requirRate <= 6) {
            return `Need ${runsNeed} runs in ${ballsLeft} balls | Comfortable`;

        } else if (requirRate <= 12) {
            return `Need ${runsNeed} runs in ${ballsLeft} balls | Tough`;

        } else {
            return `Need ${runsNeed} runs in ${ballsLeft} balls | Almost Impossible`;
        }
    }
};
