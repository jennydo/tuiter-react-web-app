
const PostSummaryItem = (post) => {
    return(`
    <li class="list-group-item">
    
                    <div class="row">
                        <div class="col-9">
                            <div class="wd-post-topic">
                                ${post.topic}
                            </div>
                            <div>
                                <span class="wd-post-title-black text-white">${post.userName} <i class="fas fa-check-circle"></i></span>
                                <span class="wd-post-topic"> - ${post.time}</span>
                            </div>
                            <div class="wd-post-name-black text-white">
                                ${post.title}
                            </div>
                            <div class="wd-post-topic">${post.tweets}</div>
                        </div>

                        <div class="col-3">
                            <img class="wd-post-image-new wd-post-float-right" src="${post.image}"/>
                        </div>
                    </div>
                    
                </li>
    `);
}
export default PostSummaryItem;