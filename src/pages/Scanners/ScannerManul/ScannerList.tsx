import { useGetScannerStatusQuery } from "../../../app/api/scanner/scannerApi";
import { ScannerListProps } from "../Scanner.Type";
import { displayStatus } from "../Scanner.mixin";

export function ScannerList({ value, onChange }: ScannerListProps) {
    const {
        data: status,
        isSuccess
    } = useGetScannerStatusQuery();

    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="asc_form_element"
            name="sacnner"
            id="scanner">
            <option
                value="OpenVAS">
                {displayStatus(status?.OpenVAS, isSuccess)}
                OpenVAS
            </option>
            <option
                value="ZAP">
                {displayStatus(status?.ZAP, isSuccess)}
                ZAP
            </option>
            <option
                value="NMAP">
                {displayStatus(status?.ZAP, isSuccess)}
                NMAP
            </option>
        </select>
    )
}