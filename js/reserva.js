let currentStep = 1;
const totalSteps = 4;
let selectedService = 'Habitación Doble';

function goToStep(step) {
  for (let i = 1; i <= totalSteps; i++) {
    document.getElementById(`step-${i}`).classList.add('hidden');
  }
  document.getElementById(`step-${step}`).classList.remove('hidden');
  currentStep = step;
  const pct = Math.round((step / totalSteps) * 100);
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('step-label').textContent = `Paso ${step} de ${totalSteps}`;
  document.getElementById('step-pct').textContent = pct + '%';
  for (let i = 1; i <= totalSteps; i++) {
    const el = document.getElementById(`s${i}`);
    el.className = i === step ? 'font-medium text-primary-600' : i < step ? 'font-medium text-emerald-600' : '';
  }
}

function nextStep() {
  if (currentStep < totalSteps) {
    if (currentStep === 3) updateReview();
    goToStep(currentStep + 1);
  }
}

function prevStep() {
  if (currentStep > 1) goToStep(currentStep - 1);
}

function updateReview() {
  const name = document.getElementById('f-name').value || '—';
  const email = document.getElementById('f-email').value || '—';
  const persons = document.getElementById('f-persons').value || '—';
  const start = document.getElementById('f-start').value;
  const end = document.getElementById('f-end').value;
  const fmt = d => d ? new Date(d).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' }) : '—';
  document.getElementById('r-servicio').textContent = selectedService;
  document.getElementById('r-nombre').textContent = name;
  document.getElementById('r-email').textContent = email;
  document.getElementById('r-personas').textContent = persons;
  document.getElementById('r-fechas').textContent = `${fmt(start)} → ${fmt(end)} 2026`;
  const prices = { 'Habitación Doble': 180, 'Suite Ejecutiva': 350, 'Mesa para 4 personas': 150, 'Consulta Odontológica': 60 };
  const pricePerNight = prices[selectedService] || 180;
  let total = pricePerNight;
  if (start && end) {
    const days = Math.max(1, Math.ceil((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24)));
    if (['Habitación Doble', 'Suite Ejecutiva'].includes(selectedService)) total = pricePerNight * days;
  }
  document.getElementById('r-total').textContent = '$' + total.toLocaleString('es-CO');
}

function confirmBooking() {
  const ref = 'SR-' + String(Math.floor(Math.random() * 900 + 100));
  const data = {
    ref: ref,
    servicio: document.getElementById('r-servicio').textContent,
    nombre: document.getElementById('r-nombre').textContent,
    email: document.getElementById('r-email').textContent,
    personas: document.getElementById('r-personas').textContent,
    fechas: document.getElementById('r-fechas').textContent,
    total: document.getElementById('r-total').textContent
  };
  localStorage.setItem('spacereserve_booking', JSON.stringify(data));
  window.location.href = 'confirmacion.html?ref=' + ref;
}

const params = new URLSearchParams(window.location.search);
const svc = params.get('servicio');
if (svc) {
  const labels = document.querySelectorAll('#step-1 label');
  const map = { 'habitacion-doble': 'Habitación Doble', 'suite-ejecutiva': 'Suite Ejecutiva', 'mesa-4': 'Mesa para 4 personas', 'consulta-odontologica': 'Consulta Odontológica' };
  const match = map[svc];
  if (match) {
    labels.forEach(l => { const inp = l.querySelector('input'); if (inp.value === match) { inp.checked = true; l.classList.add('border-primary-500', 'bg-primary-50'); selectedService = match; } });
  }
}
