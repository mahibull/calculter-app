let outputScreen=document.getElementById
('output-screen');


function clr() {
  outputScreen.value=''
}



function display(num) {
  outputScreen.value+=num
}


function calculate() {
  try{
    outputScreen.value=eval(outputScreen.value)
    
  } catch(err) {
   
   alert("invalid number")
  }
}

function del(){
  
  outputScreen.value=outputScreen.value.slice(0,-1)
}
