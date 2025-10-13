import React from 'react'

const InputGroup = () => {
  return (
    <div className="container mt-4">
      <h2>React Input Group Examples</h2>

      {/* Basic Example */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>Basic Example</strong>
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input type="text" className="form-control" placeholder="Username" />
          </div>

          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Recipient's username" />
            <span className="input-group-text">@example.com</span>
          </div>

          <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
          <div className="input-group mb-3">
            <span className="input-group-text">https://example.com/users/</span>
            <input type="text" className="form-control" id="basic-url" />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input type="text" className="form-control" aria-label="Amount" />
            <span className="input-group-text">.00</span>
          </div>

          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Username" />
            <span className="input-group-text">@</span>
            <input type="text" className="form-control" placeholder="Server" />
          </div>

          <div className="input-group">
            <span className="input-group-text">With textarea</span>
            <textarea className="form-control" aria-label="With textarea"></textarea>
          </div>
        </div>
      </div>

      {/* Checkbox and Radio Example */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>Checkboxes and Radios</strong>
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <div className="input-group-text">
              <input className="form-check-input mt-0" type="checkbox" />
            </div>
            <input type="text" className="form-control" placeholder="Text input with checkbox" />
          </div>

          <div className="input-group">
            <div className="input-group-text">
              <input className="form-check-input mt-0" type="radio" />
            </div>
            <input type="text" className="form-control" placeholder="Text input with radio" />
          </div>
        </div>
      </div>

      {/* Multiple Inputs */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>Multiple Inputs</strong>
        </div>
        <div className="card-body">
          <div className="input-group">
            <span className="input-group-text">First and Last Name</span>
            <input type="text" className="form-control" placeholder="First Name" />
            <input type="text" className="form-control" placeholder="Last Name" />
          </div>
        </div>
      </div>

      {/* Button Addons */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>Button Addons</strong>
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary" type="button">Button</button>
            <input type="text" className="form-control" placeholder="Example text with button" />
          </div>

          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Recipient's username" />
            <button className="btn btn-outline-secondary" type="button">Button</button>
          </div>

          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary" type="button">Button</button>
            <button className="btn btn-outline-secondary" type="button">Button</button>
            <input type="text" className="form-control" placeholder="With two buttons" />
          </div>
        </div>
      </div>

      {/* Custom Select */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>Custom Select</strong>
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
            <select className="form-select" id="inputGroupSelect01">
              <option>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="input-group mb-3">
            <select className="form-select" id="inputGroupSelect02">
              <option>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
          </div>
        </div>
      </div>

      {/* File Input */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>Custom File Input</strong>
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
            <input type="file" className="form-control" id="inputGroupFile01" />
          </div>

          <div className="input-group mb-3">
            <input type="file" className="form-control" id="inputGroupFile02" />
            <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
          </div>

          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary" type="button">Button</button>
            <input type="file" className="form-control" id="inputGroupFile03" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputGroup
