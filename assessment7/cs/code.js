function writeCode() {

    let arrayOfNum=[]
    let diff
    for (let i=0; i<writeCode.length; +ii) {
        diff=[]- arr[i]
        if(arrayOfNum[diff]) {
            return true

        } else {
arrayOfNum[arr[i]]=true
        }
    }


    return false
}
console.log(writeCode('[]'))

function hasUniqueChars(arr) {
    let uniqueChars = new Set([])
    for (let i = 0; i < arr.length; i++) {
      uniqueChars.add(arr[i])
    }
    return uniqueChars.size === arr.length
  }
  
  console.log(hasUniqueChars('Moonday'))
  console.log(hasUniqueChars('Monday'))



  function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }
  console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
  console.log(isPangram("I like cats, but not mice"))


  function longestWord(string) {

  }


  function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;

    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });

return word;
}
console.log(longestWord('Hi hello'))