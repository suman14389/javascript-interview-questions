const STATES = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
}

class myPromise {
    constructor(callback){
        this.state = STATES.PENDING;
        this.value = null;

        callback(this.onResolve, this.onReject);
    }

    onResolve(value) {
        this.value = value;
        this.state = STATES.FULFILLED;
    }

    onReject(value) {
        this.value = value;
        this.state = STATES.REJECTED;
    }

    then(onSuccess, onFail) {
        return new myPromise((resolve, reject) => {
        })
    }

}