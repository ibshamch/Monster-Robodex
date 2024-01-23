import "./card-list.styles.css";
import Card from "../Card/cards.component";

const CardList = ({ monsterArray }) => {
  return (
    <section className="card-list">
      {monsterArray.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </section>
  );
};

export default CardList;
