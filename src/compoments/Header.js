import { memo } from "react"

function Header() {
    console.log('header rendered')
    return(
        <header>Header</header>
    )
}

export default memo(Header)