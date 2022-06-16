// DOM element
const send = document.getElementById('send')
const load = document.getElementById('load')
const cancel = document.querySelectorAll('#cancel')

// Loading animation
onload = () => {
  setTimeout(() => {
    load.style.display = 'none'
  }, 4000)
}

// Remove all and Return to the home page
cancel.forEach(el => el.addEventListener('click', () => {
  showModalCancel('Voulez vous vraiment annuler et revenir à la page d\'accueil ?')
}))


let modalWrap = null;
const showModalCancel = (message) => {
  if (modalWrap !== null) {
    modalWrap.remove();
  }

  modalWrap = document.createElement('div');
  modalWrap.innerHTML = `
    <div class="modal  fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <h6>${message}</h6>
          </div>
          <div class="modal-footer">
            <a href='index.html' class="btn btn-primary restor" id='yes'>Oui</a>
            <button class="btn btn-danger" data-bs-dismiss="modal">Non</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.append(modalWrap);
  const modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
  modal.show();
}