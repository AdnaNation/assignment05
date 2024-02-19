const seats = document.querySelectorAll('.chair');
let selctedSeatCount = 0;
let seatLeft = 40;
let seatCount = 1;
let totalPrice = 0;
for(const seat of seats){
    seat.addEventListener('click', function(e){
        seat.classList.add('bg-primaryColor')

        selctedSeatCount = selctedSeatCount + 1;
        seatLeft -=1;
      
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
        console.log(totalPrice)
        setInnerText('total-price', totalPrice);


      

    } );
        
    

}
