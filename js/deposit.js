//step-1
document.getElementById('btn-deposit').addEventListener('click', function () {
    ///step-2
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;

    //step-3
    //for non input
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;

})