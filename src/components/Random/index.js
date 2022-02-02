export function Random(props){
    return (
        <div>
            <h2>
                Random value between {props.min} and {props.max} => {(Math.floor(Math.random() * (props.max - props.min) ) + props.min)}
            </h2>
        </div>
    )
}