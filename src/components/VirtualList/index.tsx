import React, { ReactNode } from 'react';
import { FixedSizeList as List } from 'react-window';

interface Props {
    list: any[],
    heigthContainer: number,
    widthContainer: number,
    heigthItem: number,
}


export const VirtualList = ({
    list,
    heigthItem,
    heigthContainer,
    widthContainer = 100
}: Props) => {

    const len = list.length || 0

    const Row = ({ index, style }: any) => (list[index]);

    return len > 0
        ? (
            <List
                width={widthContainer} // largura do container
                height={heigthContainer} // Altura do container
                itemCount={len} // Total de itens
                itemSize={heigthItem} // Altura de cada item
            >
                {Row}
            </List>
        )
        : (
            <div>Nenhum item!</div>
        )
} 