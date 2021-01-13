import "./styles.scss";
import { useHistory } from "react-router-dom";

export function CharacterCard({ data }) {
  const history = useHistory();

  return (
    <div className="character-list">
      {data.map((item, index) => {
        function onClick(){
          history.push("/character", item)
        }

        return (
        <div key={index} className="character-card" onClick={onClick}>
          <img
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            alt={item.name}
          />
          <div className="character-name">
            <span>{item.name}</span>
          </div>
        </div>
      )})}
      </div>
        );
}
