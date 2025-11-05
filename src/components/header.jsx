import Logo from "/img/dc-logo.png?url";

export default function Header(){
    return(
        <header>
            <div className="container">
                <section className="left">
                    <img src={Logo} className="logo" />
                </section>
                <section className="right">
                    <ul>
                        <nav className="navbar navbar-expand-sm navbar-light">
                                    <div className="navbar-nav">
                                        <a className="nav-link" aria-current="page" href="#">CHARACTERS</a>
                                        <a className="nav-link" aria-current="page" href="#">COMICS</a>
                                        <a className="nav-link" aria-current="page" href="#">MOVIES</a>
                                        <a className="nav-link" aria-current="page" href="#">TV</a>
                                        <a className="nav-link" aria-current="page" href="#">GAMES</a>
                                        <a className="nav-link" aria-current="page" href="#">COLLECTIBLES</a>
                                        <a className="nav-link" aria-current="page" href="#">VIDEOS</a>
                                        <a className="nav-link" aria-current="page" href="#">FANS</a>
                                        <a className="nav-link" aria-current="page" href="#">NEWS</a>
                                        <a className="nav-link" aria-current="page" href="#">SHOP</a>
                                        
                                    </div>
                            
                        </nav>
                    </ul>
                </section>
            </div>
        </header>
    )
}