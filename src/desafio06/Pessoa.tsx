import Img01 from '../desafio06/img/img01.png'

export const Pessoa = () => {
    return (
        <>
            <div className="bg-gray-100 p-8 m-10 shadow overflow-hidden rounded-xl md:flex md:p-0">
                <img className="w-40 h-40 rounded-full mx-auto md:rounded-none md:w-48 md:h-auto" src={Img01} alt="" />
                <div className='pt-6 text-center space-y-4 md:text-justify md:p-8'>
                    <div className='text-black text-lg text-justify font-semibold'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ducimus nihil expedita excepturi quaerat consequuntur saepe, vitae, ipsa, modi voluptate facilis quas optio rem dolorem rerum beatae et dolores nostrum.
                    </div>
                    <div className='font-medium'>
                        <div className='text-blue-600 font-bold'>Nome</div>
                        <div className='text-gray-500'>Profissão</div>
                    </div>
                </div>
            </div>
        </>
    )
}