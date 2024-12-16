import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

function Task1() {
  const [balance, setBalance] = React.useState(13000);

  function changeBalance() {
    setBalance(Math.floor(Math.random() * 10000));
  }

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <div className="wrapper bg-black p-3 bg-darker d-flex justify-content-between align-items-center">
              <div className="left bg-white p-5 border">
                <h5>User</h5>
                <div className="d-flex gap-5 justify-content-between">
                  <div>
                    <div className="info">
                      <p>FirstName: Abdurahmon</p>
                      <p>FirstName: Mirmaxsudov</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-center">Balance</h1>
                    <Balance balance={balance} changeBalance={changeBalance} />
                  </div>
                </div>
              </div>
              <div className="right w-50">
                <h1 className="text-center text-white">User</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Balance(props) {
  return (
    <>
      <div className="top border text-center">
        <h4 className="text-center text-white bg-dark p-1">User balance</h4>
        <p className="text-start text-black ps-3">{props.balance}$</p>
        <button
          className="btn btn-dark text-center mb-3"
          onClick={props.changeBalance}
        >
          Change
        </button>
      </div>
    </>
  );
}

export default Task1;
