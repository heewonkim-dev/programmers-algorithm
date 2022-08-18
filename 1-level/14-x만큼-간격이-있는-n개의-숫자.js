function solution(x, n) {
    /*
     * x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴
    */
    
    // 리턴용 배열
    let answer = [];
    
    // n까지 순회하면서 배열에 넣기
    for(let i = 1; i <= n; i++){
        answer.push(x * i);
    }
    
    // 최종 배열 리턴
    return answer;
}
