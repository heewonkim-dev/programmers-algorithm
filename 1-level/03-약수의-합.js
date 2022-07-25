function solution(n) {
    /*
     * 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴
    */
    
    // 리턴용 변수
    let answer = 0;
    
    // 1부터 n까지 순회해서 나누어 떨어지는 수 더해나가기
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            answer = answer + i;
        }
    }
    
    // 더해진 최종 값 리턴
    return answer;
}
