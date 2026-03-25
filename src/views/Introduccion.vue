<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.bg-base5.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La atención integral en salud a víctimas de violencias sexuales exige una respuesta oportuna, técnica y articulada. En Colombia, estos casos se consideran una urgencia en salud, lo que implica garantizar atención inmediata, integral y sin barreras administrativas, conforme a la normativa vigente. Este apartado orienta la comprensión de los lineamientos clínicos y administrativos que sustentan la actuación del sector salud, incluyendo la profilaxis, el acceso a la interrupción voluntaria del embarazo (IVE) en los casos permitidos por la ley, el registro clínico y la notificación obligatoria en el Sistema de Vigilancia en Salud Pública (SIVIGILA). Asimismo, permite reconocer la importancia de la articulación intersectorial como eje del restablecimiento de derechos y la prevención de la revictimización.

    p.mt-4 Para ampliar esta visión general y contextualizar los ejes centrales del tema, se invita a acceder al siguiente recurso audiovisual introductorio.

    .row.justify-content-center.align-items-center.mt-4           
      .col-lg-12
        figure(data-aos="fade-down")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/ZGQThfo5nk4?si=9w69HqZDlMuo7MOJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
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
