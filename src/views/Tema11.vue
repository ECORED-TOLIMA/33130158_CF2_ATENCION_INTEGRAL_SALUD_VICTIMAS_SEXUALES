<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 11
      h1 Programas institucionales de protección

    .row.align-items-center
      .col-lg-8.bg-base6.bg-r8.p-3
    
        figure
          img(src="@/assets/curso/tema11/1.svg", alt="", style="width: 80px")
    
        p.mt-3 Los programas institucionales de protección constituyen mecanismos especializados del Estado orientados a salvaguardar la vida, la integridad y la seguridad de personas víctimas de violencias sexuales que enfrentan riesgos graves, extraordinarios o persistentes. Estos programas se enmarcan en el deber de protección reforzada y se activan de manera complementaria a las acciones desarrolladas por los sectores salud, justicia y protección administrativa. Aunque el sector salud no administra dichos programas, desempeña un papel fundamental en la identificación temprana del riesgo, la orientación a la persona afectada y la activación oportuna de las rutas correspondientes. Cuando el nivel de amenaza supera las medidas ordinarias de protección, pueden implementarse mecanismos especializados de alcance nacional.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema11/2.png', alt='', style="width: 390px").m-auto

    separador
    #t_11_1.titulo-segundo.color-acento-contenido
      h2 11.1 Tipos de programas institucionales
    
    .row.align-items-center.mt-4
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema11/3.png', alt='', style="width: 350px").m-auto

      .col-lg-8
        p En el marco del deber de protección reforzada del Estado, existen programas institucionales especializados orientados a salvaguardar la vida, integridad y libertad de personas víctimas de violencias sexuales que enfrentan riesgos graves, extraordinarios o persistentes. Estos programas operan bajo criterios técnicos de evaluación del riesgo y se articulan con las acciones del sector salud, justicia y protección administrativa, constituyendo mecanismos complementarios que se activan cuando las medidas ordinarias resultan insuficientes. Su finalidad es garantizar condiciones de seguridad que permitan a la víctima ejercer sus derechos sin exponerse a nuevas amenazas o situaciones de violencia.
        
        .row.align-items-center.mt-4.bg-base6.p-4.bg-r8
          .col-lg-2
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema11/4.svg', style='width: 100px').m-auto
          
          .col
            p.mt-2 Dentro de este marco institucional, uno de los principales mecanismos de protección es el Programa de Prevención y Protección del Ministerio del Interior, el cual opera a nivel nacional y está orientado a la atención de situaciones en las que se configuran niveles de riesgo extraordinario o extremo. Su activación responde a una valoración técnica especializada y constituye una medida de protección reforzada cuando las acciones ordinarias no resultan suficientes para garantizar la seguridad de la víctima.

    .titulo-tres.mt-5: h3 Programa de prevención y protección 

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                p Este programa tiene como finalidad proteger a personas, grupos o comunidades que se encuentren en riesgo extraordinario o extremo como consecuencia de amenazas contra su vida, integridad o libertad. Su activación se fundamenta en criterios técnicos de evaluación del riesgo y en el principio de debida diligencia estatal.
                p La evaluación del riesgo y la activación de medidas de protección se fundamentan en un marco constitucional y reglamentario que orienta la actuación del Estado frente a situaciones de amenaza extraordinaria o extrema. A continuación, se presenta la evolución normativa que sustenta el Programa de Prevención y Protección:
              
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema11/5.svg', alt='', class="w-100 h-100 object-fit-cover")

    .row.justify-content-center.mt-4.bg-base2.p-5
      .col-12.mb-lg-0
        .p-5
          .row.justify-content-center
            LineaTiempoE.color-primario.lte-r
              .row(titulo="1991" subtitulo="")
                .col-lg-2.d-none.d-lg-block
                  figure(data-aos="fade-up")
                    img(src='@/assets/curso/tema11/6.svg', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  p #[b Constitución Política de Colombia] 
                  ul.lista-ul--color
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Establece la protección de la vida, la integridad y la igualdad (arts. 11, 12 y 13).
                      
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Constituye la base constitucional del deber de protección reforzada.

              .row(titulo="2004" subtitulo="")
                .col-lg-2.d-none.d-lg-block
                  figure(data-aos="fade-up")
                    img(src='@/assets/curso/tema11/7.svg', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  p #[b Ley 906 de 2004 – Código de Procedimiento Penal] 
                  ul.lista-ul--color
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Regula el proceso penal y la intervención de víctimas y testigos.
                      
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Sienta las bases para la protección de participantes procesales en riesgo.


              .row(titulo="2008" subtitulo="")
                .col-lg-2.d-none.d-lg-block
                  figure(data-aos="fade-up")
                    img(src='@/assets/curso/tema11/8.svg', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  p #[b Ley 1257 de 2008] 
                  ul.lista-ul--color
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Establece medidas para prevenir, sancionar y erradicar violencia contra la mujer.
                      
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Fortalece el enfoque de protección integral para víctimas de violencias sexuales.

              .row(titulo="2011" subtitulo="")
                .col-lg-2.d-none.d-lg-block
                  figure(data-aos="fade-up")
                    img(src='@/assets/curso/tema11/9.svg', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  p #[b Decreto 4912 de 2011] 
                  ul.lista-ul--color
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Organiza el Programa de Prevención y Protección.
                      
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Define principios y criterios generales de evaluación del riesgo.

              .row(titulo="2015 – Presente" subtitulo="")
                .col-lg-2.d-none.d-lg-block
                  figure(data-aos="fade-up")
                    img(src='@/assets/curso/tema11/10.svg', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  p #[b Lineamientos técnicos y protocolos internos del Ministerio del Interior] 
                  ul.lista-ul--color
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Desarrollan metodologías para la valoración técnica del riesgo.
                      
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Orientan la actuación de la Unidad Nacional de Protección (UNP).
                      
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Apoyan la toma de decisiones para activar y hacer seguimiento a las medidas.

    p.mt-4 La evolución normativa evidencia cómo el ordenamiento jurídico colombiano ha fortalecido progresivamente los mecanismos de protección, consolidando un sistema técnico y reglamentario que permite evaluar el riesgo y adoptar medidas oportunas para salvaguardar la vida, la integridad y el ejercicio de derechos. 

    .titulo-tres.mt-5: h3 Programa de protección a víctimas y testigos 

    .bloque-texto-g.bg-base5.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema11/11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El Programa de protección a víctimas y testigos se fundamenta en el marco normativo vigente, que comprende la Constitución Política de Colombia, la Ley 906 de 2004, la Ley 1257 de 2008 y los reglamentos internos de la Fiscalía General de la Nación. Su finalidad es garantizar la seguridad, confidencialidad y acceso efectivo a la justicia cuando la participación en el proceso penal genere riesgo real, grave o extraordinario. Está dirigido a víctimas de violencias sexuales vinculadas al proceso, testigos con información relevante y personas cercanas cuya integridad pueda verse comprometida, aspectos que se desarrollan a continuación:

    .row.align-items-center.mt-4
      .col-lg-8.bg-15.bg-r8.p-3
        .row.align-items-center
          .row.align-items-start.mt-4
            .col-lg-1.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/tema11/12.svg', style='width: 100px').m-auto
            
            .col
              h4 Marco normativo
              ul.lista-ul--color
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Constitución Política de Colombia.    
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Ley 906 de 2004 (Código de Procedimiento Penal).
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Ley 1257 de 2008.
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Reglamentos internos de la Fiscalía General de la Nación.

          .row.align-items-start.mt-4
            .col-lg-1.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/tema11/13.svg', style='width: 100px').m-auto
            
            .col
              h4 Finalidad
              ul.lista-ul--color
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Proteger frente a amenazas derivadas del proceso penal.   
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Garantizar condiciones seguras para declarar.
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Prevenir represalias.
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Facilitar el acceso efectivo a la justicia.

          .row.align-items-start.mt-4
            .col-lg-1.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/tema11/14.svg', style='width: 100px').m-auto
            
            .col
              h4 Personas beneficiarias
              ul.lista-ul--color
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Víctimas de violencias sexuales vinculadas al proceso penal. 
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Testigos con información relevante para la investigación.
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0 Personas cercanas cuya seguridad pueda verse comprometida.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema11/15.svg', alt='', style="width: 400px").m-auto

    separador
    #t_11_2.titulo-segundo.color-acento-contenido
      h2 11.2 Trámite especial de emergencia
    
    .row.align-items-center.mt-4
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema11/16.png', alt='', style="width: 360px").m-auto
      .col-lg-8
        .row
          p El trámite especial de emergencia corresponde al conjunto de medidas inmediatas y excepcionales de protección que pueden activarse cuando una persona víctima de violencias sexuales enfrenta un riesgo inminente, grave o extraordinario para su vida, integridad o libertad, y no es posible esperar la aplicación de los procedimientos ordinarios de protección.

        .row.align-items-start.mt-3
          .col
            .cajon.color2.p-3
              p #[b El trámite especial de emergencia se fundamenta en el principio de protección reforzada y en la obligación del Estado de actuar con debida diligencia para prevenir daños irreparables, conforme a la Constitución Política de Colombia (1991) y al Decreto 1066 de 2015 (Ministerio del Interior, 2015).]
              
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down").d-none.d-lg-block
              img(src='@/assets/curso/tema11/17.svg', style='width: 100%').m-auto
          
          .col
            p Con el fin de comprender el alcance y la operatividad del trámite especial de emergencia, es necesario identificar su finalidad, las características que lo distinguen de los procedimientos ordinarios y las situaciones que justifican su activación. Estos elementos permiten precisar su aplicación dentro del marco de protección reforzada y debida diligencia estatal:


    .row.justify-content-center.mt-4
      .col-lg-4.mb-4.mb-lg-0
        //-Tarjeta 1
        .tarjeta.clr-paleYellow.p-4.text-center.bg-base7.h-100.tarjeta-hover
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure.icono-hover(data-aos="zoom-in")
                  img.icon-normal(src='@/assets/curso/tema11/18.svg', style='width: 80px')
                  img.icon-hover(src='@/assets/curso/tema11/21.svg', style='width: 80px')
          h4.text-center Finalidad

          ul.lista-ul--color
            li.d-flex.align-items-start
              i.lista-ul__vineta
              p.mb-0 Prevenir la ocurrencia de un daño grave o irreparable.  
            li.d-flex.align-items-start
              i.lista-ul__vineta
              p.mb-0 Garantizar condiciones mínimas de seguridad inmediata.
            li.d-flex.align-items-start
              i.lista-ul__vineta
              p.mb-0 Facilitar la transición hacia mecanismos de protección permanentes.
            li.d-flex.align-items-start
              i.lista-ul__vineta
              p.mb-0 Proteger a la víctima sin exigir requisitos formales previos.

      .col-lg-4.mb-4.mb-lg-0
        //-Tarjeta 2
        .tarjeta.clr-paleYellow.p-4.text-center.bg-base7.h-100.tarjeta-hover
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure.icono-hover(data-aos="zoom-in")
                  img.icon-normal(src='@/assets/curso/tema11/19.svg', style='width: 80px')
                  img.icon-hover(src='@/assets/curso/tema11/22.svg', style='width: 80px')
          h4.text-center Características principales

          ul.lista-ul--color
            li.d-flex.align-items-start
              i.lista-ul__vineta
              p.mb-0 Activación inmediata y prioritaria. 
            li.d-flex.align-items-start
              i.lista-ul__vineta
              p.mb-0 No requerir denuncia penal previa.
            li.d-flex.align-items-start
              i.lista-ul__vineta
              p.mb-0 Adoptar medidas de carácter temporal y urgente.
            li.d-flex.align-items-start
              i.lista-ul__vineta
              p.mb-0 Aplicarse con enfoque diferencial y de derechos.
            li.d-flex.align-items-start
              i.lista-ul__vineta
              p.mb-0 Exigir articulación intersectorial obligatoria.

      .col-lg-4.mb-4.mb-lg-0
        //-Tarjeta 3
        .tarjeta.clr-paleYellow.p-4.text-center.bg-base7.h-100.tarjeta-hover
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure.icono-hover(data-aos="zoom-in")
                  img.icon-normal(src='@/assets/curso/tema11/20.svg', style='width: 80px')
                  img.icon-hover(src='@/assets/curso/tema11/23.svg', style='width: 80px')
          h4.text-center Situaciones que justifican su activación

          ul.lista-ul--color
            li.d-flex.align-items-start
              i.lista-ul__vineta
              p.mb-0 Amenazas directas o creíbles contra la víctima.
            li.d-flex.align-items-start
              i.lista-ul__vineta
              p.mb-0 Riesgo de reiteración de la violencia.
            li.d-flex.align-items-start
              i.lista-ul__vineta
              p.mb-0 Contextos de violencia sociopolítica o de control territorial.
            li.d-flex.align-items-start
              i.lista-ul__vineta
              p.mb-0 Situaciones que evidencien peligro inminente para la vida o integridad.



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
