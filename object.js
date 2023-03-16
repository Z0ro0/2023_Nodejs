const cathy = {
    "name": "cathy",
    "age": 31,
    "skills": ["자바 스크립트", "인공지능", "자바", "리액트", "코볼"]
};

console.log(cathy);
console.log(cathy.name);
console.log(cathy["name"]);

cathy["name"] = "만복이";
console.log(cathy["name"]);

cathy["성별"] = "female";
console.log(cathy.성별);
