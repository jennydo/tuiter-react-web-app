import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }

    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={70} className="float-start rounded-circle" src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-10">
                    <div><i className="bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(tuit._id)}></i> {tuit.userName} . {tuit.time}</div>
                    <div className="fw-bolder">{tuit.topic}</div>
                    <div>{tuit.title}</div>
                    <TuitStats/>
                </div>
            </div>

        </li>
    );
};
export default TuitItem;