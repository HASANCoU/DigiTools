import React from 'react';
import { FaCheck } from 'react-icons/fa';

const ListItem = ({item}) => {
    return (
        <li className='flex gap-2 items-center'>
            <FaCheck className='text-[#30B868]'/> {item}
        </li>
    );
};

export default ListItem;