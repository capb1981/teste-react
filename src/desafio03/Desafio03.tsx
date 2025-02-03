import Imagem01 from './img/img01.png'
import Imagem02 from './img/img02.png'
import Imagem03 from './img/img03.png'

export const Desafio03 = () => {
    return (
        <div className='flex flex-col justify-center mx-96'>
            <a href="/" className='text-white hover:underline'>voltar</a>
            <div className="flex w-full gap-5 py-4 mt-4 bg-gray-500">
                <div className='flex flex-col items-center'>
                    <h1 className='text-white text-5xl'>Título</h1>
                    <img src={Imagem01} alt="" className='w-3/5 m-3' />
                </div>
                <div className='w-4/5'>
                    <h2 className='text-white text-4xl '>Primeiro Texto</h2>
                    <p className='text-white text-2xl text-justify py-2 mr-10'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada arcu eget urna malesuada malesuada. Nunc ornare sem et odio eleifend, at ultricies ligula fringilla. Vivamus scelerisque mollis leo, nec facilisis magna dictum eget. Nunc pulvinar leo ultrices orci molestie, at ultricies metus molestie.
                    </p>
                </div>
            </div>

            <div className='flex justify-between gap-4 py-4 bg-gray-600'>
                <div className='w-1/2 pt-8'>
                    <div className='flex justify-between items-center w-full'>
                        <img src={Imagem02} alt="" className='w-1/5 ml-12 mt-3 mb-6 mr-3' />
                        <p className='text-lg text-white'>
                            Etiam quis arcu a tortor vestibulum lobortis ut vel tellus. Sed aliquet nisi non risus hendrerit lacinia.
                        </p>
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <img src={Imagem02} alt="" className='w-1/5 ml-12 mt-3 mb-6 mr-3' />
                        <p className='text-lg text-white'>
                            Etiam quis arcu a tortor vestibulum lobortis ut vel tellus. Sed aliquet nisi non risus hendrerit lacinia.
                        </p>
                    </div>
                </div>
                <div className='flex justify-center flex-wrap  w-1/2 mb-4 gap-5'>
                    <img src={Imagem03} alt="" className='w-32 h-32' />
                    <img src={Imagem03} alt="" className='w-32 h-32' />
                    <img src={Imagem03} alt="" className='w-32 h-32' />
                    <img src={Imagem03} alt="" className='w-32 h-32' />
                    <img src={Imagem03} alt="" className='w-32 h-32' />
                    <img src={Imagem03} alt="" className='w-32 h-32' />
                </div>
            </div>

        </div>
    )
}