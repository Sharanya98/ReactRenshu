// const root = ReactDOM.createRoot(document.getElementById("root"))
// const heading = React.createElement("h1",{ id : "head"},"Namaste Reactjs")
// console.log(heading)
// root.render(heading)


//functions in js

const obj = {
    a: "iam",
    b:32,
    sum : function(){
    
        console.log(this.a)
    },
    sum2 : () => {
    
        console.log(this.a)}
    
}

obj.sum()
obj.sum2()







