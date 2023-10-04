import { useEffect} from "react";
import "./character.css";
import { useCharacter } from "../../hooks/useCharacter";

export function Character() {
  const {allCharac, getAllCharacter} = useCharacter();

  useEffect(() => {
    getAllCharacter();
  }, []);
  return (
    <div>
    <div className="boton">
     <button>Docs</button> 
     <button>About</button>
     <button>SUPPORT US</button>
     </div>
    <div id="titulo">
    <h1> The Rinck and Morty api</h1>
    </div>
    <ul className="contenedor">
      {allCharac.map((item, index) => (
        <li key={index}>
          <div>
            <img src={item.image} alt="" />
          </div>
          <div>
            <h3>{item.name}</h3>
            <p>{item.status}</p>
            <p>{item.origin.name}</p>
          </div>
        </li>
      ))}
    </ul>
    </div>

  );

}