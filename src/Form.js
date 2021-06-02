import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalInvestment: {},
      interestRate: {},
      timePeriod: {}
    };
    this.handleTotalInvestment = this.handleTotalInvestment.bind(this);
    this.handleInterestRate = this.handleInterestRate.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTimePeriod = this.handleTimePeriod.bind(this);
  }
  handleTotalInvestment(event) {
    this.setState({ totalInvestment: event.target.value });
  }
  handleInterestRate(event) {
    this.setState({ interestRate: event.target.value });
  }
  handleTimePeriod(event) {
    this.setState({ timePeriod: event.target.value });
  }
  handleFormSubmit(event) {
    // let totalMoney = this.totalInvestment;
    // let totalInterest = this.interestRate;
    // let totalTime = this.timePeriod;
    // let total = totalMoney + totalInterest + totalTime;
    // console.log(total);
    // alert(total);
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onChange={this.handleFormSubmit}>
        <label>
          Total Investment:
          <input
            type="number"
            name="Total Invesment"
            placeholder="example.1000"
            value={this.state.totalInvestment}
            onChange={this.handleTotalInvestment}
          />
        </label>
        <br />

        <label>
          Interest Rate (In Percentage):
          <input
            type="number"
            name="Interest Rate"
            placeholder="example.4.5%"
            value={this.state.interestRate}
            onChange={this.handleInterestRate}
          />
        </label>
        <br />

        <label>
          Time Period:
          <select
            value={this.state.timePeriod}
            onChange={this.handleTimePeriod}
          >
            <option name=">3 Months" value="3">
              3 Months
            </option>
            <option name=">6 Months" value="6">
              6 Months
            </option>
            <option name=">1 Year" value="12">
              1 Year
            </option>
            <option name=">2 Years" value="24">
              2 Years
            </option>
            <option name=">3 Years" value="36">
              3 Years
            </option>
            <option name=">4 Years" value="48">
              4 Years
            </option>
            <option name=">5 Years" value="50">
              5 Years
            </option>
          </select>
        </label>
        <br />

        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Form;
