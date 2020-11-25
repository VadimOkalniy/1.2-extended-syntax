function getResult(a, b, c) {
    // код для задачи №1 писать здесь
    // return x;
    let d = Math.pow(b, 2) - 4 * a * c;
    let arr = [];
  for (i=0; i<=1; i++)
  { if (d == 0) {
       arr[i] = (-b + Math.sqrt(d)) / 2 * a
        return arr;
  }
    else if (d > 0) {
        arr[i] = (-b + Math.sqrt(d)) / 2 * a;
        arr[i+1] = (-b - Math.sqrt(d)) / 2 * a;
 return arr;
    }
     
}
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark;

    // код для задачи №2 писать здесь
    // return averageMark;

    let sum = 0;
    let count = 0;
    let m
    if (marks.length == 0) {
        return 0;
    }
    if(marks.lenght>5){
        console.log("В массиве больше 5 оценок")
        m = marks.splice(5)
    }
     
        for (let i = 0; i < marks.length; i++) {
            
            
            sum = sum + marks[i];
        }

        
        return sum=sum /marks.lenght;
        //  return s;
    

}




