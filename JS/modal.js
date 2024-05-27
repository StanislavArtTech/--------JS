const buttons = document.getElementsByClassName('btn-primary');
for (let a of buttons) {
    a.addEventListener('click', openModal);
}
const modalContainer = document.getElementById('modal-container');
modalContainer.addEventListener('click', closeModal);


function openModal() {
    const classes = modalContainer.classList.add('active');
}

function closeModal(event){
    if (event.target.id == 'modal-container') {
        if(!modalContainer.classList.contains('active')) return;
        modalContainer.classList.remove('active');
    }
}