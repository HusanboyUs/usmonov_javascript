
function checkUserAge(age) {
    if (age >= 7){
        //console.log('Привет')
        return 'Привет'
    } else{
        //console.log('You entered age less than 7!')
        return 'error'
    }
  }

  function checkUsername(userName) {
    const matches = ['Вячеслав','вячеслав']

    if (matches.includes(userName)){
      return 'Привет Вячеслав'
    } else{
      return 'Нет такого имени'
  }
}



///////////////////TESTS///////////////////////////////////////////////////////////
//Test cases to check outputs

test('Составить алгоритм: если введенное число больше 7, то вывести Привет', () => {
    const result = checkUserAge(2);
    expect(result).toBe('error');
  });

test('Составить алгоритм: если введенное число больше 7, то вывести Привет', () => {
    const result = checkUserAge(8);
    expect(result).toBe('Привет');
  });



//Test cases to check outputs
test("Составить алгоритм: если введенное имя совпадает с Вячеслав, то вывести “Привет, Вячеслав”, если нет, то вывести Нет такого имени", () => {
  const result = checkUsername('Vladislav');
  expect(result).toBe('Нет такого имени');
});

test('Составить алгоритм: если введенное число больше 7, то вывести Привет', () => {
  const result = checkUsername('Вячеслав');
  expect(result).toBe('Привет Вячеслав');
});
