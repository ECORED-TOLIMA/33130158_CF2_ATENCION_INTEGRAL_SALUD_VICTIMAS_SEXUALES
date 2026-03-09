<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 2.	Profilaxis y prevención en salud

    .row.align-items-center.mt-4
      .col-lg-8
        p La profilaxis y las acciones de prevención secundaria y terciaria constituyen un componente esencial de la atención integral a personas víctimas de violencias sexuales. Su finalidad es reducir el riesgo de infecciones, prevenir embarazos no deseados, detectar complicaciones de manera temprana y mitigar impactos a corto, mediano y largo plazo en la salud física y mental.
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down").d-none.d-lg-block
              img(src='@/assets/curso/tema2/1.svg', style='width: 100px').m-auto
          
          .col
            .cajon.color1.p-4
              p De acuerdo con la normativa colombiana vigente, estas intervenciones deben ofrecerse de forma oportuna, integral y sin barreras, como parte obligatoria de la atención inicial y del seguimiento clínico, conforme al Modelo y Protocolo de Atención Integral en Salud para Víctimas de Violencia Sexual (Ministerio de Salud y Protección Social, 2011; Resolución 459 de 2012).

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/2.png', alt='', style="width: 350px").m-auto
    
    .row.align-items-center.mt-4
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/3.png', alt='', style="width: 370px").m-auto
      .col-lg-8.p-3
        p.mb-3 Las decisiones relacionadas con la profilaxis deben fundamentarse en la valoración clínica integral, el análisis del riesgo individual y el respeto por la autonomía de la persona, garantizando siempre el consentimiento informado y la confidencialidad.
        p.mt-3 Para profundizar en la normativa vigente sobre profilaxis y atención integral, consulte y descargue el Modelo y Protocolo de Atención Integral en Salud para Víctimas de Violencia Sexual. Este documento orienta la práctica profesional y garantiza una actuación conforme a la ley.

    .row.justify-content-center.mt-4.mb-4
      .col-lg-10
        .row.align-items-center.mt-4
          .col-lg-12
             .row.align-items-center.mt-4.bg-12.p-3.bg-r8
              .col-lg-2
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema2/4.svg', style='width: 90px').m-auto
              
              .col-lg-7
                h4 Ministerio de Salud y Protección Social - Resolución No.00459 de 2012
                p Descargue y revise el Modelo y Protocolo de Atención Integral en Salud para Víctimas de Violencia Sexual (Resolución 459 de 2012).
              
              .col-lg-3
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/Resolucion_459_de_2012.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download
                
    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Profilaxis posexposición

    .row.align-items-center.mt-4
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema2/5.png', alt='', style="width: 350px").m-auto 
      .col-lg-8
        p Las medidas de profilaxis posexposición forman parte obligatoria de la atención en salud y deben adoptarse de manera oportuna, según la valoración del riesgo y los lineamientos técnicos vigentes. Su finalidad es prevenir consecuencias biológicas derivadas de la agresión, tales como infecciones de transmisión sexual, infección por VIH y embarazo no deseado.

        .row.mt-2.p-3.bg-1.cajon.color1.p-4
          .col-12
            .row.align-items-center
              .col-8
                
                  p La profilaxis posexposición constituye una medida obligatoria en la atención integral a víctimas de violencia sexual y debe iniciarse idealmente dentro de las primeras 72 horas posteriores al evento, conforme a los lineamientos técnicos vigentes (Ministerio de Salud y Protección Social, 2012).

              .col-lg-4.d-none.d-lg-block
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema2/6.svg', alt='', style="width: 390px").m-auto 

        p.mt-4.mb-0 En el marco de la atención integral a víctimas de violencia sexual, la profilaxis constituye una medida prioritaria para prevenir infecciones y reducir riesgos en salud. Estas intervenciones deben ofrecerse de manera oportuna, conforme a la valoración clínica y a los lineamientos vigentes. A continuación, se presentan los principales tipos de profilaxis que orientan la atención inicial: para infecciones de transmisión sexual, para hepatitis B y la profilaxis posexposición para VIH.

    .titulo-tres.mt-5: h3 Profilaxis para infecciones de transmisión sexual (ITS)

    p.mt-4 La profilaxis sindromática busca prevenir infecciones que pueden adquirirse como consecuencia de la violencia sexual, aun cuando no existan síntomas al momento de la consulta. En la atención inicial se debe:

    TabsC.color-acento-contenido
      //- Pestaña 1
      .py-3.py-md-4.bg-base6(titulo="Profilaxis para infecciones de transmisión sexual (ITS)")
        .row.p-4
          .col-md-4.mb-4.mb-md-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/7.svg', alt='Imagen ITS').m-auto

          .col-md-8
            p.mb-4 La profilaxis sindromática busca prevenir infecciones que pueden adquirirse como consecuencia de la violencia sexual, aun cuando no existan síntomas al momento de la consulta. En la atención inicial se debe:
            
            .row
              .col-lg-7.mb-4
                h4 Evaluar el riesgo considerando:
                ul.lista-ul--color
                  li 
                    i.lista-ul__vineta
                    p.mb-0 Tipo de contacto sexual.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Uso o no de preservativo.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Presencia de lesiones genitales.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Tiempo transcurrido desde el hecho.

              .col-lg-5.mb-4
                h4 Informar sobre:
                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Objetivo preventivo.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Medicamentos indicados.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Posibles efectos adversos.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Importancia de la adherencia.
            
            .row
              .col-lg-7.mb-4
                h4 Esquemas conforme a lineamientos vigentes para:
                ul.lista-ul--color
                  li 
                    i.lista-ul__vineta
                    p.mb-0 Gonorrea.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Clamidia.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Sífilis.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Tricomoniasis, cuando esté indicada.

              .col-lg-5.mb-4
                h4 Registrar:
                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Evaluación del riesgo.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Consentimiento informado.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Esquema indicado o rechazado.
      
      //-Pestaña 2
      .py-3.py-md-4.bg-base6(titulo="Profilaxis para hepatitis B")
        .row.p-4
          .col-md-4.mb-4.mb-md-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/8.svg', alt='Imagen Hepatitis B').m-auto

          .col-md-8
            p.mb-4 Debe considerarse de manera sistemática ante el riesgo de transmisión por contacto sexual. Durante la atención inicial, se deben verificar los antecedentes de vacunación para definir la conducta correspondiente según los lineamientos vigentes.
            
            .row
              .col-lg-12
                h4 Definir conducta:
                ul.lista-ul--color.mb-4
                  li 
                    i.lista-ul__vineta
                    p.mb-0 Inicio o continuación del esquema de vacunación.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Aplicación de inmunoglobulina cuando esté indicada.

                h4 Informar sobre:
                ul.lista-ul--color
                  li 
                    i.lista-ul__vineta
                    p.mb-0 Importancia de la vacunación.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Esquema y tiempos.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Necesidad de completar dosis.

      //-Pestaña 3
      .py-3.py-md-4.bg-base6(titulo="Profilaxis posexposición para VIH (PEP)")
        .row.p-4
          .col-md-4.mb-4.mb-md-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/9.svg', alt='Imagen VIH').m-auto

          .col-md-8
            p.mb-4 Es una intervención prioritaria ante riesgo de transmisión y debe iniciarse oportunamente según la valoración clínica. Para su indicación, se debe evaluar el riesgo considerando:
            
            .row
              .col-lg-7.mb-4
                h4 Valorar el riesgo según:
                ul.lista-ul--color
                  li 
                    i.lista-ul__vineta
                    p.mb-0 Tipo de acto sexual.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Presencia de lesiones.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Estado serológico del agresor, si se conoce.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Tiempo transcurrido.

              .col-lg-5.mb-4
                h4 Tener en cuenta que:
                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Debe iniciarse idealmente dentro de las primeras 72 horas.
                  li
                    i.lista-ul__vineta
                    p.mb-0 No debe retrasarse por trámites administrativos.

            .row
              .col-lg-7
                h4 Informar sobre:
                ul.lista-ul--color
                  li 
                    i.lista-ul__vineta
                    p.mb-0 El objetivo del tratamiento.
                  li 
                    i.lista-ul__vineta
                    p.mb-0 La duración estimada.
                  li
                    i.lista-ul__vineta
                    p.mb-0 La importancia de cumplirlo de manera completa.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Los posibles efectos secundarios.

    

    .row.justify-content-center.mt-4.mb-4
      .col-lg-10
        .row.align-items-center.mt-4
          .col-lg-12
            .cajon.color2.p-4
              p Cuando la persona consulte fuera del periodo de mayor efectividad de la PEP, el personal de salud deberá realizar valoración clínica integral, ofrecer pruebas diagnósticas correspondientes y garantizar seguimiento, sin negar la atención ni omitir otras medidas preventivas indicadas.

    p.mt-4 El talento humano en salud es responsable de asegurar la prescripción oportuna, la entrega completa de los esquemas y la orientación clara sobre adherencia, efectos secundarios y seguimiento. Estas intervenciones deben suministrarse sin discriminación por edad, sexo, afiliación al sistema de salud o existencia de denuncia penal.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Criterios de indicación y oportunidad
    
    .bloque-texto-g.bg-base5.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La indicación de la profilaxis posexposición en víctimas de violencias sexuales debe basarse en una valoración clínica integral, oportuna y libre de juicios, que considere el tipo de exposición, el tiempo transcurrido desde el evento, las condiciones de la persona afectada y el contexto en el que ocurrió la agresión. Desde el sector salud, la profilaxis constituye una medida de prevención terciaria esencial para reducir el riesgo de infecciones de transmisión sexual, VIH, hepatitis B y embarazo no deseado, y su aplicación hace parte de la atención inicial de urgencias.

    .row.justify-content-center.mt-4.mb-4
      .col-lg-10
        .row.align-items-center.mt-4
          .col-lg-12
            .cajon.color3.p-4
              p La profilaxis posexposición para VIH y otras infecciones de transmisión sexual debe iniciarse idealmente dentro de las primeras 72 horas, periodo en el que se alcanza mayor eficacia preventiva.

    .row.align-items-center.mt-4
      .col-lg-8
        p No obstante, la atención en salud no puede negarse si la persona consulta después de este tiempo; en estos casos deben realizarse las pruebas diagnósticas pertinentes, la valoración clínica completa y el seguimiento correspondiente, explicando de manera clara las limitaciones de la profilaxis tardía.
        
        p.bg-12.p-5 Desde el punto de vista clínico, la profilaxis está indicada cuando exista cualquier forma de contacto sexual con riesgo biológico, incluyendo penetración vaginal, anal u oral, contacto de mucosas con fluidos sexuales, uso de objetos con penetración, o cuando la víctima no pueda precisar completamente lo ocurrido debido a estado de inconsciencia, consumo de sustancias psicoactivas, discapacidad cognitiva o edad. En el marco de la atención integral, no se exige la confirmación del delito ni la identificación del agresor para iniciar la profilaxis, ya que prima el principio de protección de la salud y la vida.
        
        .row.align-items-center.mt-4
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/12.svg', alt='', style="width: 370px").m-auto
          .col-lg-8.p-3
            p.mb-3 La indicación de anticoncepción de emergencia debe realizarse en todas las mujeres en edad fértil con riesgo de embarazo, preferiblemente dentro de las primeras 120 horas, siendo mayor su efectividad en las primeras 72 horas. En casos de niñas, adolescentes, mujeres con discapacidad o víctimas bajo coacción familiar o institucional, el talento humano en salud debe reforzar la información, el acompañamiento y el enfoque de derechos, garantizando que la decisión sea informada y respetuosa de su autonomía progresiva.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/11.png', alt='', style="width: 350px").m-auto


    .row.align-items-center.mt-4
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/13.png', alt='', style="width: 350px").m-auto
      .col-lg-8
        p Asimismo, la profilaxis para hepatitis B debe indicarse según el antecedente vacunal de la víctima y el riesgo de exposición, pudiendo incluir la aplicación de inmunoglobulina y vacuna cuando esté clínicamente indicado. Todas estas decisiones deben quedar debidamente registradas en la historia clínica, justificadas técnicamente y explicadas a la persona atendida de manera comprensible y empática.

        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down").d-none.d-lg-block
              img(src='@/assets/curso/tema2/14.svg', style='width: 100px').m-auto
          
          .col
            p En coherencia con los criterios de indicación y oportunidad, la siguiente figura sintetiza los elementos clínicos que orientan la toma de decisiones frente a la profilaxis para hepatitis B y la anticoncepción de emergencia. Esta representación visual facilita la comprensión del equilibrio técnico que debe garantizarse durante la atención inicial.

    .row.justify-content-center.mt-4.mb-4
      .col-lg-10
        .row.align-items-center.mt-4
          .col-lg-12
            .row.justify-content-center
              .col-10
                .titulo-sexto.color-acento-contenido.mb-3.mt-4
                  h5 Figura 1.
                  span Equilibrio en la indicación de profilaxis y anticoncepción
                .row.bg-12.bg-r8
                  figure
                    img.d-none.d-md-block.m-auto.p-5(
                      src='@/assets/curso/tema2/15.png', style="width: 70%"
                      alt='Figura 1. Equilibrio en la indicación de profilaxis y anticoncepción. La imagen representa una balanza que ilustra el análisis clínico entre la profilaxis para hepatitis B, basada en el antecedente vacunal y su registro en historia clínica, y la anticoncepción de emergencia, orientada al riesgo de embarazo y a su mayor efectividad temprana. La figura destaca la necesidad de decisiones oportunas, informadas y registradas adecuadamente.'
                    )
                    img.d-block.d-md-none.m-auto.p-5(
                      src='@/assets/curso/tema2/16.png',
                      alt='Figura 1. Equilibrio en la indicación de profilaxis y anticoncepción. La imagen representa una balanza que ilustra el análisis clínico entre la profilaxis para hepatitis B, basada en el antecedente vacunal y su registro en historia clínica, y la anticoncepción de emergencia, orientada al riesgo de embarazo y a su mayor efectividad temprana. La figura destaca la necesidad de decisiones oportunas, informadas y registradas adecuadamente.'
                    )

    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Seguimiento clínico

    .row.align-items-center
      .col-lg-8
        p El seguimiento clínico de la profilaxis es una fase esencial de la atención integral, orientada a garantizar la adherencia al tratamiento, detectar efectos adversos e identificar oportunamente infecciones incidentes. Debe planificarse desde el primer contacto y no considerarse una acción secundaria.
        
        p El seguimiento garantiza la efectividad del tratamiento y la seguridad de la persona atendida. Para ello, se deben considerar las siguientes acciones:

        .row.mt-2.bg-base.p-3.bg-base6.bg-r8
          .col-12
            ul.lista-ul--color
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Control clínico: evaluación periódica del estado de salud y detección de signos de alarma.
                
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Tolerancia al medicamento: valoración de posibles efectos adversos.
                
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Cumplimiento del esquema: verificación de los 28 días en el caso de la PEP para VIH.
                
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Adherencia al tratamiento: orientación sobre la importancia de no suspender la medicación.
                
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Efectos secundarios: explicación clara sobre posibles reacciones y manejo esperado.
                
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Canales de consulta: disponibilidad de orientación ante síntomas o dudas.

      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema2/17.png', alt='', style="width: 390px").m-auto     


    p.mt-4 El seguimiento clínico y psicosocial requiere una planificación organizada y articulada. La siguiente tabla resume los momentos diagnósticos, los criterios de control y la integración con la salud mental, garantizando continuidad, confidencialidad y prevención de la revictimización.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 1.
          span Seguimiento clínico y articulación en salud mental

        .tabla-a.color-acento-contenido
          table
            thead(style="background-color: #E3F1EE")
              tr
                th Componente
                th Acciones de seguimiento
                th Momento o criterio
                th Aspectos clave
            tbody
              tr
                th Pruebas diagnósticas ITS
                td VIH, sífilis y otras infecciones de transmisión sexual
                td Línea basal, 6 semanas, 3 meses y, cuando corresponda, 6 meses
                td Realizar con confidencialidad y registro adecuado
              tr
                th Hepatitis B
                td Evaluación serológica según antecedente vacunal
                td Según esquema y tiempos establecidos
                td Verificar esquema completo y necesidad de refuerzo
              tr
                th Prueba de embarazo
                td Confirmación diagnóstica
                td Cuando exista riesgo de gestación
                td Aplicar según criterio clínico
              tr
                th Confidencialidad
                td Protección de la información clínica
                td Durante todo el proceso
                td Evitar revictimización
              tr
                th Salud mental
                td Evaluación del bienestar psicológico
                td Desde el inicio y durante el seguimiento
                td Identificar síntomas que afecten adherencia
              tr
                th Remisión especializada
                td Gestión de apoyo psicológico o psiquiátrico
                td Cuando se identifiquen alteraciones emocionales
                td Garantizar continuidad y articulación intersectorial

    p.mt-4 El cierre del seguimiento debe registrarse en la historia clínica, incluyendo el cumplimiento del tratamiento, los resultados obtenidos y las orientaciones finales brindadas. Este cierre no significa finalizar el acompañamiento, sino integrar el caso al seguimiento clínico general y a la articulación intersectorial correspondiente.          


</template>

<script>
export default {
  name: 'Tema2',
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
