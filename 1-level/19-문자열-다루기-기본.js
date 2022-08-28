function solution(s) {
    /*
     * 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인
    */
    
    // 반례: 10e3은 숫자형으로 바꾸면 e가 제곱으로 인식됨.
    // return (s.length === 4 || s.length === 6) && !isNaN(Number(s));
        
    // 문자열을 숫자 타입으로 바꾼뒤 숫자로만 구성되었는지 확인
    const result = s.split('').filter(el => !isNaN(Number(el))).length;
    
    // 문자열의 길이가 4 또는 6인 경우 및 문자열 길이 확인 후 리턴
    return (s.length === 4 || s.length === 6) && result === s.length
}
