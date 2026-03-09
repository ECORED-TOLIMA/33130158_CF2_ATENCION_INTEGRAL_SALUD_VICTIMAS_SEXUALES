<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Acceso a la justicia
    
    .row.align-items-center
      .col-lg-8.bg-base9.bg-r8.p-3
    
        figure
          img(src="@/assets/curso/tema9/1.svg", alt="", style="width: 80px")
    
        p.mt-3 El acceso a la justicia es un derecho fundamental de las víctimas de violencias sexuales y una obligación del Estado. Desde el sector salud, este derecho implica brindar orientación clara, respetar la autonomía y evitar barreras que limiten la activación de las rutas institucionales. El talento humano en salud cumple un rol facilitador, sin sustituir a la autoridad judicial, actuando dentro del marco legal y priorizando la protección y la no revictimización. La activación del componente judicial se realiza mediante el aviso a las autoridades competentes, conforme a la normatividad vigente y sin generar retrasos en la atención clínica, garantizando que la información compartida sea estrictamente necesaria y confidencial.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema9/2.png', alt='', style="width: 380px").m-auto

    .row.align-items-center.mt-4
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema9/3.png', alt='', style="width: 400px").m-auto
      .col-lg-8
        p En el marco del acceso a la justicia, el aviso a las autoridades competentes permite activar el componente judicial y las medidas de protección correspondientes. A continuación, se presentan las entidades que intervienen en este proceso y cumplen funciones específicas dentro de la ruta institucional:
        

        .row.justify-content-center.mt-4
          .row.justify-content-center
            .col-lg-3.d-flex.mt-4.mt-lg-0
              .crd.bg-base8.p-4.h-100.w-100
                figure.mb-2(data-aos="zoom-in")
                  img(src='@/assets/curso/tema9/4.svg', style='width: 40px')
                p.mb-0 Fiscalía General de la Nación
            
            .col-lg-3.d-flex.mt-4.mt-lg-0
              .crd.bg-base8.p-4.h-100.w-100
                figure.mb-2(data-aos="zoom-in")
                  img(src='@/assets/curso/tema9/5.svg', style='width: 40px')
                p.mb-0 Policía Judicial
            
            .col-lg-3.d-flex.mt-4.mt-lg-0
              .crd.bg-base8.p-4.h-100.w-100
                figure.mb-2(data-aos="zoom-in")
                  img(src='@/assets/curso/tema9/6.svg', style='width: 40px')
                p.mb-0 Comisarías de Familia
            
            .col-lg-3.d-flex.mt-4.mt-lg-0
              .crd.bg-base8.p-4.h-100.w-100
                figure.mb-2(data-aos="zoom-in")
                  img(src='@/assets/curso/tema9/7.svg', style='width: 40px')
                p.mb-0 Instituto Colombiano de Bienestar Familiar 
          .col
            p.mt-4 Existen distintas modalidades de aviso que deben explicarse de manera clara para facilitar decisiones informadas por parte de la víctima. Estas modalidades determinan el tipo de actuación institucional que se activa en el marco del acceso a la justicia.
      
    .titulo-tres.mt-5: h3 Tipos de aviso

    .row.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0.mb-5
        .tarjeta-custom.p-4.bg-base
          .tarjeta-custom__icon
            img(src='@/assets/curso/tema9/8.svg')
          .tarjeta-custom__text
            h4 Aviso formal
            p Activa directamente la actuación judicial mediante la denuncia ante autoridad competente.

      .col-lg-5
        .tarjeta-custom.p-4.bg-base
          .tarjeta-custom__icon
            img(src='@/assets/curso/tema9/9.svg')
          .tarjeta-custom__text
            h4 Aviso no formal
            p Permite activar mecanismos administrativos de protección sin iniciar de manera inmediata un proceso penal.


    .row.align-items-center.mt-4
      .col-lg-8
        p.mt-4 El talento humano en salud debe informar las implicaciones de cada modalidad con enfoque de derechos, sin presionar ni condicionar la atención a la decisión de denunciar. La prestación de servicios de salud no puede depender de la interposición de denuncia.
        
        .row.align-items-center.bg-base6.p-3.bg-r8
          .col-lg-2
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema9/10.svg', style='width: 100px').m-auto
          
          .col
            p.mt-2 Para facilitar la comprensión de estas diferencias y sus implicaciones jurídicas y protectoras, a continuación, se presenta un esquema comparativo entre el aviso formal y el aviso no formal en el contexto de la atención a víctimas de violencias sexuales.

      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema9/11.svg', alt='', style="width: 450px").m-auto

    .row.justify-content-center.mt-4.mb-4
      .col-lg-10
        .row.align-items-center.mt-4
          .col-lg-12
            .row.justify-content-center
              .col-12
                .titulo-sexto.color-acento-contenido.mb-3.mt-4
                  h5 Figura 3.
                  span Diferencias entre aviso formal y aviso no formal en casos de violencia sexual
                .row.bg-12.bg-r8
                  figure.mt-4.mb-3
                    img.d-none.d-md-block.m-auto.p-2(
                      src='@/assets/curso/tema9/12.svg', style="width: 80%"
                      alt='Figura 2. Diagrama que muestra la atención inicial en salud mental: inicia con evaluación emocional, continúa con la identificación de riesgo de hacerse daño o dañar a otros y define dos acciones posibles: continuar acompañamiento o activar atención especializada inmediata.'
                    )
                    img.d-block.d-md-none.m-auto.p-4(
                      src='@/assets/curso/tema9/13.svg',
                      alt='Figura 2. Diagrama que muestra la atención inicial en salud mental: inicia con evaluación emocional, continúa con la identificación de riesgo de hacerse daño o dañar a otros y define dos acciones posibles: continuar acompañamiento o activar atención especializada inmediata.'
                    )
                    img.d-block.d-md-none.m-auto.p-4(
                      src='@/assets/curso/tema9/14.svg',
                      alt='Figura 2. Diagrama que muestra la atención inicial en salud mental: inicia con evaluación emocional, continúa con la identificación de riesgo de hacerse daño o dañar a otros y define dos acciones posibles: continuar acompañamiento o activar atención especializada inmediata.'
                    )
                  figcaption Nota. Adaptado de la Ley 906 de 2004, la Ley 1098 de 2006, la Ley 1146 de 2007 y la Ley 1257 de 2008.

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema9/15.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p La aplicación del deber de denunciar en casos de violencias sexuales exige un análisis diferenciado que equilibre la protección de la víctima con el respeto por sus derechos y autonomía. No se trata de una obligación automática, sino de una actuación orientada por principios garantistas y ajustada a la condición de la persona afectada. A continuación, se presentan los criterios que orientan esta aplicación, así como su desarrollo específico en personas adultas, en niñas, niños y adolescentes, y en situaciones excepcionales que requieren medidas reforzadas de protección.
    

    .row.justify-content-center.mt-4
      .col-lg-9
        LineaTiempoD.color-primario.linea-bold
          //- Primer paso
          .row(numero="1" titulo="Principios orientadores")
            .col-md-12.mb-4.mb-md-0
              .col-lg-12.mb-lg-0
                p La aplicación del deber de denunciar debe regirse por criterios garantistas que aseguren la protección integral de la víctima y el respeto por sus derechos. Estos principios orientan una actuación proporcional, ética y libre de revictimización.
                
                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Protección integral de la víctima.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Respeto por la autonomía en personas adultas.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Interés superior de niñas, niños y adolescentes.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Proporcionalidad y necesidad.
                  li
                    i.lista-ul__vineta
                    p.mb-0 No revictimización.
                
          //- Segundo paso
          .row(numero="2" titulo="Aplicación en personas adultas")
            .col-md-12.mb-4.mb-md-0
              .row.align-items-center.mt-4
                .col-lg-12.mb-lg-0
                  p En personas adultas, el deber de denunciar se aplica con respeto por la autonomía y la capacidad de decisión. La información debe brindarse de manera clara, sin presiones ni condicionamientos en la atención en salud.

                  ul.lista-ul--color
                    li
                      i.lista-ul__vineta
                      p.mb-0 Derecho a recibir información clara sobre la denuncia.
                    li
                      i.lista-ul__vineta
                      p.mb-0 No puede obligarse a presentar denuncia penal.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Se respeta el secreto profesional, salvo excepciones legales.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Puede activarse aviso no formal si existe riesgo.

          //- Tercer paso
          .row(numero="3" titulo="Aplicación en niñas, niños y adolescentes")
            .col-md-12.mb-4.mb-md-0
              .row.align-items-center.mt-4
                .col-lg-12.mb-lg-0
                  p En niñas, niños y adolescentes, la protección prevalece sobre la autonomía decisional. El aviso a las autoridades hace parte del proceso de restablecimiento de derechos y responde al principio de interés superior del menor.

                  ul.lista-ul--color
                    li
                      i.lista-ul__vineta
                      p.mb-0 El aviso es obligatorio dentro del proceso de restablecimiento de derechos.
                    li
                      i.lista-ul__vineta
                      p.mb-0 No depende de la voluntad del NNA o su familia.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Debe realizarse de forma inmediata y documentada.

          //- Cuarto paso
          .row(numero="4" titulo="Situaciones excepcionales en personas adultas")
            .col-md-12.mb-4.mb-md-0
              .row.align-items-center.mt-4
                .col-lg-12.mb-lg-0
                  p Existen situaciones excepcionales en las que el aviso puede ser obligatorio incluso en personas adultas, cuando se identifican riesgos graves que comprometen la vida, la integridad o la seguridad.

                  p.mb-0 El aviso procede cuando exista:

                  ul.lista-ul--color
                    li
                      i.lista-ul__vineta
                      p.mb-0 Riesgo inminente para la vida o integridad.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Amenaza grave o reiterada.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Incapacidad de la víctima para protegerse.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Orden judicial expresa.


          //- Quinto paso
          .row(numero="4" titulo="Alcance del secreto profesional")
            .col-md-12.mb-4.mb-md-0
              .row.align-items-center.mt-4
                .col-lg-12.mb-lg-0
                  p El secreto profesional constituye una garantía ética y legal en la atención a víctimas de violencias sexuales. Su finalidad es proteger la información sensible y preservar la confianza en la relación asistencial.


                  ul.lista-ul--color
                    li
                      i.lista-ul__vineta
                      p.mb-0 Protección de la historia clínica.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Acceso restringido a personal autorizado.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Prohibición de divulgar información sin justificación legal.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Uso exclusivo para fines asistenciales o legales autorizados.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Confidencialidad en comunicaciones interinstitucionales.

          //- Sexto paso
          .row(numero="4" titulo="Criterios de actuación ante excepciones")
            .col-md-12.mb-4.mb-md-0
              .row.align-items-center.mt-4
                .col-lg-12.mb-lg-0
                  p Cuando se configura una excepción legal, el manejo de la información debe realizarse con prudencia, criterio técnico y enfoque de derechos, evitando afectaciones adicionales a la víctima.

                  ul.lista-ul--color
                    li
                      i.lista-ul__vineta
                      p.mb-0 Informar a la víctima cuando sea posible.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Evitar divulgar detalles innecesarios.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Utilizar canales institucionales formales.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Documentar la decisión adoptada.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Priorizar la protección y la no revictimización.
      
      .col-lg-3.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema9/16.png', alt='', style="width: 100%").m-auto

    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema9/17.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-12px")
              .col-lg
                p Desde el acceso a la justicia, el manejo adecuado del secreto profesional y de sus excepciones constituye un elemento clave para garantizar una actuación ética, legal y centrada en la víctima. La protección de la confidencialidad fortalece la confianza en los servicios de salud, mientras que la aplicación responsable de las excepciones permite activar los mecanismos de protección y judicialización cuando la ley lo exige. De este modo, se asegura un equilibrio entre el respeto por la autonomía, la garantía de derechos y la obligación institucional de prevenir riesgos y evitar nuevas formas de victimización.

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
