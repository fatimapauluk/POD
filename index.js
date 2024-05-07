let pesoValue = 2
let colorValue = ('#D3FD01')
let colorValue1= "white"
let relleno= "white"
let sliderPeso
let pPeso
let saveButton
let anchoLetra = 150
let texto 
let myInput
let size = 0.5
let i= 0
let grosorvariable= 1
let pesoValue1 = 2


function setup() {

  createCanvas(1440,1674)
 
  //barra para escribir
  myInput = createInput("")
  myInput.position(380, 1155)
  myInput.addClass('myInput')

  //slider de grosor
  sliderPeso = createSlider(2, 80, 0, 1)
  sliderPeso.position(655, 753)

  //boton para guardar png
  saveButton = createButton('Guardar')
  saveButton.position(1300, 1475)
  saveButton.mousePressed(guardarTipo)

}

function draw() {
  background (0,0)
  Fondo(0,0)

  // molecula que sigue al mouse
  Molecula(mouseX,mouseY, 0.2, colorValue, grosorvariable)
  
  //flecha abajo
  push()
  translate(80, 347)
  Flechaabajo (0,0)
  pop()

  //flecha arriba
    push()
    translate(207, 347)
    Flechaarriba(0,0)
    pop()
  
  //flecha
  push()
  translate(230, 1190)
  Flecha (0,0)
  pop()

//texto explicativo
  textFont("Amiko") 
  noStroke()
  fill(245, 245, 245)
  textSize(18)
  text("La tipografía Molecula emerge fusionando la ciencia de la molecular con el diseño y la comunicación visual. ", 386, 311)
  text("La inspiración molecular radica en la unión de elementos simples que dan lugar a estructuras complejas. Esta", 386, 341)
  text("inspiración científica no solo le confiere un carácter distintivo, sino que también evoca una sensación de orden", 386, 371)
  text("y precisión. Los círculos que componen la tipografía representan los átomos de una molécula. Esta metáfora", 386, 401)
  text("visual subraya la importancia de la cohesión y la colaboración en la comunicación efectiva.", 386, 431)

//texto explicativo 2
  textSize(24)
  text("Escriba para", 31, 1178)
  text("probar la", 31, 1214)
  text("tipografía", 31, 1250)

//barra donde se escribe
  texto = myInput.value()

  let x = 49
  let y = 1400
  for (let letra of texto) {

    if (letra == 'Y') {
      LetraRellenaY(x, y, 'black', 1, 0, 0)
    } else if (letra == 'Z') {
      LetraRellenaZ(x, y, 'black', 1, 0, 0)
    } else if (letra == 'a') {
      LetraRellenaA(x, y, size, colorValue, 1, 0, 0)
    }
    if (letra == 'b') {
      LetraRellenaB(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'c') {
      LetraRellenaC(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'd') {
      LetraRellenaD(x, y, size, colorValue, 1, 0, 0)
    }
    if (letra == 'e') {
      LetraRellenaE(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'f') {
      LetraRellenaF(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'g') {
      LetraRellenaG(x, y, size, colorValue, 1, 0, 0)
    }
    if (letra == 'h') {
      LetraRellenaH(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'i') {
      LetraRellenaI(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'j') {
      LetraRellenaJ(x, y, size, colorValue, 1, 0, 0)
    }
    if (letra == 'k') {
      LetraRellenaK(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'l') {
      LetraRellenaL(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'm') {
      LetraRellenaM(x, y, size, colorValue, 1, 0, 0)
    }
    if (letra == 'n') {
      LetraRellenaN(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'o') {
      LetraRellenaO(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'p') {
      LetraRellenaP(x, y, size, colorValue, 1, 0, 0)
    }
    if (letra == 'q') {
      LetraRellenaQ(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'r') {
      LetraRellenaR(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 's') {
      LetraRellenaS(x, y, size, colorValue, 1, 0, 0)
    }
    if (letra == 't') {
      LetraRellenaT(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'u') {
      LetraRellenaU(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'v') {
      LetraRellenaV(x, y, size, colorValue, 1, 0, 0)
  } else if (letra == 'w') {
      LetraRellenaW(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'x') {
      LetraRellenaX(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'y') {
      LetraRellenaY(x, y, size, colorValue, 1, 0, 0)
    }else if (letra == 'z') {
      LetraRellenaZ(x, y, size, colorValue, 1, 0, 0)
    }

    if (letra == 'B') {
      LetraRellenaB(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'C') {
      LetraRellenaC(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'D') {
      LetraRellenaD(x, y, size, colorValue, 1, 0, 0)
    }
    if (letra == 'E') {
      LetraRellenaE(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'F') {
      LetraRellenaF(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'G') {
      LetraRellenaG(x, y, size, colorValue, 1, 0, 0)
    }
    if (letra == 'H') {
      LetraRellenaH(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'I') {
      LetraRellenaI(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'J') {
      LetraRellenaJ(x, y, size, colorValue, 1, 0, 0)
    }
    if (letra == 'K') {
      LetraRellenaK(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'L') {
      LetraRellenaL(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'M') {
      LetraRellenaM(x, y, size, colorValue, 1, 0, 0)
    }
    if (letra == 'N') {
      LetraRellenaN(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'O') {
      LetraRellenaO(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'P') {
      LetraRellenaP(x, y, size, colorValue, 1, 0, 0)
    }
    if (letra == 'Q') {
      LetraRellenaQ(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'R') {
      LetraRellenaR(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'S') {
      LetraRellenaS(x, y, size, colorValue, 1, 0, 0)
    }
    if (letra == 'T') {
      LetraRellenaT(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'U') {
      LetraRellenaU(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'V') {
      LetraRellenaV(x, y, size, colorValue, 1, 0, 0)
  } else if (letra == 'W') {
      LetraRellenaW(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'X') {
      LetraRellenaX(x, y, size, colorValue, 1, 0, 0)
    } else if (letra == 'A') {
      LetraRellenaA(x, y, size, colorValue, 1, 0, 0)
    }


    x = x + anchoLetra

  }

//rectangulo para que las letras que se escriben no sigan de largo 
  push()
  translate(1233, 1305)
  Rect (0,0)
   pop()
  
//molecular
let x1= 49
LetraRellenaM(x1, 50, 0.4 , colorValue, pesoValue1)
LetraRellenaO (179, 50, 0.4, colorValue, pesoValue1)
LetraRellenaL(309, 50, 0.4, colorValue, pesoValue1) 
LetraRellenaE(439, 50, 0.4, colorValue, pesoValue1) 
LetraRellenaC(569, 50, 0.4, colorValue, pesoValue1)
LetraRellenaU (699, 50,0.4, colorValue, pesoValue1) 
LetraRellenaL(829, 50, 0.4, colorValue, pesoValue1) 
LetraRellenaA(959, 50, 0.4, colorValue, pesoValue1) 

// molecula que se mueve sola
i= i+0.1
abs(sin(i))
grosorvariable= 25*abs(sin(i)) + 20
Molecula(1210,60, 0.4, colorValue, grosorvariable)

//abecedario
//linea uno
LetraRellenaA(27, 867, 0.2, colorValue, pesoValue1) 
LetraRellenaB(138, 867, 0.2, colorValue, pesoValue1) 
LetraRellenaC(249, 867, 0.2, colorValue, pesoValue1) 
LetraRellenaD(360, 867, 0.2, colorValue, pesoValue1) 
LetraRellenaE(471, 867, 0.2, colorValue, pesoValue1) 
LetraRellenaF(582, 867, 0.2, colorValue, pesoValue1) 
LetraRellenaG(693, 867, 0.2, colorValue, pesoValue1) 
LetraRellenaH(804, 867, 0.2, colorValue, pesoValue1) 
LetraRellenaI(915, 867, 0.2, colorValue, pesoValue1) 
LetraRellenaJ(1026, 867, 0.2, colorValue, pesoValue1) 
LetraRellenaK(1137, 867, 0.2, colorValue, pesoValue1) 
LetraRellenaL(1248, 867, 0.2, colorValue, pesoValue1) 
LetraRellenaM(1359, 867, 0.2, colorValue, pesoValue1) 
//linea dos
LetraRellenaN(27, 1004, 0.2, colorValue, pesoValue1) 
LetraRellenaO(138, 1004, 0.2, colorValue, pesoValue1) 
LetraRellenaP(249, 1004, 0.2, colorValue, pesoValue1) 
LetraRellenaQ(360, 1004, 0.2, colorValue, pesoValue1) 
LetraRellenaR(471, 1004, 0.2, colorValue, pesoValue1) 
LetraRellenaS(582, 1004, 0.2, colorValue, pesoValue1) 
LetraRellenaT(693, 1004, 0.2, colorValue, pesoValue1)
LetraRellenaU(804, 1004, 0.2, colorValue, pesoValue1) 
LetraRellenaV(915, 1004, 0.2, colorValue, pesoValue1) 
LetraRellenaW(1026, 1004, 0.2, colorValue, pesoValue1) 
LetraRellenaX(1137, 1004, 0.2, colorValue, pesoValue1) 
LetraRellenaY(1248, 1004, 0.2, colorValue, pesoValue1) 
LetraRellenaZ(1359, 1004, 0.2, colorValue, pesoValue1) 

//slider
pesoValue = sliderPeso.value()

// texto que afecta el slider
 translate(49, 528)
 //linea uno
  LetraRellenaE(0,0, 0.2, relleno, colorValue1, pesoValue)
  LetraX (65, 0, 0.2, colorValue1, pesoValue)
  LetraRellenaP(130, 0, 0.2, relleno, colorValue1, pesoValue)
  LetraRellenaL(195, 0, 0.2,relleno, colorValue1, pesoValue)
  LetraRellenaO(260, 0, 0.2,relleno, colorValue1, pesoValue)
  LetraR(325, 0, 0.2, colorValue1, pesoValue)
  LetraRellenaE(390,0, 0.2,relleno, colorValue1, pesoValue)
  LetraRellenaL(520, 0, 0.2,relleno, colorValue1, pesoValue)
  LetraRellenaA(585, 0, 0.2,relleno, colorValue1, pesoValue)
  LetraRellenaT(715, 0, 0.2,relleno, colorValue1, pesoValue)
  LetraRellenaI(780, 0, 0.2,relleno, colorValue1, pesoValue)
  LetraP(845, 0, 0.2, colorValue1, pesoValue)
  LetraRellenaO(910, 0, 0.2,relleno, colorValue1, pesoValue)
  LetraRellenaG(975, 0, 0.2,relleno, colorValue1, pesoValue)
  LetraRellenaR(1040, 0, 0.2,relleno, colorValue1, pesoValue)
  LetraRellenaA(1105, 0, 0.2,relleno, colorValue1, pesoValue)
  LetraF(1170, 0, 0.2, colorValue1, pesoValue)
  LetraRellenaI(1235, 0, 0.2,relleno, colorValue1, pesoValue)
  LetraRellenaA(1300, 0, 0.2,relleno, colorValue1, pesoValue)

  //linea dos
  LetraRellenaA(130, 100, 0.2, relleno, colorValue1, pesoValue)
  LetraRellenaN(260, 100, 0.2, relleno, colorValue1, pesoValue)
  LetraRellenaI(325, 100, 0.2,relleno, colorValue1, pesoValue)
  LetraRellenaV(390, 100, 0.2,relleno, colorValue1, pesoValue)
  LetraE(455, 100, 0.2, colorValue1, pesoValue)
  LetraRellenaL(520, 100, 0.2,relleno, colorValue1, pesoValue)
  LetraM(650, 100, 0.2, colorValue1, pesoValue)
  LetraRellenaO(715, 100, 0.2,relleno, colorValue1, pesoValue)
  LetraRellenaL(780, 100, 0.2,relleno, colorValue1, pesoValue)
  LetraRellenaC(910, 100, 0.2,relleno, colorValue1, pesoValue)
  LetraRellenaE(845, 100, 0.2,relleno, colorValue1, pesoValue)
  LetraRellenaC(910, 100, 0.2,relleno, colorValue1, pesoValue)
  LetraU(975, 100, 0.2, colorValue1, pesoValue)
  LetraRellenaL(1040, 100, 0.2,relleno, colorValue1, pesoValue)
  LetraRellenaA(1105, 100, 0.2,relleno, colorValue1, pesoValue)
  LetraRellenaR(1170, 100, 0.2,relleno, colorValue1, pesoValue)
  
  
}

function guardarTipo() {
  saveCanvas('tipo', 'png')
}

function keyPressed() {
  console.log('tipié la tecla: ', key)
  if (key == "ArrowUp") {
    colorValue= "white"
  } else if (key== "ArrowDown") {
    colorValue= ('#D3FD01')
}
}