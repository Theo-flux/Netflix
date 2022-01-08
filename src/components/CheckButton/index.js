import './styles/CheckButton.css'

function Checkbutton( { children }){
    return (
        <div class="page__toggle">
            <label class="toggle">
            <input class="toggle__input" type="checkbox"/>
            <span class="toggle__label">
                <span class="toggle__text">{children}</span>
            </span>
            </label>
        </div>
    )
}


export default Checkbutton