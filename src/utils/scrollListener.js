export default scrollListener = () => {
    const scrollListener = () => {
        if (window.scrollY < 60) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };
    window.addEventListener("scroll", scrollListener);

    return () => {
        window.removeEventListener("scroll", scrollListener);
    };
};