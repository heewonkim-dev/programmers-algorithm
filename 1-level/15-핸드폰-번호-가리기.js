function solution(phone_number) {
    /*
     * 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴
    */
    
    // 최종 반환용 문자열
    let answer = phone_number.split('').map((el, idx) => {
        if(idx <= phone_number.length - 5) return '*';
        else return el
    }).join('');
    
    // 문자열 리턴
    return answer;
}
