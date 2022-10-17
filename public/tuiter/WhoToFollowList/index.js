import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {


    return(`
      <div class="list-group">
      <li class="list-group-item text-white">
                    <b>Who to follow</b>
                </li>
         ${
        who.map(w => {
            return(WhoToFollowListItem(w));
        }).join('')
    }
      </div>
   `);
}

export default WhoToFollowList;