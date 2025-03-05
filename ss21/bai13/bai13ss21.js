document.write("a.<br>");
for(let i = 10; i > 0; i--) {
    for(let j = 0; j < i; j++) {
        document.write("*");
    }
    document.write("<br>");
}

document.write("b.<br>");
for(let i = 1; i <= 10; i++) {
    for(let j = 0; j < i; j++) {
        document.write("*");
    }
    document.write("<br>");
}

document.write("c.<br>");
for(let i = 1; i <= 10; i++) {
    for(let j = 0; j < 10 - i; j++) {
        document.write("&nbsp;&nbsp;");
    }
    for(let j = 0; j < i; j++) {
        document.write("*");
    }
    document.write("<br>");
}

document.write("d.<br>");
for(let i = 10; i > 0; i--) {
    for(let j = 0; j < 10 - i; j++) {
        document.write("&nbsp;&nbsp;");
    }
    for(let j = 0; j < i; j++) {
        document.write("*");
    }
    document.write("<br>");
}

