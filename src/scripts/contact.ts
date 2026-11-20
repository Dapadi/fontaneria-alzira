/**
 * Validación y gestión del formulario de contacto en TypeScript
 */

export function initContactForm(): void {
  const form = document.querySelector<HTMLFormElement>('#contact-form');
  if (!form) return;

  const nameInput = form.querySelector<HTMLInputElement>('#contact-name');
  const phoneInput = form.querySelector<HTMLInputElement>('#contact-phone');
  const townInput = form.querySelector<HTMLInputElement>('#contact-town');
  const serviceInput = form.querySelector<HTMLSelectElement>('#contact-service');
  const messageInput = form.querySelector<HTMLTextAreaElement>('#contact-message');
  const privacyInput = form.querySelector<HTMLInputElement>('#contact-privacy');
  const successBanner = form.querySelector<HTMLElement>('#form-success-banner');

  const validatePhone = (phone: string): boolean => {
    // Regex para teléfonos válidos en España (fijos y móviles, 9 dígitos con o sin prefijo +34)
    const cleanPhone = phone.replace(/[\s\-\.]/g, '');
    const phoneRegex = /^(\+?34)?[6789]\d{8}$/;
    return phoneRegex.test(cleanPhone);
  };

  const setFieldError = (input: HTMLElement | null, isValid: boolean): void => {
    if (!input) return;
    if (isValid) {
      input.classList.remove('is-invalid');
    } else {
      input.classList.add('is-invalid');
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let hasErrors = false;

    // Validate Name
    const nameVal = nameInput?.value.trim() || '';
    const isNameValid = nameVal.length >= 2;
    setFieldError(nameInput, isNameValid);
    if (!isNameValid) hasErrors = true;

    // Validate Phone
    const phoneVal = phoneInput?.value.trim() || '';
    const isPhoneValid = validatePhone(phoneVal);
    setFieldError(phoneInput, isPhoneValid);
    if (!isPhoneValid) hasErrors = true;

    // Validate Town
    const townVal = townInput?.value.trim() || '';
    const isTownValid = townVal.length >= 2;
    setFieldError(townInput, isTownValid);
    if (!isTownValid) hasErrors = true;

    // Validate Service
    const serviceVal = serviceInput?.value || '';
    const isServiceValid = serviceVal.length > 0;
    setFieldError(serviceInput, isServiceValid);
    if (!isServiceValid) hasErrors = true;

    // Validate Message
    const messageVal = messageInput?.value.trim() || '';
    const isMessageValid = messageVal.length >= 8;
    setFieldError(messageInput, isMessageValid);
    if (!isMessageValid) hasErrors = true;

    // Validate Privacy
    const isPrivacyValid = privacyInput?.checked || false;
    setFieldError(privacyInput, isPrivacyValid);
    if (!isPrivacyValid) hasErrors = true;

    if (hasErrors) {
      const firstInvalid = form.querySelector('.is-invalid') as HTMLElement;
      firstInvalid?.focus();
      return;
    }

    // Datos validados correctamente en TypeScript
    const formData = {
      nombre: nameVal,
      telefono: phoneVal,
      localidad: townVal,
      servicio: serviceVal,
      descripcion: messageVal,
      privacidadAceptada: isPrivacyValid,
      fechaEnvio: new Date().toISOString()
    };

    console.info('Datos del formulario validados con éxito:', formData);

    // Mensaje transparente de estado listo para producción
    if (successBanner) {
      successBanner.innerHTML = `
        <strong>✓ Solicitud validada correctamente.</strong><br>
        Gracias por contactar con Fontanería Alzira. Tu consulta para <em>${serviceVal}</em> en <em>${townVal}</em> está lista para ser procesada.
        <br><br>
        <span style="font-size: 0.85rem; opacity: 0.9;">
          <em>(El formulario se encuentra preparado para enlazar con la API de correo o CRM definitiva tras la configuración en Vercel/servidor).</em>
        </span>
      `;
      successBanner.classList.add('is-visible');
      form.reset();
      successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });

  // Remove validation errors on user input
  const inputs = [nameInput, phoneInput, townInput, serviceInput, messageInput, privacyInput];
  inputs.forEach((input) => {
    input?.addEventListener('input', () => {
      input.classList.remove('is-invalid');
    });
  });
}
