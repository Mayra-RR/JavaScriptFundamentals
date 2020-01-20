
let consumedMB = 0;

//while( consumedMB > 2.5){ 
//   checkingIsNecessary(consumedMB)
//   --consumedMB;
//}
//checkingIsNecessary(consumedMB);

do {
   checkingIsNecessary(consumedMB)
   consumedMB --;
} while (consumedMB > 2.5)

function checkingIsNecessary( traffic ) {
   console.log("Checking traffic", traffic);
   if( traffic > 2.5){ 
      console.log("here is some traffic")
   }
   else {
      console.log("You can stop checking traffic")
   }
}