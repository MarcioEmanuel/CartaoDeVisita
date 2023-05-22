let btn = document.getElementById("btn");

function swap() {
    if (btn.textContent === "Discord") {
        btn.textContent = "M.Emanuel#6725";
        btn.value = "M.Emanuel#6725";
    } else {
        btn.textContent = "Discord";
        btn.value = "Discord";
    }
}

btn.addEventListener('click', swap);