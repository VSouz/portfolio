function enviarEmail() {
    const email = "souzavincius1999@gmail.com";
    const assunto = "Freelancer";
    const corpo = "Olá, gostaria de seus serviços como freelancer";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

    window.location.href = mailtoLink;
}

function enviarWhatsApp() {
    const numero = "5585999213944";
    const mensagem = "Olá, gostaria de falar com você!";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}