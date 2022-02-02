import { useState } from "react";

export function Clicavel(props) {
  var [imagemTroca, setImg] = useState(props.img);

  function handleImg() {
    setImg(imagemTroca === props.img? imagemTroca = props.imgClicked : imagemTroca = props.img);
  }

  return (
    <img src={imagemTroca} alt="" onClick = {handleImg}/>
  );
}
