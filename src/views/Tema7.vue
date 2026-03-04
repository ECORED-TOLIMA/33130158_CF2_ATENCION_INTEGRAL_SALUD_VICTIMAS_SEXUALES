<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Articulación forense

    .row.align-items-center.mt-4
      .col-lg-8
        .row.bg-base9.p-3.bg-r8
          p La atención integral a víctimas de violencias sexuales requiere una adecuada coordinación entre el sector salud y el sistema de justicia, con el fin de contribuir a la investigación del delito sin afectar la prioridad clínica, la dignidad de la persona atendida ni el principio de no revictimización. En este marco, el rol del sector salud es técnico y delimitado, ya que se centra en documentar los hallazgos clínicos, preservar los elementos materiales probatorios cuando corresponda y facilitar la remisión a las autoridades competentes, garantizando en todo momento que la atención en salud mantenga su carácter prioritario.
        .row.align-items-start.mt-3
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down").d-none.d-lg-block
              img(src='@/assets/curso/tema7/1.svg', style='width: 100px').m-auto
          
          .col
            p Para comprender el alcance de la articulación forense, es necesario identificar los elementos que orientan la coordinación entre el sector salud y las autoridades competentes. A continuación, se presentan los aspectos relacionados con la coordinación con medicina legal, la identificación de posibles elementos probatorios, la cadena de custodia y los límites del rol del sector salud, así como las acciones dirigidas a prevenir la revictimización:

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema7/2.svg', alt='', style="width: 400px").m-auto

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.justify-content-center 
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").color-primario
            //-1ra pestaña
            .row(titulo="Coordinación del sector salud con medicina legal")
              p La articulación con el Instituto Nacional de Medicina Legal y Ciencias Forenses (INMLCF) debe desarrollarse bajo criterios de oportunidad, claridad de competencias y respeto por la autonomía de la víctima.
              
              p Para asegurar una actuación adecuada, deben observarse los siguientes principios:

              ul.lista-ul--color.espacio-li
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Prioridad absoluta de la atención en salud.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Respeto por la autonomía y decisión informada de la víctima.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Claridad en los roles institucionales.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Evitación de duplicidad de procedimientos.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Comunicación interinstitucional efectiva.

            //-2da pestaña  
            .row(titulo="Posibles elementos probatorios")
              p Los posibles elementos probatorios son materiales o evidencias que pueden identificarse durante la atención en salud y que podrían aportar información relevante para la investigación judicial, sin afectar la prioridad asistencial ni la dignidad de la persona atendida.

              p Elementos que pueden identificarse durante la atención:

              ul.lista-ul--color.espacio-li
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Recolectar muestras biológicas pertinentes.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Preservar prendas de vestir relacionadas con el evento.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Identificar objetos asociados a los hechos.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Registrar hallazgos clínicos relevantes.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Entregar los elementos a la autoridad competente.
                
            //-3ra pestaña
            .row(titulo="Cadena de custodia y límites del rol del sector salud")
              p La cadena de custodia es el conjunto de procedimientos que garantizan la integridad y autenticidad de los elementos materiales probatorios desde su recolección hasta su análisis final. El sector salud participa únicamente en las etapas iniciales, dentro de los límites de su competencia.
              
              p Límites claros del rol del sector salud:

              ul.lista-ul--color.espacio-li
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 No investigar el delito.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 No interrogar a la víctima con fines judiciales.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 No emitir conceptos periciales.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 No asumir funciones de policía judicial.


            //-4ra pestaña
            .row(titulo="Prevención de revictimización")
              p La revictimización en el proceso forense se presenta cuando la persona afectada es sometida a procedimientos innecesarios, repetitivos o invasivos que pueden profundizar el daño sufrido. En este contexto, el sector salud tiene la responsabilidad ética y profesional de prevenir activamente cualquier práctica que genere nuevas afectaciones durante la atención.
             
              p Acciones clave para prevenir la revictimización:

              ul.lista-ul--color.espacio-li
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Evitar interrogatorios reiterativos o innecesarios.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Limitar la repetición injustificada de exámenes físicos.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Brindar información clara, suficiente y anticipada.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Respetar el ritmo y las decisiones de la persona.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Coordinar adecuadamente con las instituciones competentes.
                  
    p.mt-4 Con el fin de facilitar la comprensión del alcance del rol del sector salud en el proceso forense, la siguiente tabla resume las responsabilidades institucionales y las acciones que no le corresponden al personal sanitario, contribuyendo a prevenir extralimitaciones y posibles responsabilidades legales.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 2.
          span Límites y responsabilidades del sector salud en el abordaje forense

        .tabla-a.color-acento-contenido
          table
            thead(style="background-color: #E3F1EE")
              tr
                th Responsabilidades del sector salud
                th Acciones que no le corresponden
            tbody
              tr
                td Documentar hallazgos clínicos
                td Investigar el delito
              tr
                td Preservar elementos probatorios iniciales
                td Realizar interrogatorios judiciales
              tr
                td Garantizar consentimiento informado
                td Emitir conceptos periciales
              tr
                td Remitir a medicina legal
                td Asumir funciones de policía judicial
              tr
                td Priorizar la atención clínica
                td Determinar responsabilidad penal

    p.mt-4 Esta diferenciación fortalece la seguridad jurídica institucional y protege los derechos de la víctima.


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
