import React, { ReactNode } from 'react';
import { Whatsapp } from 'react-bootstrap-icons';

interface CardActionSharedProps {
    id?: string
    icon?: ReactNode
}
function CardActionShared({ id, icon }: CardActionSharedProps) {
    return (
        <a
            className="card-action__shared"
            href={`https://api.whatsapp.com/send?text=Olha esse video que tenho no Dash https://youtu.be/${id}`}
            target="_blank"
            rel="noreferrer"
        >
            { icon ? icon : <Whatsapp />}
        </a>
    )
}

export default React.memo(CardActionShared)