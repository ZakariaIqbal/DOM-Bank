document.getElementById('btn-deposit').addEventListener('click',function(){
    //for Deposit
    let depositfield = document.getElementById("field-deposit")
    let depositElement  = document.getElementById("total-deposit")
    
    let depositAmount = depositfield.value
    let previousDepoTotal = depositElement.innerText

    const valueDepoAmount = parseFloat(depositAmount)
    const valueDepoTotal  = parseFloat(previousDepoTotal)

    const newDepoAmount = valueDepoAmount + valueDepoTotal

    depositElement.innerText = newDepoAmount     
    

    //For Balance 
    let previousBalaTotal = document.getElementById("total-balance")
    
    let balanceAmount = previousBalaTotal.innerText
    
    const valueBalaAmount = parseFloat(balanceAmount)
    
    const newBalaAmount = valueDepoAmount + valueBalaAmount 

    previousBalaTotal.innerText = newBalaAmount

    depositfield.value =''

})


document.getElementById('btn-withdraw').addEventListener('click',function(){

    //for withdraw

    const withdrawField = document.getElementById("field-withdraw")
    const withdrawElement = document.getElementById("total-withdraw")

    const withdrawAmount = withdrawField.value
    const previousWithTotal = withdrawElement.innerText
    
    const valueWithAmount = parseFloat(withdrawAmount)
    const valueWithtotal = parseFloat(previousWithTotal)

    const newWithdraw = valueWithAmount+valueWithtotal

    withdrawElement.innerText =newWithdraw 


    //for balance 

    let previousBalaTotal = document.getElementById("total-balance")
    
    let balanceAmount = previousBalaTotal.innerText
    
    const valueBalaAmount = parseFloat(balanceAmount)
    
    const newBalaAmount = valueBalaAmount 

    previousBalaTotal.innerText = newBalaAmount - valueWithAmount

    withdrawField.value =""

})