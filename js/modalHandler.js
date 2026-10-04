function showModal(modal) {
    hideModal();

    const overlay = document.createElement('div');
    overlay.classList.add('modal-overlay');
    overlay.addEventListener('click', hideModal);
    document.body.appendChild(overlay);

    modal.classList.add('active');
    document.body.appendChild(modal);
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', handleModalKeydown);
}

function hideModal() {
    const modal = document.querySelector('.modal.active');
    if (modal) modal.remove();

    const overlay = document.querySelector('.modal-overlay');
    if (overlay) overlay.remove();

    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', handleModalKeydown);
}

function handleModalKeydown(event) {
    if (event.key === 'Escape') hideModal();
}