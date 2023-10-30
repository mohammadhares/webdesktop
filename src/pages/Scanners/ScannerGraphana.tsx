import { useSelector } from "react-redux";

const ScannerGraphana = () => {
    const graphana_url = useSelector((state: any) => state.scanner.graphana_url);

    return (
        <section className="graphana">
            <object
                data={graphana_url}
                type="text/html">
                Graphana
            </object>
        </section>
    );
}

export default ScannerGraphana;