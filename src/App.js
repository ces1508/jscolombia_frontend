import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ContentIMG from './components/contentIMG'

class App extends Component {

  constructor( props ){
    super(props)
    this.fnButtonLike = this.fnButtonLike.bind(this)
    this.fnButtonDislike = this.fnButtonDislike.bind(this)

    this.state = {
      likeMe: false,
      dislikeMe: false
    }

  }

  fnButtonLike(){
    this.setState({ likeMe: !this.state.likeMe,dislikeMe: false})
  }
  fnButtonDislike(){
    this.setState({ dislikeMe: !this.state.dislikeMe,likeMe: false })
  }

  render() {
    return (
      <div className='App'>
        <ContentIMG 
        likeMe={this.state.likeMe} 
        dislikeMe={this.state.dislikeMe} 
        fnLike={this.fnButtonLike} 
        fnDislike={this.fnButtonDislike}/>
      </div>
    );
  }

}

export default App;
