const riesgosData = {
  ambiental: [
    "Pasivos ambientales no reconocidos",
    "Cumplimiento normativo ambiental",
    "Contaminación por residuos agrícolas",
    "Deforestación y uso del suelo",
    "Riesgos asociados al cambio climático",
    "Desvalorización de activos ambientales",
    "Costos de remediación ambiental",
    "Falta de auditorías ambientales",
    "Dependencia de certificaciones ambientales",
    "Inversión insuficiente en sostenibilidad",
    "Incendios forestales por cambio climático",
    "Impacto en biodiversidad local",
    "Reducción de fuentes hídricas",
    "Sanciones por vertimientos",
    "Uso ineficiente de energía",
    "Sobreexplotación de recursos naturales",
    "Emisiones de gases contaminantes",
    "Inadecuado manejo de residuos",
    "Falta de educación ambiental",
    "Fuga de contaminantes químicos"
  ],
  operativo: [
    "Interrupciones en la cadena de suministro",
    "Dependencia de productores asociados",
    "Fallas en la trazabilidad del producto",
    "Ineficiencias en procesos de producción",
    "Riesgos laborales y sindicales",
    "Dependencia de tecnología o sistemas operativos",
    "Errores en el control de inventarios",
    "Falta de estandarización en tiendas o franquicias",
    "Rotación de personal operativo",
    "Incrementos imprevistos en los costos logísticos",
    "Daños en equipos productivos",
    "Falta de mantenimiento preventivo",
    "Problemas de distribución en zonas remotas",
    "Demoras en tiempos de entrega",
    "Inadecuada gestión de turnos",
    "Descoordinación interdepartamental",
    "Ausencias masivas del personal",
    "Errores humanos repetitivos",
    "Falta de protocolos operativos",
    "Accidentes por falta de señalización"
  ],
  financiero: [
    "Riesgo de liquidez",
    "Endeudamiento excesivo",
    "Riesgo cambiario",
    "Falsedad o errores en la información contable",
    "Falta de provisiones adecuadas",
    "Retrasos en el recaudo de cartera",
    "Pérdida de valor de inversiones o activos",
    "Mal manejo del flujo de caja",
    "Inestabilidad macroeconómica",
    "Dependencia de subsidios o apoyos gubernamentales",
    "Errores en presupuestación",
    "Inflación elevada",
    "Fraude interno",
    "Altos costos financieros",
    "Reducción de ingresos por caída en ventas",
    "Baja rentabilidad en nuevas inversiones",
    "Mala evaluación de proyectos",
    "Exposición a tasas variables",
    "Incobrabilidad de clientes",
    "Problemas con pagos internacionales"
  ],
  tecnologico: [
    "Fallas en sistemas contables y financieros (ERP)",
    "Ciberataques o vulnerabilidades de seguridad",
    "Obsolescencia tecnológica",
    "Costos elevados por implementación de nuevas tecnologías",
    "Inadecuado control de accesos y permisos",
    "Dependencia excesiva de proveedores tecnológicos",
    "Pérdida o corrupción de datos",
    "Errores en integraciones tecnológicas",
    "Subregistro de gastos tecnológicos",
    "Falta de cumplimiento de estándares tecnológicos",
    "Demoras en soporte técnico",
    "Fallos en actualizaciones",
    "Falta de capacitación tecnológica",
    "Baja interoperabilidad entre plataformas",
    "Riesgos por desarrollo interno mal gestionado",
    "Dependencia de software obsoleto",
    "Inconsistencias entre sistemas",
    "Fallas en backups",
    "Fuga de datos sensibles",
    "Hackeo a redes internas"
  ],
  legal: [
    "Contingencias judiciales no registradas",
    "Incumplimiento de normativas fiscales",
    "Litigios por derechos de marca o propiedad intelectual",
    "Falta de cumplimiento con leyes ambientales o laborales",
    "Riesgo en contratos con franquiciados o aliados",
    "Sanciones por protección al consumidor",
    "Riesgo por cambios regulatorios",
    "Inadecuado tratamiento de datos personales (Ley Habeas Data)",
    "Riesgos por contratos laborales mal estructurados",
    "Falta de revelación adecuada en notas a los estados financieros",
    "Falta de licencias o permisos",
    "Demoras en trámites legales",
    "Conflictos por propiedad intelectual",
    "Falta de seguimiento a procesos judiciales",
    "Errores en registros mercantiles",
    "Incumplimientos en normas internacionales",
    "Fraude documental",
    "Sanciones por manipulación de precios",
    "Inexactitud en declaraciones tributarias",
    "Negligencia legal en fusiones o adquisiciones"
  ],
  reputacional: [
    "Percepción de falta de transparencia financiera",
    "Revelación de pérdidas o baja rentabilidad",
    "Asociación con prácticas no éticas",
    "Críticas por baja inversión en sostenibilidad",
    "Impacto de demandas públicas o escándalos legales",
    "Inconsistencias entre el discurso y los resultados",
    "Percepción de malos tratos a caficultores o empleados",
    "Informes financieros auditados con salvedades o énfasis",
    "Falta de responsabilidad social reflejada en la inversión",
    "Fugas de información confidencial o manipulación financiera",
    "Boicots en redes sociales",
    "Comentarios negativos en prensa",
    "Asociación con productos dañinos",
    "Trato discriminatorio reportado",
    "Falta de respuesta ante crisis reputacional",
    "Descontento de accionistas",
    "Campañas negativas de la competencia",
    "Incumplimiento de promesas de marca",
    "Falta de transparencia en informes ESG",
    "Crisis mediáticas no gestionadas"
  ]
};

