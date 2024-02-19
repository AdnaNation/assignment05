const seats = document.querySelectorAll('.chair');
let selctedSeatCount = 0;
let seatLeft = 40;
let seatCount = 1;
let totalPrice = 0;



for(const seat of seats){
    seat.addEventListener('click', function(e){

        
        // seat.classList.add('bg-primaryColor');
        seat.style.backgroundColor = '#1DD100';
        seat.style.color ='white';
        seat.setAttribute('disabled', true);
       
        selctedSeatCount = selctedSeatCount + 1;
        seatLeft -=1;

        if(selctedSeatCount === 4){
            for(const button of seats){
                button.setAttribute('disabled', true);
            }
        }
        
        const seatName = e.target.innerText;
        const className = 'Economy'
        const price = parseFloat(document.getElementById('seat-price').innerText);

        const calculatorContainer = document.getElementById('price-calcultor-container');
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText =seatCount + '. ' + seatName;
        const p2 = document.createElement('p');
        p2.innerText = className;
        const p3 = document.createElement('p');
        p3.innerText = parseFloat(price);
        
        li.appendChild(p)
        seatCount += 1;
        li.appendChild(p2)
        li.appendChild(p3)

        calculatorContainer.appendChild(li);
        
        setInnerText('seat-selected', selctedSeatCount);      
        setInnerText('seat-left', seatLeft)
        
        // calculate totalprice
        totalPrice += price;
        setInnerText('total-price', totalPrice);

        const grandElement = document.getElementById('grand-total');
        setInnerText('grand-total', totalPrice);
    } );
  
}

const discountBtn = document.getElementById('discount-apply');
discountBtn.addEventListener('click', function(){
   

    const couponCode = document.getElementById('coupon-code').value;
    if(selctedSeatCount === 4){
        if(couponCode === 'NEW15'){
            const discountElement = document.getElementById('grand-total');
            const discountPrice = totalPrice * 0.2
            discountElement.innerText = totalPrice - discountPrice;
            document.getElementById('discount-apply').disabled = true;
            document.getElementById('coupon-code').value = ' ';
        }
        else if(couponCode === 'Couple 20'){
            const discountElement = document.getElementById('grand-total');
            const discountPrice = totalPrice * 0.15
            discountElement.innerText = totalPrice - discountPrice;
            document.getElementById('discount-apply').disabled = true;
            document.getElementById('coupon-code').value = ' ';
        }

        else{
            alert('Invalid Coupon');
            document.getElementById('coupon-code').value = ' ';
        }

    }
    else{
        alert("You have to select 4 seat for discount")
    }
   
});

// passenger input
const nextButton = document.getElementById('next-btn');
nextButton.addEventListener('click', function(e){
    const passengerName = document.getElementById('passenger-name').value;
    const passengerNumber = parseInt(document.getElementById('passenger-number').value);

    const passengerEmail = document.getElementById('passenger-email').value;
    if(typeof passengerName === "string" && isNaN(passengerName) && typeof passengerNumber === "number" && !isNaN(passengerNumber)){
        hideElementById('main-body');
        showElementById ('modal')
    }
    else{
        alert('Please type atleast Name and Phone Number correctly ')
    }
})

// // last page to first page
// const continueBtn = document.getElementById('continue-btn');
// continueBtn.addEventListener('click', function(){
//     hideElementById('modal');
//     showElementById ('main-body') 
// })