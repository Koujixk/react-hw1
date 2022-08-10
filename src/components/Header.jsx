import './Header.css'

const Header = (props) => {
    const {headerElements} = props
    console.log(headerElements)
    return(
        <header>
            <ul>
                <li><a href="#">{headerElements[0]}</a></li>
                <li><a href='#'>{headerElements[1]}</a></li>
                <li><a href='#'>{headerElements[2]}</a></li>
            </ul>
        </header>
    )
}

export default Header