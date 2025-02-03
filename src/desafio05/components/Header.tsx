import Logo from '../img/logo.png'

export const Header = () => {
    return (
        <>
            <div className="flex mx-2 my-2">
                <img src={Logo} alt="Logo" className='' />
                <h2 className='p-4 text-4xl'>Nome do Site</h2>
            </div>
            <div>
                <ul className="flex gap-8 p-2 text-xl">
                    <li className='font-bold hover:text-blue-800'>
                        <a>Link</a>
                    </li>
                    <li className='font-bold hover:text-blue-800'>
                        <a>Link</a>
                    </li>
                    <li className='font-bold hover:text-blue-800'>
                        <a>Link</a>
                    </li>
                    <li className='font-bold hover:text-blue-800'>
                        <a>Link</a>
                    </li>
                    <li className='font-bold hover:text-blue-800'>
                        <a>Link</a>
                    </li>
                </ul>
            </div>
        </>
    )
}