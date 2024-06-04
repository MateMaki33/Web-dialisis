

const preguntas =[];

preguntas.push(
    {
        h2id : "titulo1",
        dataTarget : "#primerCollapse",
        divIdCollapse : "primerCollapse",
        ariaExpanded: "true",
        divCollapseClass: "accordion-collapse collapse show",
        buttonClass:"accordion-button",
        question: "Fístula o cateter",
        respuesta: "Generalmente se recomienda Fístula. " +
        "Presenta menos complicaciones y riesgos en cuanto a infección, trombosis,así como mejor flujo de sangre mejorando la dosis de diálisis."+
        "Ademas, debido al riesgo de infección, el cateter no debe mojarse"

    },

    {
        h2id : "titulo2",
        dataTarget : "#segundoCollapse",
        divIdCollapse : "segundoCollapse",
        ariaExpanded: "false",
        divCollapseClass: "accordion-collapse collapse",
        buttonClass:"accordion-button collapsed",
        question: "Cuando llega el transplante",
        respuesta: "Dificil de responder. Intervienen varios factores como rangos de edad, compatibilidad, comorbilidad o tipo de donante. " +
        "Basándome en algunos artículos científicos, te diré que la media se situa entorno a 20 y 24 meses"
        

    },

    {
        h2id : "titulo3",
        dataTarget : "#tercerCollapse",
        divIdCollapse : "tercerCollapse",
        ariaExpanded: "false",
        divCollapseClass: "accordion-collapse collapse",
        buttonClass:"accordion-button collapsed",
        question: "Soy demasiado mayor para transplante",
        respuesta: "Esto no es así. Actualmente la edad del receptor no es limitante"+
        "Se realizan transplantes a mayores de 75 años. Lo que sí es restrictivo son algunas patologías de las cuales destacan cardiacas o cancerosas"

    },

    {
        h2id : "titulo6",
        dataTarget : "#sextoCollapse",
        divIdCollapse : "sextoCollapse",
        ariaExpanded: "false",
        divCollapseClass: "accordion-collapse collapse",
        buttonClass:"accordion-button collapsed",
        question: "Puedo bañarme con cateter",
        respuesta: "La respuesta es no. Debes mantener el cateter seco y limpio y solo debe manipularlo tu Enfermera o Nefrólogo. " +
        "Existe un alto riesgo de infección por lo que el baño está contraindicado. " +
        "En su lugar utiliza la ducha cubriendo bien el cateter con una funda impermeable o bolsa. Lava alrededor con una esponja suavemente "+
        "y evita el chorro directo sobre él."

    },
    {
        h2id : "titulo4",
        dataTarget : "#cuartoCollapse",
        divIdCollapse : "cuartoCollapse",
        ariaExpanded: "false",
        divCollapseClass: "accordion-collapse collapse",
        buttonClass:"accordion-button collapsed",
        question: "Por que 4 horas",
        respuesta: "<a href='/dialisis#aduracion'>Por que ...</a>"

    },

    {
        h2id : "titulo5",
        dataTarget : "#quintoCollapse",
        divIdCollapse : "quintoCollapse",
        ariaExpanded: "false",
        divCollapseClass: "accordion-collapse collapse",
        buttonClass:"accordion-button collapsed",
        question: "Urgencias en Diálisis Peritoneal",
        respuesta: "<a href='/dialisis#aUrgencias'>¿Urgente?</a>"

    },



    
);

export default preguntas;