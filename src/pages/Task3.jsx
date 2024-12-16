import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Task3 extends React.Component {
  render() {
    return (
      <header
        className="c-header pt-5"
        style={{
          backgroundColor: "black",
          height: "calc(100% + 10%)",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-6 offset-3 bg-dark p-5 text-white">
              <h3>Default Export:</h3>
              <ul>
                <li>You can only have one default export per file.</li>
                <li>
                  The exported value can be a function, class, object, or
                  anything else.
                </li>
                <li>
                  The import name is flexible and does not have to match the
                  exported name.
                </li>
              </ul>
              <code className="w-100">
                const MyComponent = Hello <br />
                import MyComponent from './MyComponent';
              </code>
              <ul>
                <li className="mt-3">
                  This is commonly used for exporting a single main component or
                  function from a module.
                </li>
              </ul>
              <h3>Named Export:</h3>
              <ul>
                <li>You can have multiple named exports in a file.</li>
                <li>
                  You must import with the exact name used in the export,
                  enclosed in curly braces.
                </li>
              </ul>
              <h5>Example:</h5>
              <code className="w-100">
                export const MyComponent = () = return <>Hello</>; ; <br />
                export const AnotherComponent = () = <>Another</>; ;
              </code>
              <ul>
                <li>
                  This is used when you need to export multiple functions,
                  constants, or components from a single file.
                </li>
              </ul>
              <h5>Key Differences:</h5>
              <ul>
                <li>
                  <b>Default export</b> is typically used for exporting one main
                  entity, while named export is used when there are multiple
                  entities to export.
                </li>
                <li>
                  <b>Default export</b> allows flexibility in naming during
                  import, whereas named export requires the exact name used in
                  the export statement.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Task3;