const riesgosContainer = document.getElementById("riesgosContainer");
const tipoRiesgoSelect = document.getElementById("tipoRiesgo");
const riesgosSeleccionados = document.getElementById("riesgosSeleccionados");

function crearCheckBox(area, riesgo) {
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.dataset.area = area;
  checkbox.value = riesgo;
  checkbox.addEventListener("change", mostrarFormularioRiesgo);
  label.appendChild(checkbox);
  label.append(" " + riesgo);
  riesgosContainer.appendChild(label);
}

function actualizarRiesgos() {
  riesgosContainer.innerHTML = "";
  const tipo = tipoRiesgoSelect.value;
  if (tipo === "todos") {
    Object.keys(riesgosData).forEach(area =>
      riesgosData[area].forEach(r => crearCheckBox(area, r))
    );
  } else {
    riesgosData[tipo].forEach(r => crearCheckBox(tipo, r));
  }
}

function calcularNivel(prob, impacto) {
  const nivel = prob * impacto;
  if (nivel <= 6) return { texto: "Bajo", clase: "nivel-bajo" };
  if (nivel <= 15) return { texto: "Medio", clase: "nivel-medio" };
  return { texto: "Alto", clase: "nivel-alto" };
}

function mostrarFormularioRiesgo(e) {
  const isChecked = e.target.checked;
  const area = e.target.dataset.area;
  const riesgo = e.target.value;

  if (isChecked) {
    const div = document.createElement("div");
    div.className = "riesgo-item";
    div.dataset.riesgo = riesgo;

    div.innerHTML = `
      <h3>${riesgo}</h3>
      <p><strong>Área:</strong> ${area}</p>
      <label>Probabilidad (1-5): 
        <input type="number" min="1" max="5" class="probabilidad" data-riesgo="${riesgo}">
      </label>
      <label>Impacto (1-5): 
        <input type="number" min="1" max="5" class="impacto" data-riesgo="${riesgo}">
      </label>
      <p>Nivel de Riesgo: <span class="nivel-riesgo" id="nivel-${riesgo.replaceAll(' ', '_')}">-</span></p>
      <label>Plan de Acción: 
        <textarea rows="2" cols="50"></textarea>
      </label>
    `;

    const probInput = div.querySelector(".probabilidad");
    const impactoInput = div.querySelector(".impacto");
    const span = div.querySelector(".nivel-riesgo");

    function actualizarNivel() {
      const prob = parseInt(probInput.value);
      const impacto = parseInt(impactoInput.value);
      span.className = "nivel-riesgo";

      if (prob >= 1 && impacto >= 1) {
        const { texto, clase } = calcularNivel(prob, impacto);
        span.textContent = texto;
        span.classList.add(clase);
      } else {
        span.textContent = "-";
      }
    }

    probInput.addEventListener("input", actualizarNivel);
    impactoInput.addEventListener("input", actualizarNivel);

    riesgosSeleccionados.appendChild(div);
  } else {
    const toRemove = riesgosSeleccionados.querySelector(`[data-riesgo ="${riesgo}"]`);
    if (toRemove) toRemove.remove();
  }
}

tipoRiesgoSelect.addEventListener("change", actualizarRiesgos);
actualizarRiesgos();