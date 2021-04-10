// Words


// You are making a text encryptor. It should take multiple words and output a combined version, where each word is separated by a dollar sign $.
// For example, for the words "hello", "how", "are", "you", the output should be "$hello$how$are$you$".
// The given code declares a class named Add, with a constructor that takes one rest parameter.
// Complete the code by adding a print() method to the class, which should generate the requested output.
// Note, that the dollar sign is placed at the beginning and at the end of the output.


class Add {
    constructor(...words) {
        this.words = words;
    }
    print(){
        var y ="";
        for (x of this.words) {
          if(x == ","){
            x = "";
          }
          else{
            y += "$" + x;
          }
        }

        y = y + "$";
        console.log(y);
    }
}  
var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");

x.print();
y.print();
z.print();