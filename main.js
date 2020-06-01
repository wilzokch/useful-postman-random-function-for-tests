function randNumber(length) {
    return randRound(Math.pow(10,length));
}

function randRound(length) {
    return Math.round(Math.random() * length);
}

function randFixNumber(length) {
    return pad(randNumber(length), length);
}

function randNumberByRange(min, max) {
    return min + randRound(max-min);
}

function randFixNumberByRange(min, max) {
    var value = "" + max;
    var rand = randNumberByRange(min, max);

    return pad(rand, value.length);
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function randChoice(text) {
    var options = text.split('/');
    var index = randFixNumberByRange(0, options.length -1);
    return options[index];
}
