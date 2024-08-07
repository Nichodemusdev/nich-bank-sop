document.addEventListener('DOMContentLoaded', function() {
    const statementList = document.querySelector('.statement-list');

    // Generate 20 backdated transactions
    const today = new Date();
    const transactions = [];
    const transactionCount = 20;

    for (let i = 0; i < transactionCount; i++) {
        const transactionDate = new Date(today);
        transactionDate.setDate(today.getDate() - i);
        const formattedDate = transactionDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD

        const amount = i % 2 === 0 ? 100 : -50; // Example alternating debit and credit amounts
        const transactionType = amount >= 0 ? 'credit' : 'debit';
        const recipient = transactionType === 'credit' ? 'John Doe' : 'Jane Smith';

        transactions.push({
            date: formattedDate,
            amount: amount.toFixed(2), // Ensure the amount is in currency format
            type: transactionType,
            recipient: recipient
        });
    }

    // Render transactions
    transactions.forEach(transaction => {
        const transactionItem = document.createElement('div');
        transactionItem.classList.add('statement-item', transaction.type);
        transactionItem.innerHTML = `
            <p>${transaction.date}</p>
            <p>${transaction.amount}</p>
            <p>${transaction.recipient}</p>`;
        statementList.appendChild(transactionItem);
    });
});