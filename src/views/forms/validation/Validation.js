import React, { useState } from 'react'

const Validation = () => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Form Validation Examples</h2>

      {/* Custom Styles */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>Validation</strong> <small>Custom styles</small>
        </div>
        <div className="card-body">
          <p className="text-muted small">
            Custom validation disables browser default feedback and uses Bootstrap classes for feedback.
          </p>

          <form
            className={`row g-3 needs-validation ${validated ? 'was-validated' : ''}`}
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">Email</label>
              <input type="text" className="form-control" id="validationCustom01" defaultValue="Mark" required />
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">Email</label>
              <input type="text" className="form-control" id="validationCustom02" defaultValue="Otto" required />
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-md-4">
              <label htmlFor="validationCustomUsername" className="form-label">Username</label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <div className="invalid-feedback">Please choose a username.</div>
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="validationCustom03" className="form-label">City</label>
              <input type="text" className="form-control" id="validationCustom03" required />
              <div className="invalid-feedback">Please provide a valid city.</div>
            </div>

            <div className="col-md-3">
              <label htmlFor="validationCustom04" className="form-label">State</label>
              <select className="form-select" id="validationCustom04" required>
                <option value="">Choose...</option>
                <option>Dhaka</option>
              </select>
              <div className="invalid-feedback">Please select a valid state.</div>
            </div>

            <div className="col-md-3">
              <label htmlFor="validationCustom05" className="form-label">Zip</label>
              <input type="text" className="form-control" id="validationCustom05" required />
              <div className="invalid-feedback">Please provide a valid zip.</div>
            </div>

            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="invalidCheck" required />
                <label className="form-check-label" htmlFor="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">You must agree before submitting.</div>
              </div>
            </div>

            <div className="col-12">
              <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
          </form>
        </div>
      </div>

      {/* Browser Defaults */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>Validation</strong> <small>Browser defaults</small>
        </div>
        <div className="card-body">
          <p className="text-muted small">
            You can use browser’s default validation without custom feedback.
          </p>
          <form className="row g-3" onSubmit={(e) => e.preventDefault()}>
            <div className="col-md-4">
              <label htmlFor="validationDefault01" className="form-label">Email</label>
              <input type="text" className="form-control" id="validationDefault01" defaultValue="Mark" required />
            </div>

            <div className="col-md-4">
              <label htmlFor="validationDefault02" className="form-label">Email</label>
              <input type="text" className="form-control" id="validationDefault02" defaultValue="Otto" required />
            </div>

            <div className="col-md-4">
              <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
              <div className="input-group">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" id="validationDefaultUsername" required />
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="validationDefault03" className="form-label">City</label>
              <input type="text" className="form-control" id="validationDefault03" required />
            </div>

            <div className="col-md-3">
              <label htmlFor="validationDefault04" className="form-label">State</label>
              <select className="form-select" id="validationDefault04" required>
                <option value="">Choose...</option>
                <option>Dhaka</option>
              </select>
            </div>

            <div className="col-md-3">
              <label htmlFor="validationDefault05" className="form-label">Zip</label>
              <input type="text" className="form-control" id="validationDefault05" required />
            </div>

            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="defaultCheck" required />
                <label className="form-check-label" htmlFor="defaultCheck">
                  Agree to terms and conditions
                </label>
              </div>
            </div>

            <div className="col-12">
              <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
          </form>
        </div>
      </div>

      {/* Tooltips */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>Validation</strong> <small>Tooltips</small>
        </div>
        <div className="card-body">
          <p className="text-muted small">
            You can display validation feedback inside tooltips using Bootstrap’s tooltip classes.
          </p>

          <form
            className={`row g-3 needs-validation ${validated ? 'was-validated' : ''}`}
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="col-md-4 position-relative">
              <label htmlFor="validationTooltip01" className="form-label">Email</label>
              <input type="text" className="form-control" id="validationTooltip01" required />
              <div className="valid-tooltip">Looks good!</div>
            </div>

            <div className="col-md-4 position-relative">
              <label htmlFor="validationTooltipUsername" className="form-label">Username</label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" id="validationTooltipUsername" required />
                <div className="invalid-tooltip">Please choose a username.</div>
              </div>
            </div>

            <div className="col-md-6 position-relative">
              <label htmlFor="validationTooltip03" className="form-label">City</label>
              <input type="text" className="form-control" id="validationTooltip03" required />
              <div className="invalid-tooltip">Please provide a valid city.</div>
            </div>

            <div className="col-md-3 position-relative">
              <label htmlFor="validationTooltip04" className="form-label">State</label>
              <select className="form-select" id="validationTooltip04" required>
                <option value="">Choose...</option>
                <option>Dhaka</option>
              </select>
              <div className="invalid-tooltip">Please select a valid state.</div>
            </div>

            <div className="col-md-3 position-relative">
              <label htmlFor="validationTooltip05" className="form-label">Zip</label>
              <input type="text" className="form-control" id="validationTooltip05" required />
              <div className="invalid-tooltip">Please provide a valid zip.</div>
            </div>

            <div className="col-12 position-relative">
              <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Validation
