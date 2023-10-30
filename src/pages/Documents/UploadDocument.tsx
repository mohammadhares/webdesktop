import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UploadDocument = () => {
    return (
        <div className="upload-document vg-main">
            <div className="pcw-step facegen-portal text-center upload-section">
                <h4>Upload Documents</h4>
                <div className="flex-stretch">
                    <div className="pcw-avi-option upload document-form">
                        <div className="form-element">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" />
                        </div>
                        <div className="form-element">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="description" rows={10} />
                        </div>
                        <button className="mc-btn btn-blue upload-btn">
                            <input
                                type="file"
                                accept="application/pdf, video/mp4"
                                className="click-upload" />
                            <FontAwesomeIcon icon={faUpload} />
                        </button>
                        <button className="mc-btn btn-blue">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UploadDocument;