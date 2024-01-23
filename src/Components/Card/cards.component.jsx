import { Component } from "react";

export default class Card extends Component {
  render() {
    const { name, email, id } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set7&size=180x180`}
          alt="monster"
        />
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  }
}
