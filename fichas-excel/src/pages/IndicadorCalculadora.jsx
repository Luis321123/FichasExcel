import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const indicadores = {
  "Caracterización": {
    lista: [
      { nombre: "Cantidad de personal capacitado en atención y prevención de DyVBG" },
      { nombre: "Distribución de casos de DyVBG por género, edad, nivel académico y rol en la comunidad académica" },
      { nombre: "Distribución por género del personal docente y administrativo por nivel jerárquico" },
      { nombre: "Número total de casos de DyVBG registrados en la IES desagregados por tipo de violencia" },
      { nombre: "Porcentaje de casos con reincidencia en víctimas y agresores" },
      { nombre: "Porcentaje del presupuesto institucional destinado a programas y acciones contra la DyVBG" }
    ]
  },
  "Detección": {
    lista: [
      { nombre: "Disponibilidad de sistemas de alerta temprana, aplicaciones móviles y plataformas de denuncia digital"}, // Sin punto
      { nombre: "Nivel de conocimiento de la comunidad sobre mecanismos de denuncia"},
      { nombre: "Número de canales de denuncia disponibles y activos"},
      { nombre: "Número de capacitaciones anuales impartidas al personal sobre el manejo de casos de DyVBG"},
      { nombre: "Índice de Percepción de Seguridad en el Campus (IPSC)"},
      { nombre: "Porcentaje de personal docente y administrativo capacitado en identificación y manejo de casos de DyVBG"},
      { nombre: "Porcentaje de personas de la comunidad academica que conoce los canales dedenuncia"},
      { nombre: "Porcentaje de personas de la comunidad academica con conocimiento sobre los protocolos de denuncia"},
      { nombre: "Tasa de denuncias formalizadas vs. casos identificados"},
      { nombre: "Tiempo promedio de respuesta ante denuncias de DyVBG"}
    ]
  },
  "Disciminación": {
    lista: [
      { nombre: "Existencia Accesibilidad Y Efectividad De Normativas"},
      { nombre: "Número de reportes de discriminación dentro del entorno de la IES"},
      { nombre: "Porcentaje de estudiantes, docentes y personal administrativo que reportan haber experimentado discriminación por género, etnia, discapacidad u orientación sexual" }
    ]
  },
  "Prevención": {
    lista: [
      { nombre: "Conocimientos adquiridos en los procesos de formación sobre prevención"},
      { nombre: "Disponibilidad de canales de denuncia accesibles y confidenciales" },
      { nombre: "Existencia de políticas institucionales de no tolerancia hacia la violencia de género"},
      { nombre: "Tasa de participación en programas de formación sobre género y DyVBGG.s"}
    ]
  },
  "Atención": {
    lista: [
      { nombre: "Disponibilidad de personal especializado en atención a víctimas" },
      { nombre: "Nivel de satisfacción con los servicios de atención" },
      { nombre: "Percepción sobre la efectividad de los protocolos" },
      { nombre: "Índice de reincidencia en casos de DyVBG" },
      { nombre: "Índice de satisfacción con la atención recibida2" }
    ]
  }
};

