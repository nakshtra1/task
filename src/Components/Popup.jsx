import React from 'react';
import Form from './Form';

function Popup() {
  return (
    <>
      {/* Button trigger modal */}
      <button
  type="button"
  id="buttonn"
  className="btn btn-primary btn-lg"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
>
  Register Now
</button>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Form</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Form/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
