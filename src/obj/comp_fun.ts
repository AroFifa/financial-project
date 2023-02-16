
export function getValue(obj:any,column:string) {
    var splits=column.split(".");
  
    var value:any=obj;
    splits.map((element)=>{
      // console.log(element);
      
      value=value?value[element]:null;
      
    });
    
    return value;
  
}



