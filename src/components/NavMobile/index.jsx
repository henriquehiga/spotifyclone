import './navmobile.css'
export const NavMobile = () => {
    return(
        <div className="mobileNavContainer">
            <span className="mobileNavItem itemActive">
                <i class="fas fa-home"></i>
                <b>Home</b>
            </span>

            <span className="mobileNavItem">
                <i class="fas fa-search"></i>
                <b>Search</b>
            </span>

            <span className="mobileNavItem">
                <i class="fas fa-book-open"></i>
                <b>Your Library</b>
            </span>
        </div>
    );
}