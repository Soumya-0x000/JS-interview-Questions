const promise = new Promise((res) => res(2));
promise
    .then((v) => {
        console.log(v);
        return v*2;
    })
    .then((v) => {
        console.log(v);
        return v*2;
    })
    .finally((v) => {
        console.log(v)
        return 0;
    })
    .then((v) => {
        console.log(v)
        return v*3
    })
    .then((v) => {
        console.log(v)
    })