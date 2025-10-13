import React from 'react'

const FloatingLabels = () => {
  return (
    <div className="container my-4">
      {/* Floating Labels - Basic Inputs */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>React Floating Labels</strong>
        </div>
        <div className="card-body">
          <p className="text-body-secondary small">
            Wrap an <code>input</code> and <code>label</code> in a
            <code>.form-floating</code> container to enable floating labels.
          </p>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <p className="text-body-secondary small mt-3">
            When there's already a <code>value</code> defined, labels automatically float up.
          </p>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInputValue"
              placeholder="name@example.com"
              defaultValue="test@example.com"
            />
            <label htmlFor="floatingInputValue">Input with value</label>
          </div>
        </div>
      </div>

      {/* Floating Labels - Textareas */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>React Floating Labels</strong> <small>Textareas</small>
        </div>
        <div className="card-body">
          <p className="text-body-secondary small">
            By default, textareas are the same height as inputs.
          </p>

          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
            <label htmlFor="floatingTextarea">Comments</label>
          </div>

          <p className="text-body-secondary small">
            To set a custom height, use inline styles instead of the <code>rows</code> attribute.
          </p>

          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: '100px' }}
            ></textarea>
            <label htmlFor="floatingTextarea2">Comments</label>
          </div>
        </div>
      </div>

      {/* Floating Labels - Selects */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>React Floating Labels</strong> <small>Selects</small>
        </div>
        <div className="card-body">
          <p className="text-body-secondary small">
            Floating labels also work on <code>&lt;select&gt;</code> elements.
          </p>

          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="floatingSelect">Works with selects</label>
          </div>
        </div>
      </div>

      {/* Floating Labels - Grid Layout */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>React Floating Labels</strong> <small>Layout</small>
        </div>
        <div className="card-body">
          <p className="text-body-secondary small">
            When using the Bootstrap grid, place floating labels inside column containers.
          </p>

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="name@example.com"
                  defaultValue="email@example.com"
                />
                <label htmlFor="floatingInputGrid">Email address</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingSelectGrid"
                  aria-label="Floating label select example"
                >
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label htmlFor="floatingSelectGrid">Works with selects</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FloatingLabels
