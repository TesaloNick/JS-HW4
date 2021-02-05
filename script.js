document.write('Задание 1. Вывести элементы массива на экран<br>');
const arr1 = [1, 2, 3, 4, 5];
document.write('Все элементы массива: ');
for (let i=0; i < arr1.length; i++) {
    document.write(arr1[i] + ', ');
}

document.write('<br><br>Задание 2. Отрицательные числа, которые больше -10, но меньше -3.<br>');
const arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
document.write('Числа: ');
for (let i=0; i < arr2.length; i++) {
    if ((arr2[i] > -10) && (arr2[i] < -3)) {
        document.write(arr2[i] + ', ');
    }
}

document.write('<br><br>Задание 3. Массив со значениями от 23 до 57.<br>');
let arr3_1 = [];
let sum = 0;
for (let i=23; i <= 57; i++) {
    arr3_1[i-23] = i;
    sum += i;
}
console.log('Массив с помощью For: ',  arr3_1);
document.write('Массив с помощью For: ', arr3_1, '<br>');
let arr3_2 = [];
let i = 23;
while (i <= 57) {
    arr3_2[i-23] = i;
    i++;
}
document.write('Массив с помощью While: ', arr3_2, '<br>');
console.log('Массив с помощью While: ',  arr3_2);
document.write('Сумма всех элементов массива: ', sum, '<br>');

document.write('<br>Задание 4. Числа из массива, которые начинаются на цифру 1, 2 или 5.<br>');
const arr4 = ['10', '20', '30', '50', '235', '3000'];
document.write('Числа: ');
for (let i=0; i < arr4.length; i++) {
    if ((arr4[i][0] == 1) || (arr4[i][0] == 2) || (arr4[i][0] == 5)) {
        document.write(arr4[i] + ', ');
    }
}
