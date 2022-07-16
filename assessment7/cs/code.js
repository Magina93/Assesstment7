// Runtime complexity o(n^2)

function writeCode(arr) {

    for (let i=0; i<arr.length; i++) {
        for (let k=0; k<arr.length; k++){
          if (i !== k && arr[i]-arr[k] ===0) {
            return true
          }
        }
         }


    return false
}
console.log(writeCode([0,1,2,3,4,5]))
console.log(writeCode([0,1,2,2,4,2]))


// 2 Runtime complexity o(n)
function hasUniqueChars(arr) {
    let uniqueChars = new Set([])
    for (let i = 0; i < arr.length; i++) {
      uniqueChars.add(arr[i])
    }
    return uniqueChars.size === arr.length
  }
  
  console.log(hasUniqueChars('Moonday'))
  console.log(hasUniqueChars('Monday'))


// 3 runtime complexity o(n)
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


  

// 4 runtime complexity o(n)
  function longestWord(arr) {
  let longestWordLength=0
  for (let i=0; i<arr.length; i++){
    if(arr[i].length>longestWordLength) {
      longestWordLength=arr[i].length
    }
  }
  return longestWordLength
}
console.log(longestWord(["Hi" ,"hello"]))