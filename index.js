function initCountdownChristmass(selector) {
    let now;
    const timeInADay = 24 * 60 * 60 * 1000;
    const timeInAHour = 60 * 60 * 1000;
    const timeInAMinutes = 60 * 1000;

    const getDateOfChristmas = function () {
        now = new Date();
        let thisYear = now.getFullYear();
        let dateOfChristmas = new Date(thisYear, 11, 24).getTime();

        if (dateOfChristmas < now) {
            //24 and 25.12. is 0
            if ((now - dateOfChristmas) / timeInAHour < 24 * 2) {
                now = dateOfChristmas;
            } else {
                dateOfChristmas = new Date(thisYear + 1, 11, 24).getTime();
            }
        }

        return dateOfChristmas;
    };

    let textCounter = function () {
        let dateOfChristmas = getDateOfChristmas();

        let daysUntilChristmas = function () {
            return Math.abs(
                Math.floor((dateOfChristmas - now) / timeInADay)
            );
        };

        let hoursUntilChristmas = function () {
            return Math.abs(
                Math.floor(((dateOfChristmas - now) % timeInADay) / timeInAHour)
            );
        };

        let minutesUntilChristmas = function () {
            return Math.abs(
                Math.floor(((dateOfChristmas - now) % timeInAHour) / timeInAMinutes)
            );
        };

        let secondsUntilChristmas = function () {
            return Math.abs(
                Math.floor(((dateOfChristmas - now) % timeInAMinutes) / 1000)
            );
        };

        let textMore = function (cnt) {
            if (cnt > 1) {
                return "s";
            }
            return "";
        };

        let days = daysUntilChristmas();
        let hours = hoursUntilChristmas();
        let minutes = minutesUntilChristmas();
        let seconds = secondsUntilChristmas();

        let tDays = "day" + textMore(days);
        let tHours = "hour" + textMore(hours);
        let tMinutes = "minute" + textMore(minutes);
        let tSeconds = "second" + textMore(minutes);

        return `<span class="cnt-chris">
            <span class="cnt-chris_days">${days}</span>
            <span class="cnt-chris_days--text">${tDays}</span>
            <span class="cnt-chris_hours">${hours}</span>
            <span class="cnt-chris_hours--text">${tHours}</span>
            <span class="cnt-chris_mins">${minutes}</span>
            <span class="cnt-chris_mins-">${tMinutes}</span>
            <span class="cnt-chris_secs">${seconds}</span>
            <span class="cnt-chris_secs--text">${tSeconds}</span>
        </span>`;
    };

    setInterval(function () {
        let el = document.querySelector(selector);
        if (el) {
            el.innerHTML = textCounter();
        }
    }, 1000);
}
