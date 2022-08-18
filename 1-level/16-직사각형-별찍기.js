process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
    /*
     * 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력
    */
    
    // 주어진 데이터
    const n = data.split(" ");
    // 가로와 세로 길이
    const a = Number(n[0]);
    const b = Number(n[1]);
    
    // 세로 길이만큼 순회
    for(let i = 0; i < b; i++){
        // 한 줄에 해당하는 문자열
        let str = '';
        // 가로 길이만큼 순회하면서 가로 길이만큼의 문자열 생성
        for(let j = 0; j < a; j++){
            str = str + '*';
        }
        // 완성된 가로줄 출력
        console.log(str);
    }
    
});
