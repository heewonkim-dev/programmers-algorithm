function solution(s){
    /*
     * s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 
     * v다르면 False를 return 하는 solution 
    */

    // p와 y의 갯수 카운트
    const pCount = s.split('').filter(el => el === 'p' || el === 'P').length;
    const yCount = s.split('').filter(el => el === 'y' || el === 'Y').length;

    // p와 y의 갯수가 서로 같은지 여부를 리턴
    return pCount === yCount;
}
