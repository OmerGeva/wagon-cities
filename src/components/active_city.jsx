import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    const imageSource = {
      image: `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`
    };
    console.log(this.props.activeCity);
    return (
      <div className="active-city">
        <h3>{this.props.activeCity.name}</h3>
        <h6>{this.props.activeCity.address}</h6>
        <img src={imageSource.image} alt={this.props.activeCity.slug}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeCity: state.activeCity
  };
};
export default connect(mapStateToProps)(ActiveCity);

