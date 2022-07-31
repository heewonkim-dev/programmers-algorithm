function solution(n) {
    /*
     * 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴
    */
    
    // 최종 반환용 변수
    let answer = [];
    
    // 숫자를 문자열로 만든뒤, 배열로 만들고 뒤집기
    answer = String(n).split('').reverse().map((el) => Number(el));
    
    // 배열 최종 반환
    return answer;
}
