const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        const isAlreadyHighlighted = card.classList.contains('is-highlighted');
        
        cards.forEach(c => c.classList.remove('is-highlighted'));
        
        if (!isAlreadyHighlighted) {
            card.classList.add('is-highlighted');
        }
    });
});