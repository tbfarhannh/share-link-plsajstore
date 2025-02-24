// Share Link Items
function shareLink(event, icon) {
    event.preventDefault(); 

    const link = icon.closest("a").href; 
    
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: "Cek link ini!",
            url: link
        }).catch(err => console.log("Gagal berbagi:", err));
    } else {
        alert("Browser tidak mendukung fitur berbagi otomatis.");
    }
}

// Share lInk Website
function shareWebsite() {
    const siteUrl = window.location.href; 
    const siteTitle = document.title; 

    if (navigator.share) {
        navigator.share({
            title: siteTitle,
            text: "Cek website PLSAJSTORE!",
            url: siteUrl
        }).catch(err => console.log("Gagal berbagi:", err));
    } else {
        navigator.clipboard.writeText(siteUrl).then(() => {
            alert("Link sudah disalin! Bagikan ke teman-temanmu.");
        }).catch(err => console.log("Gagal menyalin link:", err));
    }
}