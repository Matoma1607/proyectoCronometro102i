let [horas, minutos, segundos] = [0, 0, 0];
let temporizador = null;
let estaCorriendo = false;

// Selección de elementos por clase
const displayCronometro = document.querySelector('.cronometro-display');
const botonIniciarPausar = document.querySelector('.btn-iniciar-pausar');
const botonResetear = document.querySelector('.btn-resetear');

// Añadir eventos a los botones
botonIniciarPausar.addEventListener('click', iniciarPausar);
botonResetear.addEventListener('click', resetear);

function iniciarPausar() {
    if (estaCorriendo) {
        clearInterval(temporizador);
        botonIniciarPausar.textContent = 'Iniciar';
        botonIniciarPausar.classList.remove('btn-danger');
        botonIniciarPausar.classList.add('btn-success');
    } else {
        temporizador = setInterval(actualizarTiempo, 1000);
        botonIniciarPausar.textContent = 'Pausar';
        botonIniciarPausar.classList.remove('btn-success');
        botonIniciarPausar.classList.add('btn-danger');
    }
    estaCorriendo = !estaCorriendo;
}

function resetear() {
    clearInterval(temporizador);
    [horas, minutos, segundos] = [0, 0, 0];
    displayCronometro.textContent = '00:00:00';
    botonIniciarPausar.textContent = 'Iniciar';
    botonIniciarPausar.classList.remove('btn-danger');
    botonIniciarPausar.classList.add('btn-success');
    estaCorriendo = false;
}

function actualizarTiempo() {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
    }
    displayCronometro.textContent = `${pad(horas)}:${pad(minutos)}:${pad(segundos)}`;
}

function pad(unidad) {
    return unidad.toString().padStart(2, '0');
}
