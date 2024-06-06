<template>
  <main class="container mt-5">
    <AsideNavComponent :content="anclas"/>
    <section class="row d-flex flex-column align-items-center text-white">
      <article class="col col-sm-6">
        <h1 class="titulos mb-3" id="aInicio">¿Qué es la diálisis?</h1>
        <p class="">
          Si separamos <span>Hemodiálisis</span> en dos partes, enternderemos
          mucho mejor de que va todo esto. La palabra
          <span> &quot;Hemo&quot;</span> significa sangre, y la palabra
          <span>&quot;diálisis&quot;</span> , disolución o proceso de
          filtración.
        </p>
      </article>

      <article class="col col-sm-6 noVisible">
        <p>
          Sabiendo esto podemos decir que, durante la Hemodiálisis, sometemos la
          sangre del paciente a un proceso de filtración
          <span>para eliminar moleculas</span> de desecho, como la Urea, y
          recuperar valores fisiológicos de otros como los iones potasio,
          calcio, sodio, fosforo...
        </p>
      </article>

      <article class="col col-sm-6 noVisible">
        <p>
          Ademas de ello, el tratamiento nos permite
          <span>eliminar el exceso de agua.</span>
          Recordemos que los riñones ademas de limpiar nuestra sangre, eliminan
          el agua de exceso, por lo que esta función también hay que
          sustituirla.
        </p>
      </article>
    </section>

    <article
      class="row d-flex flex-column flex-sm-row align-items-center text-white mt-5 dializador-container rounded shadow"
    >
      <div class="col col-sm-6">
        <img
          class="img-fluid"
          src="../assets/dializador.jpg"
          alt="dializador dibujado"
        />
      </div>
      <div class="col col-sm-6 noVisible">
        
          <h5 class="mb-5 text-white bold">
            ¿Cómo es posible que la sangre se limpie en una máquina?
          </h5>
          <p class="mt-3">
            La sangre pasa a traves de los
            <span>capilares de un DIALIZADOR</span> una y otra vez. Esta es la
            membrana a través de la cual, se realiza el
            <span>intercambio de moleculas</span>
            con el líquido de diálisis, el cual baña los capilares del
            dializador, y cuya composición son diversos solutos en concentración
            fisiológica.
          </p>
          <br /><br />
          <p>
            Esto es posible gracias a procesos físicos como la
            <span>difusión, convección y ultrafiltración</span> principalmente.
          </p>
        
      </div>
    </article>

    <article
      class="row d-flex flex-column flex-sm-row align-items-center text-white mt-5"
    >
      <div class="col col-sm-6">
        <h2 class="mb-3 titulos noVisible" id="aduracion">¿Por qué dura 4 horas la diálisis?</h2>
        <p class="noVisible">
          La diálisis se realiza hace mas de 50 años. En su inicio, las sesiones
          eran de unas 15 horas cada 5 dias. ¡¿Si verdad?! Una autentica burrada
          !! <br /><br />
          Piensa que los riñones sanos, trabajan 24h los 365 dias del año sin
          parar. Es lógico pensar que cuanto más tiempo de diálisis hagas mejor.
          Pese a ello, los pacientes seguian presentando sintomatología y
          complicaciones. Eso dió lugar a replantearse las cosas.<br /><br />

          Había que pensar en el paciente también, y buscar un <span>equilibrio
          aceptable entre supervivencia, salud y calidad de vida.</span> Por ello, 
          se
          fué reduciendo el tiempo de tratamiento progresivamente, y aumentando
          la frecuencia, hasta llegar al punto actual. Mundialmente se reconoce
          que
          <span
            >la dosis adecuada de diálisis está entorno a las 4 horas con una
            frecuencia de 3 dias semanales.</span
          >
          Esto no siempre es así, y a veces se tiene que individualizar,
          atendiendo a parámetros como la edad, la tolerancia al tratamiento,
          etc.
        </p>
      </div>
      <div class="col col-sm-6 noVisible">
        <img
          class="img-fluid"
          src="../assets/reloj.png"
          alt="dializador dibujado"
        />
      </div>
    </article>

    <article
      class="row d-flex flex-column flex-sm-row align-items-center text-white mt-5"
    >
      <div class="col col-sm-6 noVisible">
        <img
          class="img-fluid"
          src="../assets/sintomasImg.png"
          alt="dializador dibujado"
        />
      </div>
      <div class="col col-sm-6">
        <h2 class="mb-3 titulos noVisible" id="aSintomas">¿Qué síntomas puedo experimentar durante la diálisis?</h2>
        <p class="noVisible">
          Tanto la Hemodiálisis, como la diálisis peritoneal, a la cual
          dedicaremos un apartado más adelante, son tratamientos de suma
          importancia, ya que mantienen con vida a la persona hasta la llegada
          de un riñón compatible. <br /><br />
          No obstante, como en cualquier otro tratamiento,
          <span
            >pueden aparecer una serie de efectos secundarios y adversos</span
          >
          que pueden ponernos en riesgo durante la terapia sustitutiva.
          <br /><br />
          Es por ello que quiero que aprendas los más frecuentes. La mayoría de
          síntomas, si se consiguen identificar a tiempo, son relativamente
          fácil de eliminar.
          <br /><br />
          ¡¡ No dudes en <span>avisar a tu enfermera</span> con cualquier cosa
          diferente!!
        </p>
      </div>
    </article>

    <div class="row mt-5 noVisible">
      <div
        v-for="(sintoma, index) in sintomas"
        :key="index"
        class="col-sm-6 col-lg-2"
      >
        <div class="card shadow">
          <div class="card-body text-center">{{ sintoma.nombre }}</div>
        </div>
      </div>
    </div>

    <div class="row d-flex flex-column flex-sm-row seccion fondoRojo rounded shadow">
      <div class="col-12">
        <h2 class="titulos text-center mt-5" id="aMedicaciones">Medicaciones habituales</h2>
      </div>
      <div v-for="(card, index) in medicaciones" :key="index" class="col col-sm-6 col-md-4 mt-5 mb-5 mx-auto">
        <div class="card h-100 shadow noVisible">
          <img class="card-img-top" :src="card.ruta">
          <div class="card-body">
            <div class="card-title h4">{{ card.nombre }}</div>
            <div class="card-text">{{ card.descripcion }}</div>
          </div>
        </div>
      </div>
    </div>
    <ParametrosDialisisView/>
    <article
      class="row d-flex flex-column flex-sm-row align-items-center text-white mt-5 fondoRojo shadow p-3"
    >
      <div class="col col-sm-7 ">
        <h2 class="mb-3 titulos noVisible" id="aPeritoneal">¿Que es la Diálisis Peritoneal?</h2>
        <p class="noVisible">
          En la diálisis peritoneal se utiliza parte del <span>peritoneo a modo de dializador</span> . El agua y los solutos pueden pasar de
          la sangre al líquido de diálisis a través de la membrana peritoneal, una membrana gran parte de los
          organos abdominales. Unos dos litros de solución de diálisis se infunden en la cavidad abdominal mediante un tubo flexible de
          silicona denominado catéter.<br>
          El paciente tiene colocado el catéter de forma permanente mientras está en tratamiento de diálisis peritoneal. Cuando
          el líquido de diálisis se encuentra en la cavidad peritoneal, se produce la eliminación de los productos de desecho y
          del exceso de líquido hasta que se equilibra la concentración de solutos en la sangre y en líquido de diálisis. Esto 
          sucede mientras el líquido esta en el peritoneo, y se denomina 
           <span>tiempo de permanencia</span>. Después de
          un tiempo de permanencia determinado, el líquido de diálisis se vuelve a vaciar o drenar nuevamente a
          través del catéter. La diálisis peritoneal continúa a medida que se sustituye la solución de Diálisis drenada por una
          solución de diálisis nueva. Este proceso de sustitución de la solución por una nueva solución se
          denomina  <span>intercambio o sustitución</span> . El intercambio se repite varias veces al día, normalmente entre 4 y 5 veces.
        </p>
      </div>
      <div class="col col-sm-5 noVisible">
        <img
          class="img-fluid"
          src="../assets/peritoneal.png"
          alt="dializador dibujado"
        />
      </div>
    </article>

    <article
      class="row d-flex flex-column flex-sm-row align-items-center text-white mt-5"
    >
    <div class="col col-sm-5 noVisible">
      <img
        class="img-fluid"
        src="../assets/cicladora.png"
        alt="dializador dibujado"
      />
    </div>
      <div class="col col-sm-7">
        <h2 class="mb-3 titulos noVisible">Modalidades de dialisis peritoneal</h2>
        <ul class="noVisible">
        <li><span>DPCA:</span>  diálisis peritoneal continua ambulatoria</li><br>
        <p>En la cual realizamos los intercambios manualmente</p><br><br>
        <li><span> DPA</span>: diálisis peritoneal automatizada (con cicladora)</li> <br>
        <p>En la cual los intercambios se realizan por una máquina 
          llamada cicladora
        </p>
      </ul>
      </div>
    </article>


    <article
      class="row d-flex flex-column flex-sm-row align-items-center text-white mt-5 noVisible"
    >
   
      <div class="col col-sm-7 mx-auto">
        <h2 class="mb-3 titulos">Higiene durante la diálisis peritoneal</h2>
        <p>Es esencial seguir estrictas técnicas de higiene, a fin de impedir que los microorganismos entre en la
        cavidad peritoneal a través del catéter, de la extensión del catéter o durante la conexión de la bolsa de diálisis.
        Seguir al pie de la letra las recomendaciones del personal
        sanitario especializado es la mejor manera de evitar que se produzcan infecciones en el
        peritoneo, las denominadas <span>peritonitis</span> .</p><br>
      </div>
    </article>

    <article
      class="row d-flex flex-column flex-sm-row align-items-center text-white mt-5 noVisible"
    >
    <div class="col col-sm-5">
      <img
        class="img-fluid"
        src="../assets/turbio.png"
        alt="dializador dibujado"
      />
    </div>
      <div class="col col-sm-7">
        <h2 class="mb-3 titulos" id="aUrgencias">Cuando acudir al hospital </h2>
        <span>Liquido peritoneal turbio</span>
        <p>Esto es un signo claro de posible peritonitis.
        Puede ir acompañado o no de dolor abdominal, fiebre, nauseas ...</p><br><br>
        <span> Contaminación del prolongador</span>
        <p>Por caída del tapón, o por descuido higiénico durante la conexión o desconexión.
          Seguro que tu enfermera te ha recalcado varias veces la importancia de la higiene y
          ¡¡cuidado con tocar la punta del cateter!! <br>
          En este caso, acuerdate de pinzar el cateter con la pinza aportada lo más próximo a tu cuerpo 
          posible
        </p><br><br>
        <span>Rotura del cateter, corte, deterioro</span>
        <p>Acuerdate de pinzar el cateter lo más cerca de tu cuerpo posible y ve al hospital</p>
      </div>
    </article>

    <PeritonealComponent/>
    <CookiesComponent/>
  </main>
  
