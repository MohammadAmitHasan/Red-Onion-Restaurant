import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    const activeStyles = {
        color: match ? '#FF0051' : '',
        borderBottom: match ? '2px solid red' : '2px solid white'
    }

    return (
        <div>
            < Link style={activeStyles} className='block text-center text-lg border-2 border-white mx-5 py-1 font-semibold'
                to={to}
                {...props}
            >
                {children}
            </Link >
        </div >
    );
}
export default CustomLink;