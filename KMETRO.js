

//-----방생성-----/

room1 = game.createRoom("room1", "subway1.jpg") // 방 생성
room2 = game.createRoom("room2", "기관실3.jpg")
//room1

room1.setRoomLight(0.7)

room1.victim = room1.createObject("victim","쓰러진사람.png")
room1.locateObject(room1.victim, 760,730)
room1.victim.setWidth(600)

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

//---함수---//


/*
function Bloodstain(room,name,image) {
  this.room = room
  this.name = name
  this.image = image
}
*/

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
  showKeypad("telephone","1463",function(){
    room1.door.unlock()
    printMessage("삐비빅")
  })
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
game.move(room1)
