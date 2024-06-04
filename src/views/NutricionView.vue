<template>
  <main class="container h-100 mb-3">
    <AsideNavComponent :content="anclas"/>
    <section
      class="row d-flex flex-column flex-sm-row align-items-center justify-content-around text-white mt-5"
    >
      <article class="col col-sm-5">
        <h1 class="mb-3 titulos " id="aNutricion">Nutrición en diálisis</h1>
        <p>
          Cuando nuestros riñones no funcionan, todos los
          <span>productos de desecho </span> que se producen durante el
          metabolismo, <span>se acumulan</span> en la sangre, dando lugar a un
          entorno no fisiológico con grandes y peligrosas repercusiones en
          nuestra salud. Incluso comprometer nuestra vida. <br /><br />
          Por ello, tenemos que cumplir unas pautas dietéticas bastante
          restrictivas y ser disciplinado en este sentido. Nuestro principal
          objetivo irá enfocado a controlar mayoritariamente, la ingesta de
          alimentos ricos en <span>Potasio, Fósforo y Sal.</span> <br /><br />
          Tranquilo, tendrás un grán abanico de profesionales que te ayudarán a
          organizar tu dieta para que no tengas ningún problema. Además del
          médico especialista, y del personal de Enfermería, con el que mas
          trato directo tiene el paciente en diálisis, algunos centros cuentan
          con apoyo de <span>profesionales especializados en nutrición</span>.
        </p>
      </article>
      <article class="col col-sm-5 noVisible">
        <img
          class="img-fluid"
          src="../assets/veneno.png"
          alt="caricatura de riñon"
        />
      </article>
    </section>

    <section
      class="row d-flex flex-column flex-sm-row align-items-center justify-content-around text-white mt-5"
    >
      <article class="col col-sm-5 noVisible">
        <img
          class="img-fluid"
          src="../assets/sobrecarga.png"
          alt="caricatura de riñon"
        />
      </article>
      <article class="col col-sm-5">
        <h2 class="mb-3 titulos noVisible">Líquidos en diálisis</h2>
        <p class="noVisible">
          ¡¡ Efectivamente !! <br />
          Aunque algunos pacientes mantienen la capacidad de orinar y quitarse
          literalmente un peso de encima, lo habitual es perder esta función
          progresivamente hasta no producir orina. <br />
          Quiero aclarar que, aunque un paciente orine, si está en el programa
          de Diálisis, es porque los riñones eliminan agua, pero no son capaces
          de eliminar otras moléculas para limpiar la sangre.
          <br /><br />
          Esta <span> acumulación de líquido</span>, supone un gran esfuerzo al
          corazón, que es el encargado de bombear la sangre junto con todo ese
          líquido de más.
          <br />
          Al final, este agua se &quot;desborda &quot;, el corazón se agota, y
          aparecen signos como:
        </p>
        <br />
        <ul class="noVisible">
          <span>
            <li>Edemas en piernas y cara principalmente</li>
            <li>Fatiga, falta de aire</li>
            <li>Necesidad de dormir con varias almohadas</li>
            <li>Edema agudo de pulmón (muy grave)</li>
          </span>
        </ul>
      </article>
    </section>

    <div class="row d-flex mt-5 noVisible">
      <div class="col d-flex justify-content-center">
        <img
          class="rounded shadow w-50"
          src="../assets/edema.png"
          alt="esquema edema agudo de pulmon"
        />
      </div>
    </div>

    <section class="row d-flex justify-content-around mt-5 noVisible">
      <article class="col-12 text-center mb-5">
        <h2 class="mt-3 titulos" id="aMinerales">SODIO, POTASIO Y FÓSFORO</h2>
        <br /><br />
        <p class="text-white">
          Como hemos comentado, nuestro principal objetivo con la alimentación
          es limitar la <span>sal (Na), potasio (K) y fósforo (P).</span>
          Las sintomatología del exceso de estos elementos es variada y puede
          llegar a ser muy grave. Especialmente el Potasio.
        </p>
      </article>
      <figure class="col-12 col-sm-5 col-lg-3">
        <img
          src="../assets/sodio-removebg-preview.png"
          alt="efectos del sodio "
          class="img-fluid"
        />
        <div class="capa d-flex align-items-center">
          <p class="text-white">
            El sodio va a <span>aumentar nuestra tensión</span> , además de
            provocar <span> sed</span>. Esto hace que bebamos mas agua con
            riesco de sobrehidratación.
          </p>
        </div>
      </figure>
      <figure class="col-12 col-sm-5 col-lg-3">
        <img
          src="../assets/fosfo-removebg-preview.png"
          alt="efectos del fosforo"
          class="img-fluid"
        />
        <div class="capa">
          <p class="text-white mt-3">
            El exceso de fósforo produce extracción de calcio de los huesos.
            Esto da lugar a sintomatología variada como:
          </p>
          <br /><br />
          <ul class="list-unstyled" style="color: white">
            <li><span>Calambres</span></li>
            <br />
            <li><span>Debilidad</span> de huesos y articulaciones</li>
            <br />
            <li><span> Erupción de la piel, picor</span></li>
          </ul>
        </div>
      </figure>
      <figure class="col-12 col-sm-5 col-lg-3">
        <img
          src="../assets/potasio-removebg-preview.png"
          alt=""
          class="img-fluid"
        />
        <div class="capa d-flex align-items-center">
          <p class="text-white">
            Con la hiperpotasemia hay que tener especial cuidado. <br />
            <span>Debilidad</span> , que en situaciones muy graves puede llevar
            a la parálisis incluso respiratoria. <br />
            <span>Alteraciones en el corazón</span> , con cambios en el
            electrocardiograma que, en casos graves, pueden producir arritmias
            malignas que lleven a la <span>muerte</span> .
          </p>
        </div>
      </figure>
    </section>

    <div class="row mt-5 d-flex justify-content-center noVisible">
      <div class="col-12 col-sm-6 shadow rounded bg-white" id="aGuia">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <a href="https://www.instagram.com/p/CGrv4eSJkye/" target="_blank"
                ><img
                  src="../assets/frutas.png"
                  class="d-block w-100"
                  alt="frutas en dialisis"
              /></a>
            </div>
            <div class="carousel-item">
              <a href="https://www.instagram.com/p/CGrv4eSJkye/" target="_blank"
                ><img
                  src="../assets/hortalizas.png"
                  class="d-block w-100"
                  alt="hortalizas en dialisis"
              /></a>
            </div>
            <div class="carousel-item">
              <a href="https://www.instagram.com/p/CJBQFiyFkL2/" target="_blank"
                ><img
                  src="../assets/piramidefosforo.png"
                  class="d-block w-100"
                  alt="fosforo en dialisis"
              /></a>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon carouselIcon"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon carouselIcon"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <CookiesComponent/>
  </main>
