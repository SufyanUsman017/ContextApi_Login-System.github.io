import { useContext } from "react";
import { mainContext } from "../context/DataProvider";

function useData(){
    return useContext(mainContext)
}

export default useData;
