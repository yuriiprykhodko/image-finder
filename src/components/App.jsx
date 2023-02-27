//21893173-2e6903a6fb362f8aa14208207
import React, { Component } from 'react'
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from './ImageGallery/ImageGallery';
import { api } from './services/api';
import { RotatingLines } from 'react-loader-spinner';
import { Button } from './Button/Button';
import { ToastContainer } from 'react-toastify';
import "styles.css";

export class App extends Component {
  state = {
    query: '',
    hits: [],
    error: null,
    isLoading: false,
    page: 1,
  }

   resetState = () => {
        return this.setState(
        {
        hits: [],
        error: null,
        page: 1,
        })
   }
    
    findImages = () => {

        const { page } = this.state;
        const { query } = this.state;
        
        this.setState({ isLoading: true})

        return api.fetchHits(query, page).then(({ hits }) => this.setState(prevState=>({hits: [...prevState.hits, ...hits],
          page: prevState.page + 1})))
            .catch(error => this.setState({error})).finally(()=>this.setState({ isLoading: false}))
    }
    componentDidUpdate(_, prevState) {

        const { query } = this.state;
 
        if (prevState.query !== query) {
            this.resetState();
            this.findImages();
        }
        
    }
  handleSubmitChange = ({query}) => {
   this.setState({query})
  }
  render() {
    const { isLoading,error,hits } = this.state;
    
       
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmitChange} /> 
                <ToastContainer autoClose={3000} />
        <ImageGallery hits={hits}/>
        {error &&  <h1>{error.message}</h1>}
       {isLoading && <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
                marginRight="auto"
                marginLeft="auto"
        />}
          {hits.length>0 && <Button onClick={this.findImages} />} 
      </div>
     
       )
         
  }
 
};
