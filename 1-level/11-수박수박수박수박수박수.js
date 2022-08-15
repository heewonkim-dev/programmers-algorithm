function solution(n) {
    /*
     * 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴
    */
    
    // 최종 반환용 문자열
    let answer = '';
    
    // 해당 숫자까지 순회
    for(let i = 1; i <= n; i++){
        // 짝수와 홀수인 경우 문자열에 추가할 것들
        if(i % 2 === 1) answer = answer + '수';
        else answer = answer + '박';
    }
    
    // 최종 문자열 리턴
    return answer;
}
