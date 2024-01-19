import { Component } from "react";
import "./search.styles.css";
export default class Search extends Component {
  render() {
    const {onSearch,inputPlaceholder,className} = this.props;
    return (
      <div>
        <input type='search' placeholder={inputPlaceholder} className={`search-box ${className}`}  onChange={onSearch} />
      </div>
    );
  }
}
