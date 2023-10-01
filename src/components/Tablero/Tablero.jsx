import {MemoBlock} from "../MemoBlock/MemoBlock"
import "./Tablero.css"

//* En resumen, el componente Tablero se encarga de representar visualmente el tablero de juego y las cartas de memoria en él. Utiliza el componente MemoBlock para representar cada carta y configura las propiedades necesarias para que el tablero funcione correctamente en tu juego de memoria en React.

export function Tablero({animating,handleMemoClick,memoBlocks}){
    return(<main className="board">
        {memoBlocks.map((item,index)=>{
            return <MemoBlock 
                        key={`${index}_${item.emoji}`} 
                        memoBlock={item} 
                        animating={animating} 
                        handleMemoClick={handleMemoClick}
                    />

        })}

    </main>)
}