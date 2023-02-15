//21893173-2e6903a6fb362f8aa14208207
import React, { Component } from 'react'
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
  }
  
  handleSubmitChange = (value) => {
   this.setState({query:value.query})
  }
  render() {
     return (
    <div>
         <SearchBar onSubmit={this.handleSubmitChange} /> 
         <ImageGallery query={this.state.query} />
    </div>
  );
  }
 
};
