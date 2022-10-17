import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="mb-2">
                <div class="d-flex align-items-center flex-row">
                    <div class="col-10 position-relative">
                    <span><input class="form-control rounded-pill ps-5"
                                 type="text" placeholder="Search Tuiter"/></span>
                        <span class="position-absolute wd-nudge-up"><i
                                class="fa fa-search"></i></span>
                    </div>

                    <div class="col-2">
                    <span class="float-end">
                        <a href="explore-settings.html">
                            <i class="fa fa-cog fa-2x"></i>
                        </a>
                    </span>
                    </div>
                </div>
            </div>

            <div class="mb-2">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="for-you.html">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item d-sm-none d-md-block">
                        <a class="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </div>


            <div class="position-relative">
                <img src="spacex_starship.jpg" class="w-100">
                <h1 class="position-absolute wd-nudge-up wd-main-content-text">
                    SpaceX's Starship
                </h1>
            </div>
            
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
