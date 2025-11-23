// =========================================
//  BASTEN GAMING - GOLDHEN LOADER (FINAL)
//  Stabil untuk Firmware 5.05 - 11.00
//  Payload utama: ../payloads/goldhen.bin
// =========================================

async function loadGoldhen(relUrl) {
    try {
        const payloadPath = relUrl || "../payloads/goldhen.bin"; // lokasi payload

        // Fetch binary payload
        const response = await fetch(payloadPath, { cache: "no-store" });
        if (!response.ok) {
            alert("Gagal memuat payload GoldHEN: " + response.status);
            return;
        }

        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);

        // Delay sedikit supaya PS4 browser siap
        setTimeout(() => {
            window.location.href = blobUrl;
        }, 300);

        // Notifikasi sukses (sesuai pilihan kamu)
        alert("GoldHEN 2.4b18.6 sedang dijalankan...\n© Basten Gaming");

    } catch (error) {
        alert("Loader Error: " + error);
        console.error("Loader Error:", error);
    }
}
