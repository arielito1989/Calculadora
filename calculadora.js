const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll(".botones");


botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const apretarBoton = boton.textContent;
        
        if (boton.id ==="c") {
            pantalla.textContent = "0"
            return; 
        }

        if (boton.id === "borrar"){
            if (pantalla.textContent.length ===1 || pantalla.textContent === "Error!"){
                pantalla.textContent = "0";
            }else {
                pantalla.textContent = pantalla.textContent.slice(0,-1)
            
            }
            return;
        }
        
        if (boton.id === "igual"){
            try {
            pantalla.textContent = eval(pantalla.textContent);
            }catch{
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (pantalla.textContent === "0"|| pantalla.textContent === "Error!"){
            pantalla.textContent = apretarBoton;
            
        }else {
            pantalla.textContent += apretarBoton; 
        }
    })
});

