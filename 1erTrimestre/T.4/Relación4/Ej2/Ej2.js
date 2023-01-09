window.onload = () => {
    let botonIncrementar = document.getElementById("incrementar");
    let botonDecrementar = document.getElementById("decrementar");
    let botonDefecto = document.getElementById("defecto");
    let botonIzquierda = document.getElementById("izquierda");
    let botonCentrada = document.getElementById("centro");
    let botonJustificado = document.getElementById("justificada");
  
    let parrafos = document.getElementsByTagName("p");
  
    function getNumberFromString(string) {
      let tmp = string.split("");
      let map = tmp.map((x) => {
        if (!isNaN(parseInt(x))) {
          return x;
        }
      });
  
      let numbers = map.filter((value) => {
        return value != undefined;
      });
  
      return numbers.join("");
    }
    
    botonIncrementar.addEventListener("click", () => {
      for (let i = 0; i < parrafos.length; i++) {
        let actualSize = parseInt(getNumberFromString(parrafos[i].style.fontSize));
        parrafos[i].style.fontSize = actualSize + 1 + "px";
      }
    });
  
    botonDecrementar.addEventListener("click", () => {
      for (let i = 0; i < parrafos.length; i++) {
        let actualSize = parseInt(getNumberFromString(parrafos[i].style.fontSize));
        parrafos[i].style.fontSize = actualSize - 1 + "px";
      }
    });
  
    botonDefecto.addEventListener("click", () => {
      for (let i = 0; i < parrafos.length; i++) {
          parrafos[i].style.fontSize = "16px";
      }
    });
  
    botonIzquierda.addEventListener("click", () => {
      for (let i = 0; i < parrafos.length; i++) {
          parrafos[i].style.textAlign = "left";
      }
    });
  
    botonCentrada.addEventListener("click", () => {
      for (let i = 0; i < parrafos.length; i++) {
          parrafos[i].style.textAlign = "center";
      }
    });
  
    botonJustificado.addEventListener("click", () => {
      for (let i = 0; i < parrafos.length; i++) {
          parrafos[i].style.textAlign = "justify";
      }
    });
  };