// DOM
const title = document.querySelector('h3')
const subTitle = document.querySelector('p')
const cardOne = document.querySelector('.card-one')
const cardTwo = document.querySelector('.card-two')
const cardThree = document.querySelector('.card-three')

const send = document.getElementById('send')
const receive = document.getElementById('receive')
const help = document.getElementById('help')

send.addEventListener('click', () => {
  location = 'transfert.html'
})
receive.addEventListener('click', () => {
  showModalCancel('La plateforme est en cours de dévéloppement. Vueillez réesayer plus tard !')
  // location = 'receive.html'
})
help.addEventListener('click', () => {
  showModalCancel('La plateforme est en cours de dévéloppement. Vueillez réesayer plus tard !')
  // location = 'help.html'
})

// Set Error
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
            <button class="btn btn-primary" data-bs-dismiss="modal">OK</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.append(modalWrap);
  const modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
  modal.show();
}

const sr = ScrollReveal({
  distance: '70px',
  duration: 2000,
})

sr.reveal(title, { origin: 'top', delay: 300 })
sr.reveal(subTitle, { origin: 'bottom', delay: 400 })
sr.reveal(cardOne, { origin: 'left', delay: 600 })
sr.reveal(cardTwo, { origin: 'bottom', delay: 600 })
sr.reveal(cardThree, { origin: 'top', delay: 600 })