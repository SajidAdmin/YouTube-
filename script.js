function startCountdown() {
    let timeLeft = 60 * 60 * 24 * 3; // 3 Days Countdown

    function updateCountdown() {
        let days = Math.floor(timeLeft / (60 * 60 * 24));
        let hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
        let minutes = Math.floor((timeLeft % (60 * 60)) / 60);
        let seconds = timeLeft % 60;

        document.getElementById("countdown").innerText =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeLeft > 0) {
            timeLeft--;
            setTimeout(updateCountdown, 1000);
        }
    }

    updateCountdown();
}

startCountdown();
