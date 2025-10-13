import React from "react";

const FormControl = () => {
  return (
    <div className="container mt-4">
      {/* Basic Form Control */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>React Form Control</strong>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textareaInput" className="form-label">
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="textareaInput"
                rows="3"
                placeholder="Write something..."
              ></textarea>
            </div>
          </form>
        </div>
      </div>

      {/* Input Sizing */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>React Form Control</strong> <small>Sizing</small>
        </div>
        <div className="card-body">
          <input
            type="text"
            className="form-control form-control-lg mb-2"
            placeholder="Large input"
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Default input"
          />
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Small input"
          />
        </div>
      </div>

      {/* Disabled Inputs */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>React Form Control</strong> <small>Disabled</small>
        </div>
        <div className="card-body">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Disabled input"
            disabled
          />
          <input
            type="text"
            className="form-control"
            placeholder="Disabled readonly input"
            disabled
            readOnly
          />
        </div>
      </div>

      {/* Readonly Input */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>React Form Control</strong> <small>Readonly</small>
        </div>
        <div className="card-body">
          <input
            type="text"
            className="form-control"
            placeholder="Readonly input here..."
            readOnly
          />
        </div>
      </div>

      {/* Readonly Plain Text */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>React Form Control</strong> <small>Readonly plain text</small>
        </div>
        <div className="card-body">
          <form>
            <div className="row mb-3">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  id="staticEmail"
                  defaultValue="email@example.com"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
          </form>

          <form className="row g-3">
            <div className="col-auto">
              <label htmlFor="staticEmail2" className="visually-hidden">
                Email
              </label>
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="staticEmail2"
                defaultValue="email@example.com"
              />
            </div>
            <div className="col-auto">
              <label htmlFor="inputPassword2" className="visually-hidden">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                placeholder="Password"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">
                Confirm identity
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* File Inputs */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>React Form Control</strong> <small>File input</small>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Default file input example
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <div className="mb-3">
            <label htmlFor="formFileMultiple" className="form-label">
              Multiple files input example
            </label>
            <input
              className="form-control"
              type="file"
              id="formFileMultiple"
              multiple
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFileDisabled" className="form-label">
              Disabled file input example
            </label>
            <input
              className="form-control"
              type="file"
              id="formFileDisabled"
              disabled
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFileSm" className="form-label">
              Small file input example
            </label>
            <input
              className="form-control form-control-sm"
              type="file"
              id="formFileSm"
            />
          </div>
          <div>
            <label htmlFor="formFileLg" className="form-label">
              Large file input example
            </label>
            <input
              className="form-control form-control-lg"
              type="file"
              id="formFileLg"
            />
          </div>
        </div>
      </div>

      {/* Color Picker */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>React Form Control</strong> <small>Color</small>
        </div>
        <div className="card-body">
          <label htmlFor="exampleColorInput" className="form-label">
            Color picker
          </label>
          <input
            type="color"
            className="form-control form-control-color"
            id="exampleColorInput"
            defaultValue="#563d7c"
            title="Choose your color"
          />
        </div>
      </div>
    </div>
  );
};

export default FormControl;
