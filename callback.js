function somefunc(callback){
    console.log("comefunc 실행");
    callback();
}

function cb(){
    console.log("콜백함수 실행");
}

somefunc(cb);