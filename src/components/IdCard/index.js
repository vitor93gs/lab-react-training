import styles from './styles.module.css'
export function IdCard(props){
    return (
        <div className={styles.divzona}>
            <img src={props.picture} alt=""/>
            <div className={styles.divzinha}>
                <p>
                    <b>First Name: </b>{props.firstName}
                </p>
                <p>
                    <b>Last Name: </b>{props.lastName}
                </p>
                <p>
                    <b>Gender:</b> {props.gender}
                </p>
                <p> 
                    <b>Height:</b> {props.height}
                </p>
                <p> 
                    <b>Birth:</b> {props.birth}
                </p>
            </div>
        </div>
    )
}