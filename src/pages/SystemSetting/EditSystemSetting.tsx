import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useGetAAREditQuery } from "../../app/api/aar/aarApi";
import Loader from "../../common/sharedComponent/Loader";


const EditSystemSetting = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const {
        data, isSuccess,
    } = useGetAAREditQuery();


    useEffect(() => {
        if (isSuccess) {
            // dispatch(updateState({ aar : data}))            
            navigate(`/system-setting/aar-reports`);
        }
    }, [data, dispatch, isSuccess, navigate]);



    return (
        <>
            <div className="text-center">
                <Loader />
            </div>
        </>
    );
}

export default EditSystemSetting;