
const Person = (props) => {
    let message;

    if (props.age < 18){
        message = 'You must be 18.'
    } else {
        message = 'Please go vote!'
    }

    return (<div>
        <p>Learn some info about this person:</p>
        <h1>Name: {props.name.slice(0,6)}</h1>
        <h3>{message}</h3>
        <ul>
            Hobbies:
            {props.hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
    </div>)
};