const infoIndicadores = {
  "Cantidad de personal capacitado en atención y prevención de DyVBG": {
    nombre: "Población Cantidad de personal capacitado en atención y prevención de DyVBG",
    categoria: "Caracterización",
    tipologia: "Simple",
    nivel: "Gestión",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Bienestar Universitario, Comités y Unidades de Género",
    factores: "Disponibilidad de recursos, formación del personal y estrategias de implementación",
    Definición:"Mide el número de personas del personal en la IES que han recibido formación en prevención y atención de violencia basada en género dentro de la institución.",
    objetivo: "Evaluar el nivel de cobertura en la capacitación del personal en temas de prevención y atención de VBG, con el fin de mejorar la capacidad de respuesta institucional.",
    relevancia: "Este indicador es clave para garantizar que la comunidad en la IES cuente con personal capacitado que pueda brindar una atención adecuada y contribuir a la prevención de la violencia de género en la IES.",
    preguntas_orientadoras: {
      p1: " -¿Cuántas personas del personal universitario han recibido capacitación en atención y prevención de DyVBG en el último año?",
      p2: " -¿Qué porcentaje del personal total ha recibido formación específica en este tema?",
      p3: " -¿Qué metodologías y enfoques se han utilizado en las capacitaciones?",
      p4: " -¿Existen mecanismos de seguimiento para evaluar la aplicación de los conocimientos adquiridos?",
      p5: " -¿Cuáles son las barreras que dificultan la participación del personal en las capacitaciones?,"
    },
    meta: " Capacitar al 100% del personal relevante en tres años",
    meta2: {
      m1: "año 1: 50$",
      m2: "año 2: 75%",
      m3: "año 3: 100%"
    },
    umbrales: {
      alto:"Alto (Óptimo) ≥ 85%",
      medio:"Medio (Aceptable) 50% - 84%",
      bajo:"Bajo (Deficiente) < 50%"
    },
    Fórmula: "Formula PC = [Total de docentes formados / total docentes]; [Total de personal administrativo formado / total personal administrativo]; [Personal con conocimientos específicos en DyVBG / total de personas que atienden situaciones de DyVBG en la IES]",
    Variables_utilizadas: "Personal docente y administrativo en IES por tipo de vinculación, edad y sexo, con y sin capacitación en DyVBG.",
    Fuente_de_datos: "Registros institucionales, jefaturas de personal, reportes de asistencia.",
    frecuencia_de_medición: "Anual",
    unidad_de_medida: "Porcentaje",
    interpretación: "Un mayor porcentaje indica mejor preparación institucional para atender y prevenir la DyVBG.",
    recomendaciones:{
      r1:"Asegurar recursos para capacitar a todo el personal",
      r2:"Promover participación del personal directivo y administrativo",
      r3:"Aplicar evaluaciones post-capacitación",
      r4:"Formaciones anuales con refuerzos periódicos",
      r5:"Cobertura de al menos 90% en personal estratégico",
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025",
  },
  "Distribución de casos de DyVBG por género, edad, nivel académico y rol en la comunidad académica": {
    nombre: "Distribución de casos de DyVBG por género, edad, nivel académico y rol en la comunidad académica",
    categoria: "Caracterización",
    tipologia: "Complejo",
    nivel: "Resultado",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Vicerrectorías, Bienestar Institucional",
    factores: "Subregistro de casos, barreras para la denuncia, percepción de impunidad, acceso a canales de atención y apoyo",
    Definición: "Mide la distribución de los casos de DyVBG dentro de la comunidad universitaria, desglosando los datos por género, edad, nivel académico y rol dentro de la institución.",
    objetivo: "Caracterizar la incidencia de DyVBG en la comunidad académica para desarrollar estrategias de prevención y atención más focalizadas.",
    relevancia: "Permite identificar grupos más vulnerables a la DyVBG dentro del entorno académico y diseñar intervenciones dirigidas a reducir la violencia y mejorar los mecanismos de denuncia y protección.",
    preguntas_orientadoras: {
      p1: "¿Cuál es la distribución de los casos de DyVBG según género, edad y nivel académico?",
      p2: "¿Existen patrones o tendencias en la ocurrencia de estos casos dentro de la comunidad académica?",
      p3: "¿Qué grupos presentan mayor vulnerabilidad ante la DyVBG?",
      p4: "¿Se observa un incremento o disminución en la distribución de casos a lo largo del tiempo?",
      p5: "¿Los roles en la comunidad académica influyen en la probabilidad de ser víctima de DyVBG?"
    },
    Fórmula: "Se presentan los casos en distribución porcentual según cada variable de análisis: % casos por categoría = [Casos de DyVBG en cada categoría / Total de casos reportados]",
    Variables_utilizadas: "Número total de casos reportados. Número de casos por género. Número de casos por grupo etario. Número de casos por nivel académico (pregrado, posgrado, docentes, administrativos). Número de casos según rol en la comunidad académica (estudiantes, docentes, administrativos).",
    Fuente_de_datos: "Registros institucionales de denuncias, informes de oficinas de bienestar universitario y protocolos de atención a víctimas de DyVBG.",
    frecuencia_de_medición: "Semestral, Anual",
    unidad_de_medida: "Porcentaje de casos distribuidos por categorías.",
    interpretación: "Un aumento en la proporción de casos en ciertos grupos puede indicar la necesidad de estrategias focalizadas de prevención y apoyo.",
    meta: "Reducir en un 30% la concentración de casos en grupos específicos para 2026",
    umbrales: {
      alto: "Alta concentración en un grupo (>50%) → Indica una vulnerabilidad significativa en esa población",
      medio: "Distribución equitativa sin tendencias claras → Puede indicar un problema generalizado en la comunidad académica",
      bajo: "Tendencia a la reducción de casos en el tiempo → Indica éxito en las políticas de prevención"
    },
    recomendaciones: {
      r1: "Refuerzo de campañas de sensibilización en los grupos más vulnerables",
      r2: "Fortalecimiento de los canales de denuncia y acompañamiento",
      r3: "Implementación de programas de formación para la prevención de DyVBG",
      r4: "Analizar los datos periódicamente para identificar patrones",
      r5: "Vincular este indicador con otros sobre percepción de seguridad"
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025"
  },
  "Distribución por género del personal docente y administrativo por nivel jerárquico": {
    nombre: "Distribución por género del personal docente y administrativo por nivel jerárquico",
    codigo: "CAR_03",
    categoria: "Caracterización",
    tipologia: "Complejo",
    nivel: "Resultado",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Recursos Humanos / Dirección de personal / Planeación Institucional",
    factores: [
      "Brechas de género en contratación y promoción",
      "Políticas de inclusión y equidad de género en la universidad",
      "Sesgos en los procesos de selección y ascenso",
      "Disponibilidad de datos desagregados en los registros institucionales"
    ],
    Definición: "Este indicador mide la proporción de hombres y mujeres dentro del personal docente y administrativo, desagregada por los diferentes niveles jerárquicos dentro de la universidad.",
    objetivo: "Identificar la distribución de género en la estructura organizacional de la universidad para evaluar equidad en la ocupación de cargos y tomar decisiones que fomenten la paridad.",
    relevancia: "Permite evidenciar posibles desigualdades en la distribución de cargos de mayor jerarquía. Es clave para formular políticas de equidad de género en la contratación y promoción laboral. Facilita el cumplimiento de normativas y lineamientos institucionales sobre igualdad de género.",
    preguntas_orientadoras: {
      p1: "¿Existe una representación equitativa de género en los diferentes niveles jerárquicos?",
      p2: "¿Se presentan brechas significativas en la ocupación de cargos directivos entre hombres y mujeres?",
      p3: "¿Las políticas institucionales han contribuido a reducir desigualdades de género en la estructura organizacional?",
      p4: "¿Cuál es la evolución de la distribución de género en el personal docente y administrativo en los últimos años?"
    },
    Fórmula: "Se calcula el porcentaje de hombres y mujeres en cada nivel jerárquico: % en cada nivel = [# de personas en cada sexo en el nivel / total de personas en el nivel]",
    Variables_utilizadas: [
      "Número total de docentes y administrativos",
      "Número de hombres en cada nivel jerárquico",
      "Número de mujeres en cada nivel jerárquico"
    ],
    Fuente_de_datos: "Registros de Recursos Humanos, direcciones de personal y reportes institucionales de equidad de género.",
    frecuencia_de_medición: "Anual",
    unidad_de_medida: "Porcentaje de participación por género en cada nivel jerárquico",
    interpretación: "Una mayor equidad de género indica políticas de inclusión efectivas. Una marcada desigualdad en los niveles altos puede señalar barreras en el acceso a cargos directivos.",
    meta: "Índice de Paridad de Género (IPG) entre 0.9 - 1.1 en todos los niveles jerárquicos",
    umbrales: {
      alto: "Equidad alta (0.9 - 1.1): Distribución equilibrada entre hombres y mujeres",
      medio: "Equidad media (0.6 - 0.89 o 1.11 - 1.4): Leve desigualdad de género",
      bajo: "Equidad baja (<0.6 > 1.4): Desigualdad significativa en la distribución de cargos"
    },
    uso_toma_decisiones: "Evaluar la efectividad de políticas de equidad de género en la universidad. Rediseñar estrategias para mejorar la representación femenina en niveles jerárquicos superiores.",
    acciones_correctivas: [
      "Implementar programas de mentoría y liderazgo para mujeres en educación superior",
      "Garantizar criterios de equidad en los procesos de promoción y selección de personal",
      "Monitorear anualmente la evolución del indicador"
    ],
    recomendaciones: {
      r1: "Analizar la evolución del indicador en función de los planes de acción institucionales",
      r2: "Complementar con indicadores de brecha salarial y tiempos de permanencia",
      r3: "Establecer metas específicas por áreas con mayor desigualdad"
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025"
  },
  "Número total de casos de DyVBG registrados en la IES desagregados por tipo de violencia": {
    nombre: "Número total de casos de DyVBG registrados en la IES desagregados por tipo de violencia",
    codigo: "CAR_04",
    categoria: "Caracterización",
    tipologia: "Complejo",
    nivel: "Resultado",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Oficina de Bienestar, Unidad/comité de Género, Defensoría/representación estudiantil, Secretaría General",
    factores: [
      "Subregistro de casos por temor a denunciar",
      "Falta de canales adecuados para la recepción de denuncias",
      "Sensibilización y confianza en los sistemas de reporte",
      "Implementación de protocolos de atención"
    ],
    Definición: "Este indicador mide el total de casos de violencia y discriminación por razones de género en la Institución de Educación Superior (IES), desagregados según el tipo de violencia (física, psicológica, sexual, económica, simbólica, entre otras).",
    objetivo: "Monitorear la prevalencia y tipología de DyVBG dentro de la institución para diseñar estrategias de prevención, atención y sanción.",
    relevancia: "Permite evaluar la magnitud del problema dentro de la comunidad académica. Facilita la implementación de políticas y protocolos de prevención y atención. Sirve como base para la toma de decisiones y asignación de recursos en la lucha contra la DyVBG.",
    preguntas_orientadoras: {
      p1: "-¿Cuántos casos de DyVBG se han registrado en la IES durante el período de medición?",
      p2: "-¿Cuál es el tipo de violencia más reportado en la institución?",
      p3: "-¿Se ha observado un aumento o disminución en los casos registrados en comparación con períodos anteriores?",
      p4: "-¿Los mecanismos de denuncia han facilitado el reporte de casos o existen barreras?",
      p5: "-¿Cuáles son las áreas o dependencias de la institución con mayor incidencia de casos?"
    },
    Fórmula: "Total Casos = [Ʃcasos reportados por tipo de violencia]",
    Variables_utilizadas: [
      "Número de denuncias recibidas por cada tipo de violencia",
      "Registros administrativos de las unidades responsables de atención"
    ],
    Fuente_de_datos: "Encuestas, reportes internos",
    frecuencia_de_medición: "Anual",
    unidad_de_medida: "Número total de casos por tipo de violencia",
    interpretación: "Un aumento en los casos puede reflejar mayor violencia o mayor confianza en los mecanismos de denuncia. Una disminución en los casos puede reflejar éxito en políticas de prevención o barreras en la denuncia. Se debe analizar junto con otros indicadores, como la cantidad de denuncias formalizadas y la efectividad en la atención de los casos.",
    meta: "Reducción progresiva de casos reportados con mejora en los sistemas de prevención",
    umbrales: {
      alto: "Aumento ≥ 15% de casos: Necesidad de análisis detallado",
      medio: "Variación entre -15% y +15%: Estabilidad en reportes",
      bajo: "Disminución ≥ 15%: Posible mejora en prevención"
    },
    uso_toma_decisiones: "Evaluar el efecto de las estrategias de prevención y determinar necesidades de fortalecimiento en campañas y protocolos",
    acciones_correctivas: [
      "Fortalecer canales de denuncia y atención integral",
      "Ampliar estrategias de formación y sensibilización",
      "Implementar medidas de protección en áreas críticas"
    ],
    recomendaciones: {
      r1: "Complementar con indicadores de tasa de resolución de denuncias",
      r2: "Realizar estudios cualitativos sobre barreras en la denuncia",
      r3: "Vincular con indicadores de percepción de seguridad"
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025"
  },
  "Porcentaje de casos con reincidencia en víctimas y agresores": {
    nombre: "Porcentaje de casos con reincidencia en víctimas y agresores",
    codigo: "CAR_05",
    categoria: "Caracterización",
    tipologia: "Simple",
    nivel: "Resultado",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Oficina de Bienestar en la IES, Unidad/Comité de Género, Secretaría General",
    factores: [
      "Subregistro de casos por temor a denunciar",
      "Falta de seguimiento adecuado a los casos reportados",
      "Ineficacia en las medidas de protección y sanción",
      "Percepción de impunidad en la comunidad académica"
    ],
    Definición: "Este indicador mide el porcentaje de casos de violencia y discriminación por género (DyVBG) en los que una misma víctima o un mismo agresor ha estado involucrado en más de un evento reportado dentro de la Institución de Educación Superior (IES).",
    objetivo: "Identificar patrones de reincidencia en agresores y víctimas para fortalecer las estrategias de prevención y mitigación de DyVBG en la comunidad académica.",
    relevancia: "Permite evaluar la efectividad de las medidas implementadas para prevenir la repetición de casos. Facilita la identificación de contextos de vulnerabilidad o impunidad dentro de la institución. Ayuda a diseñar estrategias más efectivas de intervención y protección.",
    preguntas_orientadoras: {
      p1: "¿Qué porcentaje de los casos de DyVBG corresponden a reincidencias?",
      p2: "¿Los agresores reincidentes han recibido sanciones o medidas correctivas previas?",
      p3: "¿Las víctimas reincidentes han recibido apoyo adecuado y medidas de protección efectivas?",
      p4: "¿Existe un patrón en los casos reincidentes según género, edad, rol en la comunidad académica u otros factores?",
      p5: "¿Las estrategias implementadas han reducido la reincidencia en el tiempo?"
    },
    Fórmula: "Porcentaje de casos con reincidencia = [# de casos de DyVBG con reincidencia / # total de casos de DyVBG registrados] × 100",
    Variables_utilizadas: [
      "Número total de casos de DyVBG registrados en la IES",
      "Número de casos con reincidencia de víctima o agresor"
    ],
    Fuente_de_datos: "Reportes institucionales, estadísticas de la unidad/comités de Género, Bienestar Institucional",
    frecuencia_de_medición: "Semestral",
    unidad_de_medida: "Porcentaje (%)",
    interpretación: "Un porcentaje alto indica que las medidas de atención y sanción no están siendo efectivas. Una disminución del porcentaje sugiere que las acciones preventivas y correctivas han logrado mitigar la reincidencia. Si las reincidencias ocurren en las mismas víctimas, puede indicar una falta de protección adecuada. Si las reincidencias ocurren en los mismos agresores, puede reflejar impunidad o falta de sanciones efectivas.",
    meta: "Reducir la tasa de reincidencia a menos del 5%",
    umbrales: {
      bajo: "Menos del 5%: Medidas efectivas",
      medio: "5% - 15%: Necesidad de refuerzo",
      alto: "Más del 15%: Situación crítica"
    },
    uso_toma_decisiones: "Evaluar efectividad de medidas de sanción y protección, identificar necesidades de ajustes normativos",
    acciones_correctivas: [
      "Implementar sistema de monitoreo continuo",
      "Fortalecer medidas de protección a víctimas",
      "Aplicar sanciones más estrictas a reincidentes",
      "Desarrollar campañas focalizadas"
    ],
    recomendaciones: {
      r1: "Realizar estudios cualitativos sobre causas de reincidencia",
      r2: "Evaluar programas de reeducación para agresores",
      r3: "Establecer mecanismos de alerta temprana",
      r4: "Integrar con sistemas de seguimiento de casos"
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025"
  },
  "Porcentaje del presupuesto institucional destinado a programas y acciones contra la DyVBG": {
    nombre: "Porcentaje del presupuesto institucional destinado a programas y acciones contra la DyVBG",
    codigo: "CAR_06",
    categoria: "Caracterización",
    tipologia: "Simple",
    nivel: "Gestión",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Presupuesto, Planeación, Bienestar Institucional, Unidad de Género",
    factores: [
      "Prioridades institucionales en la asignación de presupuesto",
      "Disponibilidad de recursos financieros",
      "Políticas y normativas que regulen la inversión en equidad de género",
      "Existencia y efectividad de programas específicos contra DyVBG"
    ],
    Definición: "Mide el porcentaje del presupuesto institucional que se asigna a programas y acciones específicas orientadas a la prevención, atención y erradicación de la discriminación y violencia basada en género (DyVBG).",
    objetivo: "Evaluar la prioridad institucional que se otorga a la lucha contra la DyVBG a través de la inversión de recursos monetarios, incluyendo lo dispuesto para las medidas académico-administrativas.",
    relevancia: "Un mayor porcentaje asignado refleja compromiso con la equidad de género. Permite evaluar suficiencia de recursos y facilita la rendición de cuentas en políticas de prevención y atención.",
    preguntas_orientadoras: {
      p1: "¿Qué porcentaje del presupuesto institucional se destina a programas contra la DyVBG?",
      p2: "¿El presupuesto asignado ha variado en los últimos años?",
      p3: "¿Existen programas con financiamiento estable?",
      p4: "¿El presupuesto es suficiente para las necesidades de prevención y atención?",
      p5: "¿Qué áreas reciben mayor inversión dentro de los programas?"
    },
    Fórmula: "Porcentaje del presupuesto destinado = [Presupuesto ejecutado en DyVBG / Presupuesto total de la IES] × 100",
    Variables_utilizadas: [
      "Presupuesto ejecutado en DyVBG",
      "Presupuesto total de la IES"
    ],
    Fuente_de_datos: "Registros financieros de Vicerrectoría/Dirección Administrativa y Financiera, Oficina de Planeación y Unidad de Género",
    frecuencia_de_medición: "Anual",
    unidad_de_medida: "Porcentaje (%)",
    interpretación: "Alto porcentaje: inversión significativa. Bajo porcentaje: falta de prioridad. Evolución temporal muestra cambios en políticas institucionales.",
    meta: "Alcanzar al menos el 5% del presupuesto institucional destinado a DyVBG",
    umbrales: {
      bajo: "Menos del 1%: Inversión mínima",
      medio: "1% - 5%: Recursos limitados",
      alto: "Más del 5%: Compromiso fuerte"
    },
    uso_toma_decisiones: "Definir políticas presupuestarias, garantizar recursos, diseñar programas y supervisar ejecución",
    acciones_correctivas: [
      "Revisar política de asignación presupuestaria",
      "Optimizar uso de recursos asignados",
      "Gestionar financiamiento externo"
    ],
    recomendaciones: {
      r1: "Vincular con resultados en reducción de casos",
      r2: "Evaluar impacto de programas financiados",
      r3: "Garantizar transparencia en ejecución presupuestal",
      r4: "Integrar en planes institucionales de desarrollo"
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025"
  },
  "Disponibilidad de sistemas de alerta temprana, aplicaciones móviles y plataformas de denuncia digital": {
    nombre: "Disponibilidad de sistemas de alerta temprana, aplicaciones móviles y plataformas de denuncia digital.",
    codigo: "DET_01",
    categoria: "Detección",
    tipologia: "Simple",
    nivel: "Gestión",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Presupuesto, Planeación, Bienestar Institucional, Unidad de Género",
    factores: [
      "Prioridades institucionales en la asignación de presupuesto",
      "Disponibilidad de recursos financieros",
      "Políticas y normativas que regulen la inversión en temas de equidad de género",
      "Existencia y efectividad de programas específicos para la atención de DyVBG"
    ],
    Definición: "Este indicador mide la existencia y operatividad de herramientas tecnológicas diseñadas para la denuncia, prevención y atención de casos de DyVBG dentro de la institución.",
    objetivo: "Garantizar la disponibilidad de mecanismos tecnológicos que faciliten la detección temprana, la denuncia y el seguimiento de casos de DyVBG en la comunidad universitaria.",
    relevancia: "Un mayor porcentaje asignado a estas acciones refleja un compromiso institucional con la equidad de género y la erradicación de la DyVBG. Permite evaluar si los recursos destinados son suficientes para atender las necesidades identificadas. Facilita la rendición de cuentas y la toma de decisiones sobre políticas de prevención y atención.",
    preguntas_orientadoras: {
      p1: "¿La institución cuenta con herramientas digitales para la denuncia de casos de DyVBG?",
      p2: "¿Cuántos de estos sistemas están activos y funcionando correctamente?",
      p3: "¿Se han implementado nuevas tecnologías para mejorar la detección y prevención de DyVBG?",
      p4: "¿Qué nivel de accesibilidad y usabilidad tienen estas herramientas para la comunidad universitaria?",
      p5: "¿Qué porcentaje de los casos registrados han sido canalizados a través de estas herramientas?"
    },
    Fórmula: "[# de herramientas tecnológicas activas por tipo y específicas para temas de DyVBG] / [Número de herramientas planificadas por tipo y específicas para DyVBG] × 100",
    Variables_utilizadas: [
      "Número de herramientas tecnológicas activas: Cantidad de sistemas, aplicaciones, cursos digitales, plataformas operativas y accesibles específicas para DyVBG",
      "Número total de herramientas planificadas o necesarias: Cantidad de herramientas previstas en la estrategia institucional"
    ],
    Fuente_de_datos: [
      "Reportes de gestión de tecnología e innovación",
      "Informes de la Oficina de Bienestar en la IES",
      "Registros de uso de las plataformas de denuncia",
      "Evaluaciones de accesibilidad y efectividad de las herramientas digitales"
    ],
    frecuencia_de_medición: "Anual",
    unidad_de_medida: "Porcentaje (%)",
    interpretación: "Este indicador permite evaluar la capacidad institucional para la detección y atención temprana de casos de DyVBG mediante el uso de tecnología. Un mayor porcentaje de disponibilidad sugiere un compromiso institucional con la protección de la comunidad educativa y la modernización de los mecanismos de denuncia y atención.",
    meta: "Alcanzar al menos el 80% de disponibilidad de herramientas tecnológicas para DyVBG",
    umbrales: {
      bajo: "0 - 40%: Disponibilidad insuficiente",
      medio: "41 - 79%: Implementación parcial con necesidades de mejora",
      alto: "80 - 100%: Herramientas suficientes para detección temprana"
    },
    uso_toma_decisiones: "Inversión en Tecnología, Estrategias de Sensibilización, Eficiencia de Mecanismos de Denuncia, Distribución de Recursos, Actualización de Políticas de Seguridad",
    acciones_correctivas: [
      "Garantizar financiamiento y tecnología para prevención y atención",
      "Mejorar infraestructura de seguridad y herramientas digitales",
      "Implementar formación obligatoria en prevención de DyVBG",
      "Desarrollar campañas de sensibilización",
      "Actualizar protocolos de atención y denuncia",
      "Estandarizar recolección y análisis de datos",
      "Articular acciones con organismos de justicia"
    ],
    recomendaciones: {
      r1: "Actualizar accesibilidad y usabilidad de plataformas digitales",
      r2: "Capacitar a la comunidad universitaria en uso de sistemas de alerta",
      r3: "Desarrollar campañas de difusión para fomentar el uso",
      r4: "Implementar auditorías periódicas de efectividad",
      r5: "Establecer alianzas con organismos especializados",
      r6: "Vincular sistemas digitales con protocolos de acción rápida"
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025"
  },
  "Nivel de conocimiento de la comunidad sobre mecanismos de denuncia": {
    nombre: "Nivel de conocimiento de la comunidad sobre mecanismos de denuncia",
    codigo: "DET_02",
    categoria: "Detección",
    tipologia: "Complejo",
    nivel: "Resultado",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Oficinas de Bienestar, Unidades de Atención Psicosocial, Direcciones, oficinas/comités de Género, Departamento/unidad Jurídico de las IES",
    factores: [
      "Falta de difusión de la información",
      "Acceso limitado a canales de denuncia", 
      "Desconfianza en las instituciones",
      "Normativas nacionales",
      "Percepción cultural sobre la denuncia de VBG",
      "Acceso desigual a recursos informativos"
    ],
    Definición: "Este indicador mide el porcentaje de personas en la comunidad educativa que tienen conocimiento sobre los mecanismos de denuncia de VBG disponibles en la IES. Se interpreta como un reflejo del nivel de sensibilización y acceso a la información sobre rutas de atención.",
    objetivo: "Evaluar el grado de conocimiento de la comunidad educativa sobre los mecanismos de denuncia de VBG para fortalecer estrategias de comunicación y formación.",
    relevancia: "Un alto nivel de conocimiento sobre los mecanismos de denuncia permite incrementar la confianza en las instituciones y facilita el acceso a la justicia para víctimas de VBG. Es un componente clave en la prevención y erradicación de estas violencias.",
    preguntas_orientadoras: {
      p1: "¿Cuántas personas conocen los mecanismos de denuncia en la institución?",
      p2: "¿Existen diferencias en el conocimiento según el grupo poblacional (estudiantes, docentes, administrativos)?",
      p3: "¿Qué medios de comunicación han sido más efectivos para difundir la información?"
    },
    Fórmula: "Nivel de conocimiento(%)=[# de personas que conocen los mecanismos de denuncia/Total de encuestados]*100",
    Variables_utilizadas: [
      "Número de personas que conocen los mecanismos de denuncia: Responde afirmativamente en una encuesta",
      "Total de encuestados: Población total participante en la medición"
    ],
    Fuente_de_datos: ["Encuestas aplicadas por Bienestar o las oficinas/comités de Género y Departamentos de Psicología"],
    frecuencia_de_medición: "Anual",
    unidad_de_medida: "Porcentaje (%)",
    interpretación: "Un porcentaje alto indica que la comunidad educativa está bien informada sobre los mecanismos de denuncia, mientras que un porcentaje bajo sugiere la necesidad de fortalecer estrategias de difusión y formación en la materia.",
    meta: "≥ 80% de la comunidad educativa con conocimiento adecuado sobre los mecanismos de denuncia",
    umbrales: {
      bajo: ">= 80%",
      medio: "50% - 79%", 
      alto: "<50%"
    },
    uso_toma_decisiones: "Las dependencias de Bienestar, Oficinas / Comités de Género y Rectoría pueden utilizar este indicador para diseñar campañas de información y formación en prevención de VBG, asegurando que toda la comunidad tenga acceso a los mecanismos de denuncia.",
    acciones_correctivas: [
      "Implementación de campañas informativas dirigidas a estudiantes, docentes y administrativos",
      "Fortalecimiento de los canales de denuncia y su accesibilidad",
      "Incorporación de módulos obligatorios sobre denuncia de VBG en la inducción de nuevos miembros de la comunidad educativa"
    ],
    recomendaciones: {
      r1: "Crear una estrategia de comunicación permanente que utilice diversos medios (afiches, redes sociales, boletines)",
      r2: "Monitorear periódicamente el nivel de conocimiento mediante encuestas semestrales",
      r3: "Garantizar que las rutas de denuncia sean claras, accesibles y protegidas de represalias"
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025"
  },
  "Número de canales de denuncia disponibles y activos": {
    nombre: "Número de canales de denuncia disponibles y activos",
    categoria: "Detección",
    tipologia: "Simple",
    nivel: "Gestión",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Oficina/Comité de Género/equidad, Bienestar Institucional, oficina de desarrollo tecnológico/informática.\nRectoría y Vicerrectoría Administrativa.",
    factores: "Falta de recursos tecnológicos, desconocimiento del personal sobre los canales, baja difusión de información.\nDesconfianza de la comunidad en los mecanismos de denuncia, limitaciones en conectividad, barreras socioculturales.",
    Definición: "Este indicador mide la cantidad de canales de denuncia habilitados y operativos en la IES para reportar casos de DyVBG, asegurando que la comunidad pueda acceder a mecanismos formales de atención.",
    objetivo: "Evaluar la disponibilidad y accesibilidad de los canales de denuncia con el fin de fortalecer la respuesta institucional frente a DyVBG.",
    relevancia: "La existencia de diversos canales facilita la denuncia oportuna, reduce la revictimización y mejora la confianza institucional.",
    preguntas_orientadoras: {
      p1: "¿Cuántos canales de denuncia están actualmente disponibles en la IES?",
      p2: "¿Todos los canales habilitados están operativos?",
      p3: "¿Se garantiza la accesibilidad a todos los miembros de la comunidad de la IES?",
      p4: "¿Qué porcentaje de la comunidad conoce los canales disponibles?",
      p5: ""
    },
    meta: "Garantizar la operatividad del 100% de los canales de denuncia habilitados.",
    meta2: {
      m1: "",
      m2: "",
      m3: ""
    },
    umbrales: {
      alto: "Alto: ≥ 4 canales activos y accesibles.",
      medio: "Medio: 2-3 canales activos.",
      bajo: "Bajo: < 2 canales activos."
    },
    Fórmula: "CD = Número de canales de denuncia habilitados.\nCA = Número de canales activos y funcionales.\n[# CD/# total de canales para atender temas de DyVBG]\n[# CA/# total de canales para atender temas de DyVBG]",
    Variables_utilizadas: "CD = Número de canales de denuncia habilitados.\nCA = Número de canales activos y funcionales.",
    Fuente_de_datos: "Informes de las dependencias responsables de la gestión de denuncias.\nRegistros administrativos de atención de casos.",
    frecuencia_de_medición: "Anual",
    unidad_de_medida: "Número absoluto, porcentaje (%)",
    interpretación: "Un número mayor de canales activos indica una mejor accesibilidad para la denuncia de casos de DyVBG, lo que contribuye a la prevención y atención efectiva.",
    recomendaciones: {
      r1: "Actualizar y mejorar la accesibilidad y usabilidad de las plataformas de denuncia digital y aplicaciones móviles.",
      r2: "Incorporar nuevas tecnologías como aplicaciones móviles o chatbots para la recepción de denuncias.",
      r3: "Asegurar la confidencialidad y protección de la identidad de los denunciantes.",
      r4: "Implementar campañas de sensibilización para fomentar el uso adecuado de los canales de denuncia.",
      r5: ""
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025"
},
  "Porcentaje de personal docente y administrativo capacitado en identificación y manejo de casos de DyVBG": {
    "codigo": "DET_06",
    "nombre": "Porcentaje de personal docente y administrativo capacitado en identificación y manejo de casos de DyVBG",
    "categoria": "Detección",
    "tipologia": "Complejo",
    "nivel": "Resultado",
    "fechaCreacion": "Marzo de 2025",
    "ultimaActualizacion": "Marzo de 2025",
    "dependencia": "Bienestar de la IES, Oficina/comité de Género, Secretaría general, Oficina de personal/talento humano",
    "factores": [
        "Disponibilidad de recursos para formación",
        "Participación del personal",
        "Voluntad institucional",
        "Cambios normativos",
        "Disponibilidad de expertos en capacitación",
        "Acceso a materiales actualizados"
    ],
    "Definición": "Mide el porcentaje de docentes y personal administrativo que ha recibido formación específica en identificación y manejo de casos de DyVBG dentro de la institución. Se interpreta como el grado de preparación de la comunidad universitaria para actuar frente a situaciones de violencia de género y basada en género.",
    "objetivo": "Garantizar que el personal esté capacitado en la detección, abordaje y canalización de casos de DyVBG, promoviendo una respuesta efectiva y segura para las víctimas.",
    "relevancia": "La capacitación en DyVBG es clave para prevenir, atender y erradicar la violencia en las IES, asegurando espacios seguros y libres de discriminación.",
    "preguntas_orientadoras": {
        "p1": "¿Cuántos docentes y administrativos han recibido capacitación en DyVBG, por edad, sexo y tiempo de permanencia en la IES?",
        "p2": "¿Qué porcentaje del total del personal ha sido capacitado, por edad, sexo y tiempo de permanencia en la IES?",
        "p3": "¿La capacitación ha tenido impacto en la identificación y manejo de casos?"
    },
    "Fórmula": "PC=[NCD/NTD]×100\nPPC = Porcentaje Personal capacitado en DyVBG por edad, sexo y tiempo de permanencia en la IES\nNCD = Número de docentes y administrativos capacitados por edad, sexo y tiempo de permanencia en la IES\nNTD = Número total de docentes y administrativos por edad, sexo y tiempo de permanencia en la IES",
    "Variables_utilizadas": [
        "Cantidad de docentes y administrativos capacitados por edad, sexo y tiempo de permanencia en la IES",
        "Total de personal docente y administrativo de la IES, por edad, sexo y tiempo de permanencia en la IES"
    ],
    "Fuente_de_datos": [
        "Registros de asistencia a capacitaciones",
        "Reportes de la Oficina de Talento Humano, Dirección de personal",
        "Informes de la Unidad/Comité de Género",
        "Bienestar de la IES"
    ],
    "frecuencia_de_medición": "Anual",
    "unidad_de_medida": "Porcentaje (%)",
    "interpretación": "Un mayor porcentaje indica una percepción de seguridad más alta; un porcentaje bajo sugiere la necesidad de intervención.",
    "meta": "90% de docentes y administrativos capacitados en DyVBG anualmente",
    "umbrales": {
        "alto": "Alto (80-100%): Cobertura adecuada, la mayoría del personal ha recibido formación",
        "medio": "Medio (50-79%): Se han realizado esfuerzos, pero es necesario ampliar la capacitación",
        "bajo": "Bajo (0-49%): Deficiencia en la capacitación, alto riesgo en la identificación y manejo de casos"
    },
    "uso_toma_decisiones": [
        "Permite identificar brechas en la formación del personal",
        "Sirve para ajustar planes de capacitación",
        "Fortalecer protocolos de atención",
        "Evaluar necesidades de formación específica"
    ],
    "acciones_correctivas": [
        "Implementar un programa obligatorio de formación en DyVBG",
        "Incorporar módulos virtuales para mejorar la accesibilidad",
        "Realizar evaluaciones de impacto de las capacitaciones",
        "Establecer incentivos para la participación del personal"
    ],
    "recomendaciones": {
        "r1": "Garantizar que el contenido de la capacitación esté actualizado con enfoque de género y derechos humanos",
        "r2": "Incluir simulaciones y estudios de caso en la formación",
        "r3": "Ampliar la oferta de formación para nuevo personal y reforzar capacitaciones periódicamente",
        "r4": "Evaluar la correlación entre la formación del personal y la disminución de casos de DyVBG"
    },
    "responsable_revision": "Equipo MEN-ASCUN",
    "fecha_revision": "Marzo de 2025",
    "aprobado_por": "Equipo MEN-ASCUN",
    "fecha_aprobacion": "Marzo de 2025"
},"Porcentaje de personas de la comunidad academica que conoce los canales dedenuncia": {
  codigo: "DET_08",
  nombre: "Porcentaje de personas de la comunidad académica que conoce los canales de denuncia",
  categoria: "Detección",
  tipologia: "Simple",
  nivel: "Resultado",
  fechaCreacion: "Marzo de 2025",
  ultimaActualizacion: "Marzo de 2025",
  dependencia: "Bienestar de la IES, Oficina/comité de Género, Unidad de Atención Psicosocial, Rectoría, Secretaría General",
  factores: [
      "Falta de difusión institucional",
      "Escasos espacios de socialización",
      "Desconfianza en los procesos",
      "Percepción de impunidad",
      "Normalización de la violencia",
      "Desconocimiento generalizado"
  ],
  Definición: "Mide el porcentaje de miembros de la comunidad académica (estudiantes, docentes, administrativos) que conocen los canales oficiales para denunciar casos de DyVBG en la institución.",
  objetivo: "Evaluar el nivel de conocimiento sobre los canales de denuncia para mejorar la accesibilidad y efectividad del sistema de atención.",
  relevancia: "Un alto nivel de conocimiento indica difusión adecuada de los mecanismos de denuncia, garantizando rutas claras para la atención. Un bajo nivel sugiere fallas en la comunicación institucional.",
  preguntas_orientadoras: {
      p1: "¿Cuántas personas de la comunidad académica conocen los canales de denuncia?",
      p2: "¿Qué factores influyen en el desconocimiento de estos canales?",
      p3: "¿Cuáles son las estrategias más efectivas para mejorar el conocimiento?"
  },
  Fórmula: "PCCD=[Número de personas que afirman conocer los canales de denuncia/Total de personas encuestadas]×100",
  Variables_utilizadas: [
      "Número de personas que conocen los canales de denuncia",
      "Total de personas encuestadas en la comunidad académica"
  ],
  Fuente_de_datos: [
      "Encuestas institucionales",
      "Reportes de sensibilización",
      "Registros de asistencia a capacitaciones"
  ],
  frecuencia_de_medición: "Anual",
  unidad_de_medida: "Porcentaje (%)",
  interpretación: "Alto porcentaje refleja comunidad informada. Nivel medio requiere mejores estrategias de difusión. Bajo porcentaje indica deficiencias en comunicación institucional que afectan la respuesta ante DyVBG.",
  meta: "Alcanzar al menos el 80% de conocimiento sobre los canales de denuncia",
  umbrales: {
      verde: "Óptimo (≥80%)",
      amarillo: "Aceptable (50%-79%)",
      rojo: "Crítico (<50%)"
  },
  uso_toma_decisiones: [
      "Fortalecer campañas informativas",
      "Mejorar accesibilidad de canales",
      "Diseñar estrategias de comunicación efectivas",
      "Priorizar grupos con menor conocimiento"
  ],
  acciones_correctivas: [
      "Implementar estrategias de comunicación digital y presencial",
      "Incluir información en procesos de inducción",
      "Crear espacios interactivos para resolver dudas",
      "Realizar auditorías de efectividad"
  ],
  recomendaciones: {
      r1: "Ampliar difusión en plataformas digitales e impresas",
      r2: "Evaluar periódicamente el impacto de las estrategias",
      r3: "Capacitar al personal en promoción de canales",
      r4: "Implementar recordatorios periódicos a la comunidad"
  },
  responsable_revision: "Equipo MEN-ASCUN",
  fecha_revision: "Marzo de 2025",
  aprobado_por: "Equipo MEN-ASCUN",
  fecha_aprobacion: "Marzo de 2025"
},
"Porcentaje de personas de la comunidad academica con conocimiento sobre los protocolos de denuncia": { 
  codigo: "DET_07",
  nombre: "Porcentaje de personas de la comunidad académica con conocimiento sobre los protocolos de denuncia",
  categoria: "Detección",
  tipologia: "Simple",
  nivel: "Resultado",
  fechaCreacion: "Marzo de 2025",
  ultimaActualizacion: "Marzo de 2025",
  dependencia: "Bienestar de la IES, Oficina/comité de Género, Secretaría general, Oficina de personal/talento humano, Oficina de comunicaciones",
  factores: [
      "Difusión insuficiente de los protocolos",
      "Falta de interés de la comunidad",
      "Limitaciones en la estrategia de comunicación",
      "Cambios normativos",
      "Desinformación",
      "Barreras culturales o miedo a represalias"
  ],
  Definición: "Mide el porcentaje de estudiantes, docentes y personal administrativo que conoce los protocolos institucionales para la denuncia de casos de DyVBG. Se interpreta como el nivel de acceso y apropiación de la información sobre los procedimientos de denuncia dentro de la comunidad académica.",
  objetivo: "Evaluar el nivel de conocimiento de la comunidad académica sobre los canales y procesos de denuncia de DyVBG, con el fin de mejorar la difusión y accesibilidad de la información.",
  relevancia: "Un alto nivel de conocimiento sobre los protocolos de denuncia es clave para fomentar la denuncia de casos, prevenir la impunidad y garantizar la atención oportuna de las víctimas.",
  preguntas_orientadoras: {
      p1: "¿Qué porcentaje de la comunidad académica conoce los protocolos de denuncia?",
      p2: "¿Cuáles son los principales canales de difusión utilizados para informar sobre estos protocolos?",
      p3: "¿Existen brechas de conocimiento en algunos grupos de la comunidad académica?"
  },
  Fórmula: "PCDP=(NPC/NTC)×100\n\nPCDP = Porcentaje de personas con conocimiento sobre los protocolos de denuncia.\nNPC = Número de personas que reportan conocer los protocolos de denuncia.\nNTC = Número total de personas encuestadas dentro de la comunidad académica",
  Variables_utilizadas: [
      "Cantidad de estudiantes, docentes y administrativos que afirman conocer los protocolos",
      "Total de personas encuestadas dentro de la IES"
  ],
  Fuente_de_datos: [
      "Encuestas de percepción aplicadas a la comunidad académica",
      "Reportes de asistencia a capacitaciones y campañas informativas",
      "Registros de interacciones en plataformas institucionales sobre el tema"
  ],
  frecuencia_de_medición: "Anual",
  unidad_de_medida: "Porcentaje (%)",
  interpretación: "Un alto porcentaje indica estrategias efectivas de difusión, mientras que niveles bajos reflejan brechas de información y desconfianza. Permite fortalecer campañas de sensibilización y mejorar la respuesta institucional.",
  meta: "90% de la comunidad académica con conocimiento sobre los protocolos de denuncia",
  umbrales: {
      alto: "Alto (80-100%): La mayoría de la comunidad conoce los protocolos",
      medio: "Medio (50-79%): Se requiere reforzar la difusión y estrategias de comunicación",
      bajo: "Bajo (0-49%): Nivel crítico de desconocimiento, es necesaria una intervención inmediata"
  },
  uso_toma_decisiones: [
      "Evaluar efectividad de las estrategias de comunicación",
      "Definir nuevas acciones de sensibilización",
      "Identificar grupos con menor conocimiento",
      "Optimizar recursos de difusión"
  ],
  acciones_correctivas: [
      "Implementar campañas masivas de sensibilización",
      "Realizar capacitaciones periódicas",
      "Crear material audiovisual accesible",
      "Incorporar el tema en cursos de inducción"
  ],
  recomendaciones: {
      r1: "Mejorar visibilidad en plataformas institucionales y redes sociales",
      r2: "Realizar evaluaciones de impacto de las estrategias",
      r3: "Fortalecer confianza con testimonios y casos de éxito",
      r4: "Desarrollar estrategia de comunicación inclusiva"
  },
  responsable_revision: "Equipo MEN-ASCUN",
  fecha_revision: "Marzo de 2025",
  aprobado_por: "Equipo MEN-ASCUN",
  fecha_aprobacion: "Marzo de 2025"
},
  "Tasa de denuncias formalizadas vs. casos identificados": {
    nombre: "Tasa de denuncias formalizadas vs. casos identificados",
    codigo: "DET_09",
    categoria: "Detección",
    tipologia: "Complejo",
    nivel: "Resultado",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Bienestar de la IES, Oficina/comité de Género, Rectoría, Secretaría General, oficina jurídica",
    factores: [
      "Falta de confianza en las instituciones",
      "Miedo a represalias",
      "Desconocimiento de los procesos de denuncia",
      "Falta de formación en atención a las víctimas",
      "Debilidades en la difusión de los protocolos"
    ],
    Definición: "Este indicador mide la proporción de casos de DyVBG identificados en la IES que han sido formalmente denunciados ante las instancias correspondientes. Refleja el nivel de confianza en el sistema institucional de denuncia y la efectividad en la respuesta a estos casos.",
    objetivo: "Evaluar la relación entre los casos de DyVBG detectados y aquellos que avanzan a una denuncia formal, con el fin de mejorar los mecanismos de atención y fortalecer la confianza en la institución.",
    relevancia: "Un bajo porcentaje puede indicar barreras en la denuncia, falta de apoyo institucional o miedo de las víctimas. Un alto porcentaje refleja mayor efectividad en la gestión de casos.",
    preguntas_orientadoras: {
      p1: "¿Cuántos casos de DyVBG identificados terminan en una denuncia formal?",
      p2: "¿Qué factores influyen en la decisión de denunciar?",
      p3: "¿Cuáles son las barreras que enfrentan las víctimas al denunciar?"
    },
    Fórmula: "Tasa de denuncias=[# denuncias formalizadas /# total de casos identificados]×100",
    Variables_utilizadas: [
      "Número de denuncias formalizadas",
      "Número total de casos identificados"
    ],
    Fuente_de_datos: "Registros de la Oficina Jurídica, Unidades/comités de Género, Bienestar, informes de atención psicológica y social",
    frecuencia_de_medición: "Semestral",
    unidad_de_medida: "Porcentaje (%)",
    interpretación: "Un porcentaje alto indica confianza en los mecanismos institucionales y un adecuado acceso a la denuncia. Un porcentaje bajo sugiere que hay barreras en el proceso, como desconocimiento, miedo o falta de credibilidad en la respuesta institucional.",
    meta: "≥ 80% de denuncias formalizadas respecto a casos identificados",
    umbrales: {
      alto: "≥ 80%",
      medio: "50% - 79%",
      bajo: "< 50%"
    },
    uso_toma_decisiones: "Dependencias como la Rectoría, Unidades/comités de Género y Bienestar pueden usar este indicador para mejorar las estrategias de denuncia y apoyo a víctimas, fortaleciendo la confianza en los protocolos.",
    acciones_correctivas: [
      "Fortalecer campañas de sensibilización y difusión sobre los procesos de denuncia",
      "Garantizar el acompañamiento y protección de las víctimas para reducir el miedo a represalias",
      "Mejorar la capacitación del personal en la atención y gestión de denuncias",
      "Optimizar la accesibilidad y confidencialidad de los mecanismos de denuncia"
    ],
    recomendaciones: {
      r1: "Implementar encuestas de percepción sobre confianza en la denuncia",
      r2: "Crear incentivos para la denuncia segura y fortalecer el anonimato",
      r3: "Realizar auditorías internas sobre la respuesta institucional a las denuncias"
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025"
  },
  "Tiempo promedio de respuesta ante denuncias de DyVBG": {
    nombre: "Tiempo promedio de respuesta ante denuncias de DyVBG",
    codigo: "DET_10",
    categoria: "Detección",
    tipologia: "Simple",
    nivel: "Gestión",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Bienestar de la IES, Oficina/comité de Género, Rectoría, Secretaría General, oficina jurídica",
    factores: [
      "Complejidad del caso",
      "Disponibilidad de personal especializado",
      "Tiempos administrativos",
      "Saturación del sistema de atención",
      "Barreras tecnológicas o burocráticas"
    ],
    Definición: "Mide el tiempo promedio en días u horas que transcurre desde que se presenta una denuncia formal por DyVBG hasta que la institución brinda una respuesta inicial, ya sea en forma de contacto con la víctima, asignación de un profesional o inicio del proceso de atención.",
    objetivo: "Evaluar la eficiencia del sistema de respuesta ante denuncias de DyVBG para identificar oportunidades de mejora en la atención oportuna a víctimas.",
    relevancia: "Un tiempo de respuesta corto indica una gestión eficaz, mientras que un tiempo prolongado sugiere deficiencias en los protocolos de atención. La rapidez en la respuesta puede influir en la confianza en la institución y la disposición de las víctimas a denunciar.",
    preguntas_orientadoras: {
      p1: "¿Cuánto tiempo tarda la institución en brindar una respuesta inicial tras recibir una denuncia?",
      p2: "¿Existen diferencias en los tiempos de respuesta según el tipo de denuncia?",
      p3: "¿Qué factores influyen en la demora de la atención a los casos?"
    },
    Fórmula: "Tiempo promedio de respuesta = [∑Tiempo de respuesta por denuncia/# total de denuncias]",
    Variables_utilizadas: [
      "Tiempo de respuesta por cada denuncia (medido en horas o días)",
      "Número total de denuncias atendidas"
    ],
    Fuente_de_datos: "Registros de la Oficina Jurídica, Unidades/comités de Género, Bienestar, Registros de la Oficina Jurídica, plataformas de denuncia",
    frecuencia_de_medición: "Trimestral",
    unidad_de_medida: "Tiempo (horas/días)",
    interpretación: "El tiempo promedio de respuesta ante denuncias de DyVBG es un indicador clave para evaluar la eficiencia de las instituciones en la atención a víctimas. Un tiempo de respuesta corto refleja una gestión ágil y eficaz, generando confianza en los canales de denuncia y fomentando su uso. Por el contrario, tiempos prolongados pueden desincentivar la denuncia, prolongar la vulnerabilidad de las víctimas y evidenciar fallas estructurales en los protocolos de atención, requiriendo ajustes inmediatos.",
    meta: "≤ 24 horas para la primera respuesta",
    umbrales: {
      optimo: "≤ 24 horas",
      aceptable: "1 - 3 días",
      critico: "> 3 días"
    },
    uso_toma_decisiones: "Dependencias como la Rectoría, Unidades de Género y Bienestar Universitario pueden usar este indicador para optimizar la capacidad de respuesta ante denuncias y mejorar la protección de las víctimas.",
    acciones_correctivas: [
      "Implementar un sistema de alertas para la atención prioritaria de denuncias urgentes",
      "Capacitar al personal encargado de la recepción y gestión de denuncias para agilizar los procesos",
      "Automatizar procesos de asignación de casos para reducir tiempos de espera",
      "Ampliar la disponibilidad de profesionales especializados en atención de DyVBG"
    ],
    recomendaciones: {
      r1: "Evaluar periódicamente los tiempos de respuesta y generar reportes de mejora",
      r2: "Asegurar la disponibilidad de canales de denuncia accesibles y eficientes",
      r3: "Implementar encuestas de satisfacción para evaluar la percepción de las víctimas sobre la rapidez en la atención"
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025"
  },
  "Existencia Accesibilidad Y Efectividad De Normativas": {
    nombre: "Existencia, accesibilidad y efectividad de normativas para prevenir y sancionar la discriminación",
    codigo: "DIS_01",
    categoria: "Discriminación",
    tipologia: "Complejo",
    nivel: "Gestión",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Bienestar de la IES, Oficina/comité de Género, oficina jurídica, Comité de Convivencia",
    factores: [
      "Falta de actualización normativa",
      "Desconocimiento de las regulaciones",
      "Resistencia institucional",
      "Cambios en políticas gubernamentales"
    ],
    Definición: "Evalúa la existencia de normativas para prevenir y sancionar la discriminación en las IES, su accesibilidad a la comunidad académica y su efectividad en la resolución de casos.",
    objetivo: "Garantizar que la comunidad académica cuente con un marco normativo claro y eficaz para prevenir y sancionar la discriminación.",
    relevancia: "Un marco normativo sólido fomenta un entorno seguro e inclusivo, garantizando la protección de los derechos de estudiantes y trabajadores.",
    preguntas_orientadoras: {
      p1: "¿Existen normativas claras contra la discriminación en la IES?",
      p2: "¿Son accesibles y comprensibles para la comunidad académica?",
      p3: "¿Se aplican de manera efectiva y justa?"
    },
    Fórmula: "IEN=[(Nexist + Nacc + Neff)/3]×100\nDonde:\nIEN: Índice de eficiencia normativa\nNexist = Puntuación sobre existencia de normativas\nNacc = Puntuación sobre accesibilidad\nNeff = Puntuación sobre efectividad",
    Variables_utilizadas: [
      "Existencia de normativa",
      "Accesibilidad de documentos",
      "Número de casos resueltos con base en normativa"
    ],
    Fuente_de_datos: "Registros de la Oficina Jurídica, Unidades/comités de Género, Bienestar, encuestas a la comunidad académica",
    frecuencia_de_medición: "Anual",
    unidad_de_medida: "Índice porcentual",
    interpretación: "La existencia, accesibilidad y efectividad de normativas contra la discriminación reflejan el compromiso institucional con un entorno inclusivo y equitativo. Un alto puntaje indica que las regulaciones están bien definidas y aplicadas, fomentando la seguridad jurídica. Un bajo puntaje sugiere carencias en el marco normativo, su difusión o su aplicación, lo que puede generar desprotección e impunidad. Evaluar y mejorar este indicador permite reforzar la prevención y sanción de prácticas discriminatorias en la IES.",
    meta: "90% o superior",
    umbrales: {
      alto: "80%-100%: Normativas completas, accesibles y eficaces",
      medio: "50%-79%: Normativas existentes pero con problemas de accesibilidad o aplicación",
      bajo: "0%-49%: Falta de normativas o ineficacia en su aplicación"
    },
    uso_toma_decisiones: "La Rectoría, la Oficina Jurídica y Bienestar pueden utilizar este indicador para fortalecer los marcos normativos y su aplicación efectiva dentro de la comunidad.",
    acciones_correctivas: [
      "Revisar y actualizar normativas periódicamente",
      "Implementar campañas de difusión y formación sobre normativas",
      "Crear mecanismos de monitoreo para evaluar la aplicación efectiva de la normativa",
      "Establecer sanciones claras y mecanismos de denuncia eficaces"
    ],
    recomendaciones: {
      r1: "Capacitar a la comunidad sobre los derechos y normativas",
      r2: "Establecer evaluaciones periódicas de su eficacia",
      r3: "Garantizar su accesibilidad en diversos formatos"
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025"
  },
  "Número de reportes de discriminación dentro del entorno de la IES": {
    nombre: "Número de reportes de discriminación dentro del entorno de la IES",
    codigo: "DIS_02",
    categoria: "Discriminación",
    tipologia: "Simple",
    nivel: "Gestión",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Bienestar de la IES, Oficina/comité de Género, oficina jurídica, Comité de Convivencia",
    factores: [
      "Subregistro de casos por miedo a represalias",
      "Falta de confianza en los mecanismos de denuncia",
      "Desconocimiento de los canales de reporte",
      "Sesgos en la recolección de datos"
    ],
    Definición: "Mide la cantidad de denuncias o reportes de discriminación dentro de la IES, considerando diversas formas de discriminación como género, etnia, orientación sexual, discapacidad, entre otras.",
    objetivo: "Identificar el volumen de reportes de discriminación para evaluar la efectividad de los mecanismos de denuncia y establecer estrategias de intervención.",
    relevancia: "Permite conocer la magnitud del problema, ajustar políticas de prevención y fortalecer mecanismos de atención a las víctimas.",
    preguntas_orientadoras: {
      p1: "¿Cuántos casos de discriminación se reportan en la universidad?",
      p2: "¿Cuáles son las formas más frecuentes de discriminación?",
      p3: "¿Cuántos reportes terminan en sanciones o medidas correctivas?"
    },
    Fórmula: "NDR = Ʃ Rdisc\nNDR = Número de reportes de discriminación\nRdisc = Cantidad de denuncias registradas en el período evaluado",
    Variables_utilizadas: [
      "Número de reportes recibidos",
      "Fuentes de denuncia (anónimas o oficiales)",
      "Seguimiento de los casos"
    ],
    Fuente_de_datos: "Registros Unidades/comités de Género, Bienestar, encuestas a la comunidad académica, comités de convivencia",
    frecuencia_de_medición: "Trimestral",
    unidad_de_medida: "Número absoluto",
    interpretación: "El número de reportes de discriminación dentro del entorno de la IES refleja el nivel de confianza en los mecanismos de denuncia y la percepción de seguridad de la comunidad académica. Un alto número de denuncias no necesariamente indica un incremento en los actos discriminatorios, sino una mayor disposición a reportarlos. Un número bajo puede señalar subregistro por miedo a represalias o desconocimiento de los canales disponibles, lo que requiere fortalecer la sensibilización y accesibilidad de los mecanismos de denuncia.",
    meta: "Aumento progresivo en los reportes registrados hasta alcanzar una estabilización del fenómeno mediante acciones correctivas eficaces",
    umbrales: {
      alto: "Más de 50 reportes por semestre: Indica alta visibilidad del problema y confianza en los mecanismos de denuncia",
      medio: "20-50 reportes por semestre: Señala un uso moderado de los canales de reporte y la necesidad de fortalecer la promoción",
      bajo: "Menos de 20 reportes por semestre: Puede reflejar desconocimiento o miedo a denunciar, requiriendo acciones para mejorar la accesibilidad y confianza en los mecanismos"
    },
    uso_toma_decisiones: "La Oficina de Bienestar y el Comité de Convivencia pueden utilizar este indicador para ajustar protocolos de denuncia y mejorar la respuesta institucional ante casos de discriminación.",
    acciones_correctivas: [
      "Ampliar y diversificar los canales de denuncia (presenciales, digitales, anónimos)",
      "Fortalecer campañas de sensibilización sobre discriminación y derechos universitarios",
      "Implementar protocolos más eficaces de atención a víctimas y seguimiento de casos",
      "Monitorear el impacto de las acciones correctivas en la reducción de incidentes discriminatorios"
    ],
    recomendaciones: {
      r1: "Mejorar la capacitación del personal encargado de recibir denuncias",
      r2: "Generar espacios seguros para la denuncia anónima",
      r3: "Garantizar sanciones efectivas para los responsables"
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025"
  },
  "Porcentaje de estudiantes, docentes y personal administrativo que reportan haber experimentado discriminación por género, etnia, discapacidad u orientación sexual": {
    nombre: "Porcentaje de estudiantes, docentes y personal administrativo que reportan haber experimentado discriminación por género, etnia, discapacidad u orientación sexual",
    codigo: "DIS_03",
    categoria: "Discriminación",
    tipologia: "Complejo",
    nivel: "Resultado",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Bienestar de la IES, Oficina/comité de Género, oficina jurídica, Vicerrectoría Académica y Administrativa",
    factores: [
      "Subregistro por miedo a represalias",
      "Desconocimiento de los canales de denuncia",
      "Normalización de la discriminación en la cultura institucional",
      "Políticas ineficaces de prevención y atención"
    ],
    Definición: "Este indicador mide el porcentaje de miembros de la comunidad académica que han sido víctimas de discriminación basada en género, etnia, discapacidad u orientación sexual, basado en reportes formales e informales",
    objetivo: "Cuantificar la prevalencia de la discriminación en el entorno universitario para desarrollar estrategias de prevención, sensibilización y sanción",
    relevancia: "Permite evaluar la efectividad de las políticas de inclusión y equidad, y facilita la implementación de medidas correctivas para crear espacios seguros e inclusivos",
    preguntas_orientadoras: {
      p1: "¿Cuántas personas han experimentado discriminación en la universidad?",
      p2: "¿Cuáles son los principales motivos de discriminación?",
      p3: "¿Existen diferencias significativas en la discriminación percibida entre grupos poblacionales?"
    },
    Fórmula: "PDIS=[NDIS/NTOT]×100\n\nPDISP = Porcentaje de personas que reportan haber experimentado discriminación\nNDIS = Número de personas que reportan discriminación en encuestas o denuncias\nNTOT = Total de encuestados o participantes en la medición",
    Variables_utilizadas: [
      "Número de reportes de discriminación por grupo poblacional (estudiantes, docentes, administrativos)",
      "Motivos de discriminación",
      "Frecuencia de los casos"
    ],
    Fuente_de_datos: "Encuestas de percepción, registros de denuncias",
    frecuencia_de_medición: "Anual",
    unidad_de_medida: "Porcentaje (%)",
    interpretación: "El porcentaje de estudiantes, docentes y personal administrativo que reportan haber experimentado discriminación refleja el grado de equidad y respeto dentro del entorno universitario. Un valor alto sugiere la presencia de un problema estructural que requiere intervención inmediata mediante políticas inclusivas, sensibilización y mecanismos de sanción efectivos. Un valor bajo puede indicar un entorno seguro, aunque también puede reflejar subregistro debido al miedo a represalias o la falta de confianza en los mecanismos de denuncia, lo que hace necesario fortalecer las estrategias de prevención y atención",
    meta: "Una Reducción progresiva del porcentaje de personas que reportan discriminación mediante políticas inclusivas y estrategias preventivas",
    umbrales: {
      alto: "Más del 30%: Indica un entorno hostil con altos niveles de discriminación, requiriendo medidas urgentes",
      medio: "10%-30%: Señala la presencia de discriminación en la universidad, pero con mecanismos de denuncia y atención moderadamente efectivos",
      bajo: "Menos del 10%: Sugiere una cultura inclusiva con políticas efectivas de prevención y sanción"
    },
    uso_toma_decisiones: "La Oficina/Comité de Género, y Vicerrectoría Académica pueden utilizar este indicador para ajustar estrategias de inclusión y mejorar los protocolos de atención a víctimas",
    acciones_correctivas: [
      "Fortalecer campañas de sensibilización sobre discriminación e inclusión",
      "Implementar espacios de apoyo psicológico y asesoramiento legal para víctimas",
      "Mejorar la accesibilidad de los mecanismos de denuncia",
      "Monitorear y evaluar continuamente la efectividad de las políticas de prevención"
    ],
    recomendaciones: {
      r1: "Es fundamental garantizar que los resultados del indicador sean difundidos de manera transparente",
      r2: "Fomentar espacios de diálogo para la sensibilización",
      r3: "Reforzar la formación del personal en la IES en equidad e inclusión"
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025"
  },
  "Conocimientos adquiridos en los procesos de formación sobre prevención": {
    nombre: "Conocimientos adquiridos en los procesos de formación sobre prevención",
    codigo: "PRE_01",
    categoria: "Prevención",
    tipologia: "Complejo",
    nivel: "Resultado",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Bienestar de la IES, Oficina/comité de Género, Vicerrectoría Académica Dirección de talento humano, oficina de personal, oficina de Formación y Capacitación, Vicerrectoría Académica",
    factores: [
      "Calidad de los programas de formación",
      "Nivel de participación de la comunidad académica",
      "Metodologías empleadas en la capacitación",
      "Continuidad y frecuencia de las formaciones",
      "Acceso a los materiales educativos",
      "Métricas de resultados formativos"
    ],
    Definición: "Este indicador mide el nivel de conocimientos adquiridos por los participantes en procesos de formación sobre prevención de DyVBG a través de evaluaciones antes y después de la capacitación",
    objetivo: "Evaluar la efectividad de los programas de formación en la generación de conocimientos sobre prevención de la violencia y discriminación en el ámbito universitario",
    relevancia: "Permite medir el resultado de los programas de formación y su contribución a la creación de una comunidad académica informada y comprometida con la prevención",
    preguntas_orientadoras: {
      p1: "¿En qué medida las capacitaciones incrementan el conocimiento de los participantes para la prevención de DyVBG?",
      p2: "¿Cuáles son los temas en los que hay mayor o menor comprensión?",
      p3: "¿Cómo se pueden mejorar los programas de formación para fortalecer el aprendizaje?"
    },
    Fórmula: "CA=[(PPOST−PPRE)/PPRE]×100\n\nCA = Conocimientos adquiridos en porcentaje\nPPOST = Puntaje promedio en la evaluación posterior a la formación\nPPRE = Puntaje promedio en la evaluación previa a la formación",
    Variables_utilizadas: [
      "Nivel de conocimiento antes y después de la formación",
      "Cantidad de participantes evaluados",
      "Porcentaje de mejora en el puntaje"
    ],
    Fuente_de_datos: "Prueba de valoración de conocimientos aplicadas antes y después de los procesos de formación, encuestas de percepción sobre aprendizaje",
    frecuencia_de_medición: "Anual",
    unidad_de_medida: "Porcentaje de mejora en conocimientos adquiridos",
    interpretación: "El nivel de conocimientos adquiridos en los procesos de formación sobre prevención permite evaluar la efectividad de las capacitaciones en la transformación del entendimiento de la comunidad académica sobre la DyVBG. Un alto porcentaje de mejora sugiere que las estrategias formativas están logrando su propósito, mientras que un bajo incremento indica la necesidad de replantear los contenidos y métodos de enseñanza. Además, el seguimiento continuo de este indicador permite adaptar las capacitaciones a las necesidades específicas de los participantes, garantizando que la información adquirida se traduzca en acciones y practicas para la prevención efectiva en el entorno de la IES",
    meta: "Incremento del conocimiento en al menos un 30% después de la formación",
    umbrales: {
      alto: "Más del 30% de incremento: Formación efectiva con impacto positivo en la comunidad",
      medio: "15%-30% de incremento: Formación con impacto moderado, con oportunidades de mejora",
      bajo: "Menos del 15% de incremento: Formación con bajo impacto, requiere ajustes en contenido y estrategias pedagógicas"
    },
    uso_toma_decisiones: "La Oficina/Comité de Género, y Vicerrectoría Académica La Vicerrectoría Académica y las unidades responsables de formación pueden usar este indicador para mejorar los contenidos y metodologías de capacitación sobre prevención de DyVBG",
    acciones_correctivas: [
      "Rediseñar los programas de formación con metodologías más interactivas",
      "Asegurar que los contenidos sean accesibles y adecuados para la comunidad universitaria",
      "Monitorear la retención del conocimiento a lo largo del tiempo"
    ],
    recomendaciones: {
      r1: "Se deben realizar evaluaciones periódicas de los conocimientos adquiridos",
      r2: "Ajustar los programas según los resultados obtenidos",
      r3: "Fomentar espacios de aplicación práctica del aprendizaje en la comunidad universitaria"
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025"
  },
  "Disponibilidad de canales de denuncia accesibles y confidenciales": {
    nombre: "Disponibilidad de canales de denuncia accesibles y confidenciales",
    codigo: "PRE_02",
    categoria: "Prevención",
    tipologia: "Complejo",
    nivel: "Gestión",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Bienestar de la IES, Oficina/comité de Género, Vicerrectoría Académica, representación y grupos estudiantiles",
    factores: [
      "Recursos tecnológicos y humanos para la atención de denuncias",
      "Infraestructura de acceso",
      "Nivel de difusión de los canales de denuncia",
      "Confianza de la comunidad en el sistema de atención",
      "Protección de la confidencialidad"
    ],
    Definición: "Mide la cantidad y accesibilidad de los canales de denuncia disponibles en la institución, asegurando que sean de fácil acceso, confidenciales y seguros para quienes los utilizan",
    objetivo: "Evaluar la existencia y efectividad de los mecanismos de denuncia en la comunidad académica, garantizando el acceso a vías seguras de atención para las víctimas",
    relevancia: "La disponibilidad de canales de denuncia accesibles y confidenciales es crucial para que las víctimas se sientan protegidas y puedan reportar casos sin temor a represalias, fortaleciendo la institucionalidad en la prevención y atención de la violencia y discriminación",
    preguntas_orientadoras: {
      p1: "¿Cuántos y qué tipos de canales de denuncia existen dentro en la IES?",
      p2: "¿Son accesibles para todas las personas?",
      p3: "¿Se garantiza la confidencialidad y no revictimización en el proceso de denuncia?"
    },
    Fórmula: "CDA=[NCD/NT]×100\nCDC=[NCD/NT]\n\nCDA = Disponibilidad de canales de denuncia accesibles\nCDC = Canales de denuncia confidenciales\nNCD = Número de canales de denuncia accesibles\nCDC = Canales de denuncia confidenciales\nNT = Número total de canales de denuncia disponibles en la IES",
    Variables_utilizadas: [
      "Número de canales activos",
      "Accesibilidad de los canales",
      "Confidencialidad en la atención",
      "Disponibilidad de personal capacitado"
    ],
    Fuente_de_datos: "Registros de canales de denuncia institucionales, encuestas a la comunidad académica sobre accesibilidad y confidencialidad de los canales",
    frecuencia_de_medición: "Anual",
    unidad_de_medida: "Porcentaje (%)",
    interpretación: "La disponibilidad de canales de denuncia accesibles y confidenciales es clave para fomentar la confianza de la comunidad en los mecanismos de atención de casos de violencia y discriminación. Un porcentaje elevado en este indicador demuestra la existencia de vías efectivas para denunciar, facilitando la protección de las víctimas y la gestión de los casos reportados. Si el porcentaje es bajo, se deben identificar las barreras de acceso y confidencialidad que limitan el uso de estos canales, promoviendo mejoras estructurales y de capacitación para optimizar su funcionamiento. La constante evaluación de este indicador contribuye a la construcción de un entorno seguro, en el que las víctimas se sientan respaldadas y protegidas al momento de denunciar",
    meta: "100% de los canales de denuncia institucionales deben ser accesibles y garantizar la confidencialidad",
    umbrales: {
      alto: "Más del 80% de los canales cumplen los criterios: Infraestructura adecuada para la atención de denuncias",
      medio: "50%-80% de los canales cumplen los criterios: Necesidad de mejorar la accesibilidad y/o confidencialidad en algunos canales",
      bajo: "Menos del 50% de los canales cumplen los criterios: Deficiencias significativas que afectan la confianza y el acceso a la denuncia"
    },
    uso_toma_decisiones: "Las autoridades universitarias pueden usar este indicador para mejorar y expandir los canales de denuncia, asegurando su accesibilidad y confidencialidad",
    acciones_correctivas: [
      "Implementar nuevos canales digitales y físicos accesibles para toda la comunidad",
      "Garantizar la capacitación del personal que recibe denuncias en protocolos de confidencialidad",
      "Desarrollar campañas de difusión sobre el acceso seguro a los canales de denuncia"
    ],
    recomendaciones: {
      r1: "Es fundamental realizar auditorías periódicas para verificar el cumplimiento de los estándares de accesibilidad y confidencialidad en los canales de denuncia",
      r2: "Promover una cultura de denuncia segura mediante estrategias de sensibilización y acompañamiento a las víctimas"
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025"
  },
  "Existencia de políticas institucionales de no tolerancia hacia la violencia de género": {
    nombre: "Existencia de políticas institucionales de no tolerancia hacia la violencia de género",
    codigo: "PRE_03",
    categoria: "Prevención",
    tipologia: "Complejo",
    nivel: "Gestión",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Bienestar de la IES, Oficina/comité de Género, Rectoría, Vicerrectoría Académica, Secretaría General, Comités de Ética y Convivencia",
    factores: [
      "Compromiso institucional",
      "Disponibilidad de recursos para implementar las políticas",
      "Monitoreo y seguimiento de su cumplimiento",
      "Nivel de sensibilización de la comunidad académica"
    ],
    Definición: "Este indicador mide la existencia, alcance y grado de implementación de políticas institucionales que establecen una postura clara de no tolerancia frente a la violencia de género dentro de la comunidad académica",
    objetivo: "Evaluar la solidez de las normativas universitarias en la prevención y sanción de la violencia de género, asegurando su aplicación efectiva",
    relevancia: "Las políticas institucionales de no tolerancia son fundamentales para la prevención de la violencia de género y la creación de un ambiente seguro e inclusivo. Su existencia y aplicación garantizan protección, sanción y reparación en casos de violencia",
    preguntas_orientadoras: {
      p1: "¿Existen normativas claras sobre no tolerancia a la violencia de género?",
      p2: "¿Se aplican de manera efectiva en la institución?",
      p3: "¿La comunidad académica conoce estas políticas?"
    },
    Fórmula: "EP=(NP/NT)×100\n\nEP = Existencia de políticas de no tolerancia en porcentaje\nNP = Número de políticas institucionales vigentes sobre no tolerancia a la violencia de género\nNT = Número total de normativas institucionales relacionadas con convivencia y equidad de género",
    Metodologia: "Construir el contexto normativo institucional detallando la tipología de la norma (Acuerdos, resoluciones, circulares), autoridad que la expide y alcance de las mismas. Identificar temáticas ausentes, saturadas y duplicidades. Evaluar la correspondencia entre la normativa y metas con los planes de desarrollo de la IES y los informes de gestión",
    Variables_utilizadas: [
      "Número de políticas vigentes",
      "Grado de implementación",
      "Mecanismos de sanción",
      "Nivel de conocimiento por parte de la comunidad"
    ],
    Fuente_de_datos: "Reglamentos y políticas institucionales, reportes de implementación, encuestas a la comunidad académica",
    frecuencia_de_medición: "Anual",
    unidad_de_medida: "Porcentaje (%)",
    interpretación: "La existencia de políticas de no tolerancia hacia la violencia de género es un reflejo del compromiso institucional con la equidad y la seguridad dentro del entorno académico. Un alto porcentaje en este indicador garantiza la presencia de normativas claras y mecanismos efectivos para prevenir, atender y sancionar casos de violencia. Sin embargo, la sola existencia de políticas no es suficiente; su efectividad depende de su correcta implementación y del grado de conocimiento que la comunidad tenga sobre ellas. Si el indicador es bajo, se deben identificar vacíos normativos o deficiencias en la aplicación de las políticas, promoviendo estrategias que fortalezcan su impacto real en la prevención de la violencia de género dentro de la institución",
    meta: "100% de las instituciones deben contar con políticas de no tolerancia debidamente implementadas",
    umbrales: {
      alto: "Más del 80% de cumplimiento: Políticas bien establecidas, aplicadas y conocidas",
      medio: "50%-80% de cumplimiento: Políticas existentes pero con deficiencias en aplicación o difusión",
      bajo: "Menos del 50% de cumplimiento: Políticas inexistentes o ineficaces en su aplicación"
    },
    uso_toma_decisiones: "La información obtenida permite fortalecer la implementación y supervisión de las políticas de no tolerancia, asegurando su cumplimiento efectivo",
    acciones_correctivas: [
      "Implementar nuevas políticas o fortalecer las existentes",
      "Capacitar a la comunidad sobre las normativas vigentes",
      "Crear mecanismos de seguimiento y evaluación periódica"
    ],
    recomendaciones: {
      r1: "Se deben realizar auditorías sobre el cumplimiento de las políticas",
      r2: "Asegurar que sean aplicadas sin excepciones",
      r3: "Promover la sensibilización continua en la comunidad académica"
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025"
  },
  "Tasa de participación en programas de formación sobre género y DyVBGG.s": {
    nombre: "Tasa de participación en programas de formación sobre género y DyVBG",
    codigo: "PRE_04",
    categoria: "Prevención",
    tipologia: "Complejo",
    nivel: "Gestión",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Bienestar de la IES, Oficina/comité de Género, Vicerrectoría Académica, Secretaría General",
    factores: [
      "Disponibilidad de programas de formación",
      "Estrategias de divulgación",
      "Interés y percepción de relevancia por parte de la comunidad",
      "Barreras de acceso (horarios, modalidades, cupos)"
    ],
    Definición: "Este indicador mide el porcentaje de personas de la comunidad académica que participan en programas de formación sobre género y violencia basada en género, en relación con la población objetivo",
    objetivo: "Evaluar el grado de involucramiento de estudiantes, docentes y personal administrativo en procesos de sensibilización y capacitación sobre temas de género y violencia de género",
    relevancia: "Una tasa alta de participación podría generar mayor sensibilización y compromiso con la prevención de la DyVBG. La formación adecuada fomenta la detección temprana de casos, la promoción de una cultura de respeto y la correcta aplicación de los protocolos institucionales",
    preguntas_orientadoras: {
      p1: "¿Cuántas personas han participado en programas de formación sobre género y DyVBG?",
      p2: "¿Qué porcentaje de la comunidad académica ha recibido capacitación en estos temas?",
      p3: "¿Existen brechas de acceso o resistencia a la participación en los programas de formación por edad, sexo y tiempo de permanencia en la IES?"
    },
    Fórmula: "TP=[NPF/PT]×100\n\nTP = Tasa de participación en programas de formación sobre género y DyVBG (%)\nNPF = Número de personas que han completado programas de formación sobre género y DyVBG\nPT = Población total objetivo en la institución (estudiantes, docentes y personal administrativo)",
    Metodologia: "Construir el indicador por edad, sexo, programa y nivel de permanencia en la IES",
    Variables_utilizadas: [
      "Número de participantes en formación",
      "Total de personas en la comunidad académica",
      "Periodicidad de los programas",
      "Modalidad de formación"
    ],
    Fuente_de_datos: "Registros de inscripción y asistencia en programas de formación, reportes de unidades de género y bienestar",
    frecuencia_de_medición: "Semestral",
    unidad_de_medida: "Porcentaje (%)",
    interpretación: "La tasa de participación en programas de formación sobre género y DyVBG es un reflejo del nivel de sensibilización e interés de la comunidad académica en la prevención de la violencia de género. Una alta participación indica que las estrategias de formación son efectivas y accesibles, permitiendo la consolidación de una cultura institucional de equidad y respeto. Sin embargo, si el porcentaje es bajo, se deben analizar las causas, como falta de difusión, metodologías inadecuadas o barreras de acceso. Mejorar la participación implica diversificar los formatos de formación, fortalecer campañas de concienciación y establecer incentivos que motiven a estudiantes, docentes y personal administrativo a capacitarse en estos temas clave para la erradicación de la violencia de género en el ámbito universitario",
    meta: "Alcanzar al menos el 70% de participación dentro de la comunidad académica",
    umbrales: {
      alto: "Más del 70% de participación: Alta sensibilización y compromiso con la formación en género",
      medio: "40%-70% de participación: Formación moderada, con oportunidad de mejora en estrategias de acceso y divulgación",
      bajo: "Menos del 40% de participación: Baja participación, lo que puede indicar desinterés, falta de información o accesibilidad limitada"
    },
    uso_toma_decisiones: "Permite evaluar la efectividad de las estrategias de formación y determinar si se requieren nuevas metodologías o incentivos para fomentar la participación",
    acciones_correctivas: [
      "Ampliar las modalidades de formación (virtual, presencial, asincrónica)",
      "Aumentar la divulgación e incentivos para la participación",
      "Adaptar los contenidos a las necesidades específicas de cada grupo de la comunidad académica"
    ],
    recomendaciones: {
      r1: "Se sugiere realizar campañas de sensibilización para motivar la inscripción en los programas",
      r2: "Integrar los cursos en el currículo académico",
      r3: "Monitorear la efectividad del aprendizaje adquirido"
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025"
  },
"Disponibilidad de personal especializado en atención a víctimas": {
    nombre: "Disponibilidad de personal especializado en atención a víctimas",
    codigo: "ATE_01",
    categoria: "Atención",
    tipologia: "Simple",
    nivel: "Gestión",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Bienestar de la IES, Oficina/comité de Género, Oficina de Psicología, Asesoría Jurídica, Centros de Atención a Víctimas",
    factores: [
      "Disponibilidad de presupuesto",
      "Formación y contratación de personal",
      "Políticas institucionales",
      "Demanda de atención",
      "Infraestructura y confidencialidad en la atención"
    ],
    Definición: "Este indicador mide la cantidad de personal especializado disponible en la institución para brindar atención psicológica, jurídica y social a víctimas de DyVBG",
    objetivo: "Evaluar la capacidad de la institución para responder de manera adecuada y oportuna a las necesidades de las víctimas, garantizando apoyo integral y efectivo",
    relevancia: "Contar con personal capacitado es fundamental para ofrecer acompañamiento adecuado, evitar la revictimización y garantizar el acceso a justicia y protección. La ausencia de estos profesionales puede generar desconfianza en los procesos de denuncia y atención",
    preguntas_orientadoras: {
      p1: "¿Cuántos profesionales especializados en atención a víctimas están disponibles en la institución?",
      p2: "¿Cuál es la proporción de personal especializado respecto a la población universitaria?",
      p3: "¿Se cuenta con atención interdisciplinaria (psicológica, jurídica, social)?",
      p4: "¿Las víctimas tienen acceso a personal capacitado de manera oportuna?"
    },
    Fórmula: "DP=[PE/PT]×100\n\nDP = Disponibilidad de personal especializado en atención a víctimas (%)\nPE = Número de profesionales especializados en atención a víctimas (psicólogos, abogados, trabajadores sociales)\nPT = Población total de la comunidad académica",
    Variables_utilizadas: [
      "Número de profesionales",
      "Demanda de atención",
      "Estándares internacionales de proporción de personal especializado por cantidad de estudiantes y empleados"
    ],
    Fuente_de_datos: "Registros de personal en oficinas de bienestar, reportes de atención a víctimas, bases de datos institucionales de recursos humanos",
    frecuencia_de_medición: "Anual",
    unidad_de_medida: "Porcentaje (%)",
    interpretación: "La disponibilidad de personal especializado en atención a víctimas es un factor clave en la efectividad de las estrategias de prevención y respuesta a la violencia de género en el entorno de las IES. Un número adecuado de profesionales permite brindar acompañamiento oportuno, garantizar apoyo psicológico y jurídico y facilitar el acceso a la justicia. Si el personal es insuficiente, se generan barreras para la denuncia y el acceso al apoyo y acompañamiento eficaz, lo que puede aumentar la revictimización y la desconfianza en las instituciones. Es fundamental que las IES prioricen la contratación de personas con conocimientos específicos en DyVBG y derechos humanos y asegurar las condiciones adecuadas para su labor y fortalezcan estrategias de prevención y atención integral a las víctimas",
    meta: "Contar con al menos un profesional especializado por cada 1.000 personas de la comunidad académica",
    umbrales: {
      alto: "Cumple o supera la meta: La institución tiene un equipo adecuado para atender a las víctimas",
      medio: "50%-99% de la meta alcanzada: Puede haber dificultades en la atención debido a la carga laboral del personal disponible",
      bajo: "Menos del 50% de la meta alcanzada: Atención insuficiente, lo que podría generar barreras en el acceso a apoyo especializado"
    },
    uso_toma_decisiones: "Permite identificar deficiencias en la cantidad de personal especializado y orientar estrategias para fortalecer la capacidad de atención",
    acciones_correctivas: [
      "Ampliar la contratación de profesionales especializados",
      "Implementar capacitaciones continuas para el personal existente",
      "Mejorar la infraestructura y condiciones laborales para fortalecer la atención"
    ],
    recomendaciones: {
      r1: "Asegurar financiamiento para la contratación de personal especializado",
      r2: "Promover redes de apoyo interdisciplinarias",
      r3: "Garantizar protocolos de atención claros y efectivos"
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025"
  },
  "Nivel de satisfacción con los servicios de atención": {
    nombre: "Nivel de satisfacción con los servicios de atención",
    codigo: "ATE_02",
    categoria: "Atención",
    tipologia: "Complejo",
    nivel: "Resultado",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Bienestar de la IES, Oficina/comité de Género, Oficina de Psicología, Centros de Atención Psicológica, Asesoría Jurídica, Defensoría/Veeduría en la IES",
    factores: [
      "Calidad de la atención",
      "Tiempo de respuesta",
      "Trato recibido",
      "Confidencialidad",
      "Infraestructura",
      "Accesibilidad a los servicios"
    ],
    Definición: "Este indicador mide el grado de satisfacción de las personas que han utilizado los servicios de atención en la institución, evaluando aspectos como accesibilidad, eficiencia, trato recibido y efectividad de la respuesta brindada",
    objetivo: "Determinar la percepción de los usuarios sobre la calidad de los servicios de atención y detectar oportunidades de mejora en la gestión de casos de DyVBG",
    relevancia: "Un alto nivel de satisfacción sugiere confianza en los mecanismos de atención, fomentando el uso de estos servicios. Un bajo nivel de satisfacción puede indicar barreras en la atención, revictimización o falta de respuesta efectiva",
    preguntas_orientadoras: {
      p1: "¿Los usuarios consideran que recibieron una atención efectiva y oportuna?",
      p2: "¿Se sintieron escuchados y respetados durante el proceso?",
      p3: "¿Se brindó información clara y acompañamiento adecuado?",
      p4: "¿La experiencia con el servicio de atención fomentó la confianza en los mecanismos institucionales?"
    },
    Fórmula: "NS=[RPS/TR]×100\n\nNS = Nivel de satisfacción con los servicios de atención (%)\nRPS = Número de respuestas positivas en la encuesta de satisfacción\nTR = Total de respuestas en la encuesta",
    Variables_utilizadas: [
      "Percepción de los usuarios",
      "Tiempo de espera",
      "Efectividad en la resolución del caso",
      "Accesibilidad",
      "Trato recibido"
    ],
    Fuente_de_datos: "Encuestas de satisfacción a usuarios de los servicios de atención, entrevistas, reportes de atención institucional. Grupos focales con la comunidad",
    frecuencia_de_medición: "Semestral hasta cumplir criterios de calidad",
    unidad_de_medida: "Porcentaje (%)",
    interpretación: "El nivel de satisfacción con los servicios de atención es un reflejo directo de la confianza de la comunidad en los mecanismos institucionales para atender casos DyVBG. Un alto nivel de satisfacción indica que los servicios son accesibles, efectivos y brindan acompañamiento adecuado, lo que fomenta su uso y fortalece la cultura de denuncia. Por el contrario, una baja satisfacción sugiere deficiencias en la atención, revictimización o falta de respuesta efectiva, lo que puede generar desconfianza y disuadir a las personas de buscar apoyo. Evaluar continuamente la percepción de los usuarios permite mejorar la calidad del servicio, optimizar procesos y garantizar que las víctimas reciban el apoyo necesario en un entorno seguro y confiable",
    meta: "Un nivel de satisfacción superior al 80%",
    umbrales: {
      alto: "80%-100% de satisfacción: Servicio eficiente y confiable",
      medio: "50%-79% de satisfacción: Atención con áreas de mejora",
      bajo: "Menos del 50% de satisfacción: Servicio deficiente que requiere ajustes urgentes"
    },
    uso_toma_decisiones: "Facilita la identificación de fortalezas y debilidades en los servicios de atención y permite implementar estrategias para mejorar la experiencia del usuario",
    acciones_correctivas: [
      "Capacitación al personal en atención y acompañamiento a víctimas",
      "Implementación de protocolos más efectivos y accesibles",
      "Reducción de tiempos de espera y optimización de procesos de atención"
    ],
    recomendaciones: {
      r1: "Establecer mecanismos de retroalimentación continua",
      r2: "Promover la evaluación anónima de los servicios",
      r3: "Garantizar que las mejoras implementadas respondan a las necesidades expresadas por los usuarios"
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025"
  },
  "Percepción sobre la efectividad de los protocolos": {
      nombre: "Percepción sobre la efectividad de los protocolos",
      codigo: "ATE_03",
      categoria: "Atención",
      tipologia: "Complejo",
      nivel: "Resultado",
      fechaCreacion: "Marzo de 2025",
      ultimaActualizacion: "Marzo de 2025",
      dependencia: "Bienestar de la IES, Oficina/comité de Género, Oficina de Psicología, Centros de Atención Psicológica, Asesoría Jurídica, Defensoría/Veeduría en la IES",
      factores: [
        "Confianza en la IES",
        "Tiempo de respuesta",
        "Claridad de los procedimientos",
        "Confidencialidad",
        "Seguimiento a los casos",
        "Percepción de justicia"
      ],
      Definición: "Mide la percepción de las víctimas de violencia y discriminación sobre la eficacia de los protocolos de atención, en términos de acceso, respuesta y resolución",
      objetivo: "Evaluar si los protocolos existentes son percibidos como efectivos en la protección y el apoyo a las víctimas, identificando áreas de mejora",
      relevancia: "Una percepción positiva indica que los protocolos cumplen su función, fortaleciendo la confianza institucional. Una percepción negativa sugiere fallas en la implementación o aplicación de los procedimientos",
      preguntas_orientadoras: {
        p1: "¿Las víctimas consideran que los protocolos de atención son efectivos?",
        p2: "¿Los procesos han garantizado su protección y bienestar?",
        p3: "¿Las respuestas han sido oportunas y adecuadas?",
        p4: "¿Se ha respetado la confidencialidad y el debido proceso?"
      },
      Fórmula: "PE=[RPV/TV]×100\n\nPE = Percepción de efectividad de los protocolos (%)\nRPV = Número de respuestas positivas en la encuesta de percepción\nTV = Total de víctimas encuestadas",
      Variables_utilizadas: [
        "Satisfacción con el protocolo",
        "Confianza en la atención",
        "Tiempo de respuesta",
        "Acceso a recursos de apoyo",
        "Percepción de justicia"
      ],
      Fuente_de_datos: "Encuestas, entrevistas cualitativas, auditorías de procesos de atención",
      frecuencia_de_medición: "Anual",
      unidad_de_medida: "Porcentaje (%)",
      interpretación: "La percepción sobre la efectividad de los protocolos es un indicador clave para medir la confianza en los mecanismos institucionales de atención. Si las víctimas consideran que los protocolos son claros, accesibles y efectivos, se fortalece la disposición a denunciar y se refuerza el compromiso institucional con la erradicación de la violencia y discriminación. En contraste, una percepción negativa sugiere barreras en la atención, revictimización o respuestas inadecuadas, lo que podría desincentivar la denuncia y afectar la seguridad de la comunidad. Evaluar esta percepción permite mejorar los procesos, optimizar la atención y garantizar que las víctimas reciban una respuesta adecuada y oportuna",
      meta: "Percepción de efectividad superior al 80%",
      umbrales: {
        alto: "80%-100% de satisfacción: Protocolos percibidos como efectivos",
        medio: "50%-79% de satisfacción: Áreas de mejora identificadas",
        bajo: "Menos del 50% de satisfacción: Protocolos percibidos como ineficaces"
      },
      uso_toma_decisiones: "Permite evaluar la efectividad real de los protocolos, guiando ajustes para mejorar la respuesta institucional ante casos de violencia y discriminación",
      acciones_correctivas: [
        "Revisión y actualización de los protocolos de atención",
        "Mayor capacitación al personal encargado",
        "Implementación de mecanismos de seguimiento más efectivos"
      ],
      recomendaciones: {
        r1: "Fomentar la retroalimentación de las víctimas sobre los protocolos",
        r2: "Mejorar los tiempos de respuesta",
        r3: "Garantizar un enfoque centrado en la protección y bienestar de la persona afectada"
      },
      responsable_revision: "Equipo MEN-ASCUN",
      fecha_revision: "Marzo de 2025",
      aprobado_por: "Equipo MEN-ASCUN",
      fecha_aprobacion: "Marzo de 2025"
    },
    "Índice de reincidencia en casos de DyVBG": {
    nombre: "Índice de reincidencia en casos de DyVBG",
    codigo: "ATE_04",
    categoria: "Atención",
    tipologia: "Complejo",
    nivel: "Resultado",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Bienestar de la IES, Oficina/comité de Género, Oficina de Psicología, Centros de Atención Psicológica, Oficina/Asesoría Jurídica, Defensoría/ Veeduria en la IES",
    factores: [
      "Efectividad de las sanciones",
      "Seguimiento a los agresores",
      "Sensibilización de la comunidad",
      "Confianza en el sistema de denuncia",
      "Acceso a apoyo psicológico y jurídico"
    ],
    Definición: "Mide la proporción de casos en los que una persona denunciada reincide en conductas de violencia de género o discriminación dentro de la comunidad académica.",
    objetivo: "Evaluar la efectividad de las sanciones y medidas correctivas implementadas para prevenir la reincidencia en casos de DyVBG.",
    relevancia: "Un alto índice de reincidencia sugiere fallas en las sanciones, la falta de medidas de prevención o insuficiente seguimiento a los casos, lo que impacta la confianza en los protocolos institucionales.",
    preguntas_orientadoras: {
      p1: "¿Cuántas personas sancionadas reinciden en conductas de DyVBG?",
      p2: "¿Las medidas disciplinarias aplicadas son efectivas para disuadir la reincidencia?",
      p3: "¿Se hace un seguimiento adecuado a los casos previos?",
      p4: "¿Los programas de prevención han reducido la reincidencia?"
    },
    Fórmula: "IRP=[(∑1_(𝑖=1)^𝑁▒〖𝐹_𝑖∗ 𝑃_𝐺𝑖 〗∗ 𝑃_𝑇𝑖∗𝑃_𝐸𝑖)/𝐶𝑇]∗100",
    Variables_utilizadas: [
      "Número de agresores reincidentes",
      "Total de denuncias",
      "Tipo de medidas aplicadas",
      "Tiempo entre reincidencias"
    ],
    Fuente_de_datos: "Registros disciplinarios, bases de datos de denuncias, seguimiento de casos, encuestas de percepción.",
    frecuencia_de_medición: "Anual",
    unidad_de_medida: "Porcentaje (%)",
    interpretación: "El Índice de Reincidencia en Casos de DyVBG permite evaluar la efectividad de las medidas institucionales para prevenir la repetición de estos actos. Un valor alto indica fallas en las sanciones o en la reeducación de los infractores, mientras que un índice bajo sugiere intervenciones efectivas. Analizando factores como gravedad, tiempo entre reincidencias y efectividad de sanciones, este indicador orienta decisiones estratégicas para fortalecer políticas de prevención y garantizar entornos seguros.",
    meta: "Reducir progresivamente el Índice de Reincidencia en Casos de DyVBG (IRp) hasta alcanzar un nivel inferior al 5%, promoviendo estrategias preventivas, sancionatorias y de seguimiento para evitar la repetición de violencia.",
    umbrales: {
      óptimo: "<5%: Indica una gestión eficaz en la prevención y atención de la DyVBG, con medidas efectivas de intervención y seguimiento.",
      moderado: "5% - 15%: Requiere refuerzo en estrategias de prevención y atención, con análisis de factores que favorecen la reincidencia.",
      crítico: ">15%: Indica alta reincidencia, evidencia de fallas en la protección y en las acciones correctivas, demandando intervenciones urgentes."
    },
    uso_toma_decisiones: "El IRP permite tomar decisiones estratégicas en la prevención, atención y sanción de la violencia de género dentro de las Instituciones de Educación Superior (IES). Entre las decisiones clave se encuentran: reforzar protocolos, revisar la efectividad de las sanciones, asignación de recursos, evaluación y mejora de las estrategias de intervención, y monitoreo de políticas institucionales.",
    acciones_correctivas: [
      "Fortalecimiento de las sanciones para los reincidentes",
      "Implementación de programas de reeducación para agresores",
      "Mayor vigilancia y seguimiento a casos previos"
    ],
    recomendaciones: {
      r1: "Asegurar que las medidas disciplinarias sean efectivas",
      r2: "Reforzar la prevención con formación y sensibilización",
      r3: "Mejorar el monitoreo de las personas con antecedentes de DyVBG"
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025"
  },
  "Índice de satisfacción con la atención recibida": {
  nombre: "Índice de satisfacción con la atención recibida",
  codigo: "ATE_05",
  categoria: "Atención",
  tipologia: "Complejo",
  nivel: "Impacto",
  fechaCreacion: "Marzo de 2025",
  ultimaActualizacion: "Marzo de 2025",
  dependencia: "Bienestar de la IES, Oficina/comité de Género, Oficina de Atención a Víctimas, Departamento de Psicología y Asesoría/Oficina Jurídica",
  factores:[
    "Capacitación y sensibilización del personal de atención",
    "Disponibilidad de recursos humanos y materiales",
    "Confidencialidad y efectividad de los protocolos",
    "Percepción institucional sobre el compromiso con la atención"
  ],
  Definición: "Este indicador mide el grado de satisfacción de las víctimas de DyVBG respecto a los servicios de atención brindados por la institución. Se evalúa en función de la accesibilidad, confidencialidad, efectividad y trato recibido durante el proceso.",
  objetivo: "Identificar áreas de mejora en la atención a víctimas, garantizando un servicio eficiente, humano y orientado a la recuperación y reparación del daño.",
  relevancia: "Un alto nivel de satisfacción refleja confianza en la institución y en los mecanismos de atención, incentivando la denuncia y fortaleciendo el apoyo a víctimas.",
  preguntas_orientadoras: [
    "¿Las víctimas consideran que la atención recibida fue efectiva?",
    "¿Se sintieron respetadas y escuchadas?",
    "¿Consideran que se tomaron medidas adecuadas tras su denuncia?",
    "¿El servicio ofreció un acompañamiento integral y oportuno?"
  ],
  Fórmula: "IS=[(∑(Pi∗Wi))/N]∗100\n\nDonde:\nPi = Puntuación por dimensión (1-5)\nWi = Peso asignado a cada dimensión (ej: Accesibilidad 25%, Confidencialidad 25%, Trato 25%, Efectividad 25%)\nN = Número total de dimensiones evaluadas",
  Variables_utilizadas: [
    "Calificación de la atención",
    "Peso asignado a las dimensiones"
  ],
  Fuente_de_datos: [
    "Encuestas de satisfacción aplicadas a víctimas",
    "Reportes internos de la Oficina/comité de Género"
  ],
  frecuencia_de_medición: "Trimestral",
  unidad_de_medida: "Porcentaje (%)",
  interpretación: "El Índice de Satisfacción con la atención recibida refleja la calidad de los servicios de apoyo institucional para quienes han sufrido DyVBG. Un puntaje alto indica que la institución está cumpliendo con su compromiso de garantizar atención oportuna, confidencial y efectiva. Un nivel bajo sugiere que las víctimas no están recibiendo el acompañamiento adecuado, lo que puede generar desconfianza y desincentivar la denuncia.",
  meta: "IS ≥ 80% (nivel adecuado de atención)",
  umbrales: {
    optimo: "80-100%: Atención efectiva que satisface necesidades",
    moderado: "50-79%: Áreas de mejora en el servicio",
    critico: "<50%: Deficiencias que requieren intervención urgente"
  },
  uso_toma_decisiones: {
    decisiones: [
      "Mejorar la calidad de la atención con protocolos humanizados",
      "Optimizar canales de denuncia y apoyo",
      "Reforzar acompañamiento integral a víctimas",
      "Evaluar efectividad de protocolos institucionales",
      "Asignación estratégica de recursos",
      "Mejorar confianza institucional"
    ],
    dependencias_responsables: [
      "Bienestar de la IES",
      "Oficina/comité de Género",
      "Oficina de Atención a Víctimas",
      "Departamento de Psicología",
      "Asesoría Jurídica"
    ]
  },
  acciones_correctivas: [
    "Capacitación del personal en atención humanizada",
    "Revisión de protocolos de atención",
    "Ampliación de recursos psicológicos y jurídicos"
  ],
  recomendaciones: [
    "Implementar sistema de retroalimentación continua",
    "Fomentar enfoque interinstitucional",
    "Sensibilizar a la comunidad universitaria"
  ],
  responsable_revision: "Equipo MEN-ASCUN",
  fecha_revision: "Marzo de 2025",
  aprobado_por: "Equipo MEN-ASCUN",
  fecha_aprobacion: "Marzo de 2025"
},
"Índice de satisfacción con la atención recibida2": {
    nombre: "Índice de satisfacción con la atención recibida",
    categoria: "Atención",
    tipologia: "Complejo",
    nivel: "Impacto",
    fechaCreacion: "Marzo de 2025",
    ultimaActualizacion: "Marzo de 2025",
    dependencia: "Bienestar de la IES, Oficina/comité de Género, Oficina de Atención a Víctimas\nDepartamento de Psicología y Asesoría/Oficina Jurídica",
    factores: "Capacitación y sensibilización del personal de atención, Disponibilidad de recursos humanos y materiales, Confidencialidad y efectividad de los protocolos,\nPercepción institucional sobre el compromiso con la atención.",
    Definición: "Este indicador mide el grado de satisfacción de las víctimas de DyVBG respecto a los servicios de atención brindados por la institución. Se evalúa en función de la accesibilidad, confidencialidad, efectividad y trato recibido durante el proceso.",
    objetivo: "Identificar áreas de mejora en la atención a víctimas, garantizando un servicio eficiente, humano y orientado a la recuperación y reparación del daño.",
    relevancia: "Un alto nivel de satisfacción refleja confianza en la institución y en los mecanismos de atención, incentivando la denuncia y fortaleciendo el apoyo a víctimas.",
    preguntas_orientadoras: {
      p1: "¿Las víctimas consideran que la atención recibida fue efectiva?",
      p2: "¿Se sintieron respetadas y escuchadas?",
      p3: "¿Consideran que se tomaron medidas adecuadas tras su denuncia?",
      p4: "¿El servicio ofreció un acompañamiento integral y oportuno?",
      p5: ""
    },
    meta: "Un ISV ≥ 80% garantiza un nivel adecuado de atención.",
    meta2: {
      m1: "",
      m2: "",
      m3: ""
    },
    umbrales: {
      alto: "Un IS alto (80-100%) indica que la atención es efectiva y satisface las necesidades.",
      medio: "Un IS medio (50-79%) sugiere áreas de mejora en el servicio.",
      bajo: "Un ISV bajo (<50%) señala deficiencias que requieren intervención urgente."
    },
    Fórmula: "Pi = Puntuación asignada en cada dimensión evaluada (accesibilidad, confidencialidad, trato, efectividad).\nWi = Peso asignado a cada dimensión según su importancia relativa.\nVariables y Parámetros:\nPi : Calificación de la atención en una escala de 1 a 5.\nWi: Peso por dimensión (Ejemplo: Accesibilidad 25%, Confidencialidad 25%, Trato 25%, Efectividad 25%).",
    Variables_utilizadas: "Calificación de la atención, peso asignado a las dimensiones.",
    Fuente_de_datos: "Encuestas de satisfacción aplicadas a víctimas después del proceso de atención.\nReportes internos de la Oficina/comité de Género.",
    frecuencia_de_medición: "Trimestral",
    unidad_de_medida: "Porcentaje (%)",
    interpretación: "El Índice de Satisfacción con la atención recibida refleja la calidad de los servicios de apoyo institucional para quienes han sufrido DyVBG. Un puntaje alto indica que la institución está cumpliendo con su compromiso de garantizar atención oportuna, confidencial y efectiva. Un nivel bajo sugiere que las víctimas no están recibiendo el acompañamiento adecuado, lo que puede generar desconfianza y desincentivar la denuncia. Evaluar este índice permite tomar decisiones para mejorar la atención, optimizar protocolos y fortalecer el enfoque de derechos en el acompañamiento a víctimas.",
    recomendaciones: {
      r1: "Implementar un sistema de retroalimentación continua con las víctimas.",
      r2: "Fomentar un enfoque interinstitucional para mejorar la articulación entre dependencias de atención.",
      r3: "Sensibilizar a la comunidad universitaria sobre la importancia de un adecuado acompañamiento a víctimas.",
      r4: "",
      r5: ""
    },
    responsable_revision: "Equipo MEN-ASCUN",
    fecha_revision: "Marzo de 2025",
    aprobado_por: "Equipo MEN-ASCUN",
    fecha_aprobacion: "Marzo de 2025"
  }
};

export default function IndicadorCalculadora() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Caracterización");
  const [indicadorSeleccionado, setIndicadorSeleccionado] = useState("Seleccionar");
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
        if (!indicadorSeleccionado || indicadorSeleccionado === "") {
          setIndicadorSeleccionado("Seleccionar");
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [indicadorSeleccionado]);

  return (
    <div className="flex flex-col items-center space-y-6 p-8 bg-gradient-to-r from-purple-50 via-purple-100 to-purple-200 min-h-screen">
      <div className="flex space-x-4 w-full">
        {Object.keys(indicadores).map((categoria) => (
          <Button
            key={categoria}
            onClick={() => setCategoriaSeleccionada(categoria)}
            className={`text-lg px-6 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 ${
              categoriaSeleccionada === categoria
                ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg"
                : "bg-gray-300 hover:bg-gray-400"
            } w-full`}
          >
            {categoria}
          </Button>
        ))}
      </div>
      
      {/* Tarjeta de selección de indicador */}
      <Card className="w-full max-w-6xl p-6 bg-white shadow-xl rounded-xl transition-all duration-300 hover:shadow-2xl">
        <CardContent className="space-y-6">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="font-medium text-gray-700">Seleccione el indicador</label>
              <div className="relative" ref={selectRef}>
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-3 rounded-xl border bg-gray-50 cursor-pointer focus:outline-none"
                >
                  {indicadorSeleccionado || "Seleccionar"}
                </div>
                {isOpen && (
                  <div className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-xl shadow-lg z-10">
                    <div
                      className="p-3 text-lg hover:bg-purple-100 cursor-pointer transition-colors"
                      onClick={() => {
                        setIndicadorSeleccionado("Seleccionar");
                        setIsOpen(false);
                      }}
                    >
                      Seleccionar
                    </div>
                    {indicadores[categoriaSeleccionada]?.lista.map((item, index) => (
                      <div
                        key={index}
                        className="p-3 text-lg hover:bg-purple-100 cursor-pointer transition-colors"
                        onClick={() => {
                          setIndicadorSeleccionado(item.nombre);
                          setIsOpen(false);
                        }}
                      >
                        {item.nombre}
                      </div>
                    ))}                    
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {indicadorSeleccionado !== "Seleccionar" && infoIndicadores[indicadorSeleccionado] && (
        <div className="w-full max-w-6xl space-y-6">
          {/* Tarjeta de Información General */}
          <Card className="w-full p-6 bg-white shadow-xl rounded-xl transition-all duration-300 hover:shadow-2xl">
            <CardContent>
              <div className="p-4 border rounded-xl border-purple-500">
                <div className="text-center font-semibold text-white py-2 bg-purple-700 rounded-xl">
                  Información general
                </div>
                <div className="grid grid-cols-2 gap-4 text-gray-700 text-lg p-4">
                  <span className="font-semibold">Nombre:</span> <span>{infoIndicadores[indicadorSeleccionado].nombre}</span>
                  <span className="font-semibold">Categoría:</span> <span>{infoIndicadores[indicadorSeleccionado].categoria}</span>
                  <span className="font-semibold">Tipología:</span> <span>{infoIndicadores[indicadorSeleccionado].tipologia}</span>
                  <span className="font-semibold">Nivel:</span> <span>{infoIndicadores[indicadorSeleccionado].nivel}</span>
                  <span className="font-semibold">Fecha de Creación:</span> <span>{infoIndicadores[indicadorSeleccionado].fechaCreacion}</span>
                  <span className="font-semibold">Última Actualización:</span> <span>{infoIndicadores[indicadorSeleccionado].ultimaActualizacion}</span>
                  <span className="font-semibold">Dependencia productora de información:</span> <span>{infoIndicadores[indicadorSeleccionado].dependencia}</span>
                  <span className="font-semibold">Factores que pueden afectar el indicador:</span> <span>{infoIndicadores[indicadorSeleccionado].factores}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-200 p-6 bg-white shadow-xl rounded-xl transition-all duration-300 hover:shadow-2xl">
  <CardContent>
    <div className="p-4 border rounded-xl border-purple-500">
      <div className="text-center font-semibold text-white py-2 bg-purple-700 rounded-xl mb-4">
        Definición y justificación
      </div>
      
      <div className="grid grid-cols-5 gap-x-6 text-gray-700 text-lg ">
        {/* Columna de Títulos - Alineados a la derecha */}
        <div className="col-span-1 grid grid-rows-7 gap-6">
          {[
            "Definición",
            "Objetivo", 
            "Relevancia",
            "Preguntas orientadoras"
          ].map((title, index) => (
            <h3 
              key={index}
              className="font-semibold text-black flex items-center justify-end pr-4 text-right h-full border-b border-purple-100 py-4"
            >
              {title}
            </h3>
          ))}
        </div>
        
        {/* Columna de Contenido - Alineación exacta */}
        <div className="col-span-4 grid grid-rows-4 gap-6 ">
          {[
            {
              content: infoIndicadores[indicadorSeleccionado].Definición,
              minHeight: "min-h-[50px]"
            },
            {
              content: infoIndicadores[indicadorSeleccionado].objetivo,
              minHeight: "min-h-[50px]"
            },
            {
              content: infoIndicadores[indicadorSeleccionado].relevancia,
              minHeight: "min-h-[50px]"
            },
            {
              content: infoIndicadores[indicadorSeleccionado].preguntas_orientadoras && (
                <ul className="space-y-3 list-disc pl-5">
                  {Object.values(infoIndicadores[indicadorSeleccionado].preguntas_orientadoras)
                    .filter(p => p) // Filtra preguntas vacías
                    .map((pregunta, i) => (
                      <li key={i} className="text-gray-800">{pregunta}</li>
                  ))}
                </ul>
              ),
              minHeight: "min-h-[160px]"
            }
          ].map((section, index) => (
            <div 
              key={index}
              className={`bg-gray-50 p-4 rounded-lg border border-gray-200 ${section.minHeight} flex items-center w-full border-b border-purple-100`}
            >
              <div className="text-gray-800 whitespace-pre-wrap w-full">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </CardContent>
</Card>
{/* Nueva Tarjeta Independiente de Fórmula y Método de Cálculo */}
<Card className="w-full p-6 bg-white shadow-xl rounded-xl transition-all duration-300 hover:shadow-2xl">
  <CardContent>
    <div className="p-4 border rounded-xl border-purple-500">
      <div className="text-center font-semibold text-white py-2 bg-purple-700 rounded-xl mb-4">
        Fórmula y método de cálculo
      </div>
      
      <div className="grid grid-cols-5 gap-x-6 text-gray-700 text-lg p-4">
        {/* Columna de Conceptos - Alineados arriba */}
        <div className="col-span-1 grid grid-rows-5 gap-6">
          {[
            "Fórmula",
            "Variables utilizadas",
            "Fuente de datos",
            "Frecuencia de medición",
            "Unidad de medida"
          ].map((title, index) => (
            <h3 
              key={index}
              className="font-semibold text-black flex items-start justify-end pr-4 text-right"
            >
              {title}
            </h3>
          ))}
        </div>
        
        {/* Columna de Contenido - Alineado arriba */}
        <div className="col-span-4 grid grid-rows-5 gap-6">
          {[
            {
              content: infoIndicadores[indicadorSeleccionado].Fórmula,
              minHeight: "min-h-[50px]"
            },
            {
              content: Array.isArray(infoIndicadores[indicadorSeleccionado].Variables_utilizadas) 
                ? infoIndicadores[indicadorSeleccionado].Variables_utilizadas.join("\n")
                : infoIndicadores[indicadorSeleccionado].Variables_utilizadas,
              minHeight: "min-h-[80px]"
            },
            {
              content: Array.isArray(infoIndicadores[indicadorSeleccionado].Fuente_de_datos)
                ? infoIndicadores[indicadorSeleccionado].Fuente_de_datos.join("\n")
                : infoIndicadores[indicadorSeleccionado].Fuente_de_datos,
              minHeight: "min-h-[80px]"
            },
            {
              content: infoIndicadores[indicadorSeleccionado].frecuencia_de_medición,
              minHeight: "min-h-[50px]"
            },
            {
              content: infoIndicadores[indicadorSeleccionado].unidad_de_medida,
              minHeight: "min-h-[50px]"
            }
          ].map((section, index) => (
            <div 
              key={index}
              className={`bg-gray-50 p-4 pt-0 rounded-lg border border-gray-200 ${section.minHeight} flex items-start w-full`}
            >
              <div className="text-gray-800 whitespace-pre-wrap w-full">
                {typeof section.content === 'string' ? section.content : (
                  <ul className="list-disc pl-5 space-y-2">
                    {section.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </CardContent>
</Card>


{/* Uso y aplicación del indicador - Versión Dinámica */}
<Card className="w-full p-6 bg-white shadow-xl rounded-xl transition-all duration-300 hover:shadow-2xl">
  <CardContent>
    <div className="p-4 border rounded-xl border-purple-500">
      <div className="text-center font-semibold text-white py-2 bg-purple-700 rounded-xl mb-4">
        Parámetros y estándares de evaluación
      </div>
      
      <div className="grid grid-cols-5 gap-x-6 text-gray-700 text-lg">
        {/* Columna de Títulos - Alineados a la derecha */}
        <div className="col-span-1 grid grid-rows-2 gap-6">
          {["Meta", "Umbrales"].map((title, index) => (
            <h3 
              key={index}
              className="font-semibold text-black flex items-center justify-end pr-4 text-right h-full"
            >
              {title}
            </h3>
          ))}
        </div>
        
        {/* Columna de Contenido - Alineado a la izquierda */}
        <div className="col-span-4 grid grid-rows-2 gap-6">
          {[
            {
              content: infoIndicadores[indicadorSeleccionado].meta,
              minHeight: "min-h-[80px]"
            },
            {
              content: infoIndicadores[indicadorSeleccionado].umbrales && (
                <div className="space-y-2 w-full">
                  <p><span className="font-medium">Alto:</span> {infoIndicadores[indicadorSeleccionado].umbrales.alto}</p>
                  <p><span className="font-medium">Medio:</span> {infoIndicadores[indicadorSeleccionado].umbrales.medio}</p>
                  <p><span className="font-medium">Bajo:</span> {infoIndicadores[indicadorSeleccionado].umbrales.bajo}</p>
                </div>
              ),
              minHeight: "min-h-[80px]"
            }
          ].map((section, index) => (
            <div 
              key={index}
              className={`bg-gray-50 p-4 rounded-lg border border-gray-200 ${section.minHeight} flex items-center w-full`}
            >
              <div className="text-gray-800 whitespace-pre-wrap w-full">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </CardContent>
</Card>
    {/* Uso y aplicación del indicador - Versión Final Alineada */}
<Card className="w-full p-6 bg-white shadow-xl rounded-xl transition-all duration-300 hover:shadow-2xl">
  <CardContent>
    <div className="p-4 border rounded-xl border-purple-500">
      <div className="text-center font-semibold text-white py-2 bg-purple-700 rounded-xl mb-4">
        Uso y aplicación del indicador
      </div>
      
      <div className="flex flex-col gap-6 text-gray-700 text-lg">
        {[
          {
            concepto: "Toma de decisiones",
            contenido: infoIndicadores[indicadorSeleccionado].uso_toma_decisiones || 
                      "Permite diseñar estrategias preventivas específicas para grupos afectados",
            minHeight: "min-h-[50px]"
          },
          {
            concepto: "Acciones correctivas",
            contenido: infoIndicadores[indicadorSeleccionado].acciones_correctivas || [
              "Refuerzo de campañas de sensibilización",
              "Fortalecimiento de canales de denuncia",
              "Implementación de programas de formación"
            ],
            minHeight: "min-h-[80px]",
            isList: true
          },
          {
            concepto: "Recomendaciones",
            contenido: infoIndicadores[indicadorSeleccionado].recomendaciones ?
              Object.values(infoIndicadores[indicadorSeleccionado].recomendaciones).filter(Boolean) : [],
            minHeight: "min-h-[80px]",
            isList: true
          },
          {
            concepto: "Responsable revisión",
            contenido: infoIndicadores[indicadorSeleccionado].responsable_revision,
            minHeight: "min-h-[50px]"
          },
          {
            concepto: "Fecha revisión",
            contenido: infoIndicadores[indicadorSeleccionado].fecha_revision,
            minHeight: "min-h-[50px]"
          },
          {
            concepto: "Aprobado por",
            contenido: infoIndicadores[indicadorSeleccionado].aprobado_por,
            minHeight: "min-h-[50px]"
          },
          {
            concepto: "Fecha aprobación",
            contenido: infoIndicadores[indicadorSeleccionado].fecha_aprobacion,
            minHeight: "min-h-[50px]"
          }
        ].map((section, index) => (
          <div key={index} className="grid grid-cols-5 gap-4 items-start">
            {/* Título - Izquierda */}
            <div className="col-span-1 flex items-center justify-start h-full">
              <h3 className="font-semibold text-black text-left pl-2">
                {section.concepto}
              </h3>
            </div>
            
            {/* Contenido - Derecha */}
            <div className={`col-span-4 bg-gray-50 p-4 rounded-lg border border-gray-200 ${section.minHeight}`}>
              {section.isList ? (
                <ul className="list-disc pl-5 space-y-2">
                  {(Array.isArray(section.contenido) ? section.contenido : [section.contenido]).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.contenido}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </CardContent>
</Card>
        </div>
      )}
    </div>
  );
}