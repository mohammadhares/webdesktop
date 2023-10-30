import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft , faFilePdf , faFilePowerpoint } from "@fortawesome/free-solid-svg-icons";
import { updateManualMode } from "../../../features/scanner/ScannerSlice";
import jsPDF from "jspdf";
import PptxGenJS from "pptxgenjs";
import Loader from "../../../common/sharedComponent/Loader";

type ScannerReporProps = {
    report : any
    loading : boolean
    success: boolean
}

const ScannerReportList = ({ report , loading , success } : ScannerReporProps) => {

    const dispatch = useDispatch();
    const report_host = useSelector((state: any) => state.scanner.report_host);

    const handleGeneretePDF = async () => {
        const element: any = document.querySelector(`#reports${report_host}`);
        const report_body = new jsPDF('portrait', 'pt', 'a4');
        report_body.html(element).then(() => {
            report_body.save(`openvass_${report_host}.pdf`);
        });
    }

    const handleGeneretePPT = async () => {
        const pptx = new PptxGenJS();
        const slide = pptx.addSlide();
        const contentToExport = document.getElementById(`reports${report_host}`);        

        if (contentToExport) {
            slide.addText(contentToExport.innerText, {
                x: 1,
                y: 1,
                w: '100%',
                h: '100%',
                fontFace: 'Arial',
                fontSize: 14,
                color: '000000',
            });

            pptx.writeFile();
        }
    }

    const color = {
        color: "#000",
    }

    return (
        <div className="text-left scanner_report" style={{ marginTop: "-80px" }}>
            <h3
                className="text-left flex"
                style={{ marginTop: "-30px" }}>
                <button
                    onClick={() => dispatch(updateManualMode('LIST'))}
                    className='action-link'>
                    <FontAwesomeIcon
                        icon={faAngleLeft} />
                    &nbsp; Back
                </button>
                <div className="align-right">
                    <button
                        onClick={() => handleGeneretePDF()}
                        className="icon-badge pdf">
                        <FontAwesomeIcon
                            icon={faFilePdf}
                            style={{ fontSize: "14px" }}
                        />
                    </button>
                    &nbsp;
                    <button
                        onClick={() => handleGeneretePPT()}
                        className="icon-badge pdf">
                        <FontAwesomeIcon
                            icon={faFilePowerpoint}
                            style={{ fontSize: "14px" }}
                        />
                    </button>
                </div>
            </h3>
            {loading && <Loader />}
            <div className="report_body" id={`reports${report_host}`}>
                
                {success && report?.map((item: any, index: number) => (
                    <div key={index} style={{ padding: '20px', color: "000", background: "#fff" }}>
                        <h3 style={color}>{item?.name} <small style={color}>({item?.creation_time})</small></h3>
                        <div style={color}>
                            ID : {item["@id"]}
                        </div>
                        <p style={color}>{item?.description}</p>
                        <hr style={color} />
                    </div>
                ))}
            </div>
        </div>
    )
}
 
export default ScannerReportList;