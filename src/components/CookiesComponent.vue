<!-- eslint-disable no-undef -->

<template>
    <div class="aviso-cookies" id="aviso-cookies">
  <h4 class="titulo">Cookies</h4>
  <p class="parrafo">Esta página web usa cookies.
    Las cookies de este sitio web se usan para personalizar
    el contenido y los anuncios y/o analisis del tráfico web. 
    Contiene enlaces a sitios web de terceros 
    con políticas de privacidad ajenas a las que usted podrá decidir si acepta o no cuando acceda a ellos.
    Pulsando Rechazar, usted borrará las cookies del sitio y deniega envio de cookies a Google Analytics. Además, le facilito un enlace al Plugin de Google que permite desactivar el seguimiento
    si así lo desea y se siente mas cómodo.</p>
  <button class="boton" id="btn-aceptar-cookies">De acuerdo</button>
  <button type="button" class=" boton btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCookies">Configurar</button>
  <a  class="enlace" href="cookies2.html">Aviso de Cookies</a><br>
  <a rel="nofollow" style="color:#ffde94;" href="https://tools.google.com/dlpage/gaoptout" target="_blank">Plugin Inhabilitar Google Analytics</a>
</div>
<div class="fondo-aviso-cookies" id="fondo-aviso-cookies"></div>

<!-- Modal -->
<div class="modal fade" id="modalCookies" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Configurar Cookies</h5>
      <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
        <span class="text-dark" aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      Si desactivas las cookies, es posible que alguna función de la página deje de funcionar.
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      <button type="button" class=" rechazar btn btn-primary">Desactivar</button>
    </div>
  </div>
</div>
</div>
</template>

<script setup>
import {onMounted} from 'vue';

onMounted(() => {
    const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
    const avisoCookies = document.getElementById('aviso-cookies');
    const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');
    const botonRechazarCookies = document.querySelectorAll('.rechazar')[0];
    const dataLayer = [];

  if (!localStorage.getItem('cookies-aceptadas')) {
    avisoCookies.classList.add('activo');
    fondoAvisoCookies.classList.add('activo');
  } else {
    dataLayer.push({ 'event': 'cookies-aceptadas' });
  }

  botonAceptarCookies.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    gtag('consent', 'update', {
      'ad_personalization': 'granted',
      'ad_user_data': 'granted'
    });

    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');
    localStorage.setItem('cookies-aceptadas', true);
    dataLayer.push({ 'event': 'cookies-aceptadas' });
    location.reload();
  });

  botonRechazarCookies.addEventListener('click', borrarCookie);

  function borrarCookie() {
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      var nombreCookie = c.substring(0, c.indexOf("="));
      console.log("Cookies rechazadas y borradas");
      document.cookie = nombreCookie + "=" + ";" + "max-age=0";
      avisoCookies.classList.remove('activo');
      fondoAvisoCookies.classList.remove('activo');
      localStorage.setItem('cookies-rechazadas', true);

      dataLayer.push({ 'event': 'cookies-rechazadas' });
      alert("Se han desactivado las cookies. Puede cerrar la ventana");
    }
    return null;
  }

});

</script>

<style scoped>

.aviso-cookies {
	display: none;
	background: black;
	padding: 20px;
	width: calc(100% - 40px);
	max-width: 300px;
	line-height: 100%;
	border-radius: 10px;
	position: fixed;
	bottom: 20px;
	left: 20px;
	z-index: 100;
	padding-top: 60px;
	box-shadow: 2px 0px 8px 0 rgba(255, 215, 0, 0.5);
	text-align: center;
  
}
.aviso-cookies .galleta {
	max-width: 100px;
	position: absolute;
	top: -50px;
	left: calc(50% - 50px);
}

.aviso-cookies.activo {
	display: block;
}


.aviso-cookies .titulo,
.aviso-cookies .parrafo {
	margin-bottom: 15px;
  color: #ffde94;
}

.aviso-cookies .boton {
	width: 100%;
	background: #595959;
	border: none;
	color: #fff;
	font-family: 'Roboto', sans-serif;
	text-align: center;
	padding: 15px 20px;
	font-weight: 700;
	cursor: pointer;
	transition: .3s ease all;
	border-radius: 5px;
	margin-bottom: 15px;
	font-size: 14px;
}

.aviso-cookies .boton:hover {
	background: rgb(119, 198, 241);
}

.aviso-cookies .enlace {
	color: #4DBFFF;
	text-decoration: none;
	font-size: 14px;
}

.aviso-cookies .enlace:hover {
	text-decoration: underline;
}
.fondo-aviso-cookies {
	display: none;
  background: rgba(235, 229, 229, 0.2);
	position: fixed;
	z-index: 99;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
}

.fondo-aviso-cookies.activo {
	display: block;
}
</style>