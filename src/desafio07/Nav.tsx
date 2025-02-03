import { NavLink } from "react-router-dom"

export const Nav = () => {
    return (
        <div className="text-green-700 ">
            <a href="/" className='text-white hover:underline'>voltar</a><br />
            <NavLink className="pr-2 hover:text-green-500" to={'/link1'}>Link1</NavLink>
            <NavLink className="pr-2 hover:text-green-500" to={'/link2'}>Link2</NavLink>
            <NavLink className="pr-2 hover:text-green-500" to={'/link3'}>Link3</NavLink>
            <NavLink className="pr-2 hover:text-green-500" to={'/link4'}>Link4</NavLink>
        </div>
    )
}