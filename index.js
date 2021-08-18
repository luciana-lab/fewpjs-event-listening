const input = document.getElementById('input');

function addingEventListener() {
    input.addEventListener('click', function(popUp) {
    alert('Dangerous! Your computer is being hacked!!');
    });
}
addingEventListener();