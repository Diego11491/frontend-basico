// Simulación de login/logout
document.getElementById('btn-login')?.addEventListener('click', function(e) {
    e.preventDefault();
    alert('En un sistema real, esto abriría un modal de login');
    // window.location.href = 'dashboard.html'; // Redirigir después de login
});

document.getElementById('btn-logout')?.addEventListener('click', function(e) {
    e.preventDefault();
    if(confirm('¿Estás seguro de que quieres cerrar sesión?')) {
        window.location.href = 'index.html';
    }
});

// Simulación de pago
document.getElementById('payment-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validación simple
    const cardNumber = document.getElementById('card-number').value;
    const cardExpiry = document.getElementById('card-expiry').value;
    const cardCvc = document.getElementById('card-cvc').value;
    const cardName = document.getElementById('card-name').value;
    
    if(!cardNumber || !cardExpiry || !cardCvc || !cardName) {
        alert('Por favor completa todos los campos');
        return;
    }
    
    // Simular pago exitoso
    setTimeout(() => {
        alert('Pago simulado exitosamente! Sesión agendada.');
        window.location.href = 'dashboard.html';
    }, 1000);
});

// Cambiar pestañas de métodos de pago
const methodTabs = document.querySelectorAll('.method-tabs button');
methodTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        methodTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// Simulación de selección de horario
const timeSlots = document.querySelectorAll('.slots span.available');
timeSlots.forEach(slot => {
    slot.addEventListener('click', function() {
        timeSlots.forEach(s => s.style.opacity = '1');
        this.style.opacity = '0.7';
        alert('Horario seleccionado: ' + this.textContent);
    });
});