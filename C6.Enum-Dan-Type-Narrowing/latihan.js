var Level;
(function (Level) {
    Level["Easy"] = "Mudah";
    Level["Medium"] = "Sedang";
    Level["Hard"] = "Sulit";
})(Level || (Level = {}));
function tampilLevel(level) {
    console.log("Level permainan: ".concat(level));
}
tampilLevel(Level.Hard);
