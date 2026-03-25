<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta una síntesis de los principales contenidos desarrollados en este proceso formativo, organizados en ejes fundamentales de la respuesta institucional: la articulación entre sectores, la activación de rutas de atención, el acceso a la justicia, la aplicación de medidas de protección y el seguimiento para el restablecimiento de derechos. Estos elementos orientan la coordinación entre las entidades responsables y fortalecen las acciones administrativas, legales y operativas necesarias para brindar una atención integral. De esta manera, se promueve una actuación oportuna, ética y articulada que contribuya a proteger la vida, la dignidad y los derechos de las personas afectadas por violencias sexuales.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual titulado “Atención intersectorial y restablecimiento de derechos”. Presenta un nodo central del cual se derivan cinco componentes principales. Estos son: articulación entre sectores, activación de rutas de atención, acceso a la justicia, medidas de protección y restablecimiento de derechos. Cada componente incluye acciones específicas relacionadas con coordinación, registro, acompañamiento y seguimiento. El esquema muestra cómo estas acciones se integran para garantizar la protección y los derechos de las personas afectadas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis


</template>

<script>
export default {
  name: 'Sintesis',
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
