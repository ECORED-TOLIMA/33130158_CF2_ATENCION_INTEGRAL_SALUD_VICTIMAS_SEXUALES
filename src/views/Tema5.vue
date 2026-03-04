<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Continuidad y seguimiento
    
    .row.align-items-center
      .col-lg-9.bg-base8.bg-r8.p-3

        figure
          img(src="@/assets/curso/tema5/1.svg", alt="", style="width: 80px")

        p.mt-3  La continuidad es un principio fundamental en el proceso integral dirigido a víctimas de violencias sexuales, ya que garantiza que las acciones iniciadas en la fase inmediata no se interrumpan y se desarrollen de manera organizada y articulada. Su propósito es asegurar un acompañamiento sostenido en el tiempo, evitar la fragmentación de los servicios y prevenir nuevas situaciones de vulneración, mediante la coordinación entre los diferentes niveles y sectores involucrados.
      
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/2.svg', alt='', style="width: 245px").m-auto

    .row.align-items-center.mt-4
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/3.svg', alt='', style="width: 390px").m-auto
      .col-lg-8
        p.mt-3 Este proceso debe planearse desde el primer contacto con la víctima, considerando su evolución física, emocional y social. Asimismo, requiere seguimiento periódico y articulación entre las entidades responsables, con el fin de garantizar que las medidas adoptadas respondan de manera oportuna a las necesidades identificadas y se ajusten cuando sea necesario.

        p.mt-3 Para garantizar una continuidad efectiva, es necesario estructurar la planeación del seguimiento clínico, definiendo acciones, tiempos y mecanismos de articulación que permitan dar respuesta integral a las necesidades identificadas:


    .row.justify-content-center.mt-4
      .col-lg-12
        .row.justify-content-center 
          .col-lg-8
            AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").color-primario
              //-1ra pestaña
              .row(titulo="Planeación de los seguimientos clínicos")
                p La planeación del seguimiento clínico debe realizarse de manera individualizada, teniendo en cuenta el tipo de violencia sexual, el momento de consulta, los riesgos identificados y las condiciones particulares de la víctima.
                p Elementos esenciales de la planeación:

                ul.lista-ul--color
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Definición clara de controles clínicos y tiempos de seguimiento.
                    
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Programación de pruebas diagnósticas para ITS, VIH y embarazo.
                    
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Seguimiento a la adherencia de tratamientos y profilaxis.
                    
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Articulación con salud mental y otras especialidades.
                    
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Identificación temprana de signos de alarma.
                p La adecuada planeación del seguimiento permite identificar oportunamente situaciones que requieren continuidad dentro del mismo servicio o la necesidad de remitir a otros niveles de atención. En este contexto, cuando la complejidad del caso supera la capacidad resolutiva del equipo inicial o se requiere intervención especializada, se hace necesario activar los mecanismos de referencia y contrarreferencia como parte integral del proceso asistencial.

              //-2da pestaña  
              .row(titulo="Referencia y contrarreferencia")
                p La referencia y contrarreferencia son mecanismos esenciales para garantizar la continuidad de la atención cuando se requiere mayor capacidad resolutiva.

                p.mb-0 Criterios para referencia:

                ul.lista-ul--color
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Necesidad de atención especializada en salud mental.
                    
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Complicaciones clínicas derivadas de la violencia sexual.
                    
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Requerimiento de procedimientos de mayor complejidad.
                    
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Atención de niñas, niños y adolescentes en contextos de alto riesgo.

                p La contrarreferencia debe asegurar que la información clínica relevante regrese al servicio remitente, permitiendo la continuidad del seguimiento y evitando duplicaciones innecesarias o vacíos en la atención.
                    
              //-3ra pestaña
              .row(titulo="Cierre del proceso asistencial")
                p El cierre del proceso asistencial corresponde a un acto clínico-administrativo que se realiza cuando se han cumplido las acciones programadas de intervención y seguimiento, y se han alcanzado los objetivos definidos para el caso.

                p Este cierre implica:

                ul.lista-ul--color
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Finalizar el seguimiento establecido.
                    
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Consolidar los resultados diagnósticos obtenidos.
                    
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Verificar la estabilidad clínica y emocional de la persona.
                    
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Brindar orientación final sobre cuidados y rutas disponibles.
                    
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Articular con otros sectores cuando sea necesario.
                    
          .col-lg-4.d-none.d-lg-block
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema5/4.png', alt='', style="width: 300px").m-auto

    p.mt-4 El cierre no significa abandono del acompañamiento, sino la culminación formal del proceso desde el sector salud, asegurando que la persona cuente con información clara sobre las rutas de apoyo disponibles en caso de requerirlas.

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
