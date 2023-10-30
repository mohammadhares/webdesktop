import Loader from "./Loader";

interface ButtonLoaderProps {
    text: string
    loading: boolean
}

const ButtonLoaders = (props: ButtonLoaderProps) => {
    const { text, loading } = props
    return (
        <>
            {loading ? (
                <>
                    <i style={{ visibility: "hidden" }}>{text}</i>
                    <Loader addClass="small" />
                </>
            ) : text}
        </>
    );
}

export default ButtonLoaders;