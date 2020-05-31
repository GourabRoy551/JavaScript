function remove_character(str, char_pos)
{
    part1 = str.substring(0,char_pos);
    part2 = str.substring(char_pos+1,str.length);
    return (part1+part2);
}

console.log(remove_character("Python",0));



//JavaScript program to create a new string from a given 
//string changing the position of first and last characters.
function first_last(str1)
{
    if(str1.length <= 1)
    {
        return str1;
    }
    else
    {
        mid_char = str1.substring(1,str1.length -1)
        return(str1.charAt(str1.length-1) + mid_char + str1.charAt(0));
    }
}

console.log(first_last('abc'));

// JavaScript program to create a new
//  string from a given string changing the position of first and last characters.

function front_back(str)
{
    frist = str.substring(0,1);
    return frist+str+frist;
}

console.log(front_back('abc'));

//  string taking the last 3 characters and added at both the front and back

function front_back3(str)
{
    if(str.length >= 3)
    {
        //str_len = 3;
        back = str.substring(str.length-3);
        return back+str+back;
    }
    else 
        return false;
}
console.log(front_back3('abcefg'));


//JavaScript program to check whether a string “Script” presents at 5th (index 4) position in a given string
function check_script(str)
{
    if(str.length<6)
        return str;
    
    let result_str = str;
    if(str.substring(10,4) == 'Script')
    {
        result_str = str.substring(0,4) + str.substring(10,str.length);
        // console.log(str.substring(10,str.length));
    }
    return result_str;
}

console.log(check_script("JavaScript"));
console.log(check_script("CoffeeScript"));
