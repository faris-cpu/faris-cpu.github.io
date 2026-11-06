// Image Slider JS Functionality
function moveSlide(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;
         
    const slides = slider.getElementsByClassName('slider-slide');
    let activeIndex = 0;
         
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('active')) {
            activeIndex = i;
            slides[i].classList.remove('active');
            break;
        }
    }
         
    let newIndex = activeIndex + direction;
    if (newIndex >= slides.length) newIndex = 0;
    if (newIndex < 0) newIndex = slides.length - 1;
         
    slides[newIndex].classList.add('active');
}

// Booking Form Submission Handler
function handleBooking(event) {
    event.preventDefault();
    
    const option = document.getElementById('optionSelect') ? document.getElementById('optionSelect').value : 'Deluxe Villa';
    const nama = document.getElementById('namaInput') ? document.getElementById('namaInput').value : '';
    const phone = document.getElementById('phoneInput') ? document.getElementById('phoneInput').value : '';
    const checkin = document.getElementById('checkinInput') ? document.getElementById('checkinInput').value : '';
    const checkout = document.getElementById('checkoutInput') ? document.getElementById('checkoutInput').value : '';

    const text = `Salam, saya hendak buat tempahan Halaman Sawah Retreat Desaru:%0A%0A- *Pilihan:* ${encodeURIComponent(option)}%0A- *Nama:* ${encodeURIComponent(nama)}%0A- *Telefon:* ${encodeURIComponent(phone)}%0A- *Check-In:* ${checkin}%0A- *Check-Out:* ${checkout}`;
    
    alert('Terima kasih! Maklumat tempahan anda telah diproses. Sistem akan mengalihkan anda terus ke WhatsApp pengurusan homestay.');
    window.open(`https://wa.me/60123456789?text=${text}`, '_blank');
}