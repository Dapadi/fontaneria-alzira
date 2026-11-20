/**
 * Asistente Interactivo de Diagnóstico Rápido de Averías
 * Genera recomendaciones de primeros auxilios y precarga un mensaje detallado para WhatsApp.
 */

interface DiagnosticState {
  problem: string;
  problemLabel: string;
  location: string;
  locationLabel: string;
  urgency: string;
  urgencyLabel: string;
}

export function initDiagnosticTool(): void {
  const container = document.querySelector<HTMLElement>('#diagnostic-tool');
  if (!container) return;

  const state: DiagnosticState = {
    problem: 'fuga',
    problemLabel: 'Fuga de agua con pérdida activa',
    location: 'cocina',
    locationLabel: 'Cocina (fregadero o electrodoméstico)',
    urgency: 'alta',
    urgencyLabel: 'Urgente (pérdida continua)'
  };

  const problemBtns = container.querySelectorAll<HTMLButtonElement>('[data-diag-problem]');
  const locationBtns = container.querySelectorAll<HTMLButtonElement>('[data-diag-location]');
  const urgencyBtns = container.querySelectorAll<HTMLButtonElement>('[data-diag-urgency]');
  const resultAdvice = container.querySelector<HTMLElement>('#diag-advice');
  const resultWhatsappBtn = container.querySelector<HTMLAnchorElement>('#diag-whatsapp-btn');
  const summaryProblem = container.querySelector<HTMLElement>('#diag-summary-problem');
  const summaryLocation = container.querySelector<HTMLElement>('#diag-summary-location');
  const summaryUrgency = container.querySelector<HTMLElement>('#diag-summary-urgency');

  const adviceDictionary: Record<string, string> = {
    'fuga-alta': '⚠️ Acción inmediata: Cierra la llave de paso general de tu vivienda (suele estar bajo el fregadero o en la entrada). Desconecta los aparatos eléctricos cercanos a la zona húmeda y no toques los enchufes con el suelo mojado. Nuestro fontanero acudirá con detector acústico para localizar la rotura sin picar a ciegas.',
    'fuga-media': '💡 Consejo técnico: Coloca un recipiente bajo el goteo y cierra la llave de escuadra específica de ese punto para mantener agua en el resto de la vivienda. Si notas humedad en la pared, indícanoslo para acudir con medidor de humedad relativa.',
    'fuga-baja': '🛠️ Recomendación: Si se trata de una pérdida leve o condensación, revisaremos las juntas y el estado del latiguillo para evitar roturas repentinas por fatiga del material.',
    'atasco-alta': '⚠️ Acción inmediata: No sigas vertiendo agua en otros sanitarios conectados a la misma bajante para evitar desbordamientos. Evita verter desatascadores químicos cáusticos, ya que cristalizan y desprenden vapores tóxicos. Intervendremos con espiral mecánica rotativa.',
    'atasco-media': '💡 Consejo técnico: Desmonta el sifón inferior si es accesible desenroscando a mano con un cubo debajo. Si el tapón está en la tubería empotrada, la máquina de espiral desincrustará la pared sin dañar el PVC.',
    'atasco-baja': '🛠️ Recomendación: Se realizará una limpieza preventiva de la tubería de desagüe con tobera espiral para eliminar la grasa acumulada y devolver el caudal original.',
    'termo-alta': '⚠️ Acción inmediata: Si el termo gotea por la base o sale agua con olor a recalentado, desconéctalo de la corriente eléctrica inmediatamente y corta su llave de entrada de agua fría. Verificaremos si la cuba se ha perforado o si es la válvula de sobrepresión.',
    'termo-media': '💡 Consejo técnico: Si el agua no calienta suficiente o se agota muy rápido, suele deberse a calcificación en la resistencia o fallo del termostato. Revisaremos el ánodo de magnesio.',
    'termo-baja': '🛠️ Recomendación: Realizamos la sustitución o instalación de termos Cointra o Ariston con manguitos antielectrolíticos para proteger el equipo frente al agua dura de La Ribera.',
    'presion-alta': '⚠️ Acción inmediata: Si escuchas golpes en las tuberías (golpe de ariete) al cerrar grifos, corres riesgo de rotura de juntas por sobrepresión. Instalaremos un reductor de presión tarado a 3 bar.',
    'presion-media': '💡 Consejo técnico: Una bajada repentina de presión puede deberse a filtros obstruidos por cal o una avería en el grupo hidroneumático comunitario.',
    'presion-baja': '🛠️ Recomendación: Verificaremos el caudal de entrada y el estado de las llaves de paso de compuerta antiguas.'
  };

  const updateUI = () => {
    // Update summaries
    if (summaryProblem) summaryProblem.textContent = state.problemLabel;
    if (summaryLocation) summaryLocation.textContent = state.locationLabel;
    if (summaryUrgency) summaryUrgency.textContent = state.urgencyLabel;

    // Determine advice key
    const adviceKey = `${state.problem}-${state.urgency}`;
    const fallbackKey = `${state.problem}-media`;
    const adviceText = adviceDictionary[adviceKey] || adviceDictionary[fallbackKey] || 'Indícanos los detalles de tu avería para ofrecerte la recomendación técnica más precisa.';

    if (resultAdvice) {
      resultAdvice.textContent = adviceText;
    }

    // Update WhatsApp link with prefilled structured message
    if (resultWhatsappBtn) {
      const message = `Hola Fontanería Alzira, he realizado el diagnóstico en vuestra web:
• Problema: ${state.problemLabel}
• Ubicación: ${state.locationLabel}
• Urgencia: ${state.urgencyLabel}
¿Podríais confirmarme disponibilidad de asistencia técnica en Alzira / La Ribera?`;

      resultWhatsappBtn.href = `https://wa.me/34600000000?text=${encodeURIComponent(message)}`;
    }
  };

  // Event handlers for buttons
  const setupGroup = (buttons: NodeListOf<HTMLButtonElement>, callback: (btn: HTMLButtonElement) => void) => {
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        buttons.forEach((b) => b.classList.remove('is-selected'));
        btn.classList.add('is-selected');
        callback(btn);
        updateUI();
      });
    });
  };

  setupGroup(problemBtns, (btn) => {
    state.problem = btn.getAttribute('data-diag-problem') || 'fuga';
    state.problemLabel = btn.querySelector('.diag-btn-title')?.textContent || btn.textContent || '';
  });

  setupGroup(locationBtns, (btn) => {
    state.location = btn.getAttribute('data-diag-location') || 'cocina';
    state.locationLabel = btn.textContent?.trim() || '';
  });

  setupGroup(urgencyBtns, (btn) => {
    state.urgency = btn.getAttribute('data-diag-urgency') || 'media';
    state.urgencyLabel = btn.textContent?.trim() || '';
  });

  // Initial render
  updateUI();
}
