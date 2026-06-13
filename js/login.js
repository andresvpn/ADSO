function showTab(tab) {
  document.getElementById('form-login').classList.toggle('hidden', tab !== 'login');
  document.getElementById('form-register').classList.toggle('hidden', tab !== 'register');
  document.querySelectorAll('.flex.bg-slate-100.rounded-xl.p-1 button').forEach((btn, i) => {
    const active = (tab === 'login' && i === 0) || (tab === 'register' && i === 1);
    btn.className = active ? 'flex-1 py-2.5 rounded-lg bg-white text-slate-900 shadow-sm' : 'flex-1 py-2.5 rounded-lg text-slate-500';
  });
}
