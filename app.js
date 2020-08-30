let projectname = ['EntMission','EntCanvas','avoMacro','3d ball run','엔플러스엔진','카네이션그리기 대회','알까기의왕','맞춤법검사기','2048 인공지능','무게중심물리엔진','illustrator','엔트리에서 제일어려운퍼즐','롤링볼','스파이더런','포물선물리엔진 예제','스와이프벽돌깨기','유전적알고리즘 예제','데이터예측시스템'];

let projectment = []
projectment.push('어려운 코딩문제를 원한다면 여기로오세요!')
projectment.push('노마드코더님의 바닐라js강의를 보고 만든 사이트')
projectment.push('자신의 작품을 avoMacro가 자동으로 홍보해줍니다!')
projectment.push('렉이 없고, 삼각함수조차 쓰지않은 신박한 3d게임')
projectment.push('누구나 출처없이 사용가능한 게임엔진입니다')
projectment.push('나만의 카네이션을 그리고<br>다른사람들과 공유해보세요!')
projectment.push('인공지능과 함께 즐기는<br>5대5 알까기')
projectment.push('엔트리최초<br>맞춤법검사를 구현한작품')
projectment.push('2048게임을 스스로 하는 인공지능!')
projectment.push('무게중심을 구현한 강체물리엔진')
projectment.push('무려 8가지의 브러쉬가 준비되어있는 그림판!')
projectment.push('아무나 풀수없는<br>고난이도 퍼즐게임')
projectment.push('새로운방식의 신개념 파쿠르!')
projectment.push('스파이더의 모험')
projectment.push('중력, 파워 심지어 공기저항까지<br>모두 조절가능한 포물선물리엔진!')
projectment.push('avocad5가 엔트리초보때 만든 작품')
projectment.push('스스로 학습하는 인공지능을 구현한 작품!')
projectment.push('딥러닝을 활용한 작품')


let projectlink = []
projectlink.push('https://avocad5.github.io/EntMission/')//엔트미션
projectlink.push('https://avocad5.github.io/EntCanvas/')//엔트캔버스
projectlink.push('https://playentry.org/ds#!/tips/5ec1158f64729e012555760f?category=tips&rows=20&title=&page=1&currentPage=1&sort=created&username=avocad5&isOwnerView&search_title=')//아보매크로
projectlink.push('http://naver.me/xvdk8r1B')//3d ball run
projectlink.push('http://naver.me/GNKw38I5')// 엔플러스엔진
projectlink.push('http://naver.me/Fn8D7XGr')//카네이션그리기대회
projectlink.push('http://naver.me/xN7ZVTpX')//알까기의왕
projectlink.push('http://naver.me/IgowtXNX')//맞춤법검사기
projectlink.push('http://naver.me/FlWQ6H3L')//2048 인공지능
projectlink.push('http://naver.me/GiiKU7Zo')//무게중심물리엔진
projectlink.push('http://naver.me/Fpp7LCnz')//일러스트레이터
projectlink.push('http://naver.me/x84qgkbV')//어려운퍼즐
projectlink.push('http://naver.me/FzNabBp4')//롤링볼
projectlink.push('http://naver.me/FB68kkhR')//스파이더런
projectlink.push('http://naver.me/GmHMFmcs')//포물선
projectlink.push('http://naver.me/FKs9oMGu')//스와이프벽돌깨기
projectlink.push('http://naver.me/xhOREGFT')//유전적알고리즘예제
projectlink.push('http://naver.me/FcUoFyQc')//데이터예측


for(var i = 0; i<projectname.length; i++){ //버튼 생성
  document.getElementsByClassName('project')[0].innerHTML += `<a href="${projectlink[i]}"><img src="${i-2}.png"><div><p class="pname"><strong>${projectname[i]}</strong></p><p class="pment">${projectment[i]}</p></div></a>`
}
