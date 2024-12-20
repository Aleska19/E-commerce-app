import { NavLink } from "react-router-dom"

const navbar = () => {
    const activeStyle = 'underline underline-offset-4'
    return(
        <nav className="flex justify-between item-center fixed z-10 w-full py-5 px-8 text-sm font-light bg-purple-100 top-0">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink  to= '/' >
                        ShopiStore
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to= '/' 
                    className={({ isActive}) =>
                        isActive ? activeStyle : undefined

                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to= '/clothes' 
                    className={({ isActive}) =>
                        isActive ? activeStyle : undefined

                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                     to= '/electronics'
                      className={({ isActive}) =>
                        isActive ? activeStyle : undefined

                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                     to= '/furnitures' 
                     className={({ isActive}) =>
                        isActive ? activeStyle : undefined

                    }>
                        furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to= '/toys' 
                    className={({ isActive}) =>
                        isActive ? activeStyle : undefined

                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                     to= '/others' 
                     className={({ isActive}) =>
                        isActive ? activeStyle : undefined

                    }>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                        aleska@gmail.com
                </li>
                <li>
                    <NavLink
                     to= '/my-Orders' 
                     className={({ isActive}) =>
                        isActive ? activeStyle : undefined

                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                     to= '/my-Account' 
                     className={({ isActive}) =>
                        isActive ? activeStyle : undefined

                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to= '/sig-nin' 
                    className={({ isActive}) =>
                        isActive ? activeStyle : undefined

                    }>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    🛒 0
                </li>
            </ul>
        </nav>
    )
}

export default navbar;