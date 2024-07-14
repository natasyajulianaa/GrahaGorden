//ganti warna konten ke putih 
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.backgroundColor = '#053B50'; 
            card.style.color = 'white'; 
            card.querySelectorAll('.icon, .h, .line, .deskripsi').forEach(element => {
                element.style.color = 'white'; 
            });
        });

        card.addEventListener('mouseleave', () => {
            card.style.backgroundColor = '#ffffff';
            card.style.color = 'black'; 
            card.querySelectorAll('.icon, .h, .line, .deskripsi').forEach(element => {
                element.style.color = 'black'; 
            });
        });
    });

    $('.carousel').carousel({
        interval: 2000 // ganti dengan interval yang diinginkan (dalam milidetik)
    });
//zoom out
document.querySelectorAll('.card2').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('active');
    });
});

