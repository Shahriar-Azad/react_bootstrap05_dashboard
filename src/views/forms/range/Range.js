import React from 'react'

const Range = () => {
  return (
    <div className="container mt-4">
      <h2>React Range Examples</h2>

      {/* Example Range */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>Example Range</strong>
        </div>
        <div className="card-body">
          <p className="text-muted small">
            Create custom <code>&lt;input type="range"&gt;</code> controls easily.
          </p>
          <label htmlFor="customRange1" className="form-label">
            Example range
          </label>
          <input type="range" className="form-range" id="customRange1" />
        </div>
      </div>

      {/* Disabled Range */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>Disabled Range</strong>
        </div>
        <div className="card-body">
          <p className="text-muted small">
            Add the <code>disabled</code> attribute to make it grayed out and non-interactive.
          </p>
          <label htmlFor="disabledRange" className="form-label">
            Disabled range
          </label>
          <input type="range" className="form-range" id="disabledRange" disabled />
        </div>
      </div>

      {/* Min and Max */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>Min and Max</strong>
        </div>
        <div className="card-body">
          <p className="text-muted small">
            By default, range inputs go from <code>0</code> to <code>100</code>. You can customize
            these values using <code>min</code> and <code>max</code>.
          </p>
          <label htmlFor="customRange2" className="form-label">
            Example range
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="5"
            defaultValue="3"
            id="customRange2"
          />
        </div>
      </div>

      {/* Steps */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>Steps</strong>
        </div>
        <div className="card-body">
          <p className="text-muted small">
            Range inputs snap to integer values by default. Use the <code>step</code> attribute to
            control the intervals.
          </p>
          <label htmlFor="customRange3" className="form-label">
            Example range
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="5"
            step="0.5"
            defaultValue="3"
            id="customRange3"
          />
        </div>
      </div>
    </div>
  )
}

export default Range
