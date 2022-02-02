import styles from './styles.module.css'
import visa from '../../assets/images/visa.png'
import master from '../../assets/images/master-card.svg'

export function CreditCard(props){
    const divStyle = {
        backgroundColor : `${props.bgColor}`
    }
    const cartao = (props.type === "Visa" ? visa : master)
    return (
        <div className ={styles.divzona} style={divStyle}>
            <div className={styles.divImg}>
                <img src={cartao} alt="bandeira do cartao" className ={styles.img}></img>
            </div>
            <div className ={styles.numeros}>
                <h2>
                ••••
                </h2>
                <h2>
                ••••
                </h2>
                <h2>
                ••••
                </h2>
                <h2>
                {props.number.slice(-4)}
                </h2>
            </div>
            <div className ={styles.datas}>
                <h3>
                    Expires {props.expirationMonth<10 ? `0${props.expirationMonth}` : props.expirationMonth}/{props.expirationYear - 2000}      
                </h3>
                <h3>
                    {props.bank}
                </h3>
            </div>
            <div className ={styles.owner}>
                <h3>
                    {props.owner}
                </h3>
            </div>

        </div>
    )
}