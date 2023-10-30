import { ProgressBar } from "react-bootstrap";
import Loader from "../../../common/sharedComponent/Loader";

type ScannerProgressProps = {
    data: any,
    isSuccess: boolean,
    isLoading: boolean,
    isError: boolean
}
const ScannerProgress = ({ data, isError, isLoading, isSuccess }: ScannerProgressProps) => {
    return (
        <>
            {isLoading && <Loader addClass="small" />}
            {isError && <small>can't get status</small>}
            {isSuccess && (
                <ProgressBar
                    min={0}
                    max={100}
                    variant={'success'}
                    animated={data?.status !== 'FINISHED'}
                    striped={data?.status !== 'FINISHED'}
                    label={`${data?.progress ? data?.progress : 0}%`}
                    now={data?.progress ? data?.progress : 0}
                    style={{
                        background: '#353a45'
                    }}
                />
            )}
        </>
    );
}

export default ScannerProgress;