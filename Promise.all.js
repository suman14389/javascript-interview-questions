function generateResolvedPromise(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(delay);
        }, delay)
    })
}

function generateRejectedPromise(delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            reject(delay);
        }, delay)
    })
}

function myPromiseAll (inputPromises) {
    return new Promise(function(resolve, reject) {
        const resolvedPromises = new Array(inputPromises.length);
        let resolvedCount = 0;

        for(let i=0; i<inputPromises.length; i++){
            // Promise.resolve is used to handle non-promise values, and it will return a promise that will resolve to the value of the input promise
            Promise.resolve(inputPromises[i]).then((val) => {
                resolvedPromises[i] = val;
                resolvedCount++;
                if(resolvedCount === inputPromises.length) {
                    resolve(resolvedPromises);
                }
            }).catch((err) => {
                reject(err);
            })
        }
    })
}

const p1 = generateResolvedPromise(1000);
const p2 = 3;
const p3 = 5;

myPromiseAll([p1, p2, p3]).then((val) => {
    console.log(val);
}).catch((err) => {
    console.log(err);
})