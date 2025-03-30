import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const indicadores = {
  Caracterización: {
    lista: [
      { nombre: "Población estudiada", definicion: "Descripción de la población que fue estudiada." },
      { nombre: "Datos sociodemográficos", definicion: "Información sobre las características sociales y demográficas de la población." },
      { nombre: "Perfil educativo", definicion: "Descripción de las características educativas de los participantes." }
    ]
  },
  Atención: {
    lista: [
      { nombre: "Número de consultas", definicion: "Cantidad de consultas realizadas durante un periodo." },
      { nombre: "Tiempo de respuesta", definicion: "Tiempo promedio entre la solicitud y la respuesta del servicio." },
      { nombre: "Satisfacción del usuario", definicion: "Evaluación de la satisfacción general de los usuarios con el servicio recibido." }
    ]
  },
  Detección: {
    lista: [
      { nombre: "Casos identificados", definicion: "Número de casos identificados durante un periodo de tiempo." },
      { nombre: "Tasa de detección", definicion: "Porcentaje de casos identificados en relación con los casos esperados." },
      { nombre: "Seguimiento", definicion: "Proceso de seguimiento de los casos detectados para asegurar su resolución." }
    ]
  },
  Prevención: {
    lista: [
      { nombre: "Campañas realizadas", definicion: "Número de campañas de prevención realizadas." },
      { nombre: "Impacto en la población", definicion: "Efecto de las campañas en la conciencia y comportamiento de la población." },
      { nombre: "Reducción de riesgos", definicion: "Medición de la disminución de riesgos debido a las intervenciones preventivas." }
    ]
  },
  Discriminación: {
    lista: [
      { nombre: "Casos reportados", definicion: "Número de casos de discriminación reportados." },
      { nombre: "Medidas correctivas", definicion: "Acciones tomadas para corregir la discriminación detectada." },
      { nombre: "Percepción social", definicion: "Cómo percibe la sociedad la discriminación y las medidas adoptadas." }
    ]
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
        if (!indicadorSeleccionado) {
          setIndicadorSeleccionado("Seleccionar");
        }
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [indicadorSeleccionado]);

  const definicionSeleccionada =
    indicadorSeleccionado !== "Seleccionar" &&
    indicadores[categoriaSeleccionada]?.lista.find(
      (item) => item.nombre === indicadorSeleccionado
    )?.definicion;

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
                  <div
                    className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-xl shadow-lg z-10"
                  >
                    {/* Opción "Seleccionar" al inicio */}
                    <div
                      className="p-3 text-lg hover:bg-purple-100 cursor-pointer transition-colors"
                      onClick={() => {
                        setIndicadorSeleccionado("Seleccionar");
                        setIsOpen(false);
                      }}
                    >
                      Seleccionar
                    </div>
                    {/* Opciones de la lista de indicadores */}
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

            {indicadorSeleccionado && indicadorSeleccionado !== "Seleccionar" && (
              <div className="flex flex-col space-y-2">
                <label className="font-medium text-gray-700">Definición</label>
                <textarea
                  value={definicionSeleccionada || ""}
                  readOnly
                  rows={4}
                  className="p-3 rounded-xl border bg-gray-100 text-gray-700 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="w-full max-w-6xl p-6 bg-white shadow-xl rounded-xl transition-all duration-300 hover:shadow-2xl">
        <CardContent className="space-y-6">
          <div
            className="p-4 border rounded-xl focus:ring-2 focus:ring-purple-800"
            style={{
              border: "1px solid #5C4A98",
              fontFamily: "'Nunito', sans-serif",
              fontSize: "1.2rem",
              transition: "all 0.3s ease",
            }}
          >
            <div
              className="text-center font-semibold text-white py-2"
              style={{
                backgroundColor: "#5C4A98",
                transition: "background-color 0.3s ease",
              }}
            >
              Información general
            </div>
            <div className="grid grid-cols-2 gap-4 text-gray-700 text-lg">
              <span className="font-semibold">Nombre:</span> <span>Cantidad de personal capacitado en atención y prevención de DyVBG</span>
              <span className="font-semibold">Categoría:</span> <span>Caracterización</span>
              <span className="font-semibold">Tipología:</span> <span>Simple</span>
              <span className="font-semibold">Nivel:</span> <span>Gestión</span>
              <span className="font-semibold">Fecha de Creación:</span> <span>Marzo de 2025</span>
              <span className="font-semibold">Última Actualización:</span> <span>Marzo de 2025</span>
              <span className="font-semibold">Dependencia productora de información:</span> <span>Bienestar Universitario, Comités y Unidades de Género</span>
              <span className="font-semibold">Factores que pueden afectar el indicador y su concepto:</span>
              <span>Disponibilidad de recursos, formación del personal y estrategias de implementación</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
