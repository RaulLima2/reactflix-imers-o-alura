import React from 'react';

function ButtonLink(propos) {
    return (
        <a href={propos.href} className={propos.className}>
            {propos.children}
        </a>
    );
}

export default ButtonLink;