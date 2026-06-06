import { useEffect } from "react";
const LoadingState = (props) => {


    useEffect(() => {
        let loaded = 0;

        setTimeout(() => {
            loaded = 30;
            props.onLoaded();
        }, 2000);
    }, []);

};

export default LoadingState;
