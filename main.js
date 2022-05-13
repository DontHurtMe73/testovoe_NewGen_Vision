const courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
  ];
  
  const requiredRange1 = [null, 200];
  const requiredRange2 = [100, 350];
  const requiredRange3 = [200, null];
  
  const filterAndSortFun = function (arr, min, max) {

    //фильтр курсов по цене
    let result = arr.filter((item) => item.prices[0] >= min && item.prices[1] <= max)
  
    //сортировка курсов по цене
    result = result.sort((a, b) => a.prices[0] - b.prices[0])
  
    return result
  }
  
  const funResult = filterAndSortFun(courses, ...requiredRange2)
  console.log(funResult)