import { useState } from 'react';
import UploadDocument from './UploadDocument';
import ViewDocument from './ViewDocument';
import DocumentView from './DocumentList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus ,faTh , faThList , faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { DocumentData } from './dummy';
import './../../style/documents/index.css';

const DocHome = () => {

    const [section, setSection] = useState('main');
    const [selectedFile, setSelectedFile] = useState('');
    const [viewMode, setViewMode] = useState('TABLE');

    const viewFile = (file: any) => {
        setSelectedFile(file);
        setSection('viewFile')
    }

    return (
        <section className="main-section">
            <header>
                {section === 'main' ? (
                    <>
                        Document List
                        <div className="add-btn">
                            <button
                                onClick={() => setSection('upload')}
                                className='mc-btn'>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    </>
                ) : (
                    <div
                        onClick={() => setSection('main')}
                        className='back'>
                        <FontAwesomeIcon icon={faAngleLeft} />
                        Document List
                    </div>
                )}

            </header>
            {section === 'main' && (
                <>
                    <header className='sub-header'>
                        <button
                            className={`${viewMode === 'LIST' && 'active'}`}
                            onClick={() => setViewMode('LIST')}>
                            <FontAwesomeIcon icon={faTh} />
                        </button>
                        <button
                            className={`${viewMode === 'TABLE' && 'active'}`}
                            onClick={() => setViewMode('TABLE')}>
                            <FontAwesomeIcon icon={faThList} />
                        </button>
                    </header>
                    <DocumentView
                        document={DocumentData}
                        onViewFile={viewFile}
                        displayMode={viewMode}
                    />
                </>
            )}

            {section === 'viewFile' && (
                <ViewDocument file={selectedFile} />
            )}

            {section === 'upload' && (
                <UploadDocument />
            )}
        </section>
    );
}

export default DocHome;