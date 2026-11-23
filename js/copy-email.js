const copyBtn = document.getElementById('copy-email-btn');
const emailText = document.getElementById('email-text');

if (copyBtn && emailText) {
    copyBtn.addEventListener('click', async () => {
        await navigator.clipboard.writeText(emailText.textContent.trim());
        copyBtn.textContent = 'Copié';
        setTimeout(() => {
            copyBtn.textContent = 'Copier';
        }, 2000);
    });
}