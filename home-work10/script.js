

const applyCallbackToEachElement = (arr, callback) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.push(callback(arr[i]));        
    }
    return newArr
}  
const arr = [1, 2, 3, 4, 5];  
const squareCallback = (number) => Math.pow(number, 2);  
const result = applyCallbackToEachElement(arr, squareCallback);  
console.log(result); 




const calculateDiscountedPrice = (price, discount, callback) => {
    const result = price - (price * discount / 100);
    callback(result)
};  
const showDiscountedPrice = (result) => console.log(`DiscountedPrice ${result}`);  
calculateDiscountedPrice(100, 10, showDiscountedPrice); 