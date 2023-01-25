function Algo() {}

Algo.prototype.reverse = function(str) {
    return str.split("").reverse().join("");
};

Algo.prototype.isPalindrome = function(str) {
    const reversed = this.reverse(str);
    return str === reversed;
};

Algo.prototype.capitalize = function(str) {
    const words = str.split(" ");
    const capitalizedWords = words.map((word) => {
        return word[0].toUpperCase() + word.slice(1);
        });
    return capitalizedWords.join(" ");
};

module.exports = Algo;
