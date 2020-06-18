let show = data => console.log(data);

function truncate(string, maxLength) {
    if (string.length <= maxLength) {
        show(string);
    } else {
        let tripleDot = "...";
        let x = maxLength - tripleDot.length;
        show(string.slice(0, x).concat(tripleDot))
    }
}

truncate("testing", 7);
truncate("testing".repeat(3), 10);
truncate("testing".repeat(3), 17);
