function switchPerfilTab(tab) {
  document.getElementById('tab-activas').classList.toggle('hidden', tab !== 'activas');
  document.getElementById('tab-historial').classList.toggle('hidden', tab !== 'historial');
  document.querySelectorAll('.bg-slate-100.rounded-xl.p-1 button').forEach((btn, i) => {
    const isActive = (tab === 'activas' && i === 0) || (tab === 'historial' && i === 1);
    btn.className = isActive ? 'flex-1 py-2.5 rounded-lg bg-white text-slate-900 shadow-sm' : 'flex-1 py-2.5 rounded-lg text-slate-500';
  });
}
