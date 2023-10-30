let count = 0;
const value = document.getElementById("value");
const btnd = document.getElementById("decbtn");
const btnr = document.getElementById("resbtn");
const btni = document.getElementById("incbtn");

// Create an array of buttons for easier event handling
const allbtns = [btnd, btnr, btni];

allbtns.forEach(function (button) {
    button.addEventListener("click", function (e) {
        const style = e.currentTarget.id;

        if (style == "decbtn") {
            count--;
        } else if (style == "incbtn") {
            count++;
        } else if (style == "resbtn") {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "yellowgreen";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "black";
        }

        value.textContent = count;
    });
});
