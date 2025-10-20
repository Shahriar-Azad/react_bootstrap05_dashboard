import React from 'react'

const ChecksRadios = () => {
  return (
    <div className="container my-4">
      <div className="card mb-4">
        <div className="card-header">
          <strong>React Checkbox</strong>
        </div>
        <div className="card-body">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="checkDefault" />
            <label className="form-check-label" htmlFor="checkDefault">
              Default checkbox
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="checkChecked" defaultChecked />
            <label className="form-check-label" htmlFor="checkChecked">
              Checked checkbox
            </label>
          </div>
        </div>
      </div>

      {/* Disabled Checkboxes */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>React Checkbox</strong> <small>Disabled</small>
        </div>
        <div className="card-body">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="checkDisabled" disabled />
            <label className="form-check-label" htmlFor="checkDisabled">
              Disabled checkbox
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkDisabledChecked"
              defaultChecked
              disabled
            />
            <label className="form-check-label" htmlFor="checkDisabledChecked">
              Disabled checked checkbox
            </label>
          </div>
        </div>
      </div>

      {/* Radios */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>React Radio</strong>
        </div>
        <div className="card-body">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadio"
              id="radioDefault"
            />
            <label className="form-check-label" htmlFor="radioDefault">
              Default radio
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadio"
              id="radioChecked"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="radioChecked">
              Checked radio
            </label>
          </div>
        </div>
      </div>

      {/* Disabled Radios */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>React Radio</strong> <small>Disabled</small>
        </div>
        <div className="card-body">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="disabledRadio"
              id="radioDisabled"
              disabled
            />
            <label className="form-check-label" htmlFor="radioDisabled">
              Disabled radio
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="disabledRadio"
              id="radioDisabledChecked"
              defaultChecked
              disabled
            />
            <label className="form-check-label" htmlFor="radioDisabledChecked">
              Disabled checked radio
            </label>
          </div>
        </div>
      </div>

      {/* Switches */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>React Switches</strong>
        </div>
        <div className="card-body">
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="switchDefault" />
            <label className="form-check-label" htmlFor="switchDefault">
              Default switch
            </label>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="switchChecked" defaultChecked />
            <label className="form-check-label" htmlFor="switchChecked">
              Checked switch
            </label>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="switchDisabled" disabled />
            <label className="form-check-label" htmlFor="switchDisabled">
              Disabled switch
            </label>
          </div>
        </div>
      </div>

      {/* Inline Checks */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>React Checks and Radios</strong> <small>Inline</small>
        </div>
        <div className="card-body">
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="inline1" value="1" />
              <label className="form-check-label" htmlFor="inline1">1</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="inline2" value="2" />
              <label className="form-check-label" htmlFor="inline2">2</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="inline3" value="3" disabled />
              <label className="form-check-label" htmlFor="inline3">3 (disabled)</label>
            </div>
          </div>
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadios" id="inlineRadio1" />
              <label className="form-check-label" htmlFor="inlineRadio1">1</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadios" id="inlineRadio2" />
              <label className="form-check-label" htmlFor="inlineRadio2">2</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadios"
                id="inlineRadio3"
                disabled
              />
              <label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChecksRadios
