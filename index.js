let score = 0;

function renderRandomButton() {
    const ids = ["submit", "run"];
    const labels = ["Submit", "Run"];

    const newButton = document.createElement("button");
    const buttonType = Math.floor(Math.random() * 2);

    newButton.classList.add("button");
    newButton.setAttribute("id", ids[buttonType]);
    newButton.innerText = labels[buttonType];

    const bodyRight = document.getElementsByTagName("body")[0].getBoundingClientRect().right;
    let left = Math.floor(Math.random() * bodyRight);
    console.log(bodyRight);
    if (left + 100 > Math.floor(bodyRight)) {
        left -= (left+100) - Math.floor(bodyRight);
    }

    newButton.style.left = left.toString() + "px";
    document.getElementsByTagName("body")[0].append(newButton);

    newButton.addEventListener("mousedown", () => {
        if (newButton.id == "submit") {
            document.getElementById("score").innerText = ++score;
        } else {
            document.getElementById("score").innerText = score--;
        }
        newButton.remove();
    })

    newButton.addEventListener("animationend", () => {
        if (newButton.id == "submit") {
            document.getElementById("score").innerText = score -= 10;
        } else {
            document.getElementById("score").innerText = ++score;
        }
        newButton.remove();
    })
}

setInterval(renderRandomButton, 750);