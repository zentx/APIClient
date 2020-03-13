var arr = [20,1,-1,6,6,6,-2,3,3,5,5,1,6,6,6,4,20,4,4,4,4,4,4-1,-2,5,5,5,5];
var num_mayor = repeatedNumber(arr);
alert(num_mayor);

function repeatedNumber(arr){
var prevcont = 1;
var mayor = arr[0];
var i;
for(i=0; i < arr.length; i++){
    var cont = 1;
    for(j=i+1; j < arr.length; j++){
        if(arr[i] === arr[j]){
            cont++;
        }
    }
    if(cont >= prevcont){
        mayor = arr[i];
        prevcont = cont;
    }
}
return mayor;
}