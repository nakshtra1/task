import React from "react";
import Popup from "./Popup";

function InnerContain() {
  return (
    <div className="container-fluid bg-body-tertiary d-flex align-items-center justify-content-center">
      <div className="container p-4">
        <h3 className="text">Canvas Template</h3>
        <h1 className="text1">FX Elements for Canvas</h1>

        <div class="container text-center mt-5">
          <div class="row">
            <div class="col-12 grids2">Video</div>
          </div>
        </div>

        <div class="container text-center">
          <div class="row">
            <div class="col grids m-3">Images</div>
            <div class="col grids m-3">Images</div>
            <div class="col grids m-3">Images</div>
            <div class="col grids m-3">Images</div>
          </div>
        </div>

        <p className="text2 text-xxl-start mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          ducimus quae repellat, maiores dolor dicta tenetur labore? Quo
          dignissimos impedit aliquid cumque soluta molestiae aliquam, sunt quae
          omnis veritatis dolores corrupti cum adipisci officia expedita unde
          amet, iure non voluptatum.
        </p>
        <div>
          <div className="alertt mt-5" role="alert">
            <div className="p-3 p-sm-2 d-flex align-self-center">
              <div className="d-flex align-items-center">
                <i className="fa fa-folder color p-2 me-1"></i>
                <h4 className="h4-responsive ps-5 textColor">
                  Easy to Manage Folder
                </h4>
              </div>
            </div>
          </div>

          <div className="alertt1" role="alert">
            <div className="p-3 p-sm-2 d-flex align-self-center">
              <div className="d-flex align-items-center">
                <i className="fa fa-eye color1 p-2 me-1"></i>
                <h4 className="h4-responsive ps-5 textColor1">
                  All Files in High Resolution
                </h4>
              </div>
            </div>
          </div>

          <div className="alertt2" role="alert">
            <div className="p-3 d-flex align-self-center">
              <div className="d-flex align-items-center">
                <i className="fa fa-smile-o  color2 p-2 me-1"></i>
                <h4 className="h4-responsive ps-5 textColor2">
                  Cost Effective
                </h4>
              </div>
            </div>
          </div>

          <div className="alertt3" role="alert">
            <div className="p-3 d-flex align-self-center">
              <div className="d-flex align-items-center">
                <i className="fa fa-clock-o color3 p-2 me-1"></i>
                <h4 className="h4-responsive ps-5 textColor3">
                  Lifetime Update
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center m-4">
          <Popup />
        </div>
      </div>
    </div>
  );
}

export default InnerContain;
