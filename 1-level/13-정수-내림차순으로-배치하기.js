function solution(n) {
    /*
     * n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴
    */
    
    // n을 문자열로 만들어 찢은 뒤, 내림차순 정렬 후 다시 합치기
    const sortedNum = String(n).split('').sort((a, b) => b - a).join('');
    
    // 합친 문자열을 숫자로 변환한 값 리턴
    return Number(sortedNum);
}
