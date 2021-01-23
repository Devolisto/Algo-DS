const numbers = [
    [1, 2, 3, 4],
    [3, 6, [5, 6], 8, 2, [2, 4], 9],
    [4, 2, [6, 7, [2, 6, 1]]],
  ];
  
  const arraySum = (array) => {
    let sum = 0;
    array.forEach((element) => {
      if (typeof element === "number") sum += element;
      else sum += arraySum(element);
    });
    return sum;
  };
  
  console.log(arraySum(numbers));