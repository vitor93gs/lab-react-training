import {IdCard} from "./components/IdCard"
import {Greetings} from "./components/Greetings"
import {Random} from "./components/Random"
import {BoxColor} from "./components/BoxColor"
import {CreditCard} from "./components/CreditCard"
import {Rating} from "./components/Rating"
import {DriverCard} from "./components/DriverCard"

function App() {
  return (
    <div>
      <IdCard 
        firstName={"bode"}
        lastName= {"A string"}
        gender= {'male'}
        height={14}
        birth={"08/03/1993"}
        picture= {"http://res.cloudinary.com/djyjdargg/image/upload/v1550167383/Ironclass/IH_Jan1943.jpg.jpg"}
      />
      <Greetings lang="en">XISPEDE</Greetings>
      <Random min={1} max={6}/>
      <BoxColor r={128} g={255} b={0} />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" 
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
        model: "Audi A3",
        licensePlate: "BE33ER"
        }}
      />
    </div>
  );
}

export default App;
