import "./NavigationBar.css"

const NavigationBar = ({children}) => {
    return (
        <div className={"container"}>
            {children}
        </div>
    )
}

export default NavigationBar;