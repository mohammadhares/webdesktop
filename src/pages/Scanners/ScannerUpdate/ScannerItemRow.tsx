import { ScannerUpdateData } from '../Scanner.Type';
import moment from 'moment';

const ScannerItemRow = ({ item, key }: ScannerUpdateData) => {
    return (
        <tr key={key} >
            <td>{item.scanner}</td>
            <td>{item.name}</td>
            <td>{item.version}</td>
            <td>{moment(item.status).format('DD MMM yy , hh:mm:a')}</td>
        </tr>
    );
}

export default ScannerItemRow;