<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 10
      h1 Procedimientos de protección según el contexto

    .row.align-items-center.mt-4
      .col-lg-8
        .row
          p Los procedimientos de protección en casos de violencias sexuales tienen como propósito prevenir la repetición del hecho, salvaguardar la vida e integridad de la víctima y garantizar el ejercicio efectivo de sus derechos. Estas medidas deben activarse de manera oportuna, diferencial y articulada, considerando el contexto en que ocurrió la violencia y las condiciones particulares de la persona afectada. 
          
        .row.align-items-start.mt-3
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down").d-none.d-lg-block
              img(src='@/assets/curso/tema10/1.svg', style='width: 100px').m-auto
          
          .col
            .cajon.color1.p-3
              p En este marco, el sector salud cumple un papel esencial en la identificación del riesgo, la activación de las rutas de protección y el seguimiento intersectorial, actuando con enfoque preventivo y articulador, sin asumir competencias judiciales o administrativas de otros sectores. En contextos intrafamiliares, el riesgo de reiteración suele incrementarse debido a factores como la convivencia, la dependencia económica o los vínculos de cuidado, lo que exige una respuesta inmediata y reforzada de protección.
              
        .row.align-items-start.mt-3
          .col-lg-5.mb-lg-0.mb-4
            figure(data-aos="fade-down").d-none.d-lg-block
              img(src='@/assets/curso/tema10/2.png', style='width: 400px').m-auto
          
          .col
            p Los procedimientos de protección deben ajustarse al contexto en que ocurre la violencia sexual, ya que los riesgos y las condiciones de vulnerabilidad varían. La respuesta institucional exige medidas oportunas, diferenciadas y articuladas, orientadas a proteger la vida, la integridad y los derechos de la víctima. A continuación, se presentan las acciones de protección según el ámbito de ocurrencia.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema10/3.png', alt='', style="width: 400px").m-auto


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.justify-content-center 
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").color-primario
            //-1ra pestaña
            .row(titulo="Protección en casos de violencia intrafamiliar")
              ul.lista-ul--color.espacio-li
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Activación inmediata de la ruta de protección.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Aviso a Comisarías de Familia o autoridad competente.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Valoración del riesgo de permanencia en el entorno familiar.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Coordinación con servicios sociales y de protección.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Seguimiento continuo desde el sector salud.

            //-2da pestaña  
            .row(titulo="Protección en casos de violencia sociopolítica y conflicto armado")
              ul.lista-ul--color.espacio-li
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Evaluación de riesgo individual y colectivo.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Articulación con entidades de atención a víctimas del conflicto.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Coordinación con programas de protección especializados.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Garantía reforzada de confidencialidad.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Aplicación de enfoque diferencial étnico y territorial.
                
            //-3ra pestaña
            .row(titulo="Protección en casos de violencia en otros ámbitos")
              ul.lista-ul--color.espacio-li
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Identificación del ámbito de ocurrencia.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Activación de rutas institucionales específicas.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Articulación con autoridades administrativas o laborales.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Implementación de medidas para prevenir la repetición del hecho.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Seguimiento desde el sector salud, cuando corresponda.
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
