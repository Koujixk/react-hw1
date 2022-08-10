import './Input.css'

const Input = (props) => {
    const {placeholder, id} = props
    return(
        <input placeholder={placeholder} id={id}></input>
    )
}

export default Input