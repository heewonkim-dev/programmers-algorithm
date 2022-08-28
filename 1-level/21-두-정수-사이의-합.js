function solution(a, b) {
    /*
     * 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴
    */
    
    // 최종 리턴용 변수
    let answer = 0;
    
    // a와 b 크기 비교해서 시작점 구하기
    let start = a < b ? a : b;
    let end = a > b ? a : b;
    
    // a부터 b까지 순회하는 반복문
    for(let i = start; i <= end; i++){
        answer = answer + i;
    }
    
    // 최종 합 리턴
    return answer;
}
