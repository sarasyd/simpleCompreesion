function compress(inputValue) {

    console.log("Processing " + inputValue);

    let i = 0;
    let count = 1;
    let output = '';
    let currentLetter = inputValue[0];

    i = 1;
    while (i <= inputValue.length) {
        if (inputValue[i] != currentLetter) {
            output += currentLetter;

            if (count != 1) {
                output += count;
            }

            count = 1;
            currentLetter = inputValue[i];
        } else {
            count++;
        }

        i++;
    }

    return output;
}

var testCases = [
    { case: "abcd", expect: "abcd" },
    {  case: "aaabbcd", expect:  "a3b2cd" },
    {  case: "abbbcccdddefg", expect:  "ab3c3d3efg" },
    {  case: "abbcddefffd", expect:  "ab2cd2ef3d" },
    {  case: "a", expect:  "a" },
    {  case: "aa", expect:  "a2" },
    {  case: "ab", expect:  "ab" }
];

testCases.forEach(element => {
    let output = compress(element.case);
    console.log(output + " " + (output == element.expect ? "PASS" : "FAIL") );
});
