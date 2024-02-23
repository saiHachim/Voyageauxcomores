document.addEventListener("DOMContentLoaded", function() {
    const destinationLinks = document.querySelectorAll("#destinations a");
    destinationLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const destinationURL = this.getAttribute("href");
            if (destinationURL) {
                const newWindow = window.open(destinationURL, "_blank");
                if (!newWindow || newWindow.closed || typeof newWindow.closed=='undefined') {
                    alert("La nouvelle fenêtre a été bloquée par le navigateur. Veuillez autoriser les pop-ups pour ce site.");
                }
            } else {
                console.error("Lien invalide.");
            }
        });
    });
});
