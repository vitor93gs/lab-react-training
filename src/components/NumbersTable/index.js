export function NumbersTable(props){
    var show =""
    for(let i = 0 ; i < props.limit ; i++){
        show = show + `<span> ${i} </span>`
    }
    console.log(show)
    return(
        <div dangerouslySetInnerHTML={{__html: show}}>
              
        </div>
    )
}