let Component=function(Config:any){

    return function(targetClass:any){
let tc= new targetClass();
        return class{
            title:string=tc.title;
            power:number=Config.power;

            selector:string=Config.selector;
template:string=Config.template

            
        }
    }

};
@Component({
power:5,
selector:"app-root",
template : `
<div>
    <h2>{{ title }}</h2>
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
    </ul>
   
</div>
`

})
class MyComp{
    title : string = "Welcome to your life";
};