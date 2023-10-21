export function Greeting(props) {
    console.log(props);
    var name= "Robert";
    return(<h1>Hello from {props.title} {props.y} </h1>);
}

export function UserCard() {
    var name ="Robert"
    return (<h1>Hello from UserCard</h1>);
}