import React from 'react'

const Select = () => {
  return (
    <div className="container mt-4">
      <h2>React Select Examples</h2>

      {/* Default Select */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>React Select</strong> <small>Default</small>
        </div>
        <div className="card-body">
          <label htmlFor="defaultSelect" className="form-label">
            Default select
          </label>
          <select className="form-select" id="defaultSelect" aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>

      {/* Sizing */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>React Select</strong> <small>Sizing</small>
        </div>
        <div className="card-body">
          <p className="text-muted small">
            You can choose from small and large selects to match input sizes.
          </p>

          <label htmlFor="largeSelect" className="form-label">
            Large select
          </label>
          <select className="form-select form-select-lg mb-3" id="largeSelect">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <label htmlFor="smallSelect" className="form-label">
            Small select
          </label>
          <select className="form-select form-select-sm mb-3" id="smallSelect">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <p className="text-muted small">
            The <code>multiple</code> attribute allows selecting multiple options:
          </p>
          <select className="form-select form-select-lg mb-3" multiple>
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <p className="text-muted small">
            You can also use the <code>size</code> property to define visible options:
          </p>
          <select className="form-select mb-3" size="3">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>

      {/* Disabled Select */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>React Select</strong> <small>Disabled</small>
        </div>
        <div className="card-body">
          <p className="text-muted small">
            Add the <code>disabled</code> attribute to disable the select field.
          </p>
          <label htmlFor="disabledSelect" className="form-label">
            Disabled select
          </label>
          <select className="form-select" id="disabledSelect" disabled>
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Select
