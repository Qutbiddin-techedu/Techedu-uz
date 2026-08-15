
  function openEmailModal(e){
    if(e) e.preventDefault();
    document.getElementById('emailModal').classList.add('active');
    document.body.style.overflow='hidden';
  }
  function closeEmailModal(e){
    if(e && e.target.id !== 'emailModal' && !e.target.closest('.email-modal-close')) return;
    document.getElementById('emailModal').classList.remove('active');
    document.body.style.overflow='';
  }
  function copyEmail(){
    const email='techeduuzz@gmail.com';
    const btn=document.getElementById('emailCopyBtn');
    const txt=document.getElementById('emailCopyText');
    navigator.clipboard.writeText(email).then(()=>{
      btn.classList.add('copied');
      txt.textContent='Nusxalandi!';
      const icon=btn.querySelector('i');
      icon.className='fas fa-check';
      setTimeout(()=>{
        btn.classList.remove('copied');
        txt.textContent='Nusxa olish';
        icon.className='fas fa-copy';
      },2000);
    }).catch(()=>{
      // Eski brauzerlar uchun zaxira usul
      const temp=document.createElement('textarea');
      temp.value=email;document.body.appendChild(temp);
      temp.select();document.execCommand('copy');
      document.body.removeChild(temp);
      btn.classList.add('copied');
      txt.textContent='Nusxalandi!';
      setTimeout(()=>{btn.classList.remove('copied');txt.textContent='Nusxa olish'},2000);
    });
  }
  // Escape tugmasi bilan yopish
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape') document.getElementById('emailModal').classList.remove('active'),document.body.style.overflow='';
  });
