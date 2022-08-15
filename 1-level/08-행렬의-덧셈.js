function solution(arr1, arr2) {
    /*
     * 2개의 행렬 arr1과 arr2를 입력받아, 
     * 행렬 덧셈의 결과를 반환
    */
    
    // map을 돌려서 arr1 배열 순회하며 같은 인덱스에 위치한 arr2값 더하기
    const answer = arr1.map((array, idx) => {
        const result = array.map((item, index) => item + arr2[idx][index]);
        return result
    })
    // 최종 계산 결과 리턴
    return answer;
}
