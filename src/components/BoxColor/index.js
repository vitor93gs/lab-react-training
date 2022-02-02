import styles from './styles.module.css'
export function BoxColor (props){
    const divStyle = {
        backgroundColor : `rgb(${props.r},${props.g},${props.b})`
    }
    return (
        <div style={divStyle} className ={styles.divzona}>
            <h2>
                RGB({props.r},{props.g},{props.b})<br/>
                #{props.r.toString(16)}{props.g.toString(16)}{props.b.toString(16)}
            </h2>
        </div>
    )
}