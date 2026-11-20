/**
 * Matriz Interactiva de Cobertura y Dureza del Agua para La Ribera Alta
 */

interface TownData {
  name: string;
  distance: string;
  eta: string;
  waterHardness: string;
  waterType: string;
  notes: string;
  url: string;
}

export function initLocalitiesMatrix(): void {
  const container = document.querySelector<HTMLElement>('#localities-matrix');
  if (!container) return;

  const townsData: Record<string, TownData> = {
    alzira: {
      name: 'Alzira',
      distance: '0 km (Sede central)',
      eta: '10 - 20 minutos',
      waterHardness: '38 °fH',
      waterType: 'Agua muy dura con alta mineralización calcárea',
      notes: 'En el casco antiguo (La Vila y Santos Patronos) es común encontrar tuberías de hierro galvanizado o plomo antiguo que requieren renovación. En urbanizaciones elevadas como El Respirall o El Racó revisamos grupos de sobrepresión.',
      url: '/zonas/alzira/'
    },
    carcaixent: {
      name: 'Carcaixent',
      distance: '4 km',
      eta: '10 - 15 minutos',
      waterHardness: '36 °fH',
      waterType: 'Agua dura',
      notes: 'Habitual necesidad de cambio de termos eléctricos debido a la acumulación de sedimentos calcáreos en las resistencias. Atención rápida tanto en casco urbano como en Cogullada y chalets.',
      url: '/zonas/carcaixent/'
    },
    algemesi: {
      name: 'Algemesí',
      distance: '6 km',
      eta: '12 - 18 minutos',
      waterHardness: '37 °fH',
      waterType: 'Agua muy dura',
      notes: 'Frecuentes intervenciones en comunidades de propietarios: bajantes comunitarias de fecales y sustitución de baterías de contadores en cuartos de agua.',
      url: '/zonas/algemesi/'
    },
    alberic: {
      name: 'Alberic',
      distance: '10 km',
      eta: '15 - 20 minutos',
      waterHardness: '39 °fH',
      waterType: 'Agua muy dura con cal',
      notes: 'En la Urbanización San Cristóbal y viviendas aisladas atendemos grupos hidroneumáticos, bombas sumergibles de pozo y fugas en acometidas enterradas de polietileno.',
      url: '/zonas/alberic/'
    },
    guadassuar: {
      name: 'Guadassuar',
      distance: '5 km',
      eta: '10 - 15 minutos',
      waterHardness: '37 °fH',
      waterType: 'Agua dura',
      notes: 'Mantenimiento de fontanería en viviendas tradicionales y naves industriales con instalación de filtros de sedimentos.',
      url: '/zonas/'
    },
    lalcudia: {
      name: "L'Alcúdia",
      distance: '9 km',
      eta: '15 - 20 minutos',
      waterHardness: '35 °fH',
      waterType: 'Agua dura',
      notes: 'Reformas de baños con sustitución de bañeras por platos de ducha y desatascos en bajantes pluviales.',
      url: '/zonas/'
    }
  };

  const chips = container.querySelectorAll<HTMLButtonElement>('[data-town-key]');
  const townNameEl = container.querySelector<HTMLElement>('#matrix-town-name');
  const townDistEl = container.querySelector<HTMLElement>('#matrix-town-dist');
  const townEtaEl = container.querySelector<HTMLElement>('#matrix-town-eta');
  const townHardnessEl = container.querySelector<HTMLElement>('#matrix-town-hardness');
  const townWaterTypeEl = container.querySelector<HTMLElement>('#matrix-town-watertype');
  const townNotesEl = container.querySelector<HTMLElement>('#matrix-town-notes');
  const townLinkEl = container.querySelector<HTMLAnchorElement>('#matrix-town-link');
  const townWhatsappBtn = container.querySelector<HTMLAnchorElement>('#matrix-town-whatsapp');

  const setTown = (key: string) => {
    const data = townsData[key];
    if (!data) return;

    chips.forEach((c) => {
      if (c.getAttribute('data-town-key') === key) {
        c.classList.add('is-active');
      } else {
        c.classList.remove('is-active');
      }
    });

    if (townNameEl) townNameEl.textContent = data.name;
    if (townDistEl) townDistEl.textContent = data.distance;
    if (townEtaEl) townEtaEl.textContent = data.eta;
    if (townHardnessEl) townHardnessEl.textContent = data.waterHardness;
    if (townWaterTypeEl) townWaterTypeEl.textContent = data.waterType;
    if (townNotesEl) townNotesEl.textContent = data.notes;
    if (townLinkEl) {
      townLinkEl.href = data.url;
      townLinkEl.textContent = `Ver servicio de fontanería en ${data.name} →`;
    }
    if (townWhatsappBtn) {
      townWhatsappBtn.href = `https://wa.me/34600000000?text=${encodeURIComponent(`Hola Fontanería Alzira, necesito asistencia técnica en ${data.name}. ¿Cuál es vuestra disponibilidad de desplazamiento?`)}`;
    }
  };

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const key = chip.getAttribute('data-town-key');
      if (key) setTown(key);
    });
  });

  // Default to Alzira
  setTown('alzira');
}
