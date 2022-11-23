class Calc{
    constructor(int){
        this.int = int;
        return this.int;
    
    }
}
var Calc = new Calc();
document.write(Calc.c(2));
// document.onkeypress = function(event){
//     console.log('charCode: ' + event.charCode);
//     console.log('code: ' + event.code);
//     console.log('codekey: ' + event.key);
//     console.log(event);
//   }