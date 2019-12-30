import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render() {
    let classes = 'list-group-item';
    if (this.props.city === this.props.activeCity) {
      classes += ' selected';
    }
    return (
      <div className={classes} onClick={this.handleClick}>
        <h3>{this.props.city.name}</h3>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { selectCity },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    activeCity: state.activeCity
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
