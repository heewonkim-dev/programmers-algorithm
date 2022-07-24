function solution(array, commands) {
    /*
     * commands는 각각 [i, j, k]로 구성
     * 배열 i번부터 j번까지 자르기
     * 이 배열을 정렬
     * 정렬된 배열에서 k번째 숫자 찾기
    */
    
    // answer: 리턴용 최종 배열
    let answer = [];

    // commands 순회
    for(let i = 0; i < commands.length; i++){
        // 배열 i번부터 j번까지 자르기
        let result = array.slice(commands[i][0] - 1, commands[i][1]);
        // 이 배열을 정렬
        result.sort((a, b) => a - b);
        // 정렬된 배열에서 k번째 숫자 찾아서 리턴용 배열에 추가
        answer.push(result[commands[i][2] - 1]);
    }
    
    // 최종 결과물 리턴
    return answer;
}
