module.exports = function check(str, bracketsConfig) {
    let configArray = bracketsConfig.map((arr) => arr.join(""));
    let newStr = str;

    for (let i = 0; i < configArray.length; i++) {
        if (str.includes(configArray[i])) {
            newStr = str.replace(configArray[i], "");
            i = -1;
        }
        str = newStr;
    }

    return newStr === "" ? true : false;
};
