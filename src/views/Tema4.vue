<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Atención en salud mental

    .row.align-items-center
      .col-lg-7.bg-base9.bg-r8.p-3

        p.mt-3 El seguimiento en salud mental constituye un componente esencial de la atención integral, orientado a acompañar el proceso de recuperación emocional y prevenir posibles afectaciones posteriores. Su desarrollo implica acciones continuas, responsables y articuladas que fortalecen el bienestar de la persona atendida. Comprender estos elementos permite consolidar una atención más segura y humanizada. A continuación, se presenta un pódcast que amplía estos aspectos y orienta su aplicación en el contexto asistencial.
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/1.svg', alt='', style="width: 100%").m-auto
    
    .row.justify-content-center.mt-4
      .col-lg-10.bg-14
        figure(data-aos="zoom-in-down")
          img(src='@/assets/curso/tema4/2.svg', style="width:400px").m-auto
        .row.bg-base8.p-4.align-items-center.justify-content-center
          .col-12.bg-11.p-4
            TarjetaAudio.color-acento-botones.mb-3.bg-11.p-3(
                texto="podcast"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

    .row.justify-content-center.mt-4.mb-4
      .col-lg-10
        .row.align-items-center.mt-4
          .col-lg-12
            .row.justify-content-center
              .col-10
                .titulo-sexto.color-acento-contenido.mb-3.mt-4
                  h5 Figura 2.
                  span Componentes de la atención inicial en salud mental en casos de violencia sexual
                .row.bg-12.bg-r8
                  figure
                    img.d-none.d-md-block.m-auto.p-5(
                      src='@/assets/curso/tema4/3.svg', style="width: 70%"
                      alt='Figura 2. Diagrama que muestra la atención inicial en salud mental: inicia con evaluación emocional, continúa con la identificación de riesgo de hacerse daño o dañar a otros y define dos acciones posibles: continuar acompañamiento o activar atención especializada inmediata.'
                    )
                    img.d-block.d-md-none.m-auto.p-5(
                      src='@/assets/curso/tema4/4.svg',
                      alt='Figura 2. Diagrama que muestra la atención inicial en salud mental: inicia con evaluación emocional, continúa con la identificación de riesgo de hacerse daño o dañar a otros y define dos acciones posibles: continuar acompañamiento o activar atención especializada inmediata.'
                    )

    .row.align-items-center
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/5.svg', alt='', style="width: 390px").m-auto
      .col-lg-8
        p.mt-3 Si bien la intervención inicial permite contener la crisis y estabilizar emocionalmente a la persona, en algunos casos pueden identificarse condiciones que requieren valoración y manejo especializado. En estos escenarios, el servicio de salud debe activar de manera oportuna la remisión correspondiente, garantizando continuidad y protección integral.
        
        p.mt-3 Cuando la intervención inicial no resulta suficiente, es necesario definir los criterios que orientan la remisión oportuna a la atención especializada en salud mental:


    .row.align-items-center.mt-4
      .col-lg-8
        .row.mt-2.bg-15.p-3.bg-base6.bg-r8
          .col-12
            .titulo-fondo: h4 Criterios de remisión a atención especializada
            
            p.mt-3 La remisión a atención especializada en salud mental procede cuando se identifican condiciones que superan el alcance de la intervención inicial.
            
            p.mt-3 Entre los criterios más frecuentes se encuentran:

              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Síntomas persistentes de ansiedad, depresión o estrés postraumático.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Riesgo de autoagresión o heteroagresión.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Trastornos mentales previos exacerbados.
                  
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Víctimas niñas, niños o adolescentes.
                  
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Violencias sexuales reiteradas o crónicas.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Ausencia de redes de apoyo.

      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema4/6.svg', alt='', style="width: 290px").m-auto     

    p.mt-4 La remisión debe realizarse de manera oportuna, efectiva y acompañada, evitando traslados innecesarios o barreras administrativas que puedan afectar la continuidad del proceso.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
