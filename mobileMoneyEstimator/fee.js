// mobileMoneyEstimator
function estimateTransactionFee() {
    // Prompt user for amount to send
    const amountToSend = parseFloat(prompt("Unatuma Ngapi? (KES):"));
    
    // Calculate fee with min/max constraints
    const calculatedFee = amountToSend * 0.015;
    let transactionFee;
    
    if (calculatedFee < 10) {
        transactionFee = 10; // Minimum fee
        } else {
            transactionFee = calculatedFee;
        }
    
        //  display or return the fee
        alert(`Transaction fee: KES ${transactionFee.toFixed(2)}`);
        // return transactionFee;
    }