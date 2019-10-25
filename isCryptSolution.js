// ++++++++ Description

/*

A cryptarithm is a mathematical puzzle for which the goal is to find the correspondence between letters and digits,
 such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits.

You have an array of strings crypt, the cryptarithm, and an an array containing the mapping of letters and digits,
 solution. The array crypt will contain three non-empty strings that follow the structure: [word1, word2, word3],
  which should be interpreted as the word1 + word2 = word3 cryptarithm.

If crypt, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in
 solution, becomes a valid arithmetic equation containing no numbers with leading zeroes, the answer is true.
  If it does not become a valid arithmetic solution, the answer is false.

Note that number 0 doesn't contain leading zeroes (while for example 00 or 0123 do).

Example

For crypt = ["SEND", "MORE", "MONEY"] and

solution = [['O', '0'],
            ['M', '1'],
            ['Y', '2'],
            ['E', '5'],
            ['N', '6'],
            ['D', '7'],
            ['R', '8'],
            ['S', '9']]
the output should be
isCryptSolution(crypt, solution) = true.

When you decrypt "SEND", "MORE", and "MONEY" using the mapping given in crypt, you get 9567 + 1085 = 10652 which is
 correct and a valid arithmetic equation.

For crypt = ["TEN", "TWO", "ONE"] and

solution = [['O', '1'],
            ['T', '0'],
            ['W', '9'],
            ['E', '5'],
            ['N', '4']]
the output should be
isCryptSolution(crypt, solution) = false.

Even though 054 + 091 = 145, 054 and 091 both contain leading zeroes, 
meaning that this is not a valid solution.


Input/Output

[execution time limit] 4 seconds (js)

[input] array.string crypt

An array of three non-empty strings containing only uppercase English letters.

Guaranteed constraints:
crypt.length = 3,
1 ≤ crypt[i].length ≤ 14.

[input] array.array.char solution

An array consisting of pairs of characters that represent the correspondence between letters and numbers in
 the cryptarithm. The first character in the pair is an uppercase English letter, and the second one is a digit
  in the range from 0 to 9.

It is guaranteed that solution only contains entries for the letters present in crypt and that different 
letters have different values.

Guaranteed constraints:
solution[i].length = 2,
'A' ≤ solution[i][0] ≤ 'Z',
'0' ≤ solution[i][1] ≤ '9',
solution[i][0] ≠ solution[j][0], i ≠ j,
solution[i][1] ≠ solution[j][1], i ≠ j.

[output] boolean

Return true if the solution represents the correct solution to the cryptarithm crypt, otherwise return false.

*/

// SOLUTION

function isCryptSolution(c, s) {

    var crypt= {};

    for(var j=0;j<s.length;j++){
        crypt[s[j][0]] = s[j][1];
    }
       var n1 = "";
        var n2=""; 
        var n3="";

       for(var m=0;m<c[0].length;m++){
           n1+= crypt[c[0][m]];
       }
       
       for(var n=0;n<c[1].length;n++){
           n2+= crypt[c[1][n]];
       }
       
       for(var i=0;i<c[2].length;i++){
           n3+= crypt[c[2][i]];
       }
       
       if((n1[0]=="0" && n1[1])||(n2[0]=="0" && n2[1])
          ||(n3[0]=="0" && n3[1])){return false;}
       n1=parseInt(n1);
       n2=parseInt(n2);
       n3=parseInt(n3);
       
       return ((n1+n2)===n3) ? true: false;
       
   }

   //END