import { useEffect, useState } from "react";
import css from "./Header.module.css"


function Header() {
    // const [clear, setClear] = useState(false)

    const clearLokalStoruage = () =>{
        localStorage.clear();
        // setClear(!clear)
    }
    
    return(
        <div className={css.headerBlock}>
            <div>Logo</div> 
            <button onClick={clearLokalStoruage}>Exit</button>
        </div>
    )
}

export default Header;