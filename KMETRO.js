
var countboom = 0
var stop = 0

//-----방생성-----/

room1 = game.createRoom("room1", "subway1.jpg") // 방 생성
room2 = game.createRoom("room2", "기관실3.jpg")
room3 = game.createRoom("room3", "underoom.jpg")
//room1

room1.setRoomLight(0.7)
room1.expression = room1.createObject("expression","수식.jpg")
room1.expression.setWidth(30)
room1.locateObject(room1.expression,760,730)
//room1.expression.hide()

room1.victim = room1.createObject("victim","쓰러진사람.png")
room1.locateObject(room1.victim, 750,720)
room1.victim.setWidth(250)


room1.hint1 = room1.createObject("hint1","핏자국투.png")
room1.locateObject(room1.hint1, 640,600)
room1.hint1.setWidth(120)

room1.blood1 = room1.createObject("blood1","핏자국2.png")
room1.locateObject(room1.blood1, 700,330)
room1.blood1.setWidth(50)

room1.blood2 = room1.createObject("blood2","핏자국3.png")
room1.locateObject(room1.blood2, 700,460)
room1.blood2.setWidth(40)

room1.uv = room1.createObject("uv","uv.png")
room1.locateObject(room1.uv, 810,590)
room1.uv.setWidth(70)

room1.door = room1.createObject("door","방1문투.png")
room1.locateObject(room1.door,643,386.5)
room1.door.setWidth(56)
room1.door.lock()

room1.keypad = room1.createObject("keypad","키패드.png")
room1.locateObject(room1.keypad,592.5,340)
room1.keypad.setWidth(20)

//room2
room2.handle = room2.createObject("handle","손잡이.png")
room2.locateObject(room2.handle,998,355)

room2.underdesk = room2.createObject("underdesk","underdesk.png")
room2.locateObject(room2.underdesk,780,510)
room2.underdesk.setWidth(125)

room2.window = room2.createObject("window","창문.png")
room2.locateObject(room2.window,390,80)
room2.window.setWidth(300)

room2.arrow = room2.createObject("arrow","왼.png")
room2.locateObject(room2.arrow,50,360)
room2.arrow.setWidth(60)

//room3
room3.poem = room3.createObject("poem","별헤는밤.jpg")
room3.poem.setWidth(50)
room3.locateObject(room3.poem,470,370)

room3.extinguisher = room3.createObject("extinguisher","소화기.png")
room3.locateObject(room3.extinguisher,470,395)
room3.extinguisher.setWidth(120)

room3.arrow = room3.createObject("arrow","뒤로가기.png")
room3.locateObject(room3.arrow,640,600)
room3.arrow.setWidth(60)
//---함수---//


/*
function Bloodstain(room,name,image) {
  this.room = room
  this.name = name
  this.image = image
}
*/
//room1
room1.uv.onClick = function() {
  room1.uv.pick()
  room1.blood2.setSprite("핏자국3투.png")
}

room1.hint1.onClick = function()  {
  if(game.getHandItem() == room1.uv){
    room1.hint1.setSprite("핏자국.png")
  }
}

room1.blood2.onClick = function()  {
  if(game.getHandItem() == room1.uv){
    room1.blood2.setSprite("핏자국3.png")
  }
}

room1.keypad.onClick = function() {
  showKeypad("telephone","1464",function(){
    room1.door.unlock()
    printMessage("삐비빅")
  })
}

room1.victim.onClick = function() {
  if(room1.expression.isPicked()){
    printMessage("기관사로 보이는 사람이 쓰러져 있다.")
  } else{
    printMessage("기관사의 바지 주머니에서 쪽지를 발견했다!")
    room1.expression.pick()
  }
}

room1.door.onClick = function() {
  if(room1.door.isLocked()){
    printMessage("문이 열리지 않는다.")
  } else if(room1.door.isClosed()){
    printMessage("문이 열렸다.")
    room1.door.setSprite("방1문열.png")
    room1.door.open()
  } else{
    game.move(room2)
  }
}

//room2
room2.underdesk.onClick = function () {
  game.move(room3)
}

room2.window.onClick = function() {
  if(game.getHandItem() == room3.extinguisher){
    if(countboom < 2){
      printMessage("쿵!")
      printMessage("한번만 더 쳐보자.")
      countboom = countboom + 1
    } else{
      printMessage("창문이 깨졌다")
      }
  } else{
    if(countboom < 2){
      if(stop){
        printMessage("얇은 유리창이다.")
      } else{
        printMessage("얇은 유리창 너머로 풍경이 지나간다.")
      }
    } else{
      printMessage("창문이 깨졌다")
      }
  }
}

room2.arrow.onClick = function() {
  game.move(room1)
}

//room3

room3.extinguisher.onClick = function() {
  room3.extinguisher.pick()
}

room3.poem.onClick = function() {
  if(game.getHandItem() == room1.uv){
    showImageViewer("별헤는밤힌.jpg")
  } else{
    showImageViewer("별헤는밤.jpg")
    }
}

room3.arrow.onClick = function() {
  game.move(room2)
}
/*
room1_door.door = room.createObject("door1", "문-오른쪽-닫힘.png") // 문 생성
room.door.setWidth(136) // 크기 조절
room.locateObject(room.door, 1049, 300) // 문 배치
room.door.onClick = function() { // door를 클릭했을 때
	if(room.door.isClosed()){ // door가 closed 상태이면
		room.door.open() // door의 상태를 open으로 바꿈
	} else if (room.door.isOpened()){ // door가 opened 상태이면
		game.clear() // 게임 클리어
	} else {
		// 아무것도 하지 않는다
	}
}

room.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room.door.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}

*/


//---------------------------게임 초기화-----------------------/-----------/
game.start(room1) // 게임시작
printMessage("방탈출에 오신 것을 환영합니다!") // 환영 메시지 출력
game.move(room2)
