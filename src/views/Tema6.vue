<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Registro y vigilancia

    p El registro y la vigilancia epidemiológica de los casos de violencias sexuales son una obligación legal, clínica y ética del sector salud. Estos procesos garantizan la continuidad de la atención, la activación de rutas intersectoriales y la generación de información confiable para la toma de decisiones en salud pública.

    .row.align-items-center.mt-4
      .col-lg-8
        .row.align-items-center.mt-4.bg-15.p-4.bg-r8
          .col-lg-2
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema6/1.svg', style='width: 100px').m-auto
          
          .col
            p.mt-2 Toda la información debe registrarse de manera veraz, oportuna, completa y confidencial, evitando juicios de valor o descripciones innecesarias que puedan generar revictimización.

        p.mt-4 Para garantizar la trazabilidad del caso y el cumplimiento de las obligaciones legales del sector salud, el proceso de registro y vigilancia se desarrolla a través de tres componentes complementarios: el registro clínico y administrativo, la notificación en SIVIGILA y el registro en RIPS:

      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema6/2.svg', alt='', style="width: 350px").m-auto

    .row.justify-content-center.mt-4
      .col-lg-3.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema6/3.png', alt='', style="width: 100%").m-auto
      .col-lg-9
        LineaTiempoD.color-primario.linea-bold
          //- Primer paso
          .row(numero="1" titulo="Registro clínico y administrativo")
            .col-md-12.mb-4.mb-md-0
              .col-lg-12.mb-lg-0
                p El registro clínico inicia desde el primer contacto con el servicio de salud y se mantiene durante todo el proceso de intervención y seguimiento. Debe realizarse con enfoque diferencial, respetando la dignidad de la persona y garantizando confidencialidad.

                p Componentes del registro clínico:

                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Identificación con enfoque diferencial.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Motivo de consulta y relato objetivo.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Hallazgos clínicos relevantes.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Diagnósticos asociados.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Intervenciones realizadas.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Consentimientos informados.

          //- Segundo paso
          .row(numero="2" titulo="Notificación en SIVIGILA")
            .col-md-12.mb-4.mb-md-0
              .row.align-items-center.mt-4
                .col-lg-12.mb-lg-0
                  p La notificación en SIVIGILA es el proceso mediante el cual el sector salud reporta obligatoriamente los casos de violencia sexual al sistema nacional de vigilancia, con el fin de realizar seguimiento epidemiológico y orientar acciones de prevención y control.
                  
                  p Elementos clave de la notificación:

                  ul.lista-ul--color
                    li
                      i.lista-ul__vineta
                      p.mb-0 Reportar el caso dentro de los tiempos establecidos.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Diligenciar correctamente la ficha epidemiológica.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Garantizar la confidencialidad de la información.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Contribuir al análisis y monitoreo en salud pública.

          //- Tercer paso
          .row(numero="3" titulo="Registro en RIPS")
            .col-md-12.mb-4.mb-md-0
              .row.align-items-center.mt-4
                .col-lg-12.mb-lg-0
                  p El Registro Individual de Prestación de Servicios de Salud (RIPS) constituye un componente esencial del proceso administrativo y de gestión en los casos de violencias sexuales, ya que permite documentar los servicios prestados y garantizar la trazabilidad institucional.

                  p Elementos clave del registro en RIPS:

                  ul.lista-ul--color
                    li
                      i.lista-ul__vineta
                      p.mb-0 Registrar correctamente los datos del servicio prestado.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Codificar diagnósticos y procedimientos realizados.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Garantizar la trazabilidad administrativa del caso.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Respaldar la gestión y facturación institucional.

    p.mt-4 En coherencia con lo anterior, el registro en RIPS exige criterios técnicos claros que garanticen precisión y consistencia. A continuación, se presentan los aspectos clave para su adecuado diligenciamiento y su importancia en la atención integral a víctimas de violencias sexuales.

    p Aspectos clave para el registro adecuado en RIPS:

    .row.align-items-center.mt-4
      .col-lg-8
        .row.align-items-center.bg-base8.p-3.bg-r8
          .col
            .row.align-items-center
              .col-lg-12.mb-lg-0
                ul.lista-ul--color.bg-r8
                  li
                    i.lista-ul__vineta
                    p.mb-0 Codificar correctamente los diagnósticos asociados a violencias sexuales, conforme a la clasificación vigente.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Registrar los servicios prestados en urgencias, consulta externa, hospitalización o modalidad ambulatoria.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Incluir los procedimientos realizados, como profilaxis, anticoncepción de emergencia, atención en salud mental y controles clínicos.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Garantizar correspondencia entre el RIPS y la información consignada en la historia clínica.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Realizar el registro oportunamente para asegurar la trazabilidad del caso.
                  
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema6/4.svg', alt='', style="width: 400px").m-auto

    
    .row.align-items-center.mt-4
      p Importancia del RIPS en la atención integral:
      .col-lg-12.mb-lg-0
        ul.lista-ul--color.p-4
          li
            i.lista-ul__vineta
            p.mb-0 Soportar la facturación y reconocimiento de los servicios prestados.
          li
            i.lista-ul__vineta
            p.mb-0 Facilitar el seguimiento institucional de los casos atendidos.
          li
            i.lista-ul__vineta
            p.mb-0 Identificar brechas en la prestación de servicios de salud.
          li
            i.lista-ul__vineta
            p.mb-0 Contribuir al análisis de la oferta y demanda de atención.
          li
            i.lista-ul__vineta
            p.mb-0 Apoyar la planeación y mejora continua de los servicios.
    
    .row.align-items-center.mt-4
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema6/5.png', alt='', style="width: 400px").m-auto
      .col-lg-8
        p La información generada a partir del registro clínico, la notificación en el Sistema de Vigilancia en Salud Pública (SIVIGILA) y el registro en los Registros Individuales de Prestación de Servicios de Salud (RIPS) constituye un insumo estratégico para el seguimiento de los casos de violencias sexuales y para la toma de decisiones en salud pública, de conformidad con los lineamientos del Ministerio de Salud y Protección Social (2012) y del Instituto Nacional de Salud (s.f.).

        .row.align-items-center.mt-4.bg-base10.p-4.bg-r8
          .col-lg-2
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema6/6.svg', style='width: 100px').m-auto
          
          .col
            p.mt-2 Su adecuado uso permite trascender la atención individual y orientar acciones institucionales y territoriales de prevención, control y mejora de la calidad de los servicios de salud. De esta manera, la información clínica no se limita al ámbito asistencial, sino que se transforma en un instrumento de gestión y planeación en salud pública.

        p.mt-4 El manejo de esta información debe realizarse bajo principios estrictos de confidencialidad, reserva y uso ético, garantizando que los datos no sean utilizados para fines distintos a los establecidos ni generen estigmatización, exposición indebida o revictimización de las personas atendidas, en concordancia con la normativa sobre historia clínica y protección de datos en salud.

    .row.justify-content-center.mt-4.mb-4
      .col-lg-10
        .row.align-items-center.mt-4
          .col-lg-12
            .cajon.color2.p-4
              b Desde el ámbito institucional y territorial, la información consolidada permite identificar patrones de ocurrencia, grupos en mayor situación de vulnerabilidad, contextos de riesgo y brechas en el acceso a los servicios, fortaleciendo así la respuesta del sector salud frente a las violencias sexuales.

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
