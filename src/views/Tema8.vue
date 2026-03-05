<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Activación de rutas

    .bloque-texto-g.bg-base5.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema8/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La activación de rutas intersectoriales es un componente esencial de la atención integral a víctimas de violencias sexuales, en cumplimiento del principio de corresponsabilidad del Estado en la garantía de derechos. Dado que estas situaciones requieren una respuesta articulada, los sectores salud, justicia y protección deben actuar de manera coordinada.

    p.mt-4 En este proceso, el sector salud cumple un papel estratégico como puerta de entrada al sistema, por lo que la activación de las rutas debe realizarse de forma inmediata y paralela a la atención clínica, sin condicionarse a la denuncia penal. Su propósito es asegurar protección, acceso a la justicia y restablecimiento de derechos. A continuación, se desarrollan los elementos que estructuran su implementación dentro de la atención integral:

    .row.justify-content-center.mt-4
      .col-lg-9
        LineaTiempoD.color-primario.linea-bold
          //- Primer paso
          .row(numero="1" titulo="Activación inmediata de las rutas de atención")
            .col-md-12.mb-4.mb-md-0
              .col-lg-12.mb-lg-0
                p La activación de las rutas debe realizarse de manera inmediata y paralela a la atención clínica, sin condicionarse a la denuncia penal o a decisiones judiciales. Su finalidad es garantizar protección, acceso a la justicia y continuidad en la atención integral.

                p Esta activación es prioritaria en situaciones como:

                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Violencias sexuales recientes.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Riesgo para la vida o la integridad de la víctima.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Casos que involucren niñas, niños y adolescentes.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Personas con discapacidad o en situación de especial vulnerabilidad.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Violencias sexuales reiteradas o en contexto intrafamiliar.
                
                p.mt-3  Estas activaciones de rutas aseguran una respuesta oportuna y centrada en la protección de derechos.


          //- Segundo paso
          .row(numero="2" titulo="Principios que orientan la activación")
            .col-md-12.mb-4.mb-md-0
              .row.align-items-center.mt-4
                .col-lg-12.mb-lg-0
                  p La actuación intersectorial debe fundamentarse en principios que aseguren una respuesta protectora y centrada en la dignidad de la persona afectada.

                  ul.lista-ul--color
                    li
                      i.lista-ul__vineta
                      p.mb-0 Centralidad de la víctima.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Oportunidad y simultaneidad en la intervención.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Enfoque diferencial.
                    li
                      i.lista-ul__vineta
                      p.mb-0 No revictimización.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Confidencialidad y reserva de la información.
                  
                  p.mt-2 Estos principios garantizan que la intervención sea proporcional al riesgo y respetuosa de los derechos.


          //- Tercer paso
          .row(numero="3" titulo="Rol operativo del sector salud como articulador")
            .col-md-12.mb-4.mb-md-0
              .row.align-items-center.mt-4
                .col-lg-12.mb-lg-0
                  p El sector salud actúa como articulador operativo y no como autoridad jerárquica sobre otros sectores. Su función es facilitar el acceso efectivo a los servicios de protección y justicia, evitando la fragmentación de la atención.
                  
                  p.mb-0 Funciones operativas:

                  ul.lista-ul--color
                    li
                      i.lista-ul__vineta
                      p.mb-0 Identificar las necesidades intersectoriales del caso.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Informar a la víctima sobre las rutas disponibles.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Facilitar el contacto con las entidades competentes.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Realizar remisiones formales y documentadas.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Hacer seguimiento a la activación efectiva de las rutas.
                  
                  p.mt-2 Aunque no reemplaza las funciones de justicia o protección, debe prevenir omisiones que afecten el acceso a los derechos.

          //- Cuarto paso
          .row(numero="4" titulo="Comunicación interinstitucional efectiva")
            .col-md-12.mb-4.mb-md-0
              .row.align-items-center.mt-4
                .col-lg-12.mb-lg-0
                  p  La comunicación interinstitucional es un factor crítico para el funcionamiento adecuado de las rutas. Debe ser clara, oportuna, respetuosa de las competencias y centrada en la protección de la víctima.

                  p.mb-0 Características principales:

                  ul.lista-ul--color
                    li
                      i.lista-ul__vineta
                      p.mb-0 Uso de canales institucionales definidos.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Información suficiente, pertinente y objetiva.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Evitar duplicidad de solicitudes a la víctima.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Registro de las comunicaciones realizadas.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Seguimiento a los compromisos adquiridos.
                  
                  p.mt-2 Una comunicación deficiente puede generar retrasos, pérdida de información y revictimización institucional.
      
      .col-lg-3.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema8/2.png', alt='', style="width: 100%").m-auto


    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-base8(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema8/3.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-12px")
              .col-lg
                p La comunicación deficiente entre sectores puede generar retrasos, pérdida de información y situaciones de revictimización institucional. Por esta razón, la coordinación debe desarrollarse de manera simultánea y no secuencial, activando en paralelo las acciones de salud, protección y justicia para evitar que la respuesta dependa de trámites sucesivos que incrementen el riesgo para la víctima.

    p.mt-4 La activación simultánea de las rutas intersectoriales fortalece la respuesta institucional y mejora la protección integral. A continuación, se presentan los sectores que intervienen en este proceso y los beneficios que se derivan de su articulación oportuna:

    .row.justify-content-center
      .col-lg-4.col-md-6.mb-4.mb-lg-0
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/tema8/4.svg')
          .tarjeta.bg-2.shadow.bg-base
            .p-4.pt-5
              p.mb-4 #[b Sectores]
              p.text-center.mb-0 Salud.
              p.mb-0 Justicia (Fiscalía, Policía Judicial).
              p.mb-0 Protección (ICBF, Comisarías de Familia).
              p Sector social y comunitario, cuando aplique.

    
      .col-lg-4.col-md-6.mb-4.mb-lg-0
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/tema8/5.svg')
          .tarjeta.bg-2.shadow.bg-base
            .p-4.pt-5
              p.mb-4 #[b Beneficios]
              p.text-center.mb-0 Reducción de tiempos de respuesta. 
              p.mb-0 Disminución de cargas institucionales para la víctima.
              p.mb-0 Mayor eficacia en la protección.
              p Prevención de nuevas situaciones de violencia.
    
    
    

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
