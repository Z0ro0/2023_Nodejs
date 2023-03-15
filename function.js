function add(n1, n2){
    return n1 + n2;
}

result = add(1, 2);
console.log(result);

plus = add;//plus도 add의 역할을 할 수 있음
result = plus(3,4);
console.log(result);

sub = (n1, n2) => n1 - n2;
result = sub(4, 2);
console.log(result);