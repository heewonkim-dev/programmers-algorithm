function solution(num) {
    /*
     * 정수 num이 짝수일 경우 "Even"을 반환하고 
     * 홀수인 경우 "Odd"를 반환
    */
    
    // 반환용 변수
    let answer = '';
    
    // 짝수인 경우
    if(num % 2 === 0){
        answer = 'Even';
    } 
    // 홀수인 경우
    else answer = "Odd";
    
    // 값 반환
    return answer;
}
