import React from 'react';
import { FaCheck } from 'react-icons/fa';

const ListItem = ({item}) => {
    console.log(item)
    return (
        <li className='flex gap-2 items-center font-medium text-[16px] text-[#627382]'>
            <FaCheck className='text-[#30B868]'/> {item}
        </li>
    );
};

export default ListItem;