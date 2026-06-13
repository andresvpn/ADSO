function filterTable() {
  const q = document.getElementById('search-input').value.toLowerCase();
  const s = document.getElementById('status-filter').value;
  let visible = 0;
  document.querySelectorAll('#table-body tr').forEach(row => {
    const text = row.textContent.toLowerCase();
    const status = row.dataset.status;
    const matchSearch = !q || text.includes(q);
    const matchStatus = s === 'all' || status === s;
    const show = matchSearch && matchStatus;
    row.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  document.getElementById('row-count').textContent = visible + ' registro' + (visible !== 1 ? 's' : '');
}

function openModal(ref, client, service, dates, status, email) {
  document.getElementById('modal-ref').textContent = ref;
  document.getElementById('modal-client').textContent = client;
  document.getElementById('modal-email').textContent = email;
  document.getElementById('modal-service').textContent = service;
  document.getElementById('modal-dates').textContent = dates;
  const statusEl = document.getElementById('modal-status');
  const colors = { 'Activa': 'bg-emerald-100 text-emerald-700', 'Pendiente': 'bg-amber-100 text-amber-700', 'Cancelada': 'bg-red-100 text-red-700' };
  statusEl.innerHTML = `<span class="inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${colors[status] || 'bg-slate-100 text-slate-700'}">${status}</span>`;
  document.getElementById('detail-modal').classList.remove('hidden');
}
