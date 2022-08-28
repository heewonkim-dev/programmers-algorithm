function solution(arr, divisor) {
    /*
     * array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환
     * divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환
    */
    
    // 최종 반환용 배열
    let answer = arr.filter((el) => {
        if(el % divisor === 0) return el
    }).sort((a, b) => a - b);
    
    // 길이가 0이면 [-1]을 리턴하고 아니면 기존 구한 최종 배열을 리턴
    if(answer.length === 0) return [-1];
    else return answer;
}
