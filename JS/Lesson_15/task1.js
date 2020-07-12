let show = data => console.log(data);

function hideText() {
    text.style.display = "none";
}

function hideButton() {
    button.style.display = "none";
}

function showBlock() {
    let display = document.getElementById('hiddenBlock').style.display;
    if (!display || display == "none") {
        document.getElementById('hiddenBlock').style.display = "block";
    } else {
        document.getElementById('hiddenBlock').style.display = "none";
    }
}
