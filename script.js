document.getElementById('CONTRIBUTION FORM').addEventListener('submit',(e))
{e.preventDefault();
    const amount=document.getElementById('amont').value;
    const phone=document.getElementById('phone').value; 
    document.getElementById('status').textContent='processig.....';
    initiateMpesapayement(amount,phone);
};