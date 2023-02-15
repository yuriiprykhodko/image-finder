import React, { Component } from 'react';
import 'styles.css';
import { FiSearch } from 'react-icons/fi';

export class SearchBar extends Component {
    state = {
      query: '',
  }
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({...this.state})
    this.setState({query:''})
  }
  
    render() {
        return (
            <header className="Searchbar">
    <form className="SearchForm" onSubmit={this.handleSubmit}>
              <button type="submit" className="SearchForm-button">
                <FiSearch size={20} />
      <span className="SearchForm-button-label"> </span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
                placeholder="Search images and photos"
                name='query'
                value={this.state.query}
                onChange={this.handleChange}
    />
  </form>
</header>
        )
    }
}




