// Simple reveal-on-scroll using IntersectionObserver
(function(){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('visible')
    })
  }, {threshold: 0.12})
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el))

  // Basic client-side form validation for the static contact form
  const form = document.getElementById('contactForm')
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault()
      if(!form.checkValidity()){
        form.classList.add('was-validated')
        return
      }
      // Fake success toast/modal - replace with real endpoint in production
      const btn = document.createElement('div')
      btn.className = 'alert alert-success mt-3'
      btn.textContent = 'Thanks — your message is submitted (demo)'
      form.appendChild(btn)
      form.reset()
    })
  }
})();