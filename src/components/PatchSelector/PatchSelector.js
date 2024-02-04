import "./PatchSelector.scss"


export default function PatchSelector() {

    return(
        <div className="patch-selector-container">
            <form className="patch-selector-form">
                <label className="patch-selector-form__label"> select a patch! </label>
                <select  className="patch-selector-form__select">
                <option className="patch-selector-form__option">1</option>                
                <option className="patch-selector-form__option">2</option>
                <option className="patch-selector-form__option">3</option>
                <option className="patch-selector-form__option">4</option>                                                
                </select>
            </form>
            <div className="patch-selector-buttons">
                <button className="patch-selector-buttons__save-patch">Save your patch</button>
            </div>


        </div>


    )
}