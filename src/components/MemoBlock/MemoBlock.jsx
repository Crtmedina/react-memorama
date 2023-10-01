import "./MemoBlock.css";

//* el componente MemoBlock se utiliza para representar visualmente una carta de memoria en el juego. Puede mostrar la parte frontal y trasera de la carta, y se puede hacer clic en ella para interactuar con el juego. La apariencia y el comportamiento de cada carta se personalizan utilizando las propiedades que se pasan al componente.

export function MemoBlock({memoBlock, animating, handleMemoClick}) {
    return (
        <div 
            className="memo-block" 
            onClick={()=>!memoBlock.flipped && !animating && handleMemoClick(memoBlock)}>
            <div className={`memo-block-inner ${memoBlock.flipped && "memo-block-flipped"}`}>
                <div className="memo-block-front">

                </div>
                <div className="memo-block-back">
                    {memoBlock.emoji}
                </div>
            </div>
        </div>  
    )
}