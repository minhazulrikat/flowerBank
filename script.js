let balance = 0;

const balanceDisplay = document.getElementById('balance');
const amountInput = document.getElementById('amount');
const cashInButton = document.getElementById('cashInButton');
const withdrawButton = document.getElementById('withdrawButton');
const messageDisplay = document.getElementById('message');

function updateBalanceDisplay() {
    balanceDisplay.textContent = balance.toFixed(2);
}

function showMessage(message) {
    messageDisplay.textContent = message;
    setTimeout(() => {
        messageDisplay.textContent = '';
    }, 3000);
}

cashInButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        showMessage('Please enter a valid amount to cash in.');
        return;
    }
    balance += amount;
    updateBalanceDisplay();
    showMessage(`Cashed in: $${amount.toFixed(2)}`);
    amountInput.value = '';
});

withdrawButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        showMessage('Please enter a valid amount to withdraw.');
        return;
    }
    if (amount > balance) {
        showMessage('Insufficient funds for withdrawal.');
        return;
    }
    balance -= amount;
    updateBalanceDisplay();
    showMessage(`Withdrew: $${amount.toFixed(2)}`);
    amountInput.value = '';
});
