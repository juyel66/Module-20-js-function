// only string diye check korar upai 

function stringNum(str){
    // const size= str.length;
    // console.log(str, size);
    if( str%2===0){
        return true;
    }
    return false;
}

const tot=stringNum(50);
console.log(tot);




// array er moddhe return index ber korar niom 

function Elements(array1){
  const  length1 = array1.length;
  return length1;
}

const array_index= Elements([12,23,4,34,2,3,211,2,42,31,1,1]);
console.log(array_index);





