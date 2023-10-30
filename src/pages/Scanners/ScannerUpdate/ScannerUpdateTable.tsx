import { ScannerUpdateItem, ScannerUpdateTableProps } from "../Scanner.Type";
import ScannerItemRow from "./ScannerItemRow";
import Loader from "../../../common/sharedComponent/Loader";

const ScannerUpdateTable = ({ data, isSuccess, isLoading, isError, scannerType }: ScannerUpdateTableProps) => {
    return (
        <div className="scanner_table table_mode p-4">
            <table>
                <thead>
                    <tr>
                        <th>Scanner</th>
                        <th>Name</th>
                        <th>Version</th>
                        <th>Last Run</th>
                    </tr>
                </thead>
                <tbody>
                    {isError && ( <tr><td colSpan={5}>There is some error</td></tr>)}
                    {isSuccess && data?.length === 0 && ( <tr><td colSpan={5}> <small> There is no {scannerType} data </small></td></tr>)}
                    {isLoading && ( <tr><td colSpan={5}><Loader /></td></tr>)}
                    {isSuccess && data?.map((item: ScannerUpdateItem, i: number) => (
                        <ScannerItemRow
                            key={i}
                            item={item} 
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ScannerUpdateTable;