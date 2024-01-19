import { Component } from "react";
import "./card-list.styles.css"
import Card from "../Card/cards.component";
export default class CardList extends Component {
  render() {
    const { monsterArray } = this.props;
    return (
      <section className="card-list">
        {monsterArray.map((monster) => {
          return (
            <Card monster={monster} />
          );
        })}
      </section>
    );
  }
}
