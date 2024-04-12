function splice1(array, start, deleteCount, item1, item2){
    var removed = []
    for(var i = start; i > array.length + arguments.length - 3; i--){
      console.log(array[i])
      argument = arguments[array.length--]
      array[i] = arguments[argument.length - 3]
    }
    
    //for(var i = start; i <= arguments.length - 3; i++){
      
    //  array[i] = arguments[i + 2]
      
   // }
    //array[start] = arguments[3]//item1
    //array[start + 1] = arguments[4]//item2
    
    return removed
  }
  var months = ['Jan', 'March', 'April', 'June'];
  var removed = splice1(months, 1, 0, 'Feb', '3','4');
  console.log(removed); // []
  console.log(months);
  