// =========================================
//  BASTEN GAMING - GOLDHEN LOADER (FINAL)
//  Compatible: FW 5.05 – 11.00 (PsFree / Mira / HEN)
//  Auto-load GoldHEN dari root GitHub Pages
//  © 2025 Basten Gaming
// =========================================

// Fungsi utama load payload
function loadGoldhen(customPath) {
    // Default path (root repo GitHub Pages)
    var payloadPath = customPath || "/goldhen.bin";

    alert("Memuat GoldHEN 2.4b18.6...\nMohon tunggu 2–3 detik.");

    fetch(payloadPath, { cache: "no-store" })
        .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP " + response.status);
            }
            return response.arrayBuffer();
        })
        .then(function (buffer) {
            // Convert ke uint8 array
            var payload = new Uint8Array(buffer);

            // Kirim ke PS4 exploit sender / binloader
            sendPayloadToPS4(payload);

            alert("Payload GoldHEN terkirim!\nTunggu PS4 menampilkan notifikasi.");
        })
        .catch(function (err) {
            alert("Gagal memuat GoldHEN: " + err.message);
        });
}

// --------------------------------------------------
//  Fungsi pengirim payload ke BINLOADER PS4
//  (PS4 listening di port 9020 untuk binpayload)
// --------------------------------------------------
function sendPayloadToPS4(payload) {
    var ip = prompt("Masukkan IP PS4 (contoh: 192.168.1.20)", "");

    if (!ip) {
        alert("IP PS4 tidak valid.");
        return;
    }

    var url = "http://" + ip + ":9020";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.onerror = function () {
        alert("Koneksi ke PS4 gagal. Pastikan BINLOADER aktif.");
    };
    xhr.onload = function () {
        alert("GoldHEN berhasil dikirim!\nPS4 akan memproses payload.");
    };

    xhr.send(payload);
}

// ------------------------------------------
//  Placeholder untu tombol lain (FTP, Cheats)
// ------------------------------------------
function fake(name) {
    alert("Fitur '" + name + "' belum diisi payloadnya.\n© Basten Gaming");
}
