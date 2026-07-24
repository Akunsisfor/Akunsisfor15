// =======================================================
// PENGATURAN TOKO — edit nomor WhatsApp di sini saja
// =======================================================
const NOMOR_WHATSAPP = "6285811451344"; // format internasional tanpa tanda + (62 = Indonesia)

// Membuka WhatsApp dengan pesan otomatis untuk sebuah produk
function pesanViaWhatsApp(namaProduk, harga) {
  const pesan = `Halo Damar Busana, saya ingin memesan produk berikut:%0A%0A` +
                `*Produk:* ${namaProduk}%0A` +
                `*Harga:* ${harga}%0A%0A` +
                `Apakah produk ini masih tersedia?`;
  const url = `https://wa.me/${NOMOR_WHATSAPP}?text=${pesan}`;
  window.open(url, "_blank");
}

// Membuka WhatsApp dengan pesan umum (dipakai di halaman Hubungi Kami)
function hubungiWhatsApp() {
  const pesan = `Halo Damar Busana, saya ingin bertanya lebih lanjut mengenai produk Anda.`;
  const url = `https://wa.me/${NOMOR_WHATSAPP}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
}

// Form cepat di halaman kontak -> dikirim langsung ke WhatsApp
function kirimFormWhatsApp(event) {
  event.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const pesanIsi = document.getElementById("pesan").value.trim();

  if (!nama || !pesanIsi) {
    alert("Mohon isi nama dan pesan terlebih dahulu.");
    return;
  }

  const pesan = `Halo Damar Busana, perkenalkan saya *${nama}*.%0A%0A${encodeURIComponent(pesanIsi)}`;
  const url = `https://wa.me/${NOMOR_WHATSAPP}?text=${pesan}`;
  window.open(url, "_blank");
}
