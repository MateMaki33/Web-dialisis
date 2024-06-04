import { ref } from "vue";

const medicaciones=ref([]);
medicaciones.value.push(
  { 
    nombre: "Eritropoyetina" ,
    descripcion: "La Eritopoyetina o EPO, es una hormona generada en los riñones. Su función consiste en estimular a la médula osea para producir mas globulos rojos. Por lo tanto, ayuda a corregir la anemia y suele asociarse con hierro, otro componente fundamental.",
    ruta: require("@/assets/epo.jpg")
  },
  { 
    nombre: "Paricalcitol", 
    descripcion: "Análogo sintético de los receptores de la vitamina D y sensibles al calcio. Para entendernos, imita a la vitamina D y al calcio en los receptores de la glandula paratiroidea. Esto da lugar a que la hormona paratiroidea no se dispare, controlando nuestros niveles de calcio y fosforo. Recordamos que la hormona paratiroidea se libera cuando hay niveles bajos de calcio, y va al hueso para obtenerlo de ahi principalmente.",
    ruta: require("@/assets/zemplar.jpg")
  },
  { 
    nombre: "Hierro", 
    descripcion:"Junto a la Eritropoyetina, contribuye a la producción de sangre para minimizar o corregir la anemia.",
    ruta: require("@/assets/hierro.jpg")
  },
  { 
    nombre: "Cinacalcet",
    descripcion: "Calcimimético. Es decir, imita al calcio y como el paricalcitol, controla la secreción de hormona paratiroidea para regular el calcio y fosforo.",
    ruta: require("@/assets/mimpara.jpg")
  },
  {
     nombre: "Etelcalcetida",
     descripcion: "Calcimimético. Es decir, imita al calcio y como el paricalcitol y cinacalcet, controla la secreción de hormona paratiroidea para regular el calcio y fosforo. Es para inyectar.",
     ruta: require("@/assets/parsavib.jpg")
    }
  
);

export default medicaciones