const name = 'mangofriend' //여기에 자기 엔트리아이디를 입력하세요
const userid = '5efd4fe435de2c0037665842' //여기에 자기 유저아이디를 입력
const gitname = 'mangofriend' //여기에 자기 깃허브아이디를 입력하세요
const nickname = '망고프렌드' //여기에 자기 별명을 입력하세요
const myment = '달달한 망고주스와 행복한 하루' //여기에 상태메시지를 
const mywork = '망고챗' //여기에 자신의 대표작품을 입력하세요
const career = '2년' //여기에 자신의 경력을 입력하세요
const explanation = '갓나온 신선한 망고' //여기에 자기소개를 입력하세요
const maincolor = '#FFCE00' //여기에 메인컬러를 입력하세요
const subcolor = '#FFA300' //여기에 서브컬러를 
const projectname = ['망고챗','망고캡챠','합이 7 핵심코드']; //여기에 자기 엔트리작품 이름을 입력하세요
const projectment = ['소규모 모임부터 대규모 회의까지','너 솔직히 사람 아니잖어','합이 7의 핵심 코드'] //여기에 자기 엔트리작품 소개를 입력하세요
const projectid = ['5f0e886c087c9d01032a1090','5f3cc9b471ec0e021c82288f','5f328a517425a6009e40edd1'] //여기에 자기 엔트리작품 id를 입력하세요






for(var i = 0; i<projectname.length; i++){ //버튼 생성
  document.getElementsByClassName('project')[0].innerHTML += `<a href="https://playentry.org/${name}/${projectid[i]}"><img src="https://playentry.org/uploads/thumb/${projectid[i].substring(0,4)}/${projectid[i]}.png"><div><p class="pname"><strong>${projectname[i]}</strong></p><p class="pment">${projectment[i]}</p></div></a>`
}
var avatar = `https://playentry.org/uploads/profile/${userid.substring(0,2)}/${userid.substring(2,4)}/avatar_${userid}.png`
document.title = `${nickname}의 공식사이트`
document.querySelector("body > div.name").innerHTML = name
document.querySelector("body > div.ment").innerHTML = myment
document.querySelector("body > div.container > svg > path").style.fill = maincolor
document.querySelector("body > div.profile > a").href = `https://playentry.org/${name}`
document.querySelector("body > div.profile > a").innerHTML = `<img src="${avatar}">`
document.querySelector("body > div.profile > div").innerHTML = `<p>이름 : ${name}</p><p>별명 : ${nickname}</p><p>대표작 : ${mywork}</p><p>경력 : ${career}</p><p>소개 : ${explanation}</p>`
document.querySelector("body > div.footer").innerHTML = `<a href="https://github.com/${gitname}"><span>Github</span></a><a href="https://playentry.org/${name}#!/"><span>Entry</span></a>`
