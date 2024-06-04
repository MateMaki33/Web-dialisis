
const parametros=[];
parametros.push(
  { 
    nombre: "glucemia" ,
    descripcion: "<p>La <span>glucemia</span> es la concentración de glucosa en sangre. " +
    "Si eres diabético, tu enfermero controlará tu glucemia, ya que durante la diálisis, " +
    "es posible que los niveles bajen produciendo la sintomatología asociada a una hipoglucemia. <br><br>" +
    "Temblor, sudoración, dolor de cabeza, palpitaciones, nauseas ...</p>",
    ruta: require("@/assets/glucemia.png")
  },
  { 
    nombre: "recirculacion", 
    descripcion: "<p>La <span>recirculación</span> hace referencia a cuanta sangre dializada " +
    "vuelve a entrar al dializador. Se da en porcentaje y cuanto mayor sea," + 
    " peor calidad de diálisis, ya que &quot;limpiamos sobre limpio&quot;." +
    "Puede darse por varios motivos como: <br><br> Agujas muy juntas <br> Obstrucción <br> Flujo de acceso vascular menor al flujo de la bomba <br></p>",
    ruta: require("@/assets/recirculacion.png")
  },
  { 
    nombre: "peso", 
    descripcion: "<p>El <span>peso seco</span> hace referencia al peso que el médico " +
    "pauta al paciente, en el cual no hay edemas, hipertensión arterial, " +
   "o cualquier otro signo o síntoma que afecte e incomode al paciente por exceso de líquido. "+
    "Se va ajustando en función de estos signos y síntomas pero, existen pruebas complementarias para ayudar a determinarlo" +
    "en función de la composición corporal." +
   "</p>",
    ruta: require("@/assets/peso.png")
  },
  { 
    nombre: "tension",
    descripcion: "<p> En el paciente renal, generalmente <span>la tensión</span>  suele estar mas elevada de " +
    "los rangos habituales. No obstante, en patología crónica, el cuerpo se adapta, " +
    "y pacientes con cifras de <span>hipertensión</span>  pueden no presentar sintomatología.</p>" +
  "<p>" +
    "Durante el tratamiento, al extraer líquido, puede bajar y dar"  +
    "lugar a <span> hipotensión</span>" +
  "</p><br>" +
  "<p>Por ello, no hemos de asustarnos, pero sí llevar este seguimiento para conocernos. " +
   "La tensión arterial es un gran orientador para establecer tu peso seco y para evitar " +
   " complicaciones y sensaciones desagradables durante el tratamiento. " +
  "</p>",
    ruta: require("@/assets/tension.png")
  },
  {
     nombre: "ktv",
     descripcion: "<p>El <span>Kt o Kt/V</span> hace referencia a cuanto se ha limpiado " +
     "la sangre. Concretamente, se basa en la cantidad de urea eliminada. Son indicadores muy utilizados para saber " +
     "si la dosis de diálisis ha sido adecuada. <br><br> " +
     "Actualmente, los diversos estudios a nivel mudial establecen una dosis adecuada " +
     "a partir de <span>1.2</span>  0 <span>1.4</span>  de Kt/v dependiendo de la bibliografía",
     ruta: require("@/assets/ktv.png")
    },
    {
        nombre: "volumenSangre",
        descripcion: "<p>El <span>volumen de sangre</span> no es mas que la cantidad " +
        "de sangre que ha pasado por el dializador. Suele aparecer en litros.</p>",
        ruta: require("@/assets/volumen.png")
       }
  
);

export default parametros