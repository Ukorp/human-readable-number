module.exports = function toReadable (number) {
    let answer = "";
    const array_digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const array_decades = ["empty", "empty", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const array_elevens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const size = number.toString().length;
    switch (size)
    {
        case 1:
            answer = array_digits[number];
            break;
        case 2:
            if (number >= 20)
            {
                answer += array_decades[Math.floor(number / 10)];
                if (number % 10 != 0){
                    answer += " " + array_digits[number % 10];
                }
            }
            else
            {
                answer += array_elevens[number % 10];
            }
            break;
        case 3:
            answer += array_digits[Math.floor(number / 100)] + " hundred";
            number = number % 100;
            switch(number.toString().length){
                case 1:
                    if (number != 0)
                        answer += " " + array_digits[number];
                    break;
                case 2:
                    if (number >= 20)
                    {
                        answer += " " + array_decades[Math.floor(number / 10)];
                        if (number % 10 != 0){
                            answer += " " + array_digits[number % 10];
                        }
                    }
                    else
                    {
                        answer += " " + array_elevens[number % 10];
                    }
                    break
            }
            break;

        default:
            return "bad";


    }
    return answer;
}
