function throttling (callback, time) {
    let inThrottleGap = false;
    return function() {
        console.log("coming");
        if(inThrottleGap) {
            return;
        }
        callback();
        inThrottleGap = true;
        setTimeout(() => {
            inThrottleGap = false;
        }, time);
    }
}

const throttleWrapper = throttling(()=> {
    console.log("this is throttling");
}, 1000);

setInterval(throttleWrapper, 300);




