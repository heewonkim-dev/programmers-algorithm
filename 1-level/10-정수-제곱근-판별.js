function solution(n) {
    /*
     * n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴
     * n이 양의 정수 x의 제곱이 아니라면 -1을 리턴
    */
    
    // 최종 리턴용 변수
    let answer = 0;
    
    // 양의 정수 제곱근이 아닌 경우
    if(!Number.isInteger(Math.sqrt(n))) answer = -1;
    // 양의 정수 제곱근인 경우
    else answer = Math.pow(Math.sqrt(n) + 1, 2);
    
    // 최종 결과값 리턴
    return answer;
}
