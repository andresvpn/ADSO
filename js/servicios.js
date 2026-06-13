function filterServices(category) {
  document.querySelectorAll('.service-card').forEach(card => {
    card.style.display = (category === 'all' || card.dataset.category === category) ? 'block' : 'none';
  });
  document.querySelectorAll('#filters button').forEach(btn => {
    const isActive = btn.textContent.trim().toLowerCase() === category || (category === 'all' && btn.textContent.trim() === 'Todos');
    btn.className = isActive
      ? 'px-4 py-2 rounded-xl text-sm font-semibold bg-primary-600 text-white shadow-sm'
      : 'px-4 py-2 rounded-xl text-sm font-medium bg-white text-slate-600 border border-slate-200 hover:border-slate-300 transition';
  });
}
