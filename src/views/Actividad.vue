<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Atención intersectorial y restablecimiento de derechos',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los lineamientos técnicos, clínicos y normativos que orientan la atención integral e intersectorial en salud a víctimas de violencias sexuales, de acuerdo con la normativa colombiana vigente.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'La profilaxis postexposición para VIH en víctimas de violencia sexual debe iniciarse preferiblemente dentro de las primeras:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '24 horas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '48 horas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '72 horas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '96 horas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el principal criterio para la indicación de anticoncepción de emergencia en casos de violencia sexual?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La confirmación del delito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El riesgo de embarazo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La autorización judicial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La edad de la víctima.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'La anticoncepción de emergencia mantiene efectividad hasta un máximo de:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '120 horas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '72 horas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '96 horas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '48 horas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'La interrupción voluntaria del embarazo (IVE) en casos de violencia sexual:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es un derecho fundamental.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Requiere denuncia penal previa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo aplica para mayores de edad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Requiere autorización judicial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'El consentimiento informado para la IVE debe caracterizarse por ser:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presunto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Delegado en terceros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Libre, voluntario e informado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Emitido únicamente por la familia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de los siguientes NO constituye una barrera de acceso a la IVE?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exigencia de denuncia penal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Objeción de conciencia institucional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Información clara y oportuna.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Retrasos administrativos injustificados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'Opción a)',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Intervención inmediata y breve.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Tratamiento farmacológico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Valoración judicial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es un objetivo principal de los primeros auxilios psicológicos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el impacto emocional inmediato.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Obtener pruebas judiciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Profundizar en el relato del hecho.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diagnosticar trastornos mentales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'La valoración del riesgo de autoagresión debe realizarse:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo si la víctima lo solicita.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desde la atención inicial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente por psiquiatría.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Después del proceso judicial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'La remisión a atención especializada en salud mental está indicada cuando:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La víctima no desea hablar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Existen síntomas persistentes o riesgo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se cierra el caso clínico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Finaliza la atención inicial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'El seguimiento clínico de la profilaxis incluye:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo la entrega del medicamento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Exclusivamente pruebas de laboratorio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente atención inicial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Control de adherencia y efectos adversos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El registro en la historia clínica debe caracterizarse por ser:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Subjetivo y narrativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Breve y sin detalles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Orientado a la investigación penal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Objetivo, completo y confidencial.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'La notificación de violencias sexuales en SIVIGILA tiene como finalidad principal:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Judicializar el caso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vigilancia epidemiológica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sancionar al aggressor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar la denuncia penal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El Registro Individual de Prestación de Servicios de Salud (RIPS) permite:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Emitir conceptos forenses.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir la historia clínica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Garantizar la trazabilidad administrativa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Activar medidas judiciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: 'El rol del sector salud en el abordaje forense se limita a:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Investigar el delito',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Preservar y remitir evidencias',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Emitir dictámenes periciales',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Interrogar a la víctima',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: 'La cadena de custodia busca garantizar:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La integridad del material probatorio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La confidencialidad clínica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La continuidad terapéutica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La atención psicológica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: 'La activación de rutas intersectoriales debe realizarse:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo después de la denuncia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'De manera secuencial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'De forma simultánea y oportuna.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Únicamente por orden judicial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'En casos de niñas, niños y adolescentes víctimas de violencia sexual, el aviso a las autoridades es:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Opcional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Obligatorio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Condicionado a la familia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivo del sector justicia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'El restablecimiento de derechos de niños, niñas y adolescentes es un proceso:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Judicial y sancionatorio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Exclusivamente clínico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Administrativo e integral.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Temporal y opcional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'El seguimiento intersectorial de los casos tiene como finalidad principal:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cerrar rápidamente el caso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir la atención clínica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Verificar la efectividad de las medidas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Centralizar la información judicial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
