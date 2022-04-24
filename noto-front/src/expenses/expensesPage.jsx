import React, { Component } from "react";
import Expense from "./expenseItem";
import ExpensesFilter from "./expenseFilter";
import expenseService from "./expenseService";

class ExpensesPage extends Component {
  state = {
    expenses: [],
    carId: window.location.pathname.split("/")[2],
    filteredYear: 2021,
  };

  async componentDidMount() {
    let carId = this.state.carId;
    const { data } = await expenseService.getExpenses(carId);

    console.log(data);

    if (data.length) {
      this.setState({
        expenses: data,
      });
    }
  }
  /* 
  filterChangeHandler = (selectedYear) => {
    this.setState(selectedYear);
  };
 */
  render() {
    const { expenses } = this.state;

    return (
      <div className="d-flex justify-content-center">
        <div className="card-container">
          <div className="row">
            <div className="col-md-5 mx-auto text-center">
              <h3 className="text-center mt-5 font-weight-bold">דף הוצאות</h3>

              <h1>...</h1>

              <div className="row">
                <ExpensesFilter
                /*  selected={filteredYear}
                  onChangeFilter={filterChangeHandler} */
                />

                <div className="row mt-5">
                  {expenses.length &&
                    expenses.map((expense) => (
                      <Expense key={expense._id} expense={expense} />
                    ))}
                  <div className="mt-5 d-flex justify-content-between text-center">
                    <a
                      href={`/create-expense/${this.state.carId}`}
                      className="btn btn-primary btn-lg active"
                      role="button"
                      aria-pressed="true"
                    >
                      הוסף הוצאה
                    </a>
                    <a
                      href={`/expenses-page/${this.state.carId}`}
                      className="btn btn-primary btn-lg active"
                      role="button"
                      aria-pressed="true"
                    >
                      חזור
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExpensesPage;
