function getResult(a, b, c) {
    // код для задачи №1 писать здесь
    // return x;
    let x1
    let x2
    let d = Math.pow(b, 2) - 4 * a * c;
    let arr = [x1, x2];
    if (d < 0) {

    }
    else if (d == 0) {
        x1 = (-b + Math.sqrt(d)) / 2 * a;
        arr[0] = x1;
        arr[1] = null;

    }
    else if (d > 0) {
        arr[0] = (-b + Math.sqrt(d)) / 2 * a;
        arr[1] = (-b - Math.sqrt(d)) / 2 * a;

    }
    return arr;
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
    else {
        for (let i = 0; i < marks.length; i++) {

            count = count + 1;
            if (count > 5) {
                m = marks.splice(5)
                console.log("В массиве больше 5 оценок")
                return sum = sum / (count - 1);
            }
            sum = sum + marks[i];
        }
        sum = sum / count
        return sum;
        //  return s;
    }

}




function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    // return result;
}