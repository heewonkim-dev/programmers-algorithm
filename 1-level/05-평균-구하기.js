function solution(arr) {
    /*
     * 정수를 담고 있는 배열 arr의 평균값을 return
    */
    
    // 최종 반환용 변수 
    let answer = 0;
    
    // 변수의 합 구하기 (reduce 메서드)
    const sum = arr.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    
    // 반환용 변수에 합을 길이로 나눈 것 할당
    answer = sum / arr.length;
    
    // 최종 값 반환
    return answer;
}
