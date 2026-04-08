import React from 'react';
import ListItem from '../productsCards/ListItem';

const PricingCard = ({card}) => {
    const {name, description,features,price,period,buttonText,isPopular} = card;
    return (
        <div className={`${isPopular? "bg-linear-to-r from-purple-600 via-purple-800 to-purple-900 text-white " : "bg-[#F9FAFC]"} p-6 flex flex-col h-full rounded-xl space-y-6`}>
            {
               isPopular && <h3 className='bg-[#FEF3C6] text-[#BB4800]  p-2 rounded-full text-center w-30 mx-auto z-10 relative -top-10'>Most Popular</h3>
                
                }
            <h2 className='font-bold text-2xl'>{name}</h2>
            <p className={`${isPopular? "text-white" : "text-[#627382]"} text-[16px]`}>{description}</p>
            <div className={`${isPopular? "text-white" : "text-[#101727]"} font-bold text-4xl`}>${price}<span className={`${isPopular? "text-white" : "text-[#627382]"} text-xl font-normal`}>/{period}</span></div>
            <div className='grow'>
                <ul className={`font-medium text-[16px] ${isPopular? "text-white" : "text-[#627382]"}`}>
                    {
                    features.map((item,index)=>{
                        return(
                            <ListItem key={index} item={item}/>
                        )
                    })
                    }
                </ul>
            </div>
            <button className={`btn rounded-full ${isPopular? "bg-white text-purple-500" : "bg-linear-to-r from-purple-600 via-purple-800 to-purple-900 text-white"}`}>{buttonText}</button>
        </div>
    );
};

export default PricingCard;