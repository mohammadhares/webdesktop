import { faPlayCircle , faEye , faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteConfirmation from "../../common/sharedComponent/DeleteConfirmation";
import { formatDate } from "../../utils/getFormattedDate";

export type DocumentItemProps = {
    document: {
        name: string
        title: string
        description: string
        type: string
        file: any
    }[],
    onViewFile: (item: any) => void
    displayMode: string
}

const DocumentView = ({ document, onViewFile, displayMode }: DocumentItemProps) => {
    if (displayMode === 'LIST') {
        return (
            <div className="document-list">
                {document.map((item: any, index: number) => (
                    <div
                        key={index}
                        onClick={() => onViewFile(item)}
                        className="single-docs">
                        <DeleteConfirmation
                            mode="CARD"
                            msg={"Are you sure to delete file?"}
                            onConfirm={() => null} />
                        <FontAwesomeIcon className="type-icon" icon={item?.type === 'pdf' ? faFilePdf : faPlayCircle} />
                        <div className="subtitle">{item?.title}</div>
                        <p>{item?.description}</p>
                        <i>{formatDate(new Date())}</i>
                    </div>
                ))}
            </div>
        )
    } else {
        return (
            <div className="table_mode">
                <table>
                    <thead>
                        <tr>
                            <th>File</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Created Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {document.map((item: any, index: number) => (
                            <tr key={index}>
                                <td className="icon-name">
                                    <button
                                        onClick={() => onViewFile(item)}
                                        className="mc-btn">
                                        <FontAwesomeIcon
                                            icon={item?.type === 'pdf' ? faFilePdf : faPlayCircle}
                                        />
                                    </button>
                                    {item.name}
                                </td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>01/02/2023</td>
                                <td className='actions'>
                                    <button
                                        onClick={() => onViewFile(item)}
                                        className='mc-btn'>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <DeleteConfirmation
                                        mode="TABLE"
                                        msg={"Are you sure to delete file?"}
                                        onConfirm={() => null} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default DocumentView;