document.addEventListener('DOMContentLoaded', () => {
    const memberBtn = document.getElementById('memberBtn');
    const memberSection = document.getElementById('Member');
    const viewLog = document.getElementById('Login');
    const is_Login = false;

    if (is_Login) {
        viewLog.textContent = 'Logout';
    } console.log(is_Login);

    memberBtn.addEventListener('click', () => {
        memberSection.scrollIntoView({ behavior: 'smooth' });
    });
});