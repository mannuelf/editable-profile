import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Moment from 'react-moment';

class BirthdayCalendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
    }

    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    console.log(new Date())
  }

  onChange = (date) => {
    this.setState({
      date: this.props.initialBirthdayProps
    })
    this.props.handleBirthdayProps(date);
  }

  render() {
    return (
      <div>
        {this.props.initialBirthdayProps}
        <Calendar
          onChange={this.onChange}
          value={this.props.date}
        />
      </div>
    );
  }
}

export default BirthdayCalendar