</template>

<script setup>
import ParametrosDialisisView from '@/components/ParametrosDialisisView.vue';
import PeritonealComponent from '@/components/PeritonealComponent.vue';
import AsideNavComponent from '@/components/AsideNavComponent.vue';
import medicaciones from '@/services/medicamentosService'
import sintomas from '@/services/sintomasService'
import CookiesComponent from '@/components/CookiesComponent.vue';
import { onBeforeRouteUpdate } from 'vue-router';

const pageMeta = {
  title: 'Qué es la diálisis',
  description: 'Aprende sobre que es la diálisis y sus diferentes formas, incluyendo la diálisis peritoneal. Encuentra información sobre síntomas, opciones de tratamiento y consejos de alimentación',
  keywords: 'dialisis, dialisis peritoneal, sintomas, tratamientos, nutricion, hiperpotasemia, ¿que es la dialisis?, sodio, fosforo'
};

// Actualizar las metaetiquetas y el título antes de cambiar de ruta
onBeforeRouteUpdate((to, from, next) => {
  updatePageMeta(to.meta);
  next();
});

// Función para actualizar las metaetiquetas y el título
function updatePageMeta(meta) {
  const head = document.head || document.getElementsByTagName('head')[0];

  // Actualizar el título
  const title = document.title;
  document.title = meta.title || title;

  // Actualizar las metaetiquetas
  const metaTags = head.getElementsByTagName('meta');
  for (let i = 0; i < metaTags.length; i++) {
    const tag = metaTags[i];
    if (tag.getAttribute('name') === 'description') {
      tag.content = meta.description || '';
    }
    if (tag.getAttribute('name') === 'keywords') {
      tag.content = meta.keywords || '';
    }
  }
}

// Configurar las metaetiquetas y el título inicialmente
updatePageMeta(pageMeta);



// eslint-disable-next-line no-unused-vars
const anclas=[
{
    nombre: "Subir",
    ancla: "#aInicio"
  },
  {
    nombre: "Duración",
    ancla: "#aduracion"
  },
  {
    nombre: "Síntomas",
    ancla: "#aSintomas"
  },
  {
    nombre: "Medicacion habitual",
    ancla: "#aMedicacion"
  },
  {
    nombre: "Dialisis Peritoneal",
    ancla: "#aPeritoneal"
  },
  {
    nombre: "Urgencias DP",
    ancla: "#aUrgencias"
  }
];


</script>

<style scoped lang="scss">
p,
summary {
  font-weight: bold;
}
.dializador-container {
  background: $redBlueGradient;
}

.card{
  overflow: hidden;
}
.card-img-top{
  height: 250px;
  transition: transform 0.3s ease;
}
.seccion{
  margin-top: 100px;
}
.card:hover .card-img-top{
  transform: scale(1.1);
}
.fondoRojo{
  background: $redBlueGradient;
}

</style>
