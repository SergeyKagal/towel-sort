
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var arr=matrix;

  if(!arr) return [];
   
   var str=[];
   
   for (var i=0;i<arr.length;i++){
       if(i%2!=0)arr[i].reverse();
   }
   var stack=[];

for(var i=0;i<arr.length;i++)
for(var j=0;j<arr[i].length;j++) stack.push(arr[i][j]);
   
   


   
  return stack;
}
