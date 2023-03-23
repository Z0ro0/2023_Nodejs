const fruits = ['사과', '바나나', '오렌지'];

for(let i = 0; i < 3; i++){
    console.log(fruits[i]);
}

fruits.forEach(function(f){
    console.log(f);
});

for(const f of fruits){
    console.log(f);
}