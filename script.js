// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

START
FUNCTION named "Split the nota" ACCEPTS totalSum, numberOfPeople and tipPercentage
RETURN totalSum + (totalSum * tipPercentage) / numberOfPeople
ENDFUNCTION "Split the nota"

SET totalSum to INPUT from the user
SET numberOfPeople to INPUT from the user
SET tipPercentage to INPUT from the user

WHILE true
    IF totalSum is float and totalSum > 0
        BREAK
    PRINT "Total sum must be greater than 0"
    totalSum to INPUT from the user
END WHILE

WHILE true
    IF numberOFPeople is int and numberOFPeople >= 1
        BREAK
    PRINT "Number of People must be at least 1"
    numberOfPeople to INPUT from the user
END WHILE

WHILE true
    IF tipPercentage is float and tipPercentage >= 0 and tipPercentage <= 1
        BREAK
    PRINT "Tip must be written in decimals and between 0 and 1"
    tipPercentage to INPUT from the user
END WHILE

SET sumPerPerson to call function named "Split the nota" with totalSum, numberOfPeople and tipPercentage
PRINT "Sum per person is: $sumPerPerson" 

END
*/
