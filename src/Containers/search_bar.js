import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = { term: ''};

  }

  onInputChange = (e) =>{
    this.setState({term: e})
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''})
  }

  render(){
    return(
      <div>
          <form onSubmit={(e) => this.onFormSubmit(e)} >
             <input placeholder="Get a five day forecast" value={this.state.term} onChange={(e) => this.onInputChange(e.target.value)} />
             <button type="submit"> Submit </button>
          </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather},dispatch)
}
export default connect(null, mapDispatchToProps)(SearchBar);
