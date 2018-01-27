// 생성자 함수에서의 this의 의미
function person() {
    this.someValue = 2;
    var someValue2 = 3;
}

console.log(person()); //실행결과는? 그 이유는?
// 리턴문이 없기 떄문에 undefined

console.log(new person()); // 생성자 함수로 생성시 실행결과는?
// 내부적으로 this 가 생성
// 만일 리턴문이 없으면 this 리턴


// 일반적인 this의 의미
console.log(someValue); // 실행결과와, 이유를 말하시오
// this.someValue 가 바로 상위 부모(해당 부모는 전역)의 변수로 넘어가면서 전역변수가 됨
