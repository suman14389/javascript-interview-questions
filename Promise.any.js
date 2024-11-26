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

function myPromiseAny(inputPromises) {
    return new Promise((resolve, reject) => {
        if(!inputPromises.length){
            resolve([]);
        }
        const results = new Array(inputPromises.length);
        let rejectedPromises = 0;
        for(let i=0;i<inputPromises.length;i++){
            Promise.resolve(inputPromises[i]).then((val) => {
                resolve(val);
                return;
            }).catch((err) => {
                results[i] = err;
                rejectedPromises++;
                if(rejectedPromises === inputPromises.length){
                    reject(results);
                }
            }) 
        }
    })
}

const p3 = generateRejectedPromise(1000);
const p4 = generateResolvedPromise(2000);

myPromiseAny([p3, p4]).then((val) => console.log(val)).catch((err) => console.log(err));