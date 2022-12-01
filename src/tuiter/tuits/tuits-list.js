// import React, {useEffect} from "react";
// import {useDispatch, useSelector}
//     from "react-redux";
// import TuitItem from "./tuit-item.js";
// import {findTuitsThunk}
//     from "../services/tuits-thunks.js";
//
//
// const TuitsList = async () => {
//     const {tuits, loading} = useSelector(
//         state => state.tuitsData)
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(findTuitsThunk())
//     }, [])
//     return(
//         <ul className="list-group">
//             {
//                 loading &&
//                 <li className="list-group-item">
//                     Loading...
//                 </li>
//             }
//             {
//                 tuits.map(tuit =>
//                               <TuitItem
//                                   key={tuit._id} tuit={tuit}/> )
//             }
//         </ul>
//     );
// };
// export default TuitsList;

import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {findTuitsThunk} from "../services/tuits-thunks";
import TuitItem from "./tuit-item";


const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData);
    console.log(tuits)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return(
        <ul className="list-group mb-2">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>)
            }
        </ul>
    );
}

export default  TuitsList;