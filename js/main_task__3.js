// Задание 3
// findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
// const findLongestWord = function(string) {
    // твой код
// };
/*
* Вызовы функции для проверки работоспособности твоей реализации.
*/

const findLongestWord = function(string) {
    let arr = string.split(' ');
    arr.sort((a,b)=> a.length - b.length);
    console.log(arr[arr.length-1]);
};
findLongestWord('I love the way you lie');
findLongestWord('The quick brown fox jumped over the lazy dog');
findLongestWord('May the force be with you');