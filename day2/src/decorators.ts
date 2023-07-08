
let AddPower= function(Power:number){
return function(targetClass:any){
    return class{
        title:string=new targetClass().title;
        power:number=Power;
    }
}
}

@AddPower(7)
class CommonMan{
    title:string="Bruce";
}
console.log(new CommonMan().power);