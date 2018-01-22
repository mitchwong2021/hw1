function move {

  right 
  var color = getColor
  if (color == "red") {
    up 
    up
    up
  } else {
    down 
    down
    down
  }
  
  var color2 = getColor
  if (color2 == "red"){
    left
  } else {
    right
  }
  
  if (color == "red") {
    up
  } else {
   down
  }

}

move 