</template>

<script setup>
import AsideNavComponent from '@/components/AsideNavComponent.vue'
import CookiesComponent from '@/components/CookiesComponent.vue';
import { onBeforeRouteUpdate } from 'vue-router';

const pageMeta = {
  title: 'Nutrición en la diálisis',
  description: 'Aprende sobre que es la diálisis y sus diferentes formas, incluyendo la diálisis peritoneal. Encuentra información sobre síntomas, opciones de tratamiento, consejos de alimentación y otros',
  keywords: 'dialisis, dialisis peritoneal, sintomas, tratamientos, nutricion en diálisis, hiperpotasemia, ¿que es la dialisis?, sodio, fosforo'
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
    ancla: "#aNutricion"
  },
  {
    nombre: "Minerales",
    ancla: "#aMinerales"
  },
  {
    nombre: "Síntomas",
    ancla: "#aSintomas"
  },
  {
    nombre: "Guia fotográfica",
    ancla: "#aGuia"
  }

];

</script>

<style scoped>

figure {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  border-radius: 20px;
  box-shadow: 4px 0px 8px 2px rgba(0, 0, 0, 1);
}
figure img {
  transition: all 500ms ease-out;
}
.capa {
  overflow: scroll;
  position: absolute;
  height: max-content;
  font-size: small;
  top: 0;
  left: 0;
  height: 100%;

  transition: all 100ms ease-out;
  background: linear-gradient(
    90deg,
    rgba(241, 183, 183, 1) 0%,
    rgba(251, 28, 28, 1) 47%,
    rgba(233, 8, 8, 1) 100%
  );
  opacity: 1;
  visibility: hidden;
  text-align: center;
}
.capa::-webkit-scrollbar {
  display: none;
}

figure:hover > .capa {
  opacity: 1;
  visibility: visible;
}
.carouselIcon {
  width: 50px;
  height: 50px;
  background-color: black;
}
</style>
