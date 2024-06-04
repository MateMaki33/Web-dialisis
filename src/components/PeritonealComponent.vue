<template>
    <section class="row mt-5 noVisible">
        <div class="col-12"><h2 class="titulos text-center">Valorando la urgencia</h2></div>
        <div class="row cardsContainer">

        <div class="col-12 col-lg-3 cardDiv">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Liquido hemático</h5>
                <p class="card-text">En ocasiones, un líquido peritoneal rosado(como agua de lavar carne), 
                 puede ser normal debido a obulación en la mujer o riñones poliquísticos.<br>En estos casos, puede realizar lavados manuales hasta aclarar. 
                 Esto ayudará a que el cateter no se obstruya. Además puede ser útil utilizar líquido sin calentar.<br>Si el color es muy intenso, signo de un sangrado más abundante, 
                 o se acompaña de dolor abdominal, <span>SI DEBERÍA ACUDIR A URGENCIAS</span></p>
              </div>
             </div>
        </div>
        <div class="col-12 col-lg-3 cardDiv">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Orificio del cateter</h5>
                <p class="card-text">Acuda al hospital si hay <span>supuración, dolor abdominal, o liquido turbio.</span> 
                    En este caso, acuerdate de pinzar el cateter con la pinza aportada lo más próximo a tu cuerpo 
                    posible. <br>Si no hay estos signos de infección, usted deberá valorar. Puede realizar una cura lavando bien y 
                    aplicando la antisepsia habitual en la zona, como le habrán enseñado, 
                    y pedir cita con su servicio de nefrología para valorar el orificio.</p>
              </div>
             </div>

        </div>
        <div class="col-12 col-lg-3 cardDiv">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Fuga de líquido</h5>
                <p class="card-text">Puede darse el caso de fuga de líquido a través del orificio, e incluso hacia genitales. <br>
                En este caso deberá parar los intercambios y quedar vacío. <br>
                Trás la valoración por su especialista, se podrá retomar la diálisis peritoneal, o tomar otras medidas como dejar descansar el 
                peritoneo unos días sustituyendo por hemodiálisis</p>
              </div>
             </div>

        </div>
        <div class="col-12 col-lg-3 cardDiv">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Drenaje escaso</h5>
                <p class="card-text">Esto suele darse por : <br>
                <span>Estreñimiento:</span> Su médico le puede pautar laxantes para movilizar el intestino y vaciarlo. Esto ayudará a drenar mejor. <br>
                
                <span>Fibrina:</span> hebras como clara de huevo flotando que hacen que se obstruya. Su médico le dará o ya le habrá dado unas
                pautas de heparina.</p>
              </div>
             </div>
        </div>
     </div>
        
    </section>
</template>

<script setup>
</script>

<style scoped lang="scss">
section {
    background: $redBlueGradient;
    padding: 20px;
    height: 75vh;
    
}

.cardsContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.cardDiv {
    
    margin-top: 20px;
}

.card {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
@media (max-width: 992px) {
  section{
    height: auto;
    transition: all 0.4s ease-out;
  }
}
</style>