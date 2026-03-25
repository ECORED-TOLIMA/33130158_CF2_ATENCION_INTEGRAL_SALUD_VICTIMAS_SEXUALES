<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Anticoncepción de emergencia e IVE
    
    .row.align-items-center
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/1.svg', alt='', style="width: 390px").m-auto
      .col-lg-8.bg-r8.p-3
        p La anticoncepción de emergencia y la interrupción voluntaria del embarazo (IVE) forman parte de las prestaciones obligatorias en la atención integral a víctimas de violencias sexuales, en el marco de los derechos sexuales y reproductivos.
        .row.align-items-center.mt-4.bg-12.p-3.bg-r8
          .col-lg-2
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema3/2.svg', style='width: 100px').m-auto
          
          .col
            p Estas intervenciones deben ofrecerse de manera oportuna, informada y sin barreras, sin exigir denuncia previa ni autorización judicial, conforme a la normatividad colombiana vigente. Su objetivo es prevenir consecuencias adicionales como el embarazo forzado, que constituye una forma de revictimización.
        
        p.mt-3 Junto con las garantías legales existentes, el sector salud debe implementar medidas preventivas oportunas para evitar el embarazo derivado de la violencia sexual. En este apartado se presentan las indicaciones, tiempos y consideraciones clínicas que orientan la anticoncepción de emergencia.

    .titulo-tres.mt-5: h3 Anticoncepción de emergencia

    .row.align-items-center.mt-4
      .col-lg-8
        p La anticoncepción de emergencia forma parte de las medidas preventivas inmediatas en la atención a víctimas de violencia sexual. Su indicación requiere valorar el riesgo de embarazo, el tiempo transcurrido desde el evento y las condiciones particulares de la persona atendida. A continuación, se presentan las indicaciones clave y los aspectos clínicos esenciales que orientan su aplicación:
        
        .row.align-items-start.mt-4
          .col
            .row.align-items-center.justify-content-center
              .col-lg-12
                .row.justify-content-center
                  .col-lg-12(data-aos="fade-down")
                    .row.d-flex.align-items-center.bg-12(data-aos="fade-right")
                      .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                        figure.m-0.p-0.w-100.h-100.d-flex
                          img(src='@/assets/curso/tema3/3.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                      .col-lg
                        h4.mt-4.mb-0 Indicaciones clave
                        .row.align-items-center
                          .col-lg-12.mb-lg-0
                            ul.lista-ul--color.bg-7.bg-r8
                              li.mb-0
                                i.lista-ul__vineta
                                p.mb-0 Exposición sexual con riesgo de embarazo.
                              li.mb-0
                                i.lista-ul__vineta
                                p.mb-0 Consulta dentro de las primeras 120 horas.
                              li.mb-0
                                i.lista-ul__vineta
                                p.mb-0 Mayor eficacia en las primeras 72 horas.
                              li.mb-0
                                i.lista-ul__vineta
                                p.mb-0 Aplicable en niñas, adolescentes y mujeres adultas.
            
            .row.align-items-center.justify-content-center.mt-4
              .col-lg-12
                .row.justify-content-center
                  .col-lg-12(data-aos="fade-down")
                    .row.d-flex.align-items-center.bg-12(data-aos="fade-right")
                      .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                        figure.m-0.p-0.w-100.h-100.d-flex
                          img(src='@/assets/curso/tema3/4.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                      .col-lg
                        h4.mt-4.mb-0 Aspectos clínicos esenciales
                        .row.align-items-center
                          .col-lg-12.mb-lg-0
                            ul.lista-ul--color.bg-7.bg-r8
                              li.mb-0
                                i.lista-ul__vineta
                                p.mb-0 No requiere prueba de embarazo previa.
                              li.mb-0
                                i.lista-ul__vineta
                                p.mb-0 No es un método anticonceptivo regular.
                              li.mb-0
                                i.lista-ul__vineta
                                p.mb-0 No tiene efecto abortivo.
                              li.mb-0
                                i.lista-ul__vineta
                                p.mb-0 Debe acompañarse de consejería clara y sin juicios.
            
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/5.png', alt='', style="width: 400px").m-auto

    p.mt-4 En función del tiempo transcurrido desde el evento de violencia sexual, la eficacia de la anticoncepción de emergencia varía. El siguiente recurso resume los criterios de oportunidad y las conductas recomendadas según el intervalo de tiempo.

    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center 
          .col-lg-4.d-none.d-lg-block
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema3/6.png', alt='', style="width: 390px").m-auto
          .col-lg-8
            AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").color-primario
              //-1ra pestaña
              .row(titulo="0 - 72 horas (3 días) Indicación prioritaria")
                ul.lista-ul--color
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Periodo de mayor eficacia de la anticoncepción de emergencia.
                    
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Se recomienda administrar lo antes posible tras el evento de violencia sexual.
                    
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Levonorgestrel (dosis única o dividida).
                    
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Ulipristal acetato (si está disponible).

              //-2da pestaña  
              .row(titulo="72 - 120 horas (3 - 5 días) Indicación con menor eficacia")
                ul.lista-ul--color
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 La anticoncepción de emergencia sigue siendo efectiva, aunque con menor eficacia.
                    
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 El ulipristal acetato mantiene mejor efectividad en este periodo comparado con levonorgestrel.

                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 No se debe negar la anticoncepción de emergencia por haber superado las 72 horas.
                  
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Continúa siendo una medida válida dentro de la atención integral en salud.
              
              //-3ra pestaña
              .row(titulo="Después de 120 horas (>5 días) Evaluación y orientación")
                p La anticoncepción de emergencia no es efectiva. Por lo tanto, se debe:
                ul.lista-ul--color
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Realizar prueba de embarazo según tiempo transcurrido.
                    
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Brindar orientación clara sobre derechos sexuales y reproductivos.
                  
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Activar, si aplica, la ruta para Interrupción Voluntaria del Embarazo (IVE) conforme a la normativa vigente.

    p.mt-4 La anticoncepción de emergencia debe ofrecerse de manera sistemática a toda persona con capacidad de gestar que haya sido víctima de violencia sexual, como parte de la atención inicial en salud. Su administración debe realizarse lo antes posible, preferiblemente dentro de las primeras ciento veinte (120) horas posteriores al evento, sin exigir requisitos adicionales como denuncia penal, autorizaciones administrativas o exámenes previos.

    .titulo-tres.mt-5: h3 Acceso a la IVE         

    .row.align-items-center
      .col-lg-8.bg-r8.p-3
        p En el marco de la garantía de los derechos sexuales y reproductivos, es fundamental reconocer las situaciones en las que la ley permite la interrupción voluntaria del embarazo. En Colombia, la violencia sexual constituye una causal legal para acceder a este procedimiento (Corte Constitucional, 2006; Corte Constitucional, 2022). En consecuencia, el sector salud tiene la obligación de activar de manera inmediata la ruta de atención, garantizando el acceso sin barreras administrativas ni exigencia de denuncia previa.

        p Para asegurar el acceso oportuno y sin barreras, la ruta de atención debe desarrollarse de forma organizada y secuencial. Los siguientes elementos orientan su activación en el ámbito asistencial:

    
      .col-lg-4.d-none.d-lg-block.bg-r8
        figure
          img(src='@/assets/curso/tema3/7.png', alt='', style="width: 390px").m-auto

    .row.justify-content-center.mt-lg-4.mt-0.mb-4
      .col-lg-10
        .row.align-items-center.mt-4
          .col-lg-12
            .row.justify-content-center
              .col-12
                .row.bg-12.bg-r8
                  .d-none.d-md-block
                    ImagenInfografica.color-primario
                      template(v-slot:imagen)
                        figure
                          img.d-none.d-md-block.m-auto.p-5(
                            src='@/assets/curso/tema3/8.svg', style="width: 70%"
                            alt=''
                          )
                          img.d-block.d-md-none.m-auto.p-3(
                            src='@/assets/curso/tema3/9.svg',
                            alt=''
                          )
                      
                      .tarjeta.color-acento-botones.p-3.d-none.d-md-block(x="28.5%" y="15%" numero="+")
                        p.d-none.d-md-block Confirmación clínica del embarazo.
                      .tarjeta.color-acento-botones.p-3.d-none.d-md-block(x="50%" y="15%" numero="+")
                        p.d-none.d-md-block Certificación del hecho de violencia sexual (sin denuncia obligatoria).
                      .tarjeta.color-acento-botones.p-3.d-none.d-md-block(x="71%" y="15%" numero="+")
                        p.d-none.d-md-block Remisión oportuna si no hay capacidad resolutiva.
                      .tarjeta.color-acento-botones.p-3.d-none.d-md-block(x="39.2%" y="85%" numero="+")
                        p.d-none.d-md-block Manifestación de voluntad de la persona gestante.
                      .tarjeta.color-acento-botones.p-3.d-none.d-md-block(x="61%" y="85%" numero="+")
                        p.d-none.d-md-block Información sobre procedimientos según edad gestacional.

                  figure.d-block.d-md-none
                    img.m-auto(
                      src='@/assets/curso/tema3/9.svg')

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-base9.bg-r8(data-aos="fade-right")             
              .col-lg.p-3
                p.p-4 La ruta debe activarse de forma inmediata, priorizando la atención y evitando dilaciones que puedan aumentar riesgos físicos o emocionales. En el siguiente recurso se organiza de manera secuencial los pasos que deben garantizarse para el acceso efectivo a la IVE en casos de violencia sexual, desde el ingreso al servicio de salud hasta el seguimiento posterior.
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/10.svg', alt='', class="w-100 h-100 object-fit-cover")

    .row.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .row.justify-content-center
            .col-lg-2.d-flex.mt-4.mt-lg-0
              .crd.bg-base8.p-4.h-100.w-100
                figure.mb-2(data-aos="zoom-in")
                  img(src='@/assets/curso/tema3/11.svg', style='width: 40px')
                p.mb-0 1. Ingreso al servicio de salud (víctima de violencia sexual).
      
            .col-lg-2.d-flex.mt-4.mt-lg-0
              .crd.bg-base8.p-4.h-100.w-100
                figure.mb-2(data-aos="zoom-in")
                  img(src='@/assets/curso/tema3/12.svg', style='width: 40px')
                p.mb-0 2. Atención clínica inicial inmediata (enfoque de derechos y sin juicios de valor).
      
            .col-lg-2.d-flex.mt-4.mt-lg-0
              .crd.bg-base8.p-4.h-100.w-100
                figure.mb-2(data-aos="zoom-in")
                  img(src='@/assets/curso/tema3/13.svg', style='width: 40px')
                p.mb-0 3. Confirmación clínica del embarazo (prueba según tiempo de gestación).

            .col-lg-2.d-flex.mt-4.mt-lg-0
              .crd.bg-base8.p-4.h-100.w-100
                figure.mb-2(data-aos="zoom-in")
                  img(src='@/assets/curso/tema3/14.svg', style='width: 40px')
                p.mb-0 4. Manifestación de voluntad de la persona gestante.

            .col-lg-2.d-flex.mt-4.mt-lg-0
              .crd.bg-base8.p-4.h-100.w-100
                figure.mb-2(data-aos="zoom-in")
                  img(src='@/assets/curso/tema3/15.svg', style='width: 40px')
                p.mb-0 5. Certificación del hecho de violencia sexual (sin exigir denuncia penal).
        
        .row.justify-content-center.mt-4
          .row.justify-content-center
            .col-lg-2.d-flex.mt-4.mt-lg-0
              .crd.bg-base8.p-4.h-100.w-100
                figure.mb-2(data-aos="zoom-in")
                  img(src='@/assets/curso/tema3/16.svg', style='width: 40px')
                p.mb-0 6. Información clara y completa sobre la IVE (procedimientos, riesgos, alternativas).
      
            .col-lg-2.d-flex.mt-4.mt-lg-0
              .crd.bg-base8.p-4.h-100.w-100
                figure.mb-2(data-aos="zoom-in")
                  img(src='@/assets/curso/tema3/17.svg', style='width: 40px')
                p.mb-0 7. Consentimiento informado (libre, voluntario y documentado).
      
            .col-lg-2.d-flex.mt-4.mt-lg-0
              .crd.bg-base8.p-4.h-100.w-100
                figure.mb-2(data-aos="zoom-in")
                  img(src='@/assets/curso/tema3/18.svg', style='width: 40px')
                p.mb-0 8. Selección del procedimiento según edad gestacional.

            .col-lg-2.d-flex.mt-4.mt-lg-0
              .crd.bg-base8.p-4.h-100.w-100
                figure.mb-2(data-aos="zoom-in")
                  img(src='@/assets/curso/tema3/19.svg', style='width: 40px')
                p.mb-0 9. Realización de la IVE (en IPS habilitada).

            .col-lg-2.d-flex.mt-4.mt-lg-0
              .crd.bg-base8.p-4.h-100.w-100
                figure.mb-2(data-aos="zoom-in")
                  img(src='@/assets/curso/tema3/20.svg', style='width: 40px')
                p.mb-0 10. Seguimiento clínico y en salud mental.

    .row.align-items-center.mt-4
      .col-lg-8
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down").d-none.d-lg-block
              img(src='@/assets/curso/tema3/21.svg', style='width: 100px').m-auto
          
          .col
            p La violencia sexual constituye una causal legal para el acceso a la interrupción voluntaria del embarazo (IVE) en Colombia. En estos casos, los servicios de salud tienen la obligación de brindar información completa, veraz y oportuna sobre este derecho, así como de garantizar la activación de la ruta correspondiente sin dilaciones, barreras administrativas ni exigencia de denuncia penal o autorización judicial.
      
      .col-lg-4.d-none.d-lg-block
        .cajon.color2.p-4
          p La garantía del consentimiento informado es obligatoria dentro de la ruta de atención y constituye un componente esencial del proceso asistencial.

    .titulo-tres.mt-5: h3 Consentimiento informado para la IVE

    .row.align-items-center
      .col-lg-8
        p El consentimiento informado es un requisito ético y legal indispensable. Debe garantizar que la decisión sea libre, voluntaria y consciente, sin presiones externas. Este proceso implica brindar información clara, suficiente y comprensible sobre el procedimiento, sus implicaciones, alternativas y posibles riesgos, respetando la autonomía y la dignidad de la persona.

        p En niñas, adolescentes y personas con discapacidad, el consentimiento debe ajustarse al principio de autonomía progresiva y a los apoyos necesarios para garantizar comprensión.
        
        p Para su adecuada aplicación dentro de la ruta de atención, se deben considerar los siguientes principios:

        .row.mt-2.bg-base.p-3.bg-base6.bg-r8
          .col-12
            ul.lista-ul--color
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Información comprensible, veraz y suficiente.

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Respeto por la autonomía y la dignidad.

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Adecuación al nivel de comprensión, edad y condición de la persona.
                
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 En niñas y adolescentes, aplicación del principio de autonomía progresiva.
                
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 En personas con discapacidad, ajustes razonables para garantizar comprensión. 

      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema3/22.png', alt='', style="width: 390px").m-auto     

    p.mt-4 El consentimiento informado para la interrupción voluntaria del embarazo debe formalizarse de manera libre y voluntaria, dejando constancia en la historia clínica y asegurando el enfoque diferencial y la protección integral de derechos.

    .row.justify-content-center
      .col-lg-12
        .row
          .col-lg-6.mb-4.mb-lg-0
            .tarjeta.bg-base6.bg-r8.p-4.p-md-5.h-100
              .titulo-fondo: h4 Identificación y abordaje de barreras
              p.mt-4 El acceso efectivo a la IVE exige la identificación y eliminación activa de barreras institucionales que puedan limitar el ejercicio del derecho. Entre las más frecuentes se encuentran la desinformación sobre la normatividad vigente, la exigencia indebida de denuncia penal, retrasos administrativos, remisiones injustificadas, estigmatización o la aplicación inadecuada de la objeción de conciencia.

              p.mt-4 Los servicios de salud deben adoptar medidas para prevenir estas situaciones, incluyendo la capacitación continua del talento humano, la implementación de protocolos claros y la remisión inmediata cuando exista objeción de conciencia individual. En ningún caso la objeción de conciencia puede ser institucional ni constituir un obstáculo para la garantía del derecho a la atención en salud.

              .col.d-none.d-lg-block
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema3/23.svg', alt='', style="width: 400px").m-auto
          .col-lg-6
            .tarjeta.bg-12.bg-r8.p-4.p-md-5.h-100
              .titulo-fondo: h4 Procedimientos según edad gestacional
              p.mt-4 La selección del procedimiento para la IVE debe realizarse de acuerdo con la edad gestacional, las condiciones clínicas de la persona y la capacidad resolutiva del servicio de salud, garantizando siempre condiciones de seguridad, confidencialidad y trato digno.

              p.mt-4.mb-4 En términos generales, durante las primeras semanas pueden utilizarse métodos farmacológicos o procedimientos ambulatorios de menor complejidad. A medida que avanza la edad gestacional, pueden requerirse intervenciones clínicas de mayor complejidad y seguimiento especializado. En todos los casos debe garantizarse manejo adecuado del dolor, acompañamiento emocional y seguimiento posterior.

              .col.d-none.d-lg-block.mt-5
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema3/24.svg', alt='', style="width: 400px").m-auto

    p.mt-4 La decisión sobre el procedimiento debe adoptarse mediante un proceso de información clara y consentimiento informado, respetando la autonomía y el enfoque diferencial.
    
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
