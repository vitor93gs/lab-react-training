import {Rating} from '../Rating'
import styles from './styles.module.css'

export function DriverCard(props){
    return(
        <div className = {styles.divzona}>
            <img src={props.img} alt="" className={styles.img}/>
            <div className = {styles.divzinha}>
                <h2>
                    {props.name}
                </h2>
                <Rating className={styles.rats}>props.rating</Rating>
                <p>
                    {props.car.model} - {props.car.licensePlate}
                </p>
            </div>
        </div>
    )
}