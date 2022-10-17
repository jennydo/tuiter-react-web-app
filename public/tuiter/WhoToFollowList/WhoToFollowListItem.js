const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item">
                    <div class="d-flex align-items-center flex-row">
                        <div class="col-2 wd-avatar">
                            <img class="wd-avatar" src="${who.avatarIcon}"/>
                        </div>
                        <div class="col-7 text-white ps-2">
                            <div>
                                <b>${who.userName}</b>
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <div>${who.handle}</div>
                        </div>
                        <div class="col-3">
                            <div class="d-grid">
                                <button class="btn-primary btn-block
                            wd-rounded-corners-all-around">Follow
                                </button>
                            </div>

                        </div>
                    </div>
    
    </li>
    `);
}
export default WhoToFollowListItem;
