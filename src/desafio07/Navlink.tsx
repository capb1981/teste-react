import { Link } from "react-router-dom"

interface NavlinkProps {
    children: string
}

export const Navlink = (props: NavlinkProps) => {
    return (
        <Link to={''}>
            {props.children}
        </Link>
    )
}