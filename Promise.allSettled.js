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

function myAllSettledPromise(inputPromises){
    return new Promise((resolve, reject) => {
        const results = new Array(inputPromises.length);
        let promisesCompleted = 0;
        for(let i = 0; i<inputPromises.length;i++){
            Promise.resolve(inputPromises[i]).then((val) => {
                results[i] = {status: 'fulfilled', value: val}
            }).catch((err) => {
                results[i] = {status : 'rejected', value: err}
            }).finally(() => {
                promisesCompleted++;
                if(promisesCompleted === inputPromises.length) {
                    resolve(results);
                }
            })
        }
    })
}

const p1 = generateResolvedPromise(1000);
const p2 = generateRejectedPromise(2000);

myAllSettledPromise([p1, p2]).then((val) => console.log(val)).catch((err) => console.log(err));