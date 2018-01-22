function north {

  var i = 0
  while (i < 5){
    up
    i = i + 1
  }

}

function south {

  var i = 0
  while (i < 5){
    down
    i = i + 1
  }

}

function east {
 
  var i = 0
  while (i < 8){
    right
    i = i + 1
  }

}

function west {

  var i = 0
  while (i < 8){
    left
    i = i + 1
  }

}

south 
east
north
west
