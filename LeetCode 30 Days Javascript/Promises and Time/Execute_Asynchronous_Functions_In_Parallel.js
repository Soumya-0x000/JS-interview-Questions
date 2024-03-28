var promiseAll = async function(functions) {
    return await new Promise((resolve, reject) => {
        // steps 1 and 2 of approach described above
        let arr = Array(functions.length);
        let waitingFor = functions.length;

        // steps 3 and 4
        for(let i = 0; i < functions.length; ++i){
            functions[i]()
                .then((result) => { 
                    arr[i] = result; 
                    if (--waitingFor === 0) resolve(arr);
                }).catch(reject);
        }
    });
};
