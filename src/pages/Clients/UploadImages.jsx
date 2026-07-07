import React from "react";

function UploadImages({ formData, handleChange }) {
  return (
    <div className="form-section">
      <h2>Upload Progress Images</h2>

      <div className="form-group">
        <label>Before Treatment Image</label>
        <input
          type="file"
          name="beforeImage"
          accept="image/*"
          onChange={handleChange}
        />

        {formData.beforeImage && (
          <img
            src={URL.createObjectURL(formData.beforeImage)}
            alt="Before"
            width="250"
          />
        )}
      </div>

      <div className="form-group">
        <label>After Treatment Image</label>
        <input
          type="file"
          name="afterImage"
          accept="image/*"
          onChange={handleChange}
        />

        {formData.afterImage && (
          <img
            src={URL.createObjectURL(formData.afterImage)}
            alt="After"
            width="250"
          />
        )}
      </div>
    </div>
  );
}

export default UploadImages;