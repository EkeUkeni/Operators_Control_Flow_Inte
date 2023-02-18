NO.1
OPERATORS                   SYMBOLS
Arithmetic Operators        (+, _, /, *, %, **,) 
Assignment Operators       (=)
Comparison Operators        (>, <, >=, <=, , !=, !==, ==, ===)
Logical Operators           (&&, ||, !)
Bitwise Operators           (~, &, |, ^, <<, >>, >>>)


NO.2
EXAMPLES
ARITHMETIC OPERATOR
EX1: console.log(2 + 3);        //ANS: 5
Ex2: console.log(5%2);          //ANS: 1

ASSIGNMENT OPERATORS
EX1: let color = 'Blue';         console.log(color);            //ANS: Blue
Ex2: let firstName = 'Lucian';   console.log(firstName);         //ANS: Lucian

COMPARISON OPERATORS
EX1:  console.log(1 == "1");        //ANS: True
EX1:  console.log(1 === "1");        //ANS: False
        

LOGICAL OPERATORS
EX1: if (5 > 3 && 2 < 6){console.log(True); }               //ANS: True
EX1: if (5 >= 3 || 2 <= 1){console.log(True); }             //ANS:True                                                          

BITWISH OPERATORS
Ex1: ~1 => 2                          (i.e ~1 = -(1 + 1) => 2 )
Ex1: ~-1 => 0                         (i.e ~ -1 = -(-1 + 1) => 0 )


NO.4
for (let i =1; i < 20; i += 7){
    console.log(i);
}

Result:
1, 8, 15