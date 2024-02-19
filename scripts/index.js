const seats = document.querySelectorAll('.chair');
let selctedSeatCount = 0;
let seatLeft = 40;
for(const seat of seats){
    seat.addEventListener('click', function(e){
        seat.classList.add('bg-primaryColor')

        selctedSeatCount = selctedSeatCount + 1;
        setInnerText('seat-selected', selctedSeatCount);
         
        seatLeft -=1;
        setInnerText('seat-left', seatLeft)

    } );
        
    

}
