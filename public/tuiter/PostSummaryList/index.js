import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";
const PostSummaryList = () => {
    return(`
      <div class="mt-2 mb-2">
      <div class="list-group">
         ${
        posts.map(post => {
            return(PostSummaryItem(post));
        }).join('')
        }
      </div>
      </div>
   `);
}
export default PostSummaryList;