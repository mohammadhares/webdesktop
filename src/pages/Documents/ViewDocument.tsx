import { useRef, useState } from "react";
import { usePdf } from '@mikecousins/react-pdf';
import Loader from "../../common/sharedComponent/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft , faCaretRight } from "@fortawesome/free-solid-svg-icons";

const ViewDocument = (file: any) => {
    const [page, setPage] = useState(1);
    const canvasRef = useRef(null);

    const { pdfDocument } = usePdf({
        file: '',
        page,
        canvasRef,
    });

    return (
        <div className="view-file">
            <div>
                {!pdfDocument && <Loader addClass="small" />}
                {Boolean(pdfDocument && pdfDocument?.numPages) && (
                    <div className="document-btns">
                        <div className="page-numbers">
                            {page} - {pdfDocument?.numPages}
                        </div>
                        <div className="document-name">
                            Document
                        </div>
                        <div className="page-btns">
                            <button
                                className="mc-btn "
                                disabled={page === 1} onClick={() => setPage(page - 1)}>
                                <FontAwesomeIcon icon={faCaretLeft} />
                            </button>
                            <button
                                className="mc-btn"
                                disabled={page === pdfDocument?.numPages}
                                onClick={() => setPage(page + 1)}>
                                <FontAwesomeIcon icon={faCaretRight} />
                            </button>
                        </div>

                    </div>
                )}

                <canvas className="pdf-viewers" ref={canvasRef} />
            </div>
        </div>
    );
}

export default ViewDocument;