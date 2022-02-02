import styles from './styles.module.css'
import blackStar from '../../assets/images/blackStar.png'
import whiteStar from '../../assets/images/whiteStar.png'
export function Rating(props){
    console.log(Number(props.children))
    console.log(Number(props.children)<2.5)
    return(
        <div className ={styles.divzona}>
            <img src={(Number(props.children)<0.5) ? (whiteStar) : (blackStar)} alt=""/>
            <img src={(Number(props.children)<1.5) ? (whiteStar) : (blackStar)} alt=""/>
            <img src={(Number(props.children)<2.5) ? (whiteStar) : (blackStar)} alt=""/>
            <img src={(Number(props.children)<3.5) ? (whiteStar) : (blackStar)} alt=""/>
            <img src={(Number(props.children)<4.5) ? (whiteStar) : (blackStar)} alt=""/>
        </div>
    )
}