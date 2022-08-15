function solution(n){
    /*
     * 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return
    */
    
    // n을 문자열로 바꾸고 찢어서 각 요소를 더한 값을 리턴 
    return String(n).split('').reduce((acc, cur) => acc + Number(cur), 0);
}
