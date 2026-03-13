function isfreezing (temp){
    if (temp <=0){
        return "freezing temperature";
    }else{
        return "not freezing";
    }
}
console.log(isfreezing(-2));