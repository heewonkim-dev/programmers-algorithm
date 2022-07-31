function solution(a, b) {
    /*
     * 2016년 a월 b일은 무슨 요일일까요? 
     * 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴
    */
    
    // 최종 리턴용 변수
    let answer = '';
    
    // 요일 배열
    const dateArray = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    
    // 요일 숫자로 변환
    const dateToWeekNumber = new Date(`2016-${a}-${b}`).getDay();
    
    // 해당 숫자에 맞는 요일 할당
    answer = dateArray[dateToWeekNumber];
    
    // 최종 값 리턴
    return answer;
}
