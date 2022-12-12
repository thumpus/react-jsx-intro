const Tweet = (props) => {
    return (<div>
        <h1>{props.username}</h1>
        <h2>{props.firstname} {props.lastname}</h2>
        <h3>{props.date}</h3>
        <p>{props.message}</p>
    </div>
    )
}