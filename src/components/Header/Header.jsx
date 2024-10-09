import reactImg from '../../assets/react-core-concepts.png'
import './Header.css';

const reactDescription=['core','Fundemental','Crucial'];

function genRandomInt(max){
  const randValue=Math.random()
  const mathValue = Math.floor(randValue * (max+1));
  console.log(randValue);
  console.log(mathValue);
  return mathValue;
  
}

export default function Header(){
    const description=reactDescription[genRandomInt(2)];
    return(
    <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React asdasdsss</h1>
            <p>
              {description} React concepts you will need for almost any app you are 
              going to build!
            </p>
          </header>
    );
    }
    