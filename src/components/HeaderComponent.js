function SiteHeader() {
    return (
        <header id="header" id="home" style={{ color: "#000000" }}>
            <div class="header-top">
                <div class="container">
                    <div class="row justify-content-end">
                        <div class="col-lg-8 col-sm-4 col-8 header-top-right no-padding">
                            <ul>
                                <li>
                                    Mon-Fri: 8am to 2pm
                                </li>
                                <li>
                                    Sat-Sun: 11am to 4pm
                                </li>
                                <li>
                                    <a href="tel:(012) 6985 236 7512">(012) 6985 236 7512</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row align-items-center justify-content-between d-flex">
                    <div id="logo">
                        <a href="index.html"><img src="img/logo.png" alt="" title="" /></a>
                    </div>
                    <nav id="nav-menu-container">
                        <ul class="nav-menu">
                            <li class="menu-active"><a href="index.html#home">Home</a></li>
                            <li><a href="index.html#about">About</a></li>
                            <li><a href="index.html#coffee">Coffee</a></li>
                            <li><a href="index.html#review">Review</a></li>
                            <li><a href="index.html#blog">Blog</a></li>
                            <li class="menu-has-children"><a href="index.html">Pages</a>
                                <ul>
                                    <li><a href="generic.html">Generic</a></li>
                                    <li><a href="elements.html">Elements</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default SiteHeader;