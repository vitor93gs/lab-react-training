import styles from './styles.module.css'

export function Greetings (props){
    return (
        <div className = {styles.divzona}>
            <h2>
                {props.lang === "de" ? "Hallo" : props.lang === "en" ? "Hello" : props.lang === "es" ? "Hola" : props.lang === "fr" ? "Bonjour": ""} {props.children} 
            </h2>
        </div>
    )
}