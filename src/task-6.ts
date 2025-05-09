function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  }
  
 console.log(getFirstElement<number>([1, 2, 3]));
 
 console.log(getFirstElement<string>(["a", "b", "c"]));
 
 console.log(getFirstElement<boolean>([true, false, true]));
 
//   Завдання:

// Зроби функцію узагальненою, використовуючи тип T, щоб вона працювала з масивами будь-якого типу.
// Додай явну типізацію дженериків у виклики функцій.
// Переконайся, що тип елемента, який повертається, точно відповідає типу елементів у масиві.
// Перевір, що TypeScript не дозволяє передати масив змішаних типів без відповідного типу.
