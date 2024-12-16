import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

class Task4 extends React.Component {
  state = {
    invoices: [
      {
        id: 1,
        products: [
          {
            id: 1,
            name: "Product 1",
            details:
              "Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 ",
          },
          {
            id: 2,
            name: "Product 2",
            details:
              "Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 ",
          },
          {
            id: 1,
            name: "Product 1",
            details:
              "Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 ",
          },
          {
            id: 2,
            name: "Product 2",
            details:
              "Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 ",
          },

          {
            id: 2,
            name: "Product 2",
            details:
              "Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 ",
          },
        ],
        left_infos: [],
      },
      {
        id: 2,
        products: [
          {
            id: 1,
            name: "Product 1",
            details:
              "Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 ",
          },
        ],
        left_infos: [],
      },
      {
        id: 3,
        products: [
          {
            id: 1,
            name: "Product 1",
            details:
              "Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 ",
          },
          {
            id: 2,
            name: "Product 2",
            details:
              "Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 Details 2 ",
          },
        ],
        left_infos: [],
      },
      {
        id: 4,
        products: [
          {
            id: 1,
            name: "Product 1",
            details:
              "Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 Details 1 ",
          },
        ],
        left_infos: [],
      },
    ],
    currentInvoice: 0,
  };

  changeInvoice = (index) => {
    this.setState({
      currentInvoice: index.index,
    });
  };

  render() {
    const invoice = this.state.invoices[this.state.currentInvoice];

    return (
      <header className="l_header bg-black pt-4">
        <div className="container">
          <div className="row">
            <div className="col-8 offset-2">
              <div className="wrapper border border-white p-4 bg-dark text-white">
                <div className="top">
                  <div className="row g-4">
                    {this.state.invoices.map((invoice, index) => {
                      return (
                        <>
                          <div className="col-3">
                            <button
                              className={
                                this.state.currentInvoice === index
                                  ? "btn btn-primary "
                                  : "btn btn-outline-primary"
                              }
                              onClick={() => {
                                this.changeInvoice({ index });
                              }}
                            >
                              <h4 className="text-center">
                                Invoice {index + 1}
                              </h4>
                            </button>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <hr />
                <div className="bottom">
                  <div className="row">
                    <div className="col-5">
                      <ul className="list-group">
                        {invoice.products.map((product) => {
                          return (
                            <li className="list-group-item my-2">
                              {product.name}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="col-7 pb-4">
                      <ul className="list-group">
                        {invoice.products.map((product) => {
                          return (
                            <li className="list-group-item my-2">
                              {product.details}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Task4;
