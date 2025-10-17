import React from 'react'

const Layout = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Form Layout Examples</h2>

      {/* Form Grid */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>Layout</strong> <small>Form grid</small>
        </div>
        <div className="card-body">
          <p className="text-muted small">
            Use grid classes to create multi-column form layouts.
          </p>
          <div className="row">
            <div className="col">
              <input type="text" className="form-control" placeholder="First name" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Last name" />
            </div>
          </div>
        </div>
      </div>

      {/* Gutters */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>Layout</strong> <small>Gutters</small>
        </div>
        <div className="card-body">
          <p className="text-muted small">
            Control gutter width using Bootstrap’s <code>g-*</code> classes.
          </p>

          <div className="row g-3">
            <div className="col">
              <input type="text" className="form-control" placeholder="First name" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Last name" />
            </div>
          </div>

          <hr />

          <form className="row g-3 mt-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">Address 2</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select">
                <option>Choose...</option>
                <option>Dhaka</option>
                <option>Chittagong</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
          </form>
        </div>
      </div>

      {/* Horizontal Form */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>Layout</strong> <small>Horizontal form</small>
        </div>
        <div className="card-body">
          <form>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3" />
              </div>
            </div>

            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultChecked />
                  <label className="form-check-label" htmlFor="gridRadios1">First radio</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" />
                  <label className="form-check-label" htmlFor="gridRadios2">Second radio</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" disabled />
                  <label className="form-check-label" htmlFor="gridRadios3">Third disabled radio</label>
                </div>
              </div>
            </fieldset>

            <div className="row mb-3">
              <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck1" />
                  <label className="form-check-label" htmlFor="gridCheck1">
                    Example checkbox
                  </label>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">Sign in</button>
          </form>
        </div>
      </div>

      {/* Inline Form */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>Layout</strong> <small>Inline form</small>
        </div>
        <div className="card-body">
          <form className="row row-cols-lg-auto g-3 align-items-center">
            <div className="col-12">
              <label htmlFor="inlineFormInputUsername" className="visually-hidden">Username</label>
              <div className="input-group">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" id="inlineFormInputUsername" placeholder="Username" />
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="inlineFormSelectPref" className="visually-hidden">Preference</label>
              <select className="form-select" id="inlineFormSelectPref">
                <option>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
              </select>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
                <label className="form-check-label" htmlFor="inlineFormCheck">
                  Remember me
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Layout
