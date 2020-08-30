const name = 'avocad5' //여기에 자기 엔트리아이디를 입력하세요
const gitname = 'avocad5' //여기에 자기 깃허브아이디를 입력하세요
const nickname = '아보카도' //여기에 자기 별명을 입력하세요
const myment = '더 참신하게, 더 재미있게, 더 멋지게' //여기에 상태메시지를 
const explanation = '코딩과 수학을 좋아하는 평법한 중1' //여기에 자기소개를 입력하세요

const projectname = ['3d ball run','알까기의왕','엔플러스엔진']; //여기에 자기 엔트리작품 이름을 입력하세요

const projectment = ['렉 안걸리는 3d!','인공지능과 함께 알까기를 즐겨보세요!','야, 너두 3d만들수있어'] //여기에 자기 엔트리작품 소개를 입력하세요

const projectid = ['5e3f6015960df10024ab07a7','5e00a9134a413900566992bb','5e95ba64614b6000ec78f37f'] //여기에 자기 엔트리작품 id를 입력하세요

for(var i = 0; i<projectname.length; i++){ //버튼 생성
  document.getElementsByClassName('project')[0].innerHTML += `<a href="https://playentry.org/${name}/${projectid[i]}"><img src="https://playentry.org/uploads/thumb/${projectid[i].substring(0,5)}/${projectid[i]}.png"><div><p class="pname"><strong>${projectname[i]}</strong></p><p class="pment">${projectment[i]}</p></div></a>`
}

document.title = `${nickname}의 공식사이트`
document.getElementByClassName('name')[0].innerHTML = name
document.getElementByClassName('ment')[0].innerHTML = myment
document.getElementByClassName('about')[0].innerHTML = `<p>이름 : ${name}</p><p>별명 : ${nickname}</p><p>소개 : ${explanation}</p>`
document.getElementByClassName('footer')[0].innerHTML = `<a href="https://github.com/${gitname}"><span>Github</span></a><a href="https://playentry.org/${name}#!/"><span>Entry</span></a>`
