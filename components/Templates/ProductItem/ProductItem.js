import Link from "next/link"
import react from "react"
import LazyLoad from "react-lazyload"
import { FormatPrice } from "../../../lib/utils"

export default function ProductItem(props){
    const { product } = props
    return(
        <Link legacyBehavior href={`product/${product.id}`}>
            <a aria-label={product.name} className="max-w-prodBox m-auto block">
                <div className="bg-white w-full max-w-prodBox pb-3 m-auto betterhover:cursor-pointer">
                    <LazyLoad height={240} offset={100}>
                        <img
                            className="w-full h-60 object-fill"
                            src={product.image} 
                        />
                    </LazyLoad>
                    <p className="text-center text-primary line-clamp-2 px-2 h-12">{product.name}</p>
                    <p className="text-center text-black font-semibold">Precio</p>
                    <div className="bg-secondary text-center text-white">
                        {`$ ${FormatPrice(product.price)}`}
                    </div>
                </div>
            </a>
        </Link>
    )

}