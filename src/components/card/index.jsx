import { ModalProduct } from "../modal"
import { useState, useCallback } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { LazyLoadImage as Image } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const url1='https://www.hijabistahub.com/scripts/timthumb.php?src=https://www.hijabistahub.com/site_media/img/0L7A9315_20220329224539.jpg&w=500&zc=1'

export const Item = (props) => {
    const { id, avatar, title, price, size } = props
    const [open, setOpen] = useState(false)
    const params = useParams()
    const navigate = useNavigate()

    const handleOpen = useCallback(e => {
        e.stopPropagation()
        setOpen(prev => !prev)
    }, [])

    const toDetail = () => {
        navigate('/' + params.category + '/' + title.toLowerCase().split(' ').join('-') + '#desc')
    }

    return(
        <>
           <ModalProduct
                id={id}
                avatar={avatar}
                title={title}
                price={price}
                size={size}
                open={open}
                handleOpen={handleOpen} 
              /> 
            <figure tabIndex='1' role='button' onClick={() => toDetail()} className={`w-[48%] md:w-[32%] lg:w-[23%] relative cursor-pointer`} aria-label='card-item-container'>
                <header className="relative">
                    <button onClick={(e)=> handleOpen(e)} className='bg-white border-2 h-14 w-32 text-black p-3 absolute top-[50%] right-[25%] font-semibold' aria-label='button-card'>Quick View +</button>
                    <Image onMouseOver={(e)=> e.target.src=url1} onMouseLeave={(e)=> e.target.src=avatar} className='w-[100vw]' src={avatar} alt="avatar-product" />
                </header>
                <figcaption className='text-sm text-center py-4 flex flex-col gap-3' aria-label='title-container'>
                    <h1>{title}</h1>
                    <p>RM {price}</p>
                    <div className="flex gap-4 w-max mx-auto mt-5" aria-label='size-wrapper'>
                    {
                        size?.map((obj, i) => (
                            <div key={i} className='text-xs' aria-label='size-card'>
                                <p>{obj}</p>
                                <p>Years</p>
                            </div>
                        ))
                    }
                    </div>
                </figcaption>
            </figure>
        </>
    )
}