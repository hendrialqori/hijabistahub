import { GrClose } from 'react-icons/gr'
import { useState } from 'react'
import { HiMinusSm, HiPlusSm } from 'react-icons/hi'
import './modal.css'

export const ModalProduct = ({ id, avatar, title, price, size, open, handleOpen }) => {
    const [count, setCount] = useState(0)
    return(
        <section key={Date.now()} className={`${ open ? 'activel modall' : 'modall' }`}>
            <section className="h-[550px] lg:h-auto overflow-auto w-11/12 lg:w-[754px] p-8 mx-auto bg-white" aria-label="modal-card">
                <div onClick={(e)=> handleOpen(e)} className="w-max ml-auto mr-0 cursor-pointer translate-x-3 -translate-y-3"><GrClose className='text-[27px]' /></div>
                <div className='flex flex-col md:flex-row  justify-between gap-5' aria-label='modal-container'>
                    <div className='' aria-label='image-modal'>
                        <img className='w-[23rem] lg:w-[29rem]' src={avatar} alt="avatar-modal"  />
                    </div>
                    <div className='w-11/12 md:w-6/12 p-2 text-xs ' aria-label='information-modal'>
                        <h1 className='text-2xl font-semibold'>{title}</h1>
                        <p className='font-bold text-lg text-gray-700 mt-1'>RM {price}</p>
                        <p className='my-6 font-light'><span className='font-semibold mr-4'>Ref No</span>BB-006</p>
                        <div className='' aria-label='product-detail'>
                            <h1 className='font-semibold mb-1 text-sm'>Product Details:</h1>
                            <p className="text-gray-500 leading-5">Kurung Modern Pattern 2 Layer hand pattern, lace inside and chiffon puff on outside. Material la...</p>
                        </div>
                        <div className='mt-6' aria-label='select-size'>
                            <h1 className='font-semibold text-sm mb-1'>Select:</h1>
                            <div className='flex gap-3'>
                                {
                                    size.map((s, i) => (
                                        <div key={i} className="flex flex-col justify-center items-center border-[1px] border-gray-400 text-gray-400 rounded-md p-2" aria-label='size'>
                                            <p>{s}</p>
                                            <p>years</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='mt-2' aria-label='qty'>
                            <h1 className='font-bold text-sm'>QTY: </h1>
                            <div className='flex justify-center items-center text-lg border-[1px] w-max' aria-label='box-qty'>
                                <button disabled={count <= 1 && true} onClick={()=> setCount(prev => prev - 1)} className='text-xl px-2 py-3 text-gray-400 hover:text-gray-600 hover:bg-gray-200 transition duration-300'><HiMinusSm /></button>
                                <span className='px-7 text-sm'>{count}</span>
                                <button onClick={()=> setCount(prev => prev + 1)} className='text-xl px-2 py-3 text-gray-400 hover:text-gray-600 hover:bg-gray-200 transition duration-300'><HiPlusSm /></button>
                            </div>
                        </div>
                        <button className='bg-black text-white w-full py-4 font-bold tracking-[.14rem] mt-2'>ADD TO BAG</button>
                        <p className='text-sm underline mt-1 text-right'>Views More Details</p>
                    </div>
                </div>
            </section>
        </section>
    )
}