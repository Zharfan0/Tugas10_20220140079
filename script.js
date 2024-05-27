function kirimData() {
    // Get form values
    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const peminatan = document.querySelector('input[name="peminatan"]:checked').value;
    const angkatan = document.getElementById('angkatan').value;
    const tanggal = document.getElementById('tanggal').value;
    const alamat = document.getElementById('alamat').value;

    // Set result values
    document.getElementById('result-nama').innerText = nama;
    document.getElementById('result-nim').innerText = nim;
    document.getElementById('result-peminatan').innerText = peminatan;
    document.getElementById('result-angkatan').innerText = angkatan;
    document.getElementById('result-tanggal').innerText = tanggal;
    document.getElementById('result-alamat').innerText = alamat;

    // Show result wrapper
    document.querySelector('.result-wrapper').style.display = 'block';

    // Scroll to bottom
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}
