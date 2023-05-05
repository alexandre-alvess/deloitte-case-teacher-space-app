export function dateFormat(date) {
    const dateInitial = new Date(date);
    
    return {
        date: (addZeros(dateInitial.getDate().toString())) + '/' +
              (addZeros(dateInitial.getMonth() + 1).toString()) + '/' +
              (dateInitial.getFullYear())
    };
    
}

function addZeros(number) {
    return number <= 9 ? "0" + number : number;
}