function solution(arr) {
    /*
     * 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴
    */
    
    // 결과 반환용 배열
    let answer = [];
    
    // 배열에 요소가 1개만 있는 경우
    if(arr.length === 1) answer = [-1];
    
    // 그냥 일반 배열인 경우
    else answer = arr.filter((el, idx) => {
        // 최솟값 아닌 요소들만 필터해서 리턴
        const minNum = Math.min(...arr);
        return el !== minNum
    });
    
    // 최종 배열 리턴
    return answer;
}
