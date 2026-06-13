(function() {
  const params = new URLSearchParams(window.location.search);
  const ref = params.get('ref');
  const stored = localStorage.getItem('spacereserve_booking');

  if (ref) document.getElementById('ref-number').textContent = ref;

  if (stored) {
    try {
      const d = JSON.parse(stored);
      if (d.ref === ref || !ref) {
        document.getElementById('d-nombre').textContent = d.nombre || '—';
        document.getElementById('d-servicio').textContent = d.servicio || '—';
        document.getElementById('d-personas').textContent = d.personas || '—';
        document.getElementById('d-fechas').textContent = d.fechas || '—';
        document.getElementById('d-total').textContent = d.total || '—';
        if (!ref) document.getElementById('ref-number').textContent = d.ref || 'SR-000';
      }
    } catch(e) {}
  }
})();
