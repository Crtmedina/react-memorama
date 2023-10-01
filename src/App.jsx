import { Tablero } from "./components/Tablero/Tablero";
import "./App.css";
import { useEffect, useState } from "react";

const emojiList = [..."💀👻🧛🌮🎱🍬🍕🦖"];

function App() {

  //* variables que contendrá el estado actual de las cartas de memoria en tu juego.
  const [memobloquesbarajados, setmemobloquesbarajados] = useState([]);

  //* e utiliza para controlar si se está realizando una animación en tu juego de memoria. Inicialmente, se establece en false, lo que significa que no hay animación en curso al principio.
  const [animating, setAnimating] = useState(false);

  //*se utiliza para rastrear la carta de memoria seleccionada actualmente en tu juego. Inicialmente, se establece en null, lo que significa que no hay ninguna carta de memoria seleccionada al principio del juego.
  const [selectedMemoBlock, setselectedMemoBlock] = useState(null);

  //* baraja la lista de emojis, crea objetos para representar las cartas y actualiza el estado del componente con las cartas barajadas cuando el componente se monta por primera vez.

  //* esta parte de código se encarga de barajar la lista de emojis, duplicarla, y crear objetos para representar las cartas de memoria en un estado inicial. Esto asegura que al comienzo del juego, las cartas de memoria estén en un orden aleatorio y listas para ser mostradas en el componente Tablero
  useEffect(() => {
    const barajadoEmojiLista = barajarArray([...emojiList, ...emojiList]);
    setmemobloquesbarajados(
      barajadoEmojiLista.map((emoji, i) => ({
        index: i,
        emoji,
        flipped: false,
      }))
    );
  }, []);

  //* Esta funcion llama a un for el cual itera uno por uno los elemenos del arrya en este caso los emoticonos hasta quedar todos barajados aleatoriamente
  const barajarArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
      console.log(a);
    }
    return a;
  };


  //* En resumen, esta función se encarga de manejar los clics en las cartas de memoria y gestionar su comportamiento en el juego. Voltea las cartas cuando se hacen clic en ellas, comprueba si coinciden o no, inicia y detiene animaciones y actualiza el estado del juego en consecuencia
  const handleMemoClick = (memoBlock) => {
    const MemoBlockInvertido = { ...memoBlock, flipped: true }; //* Aquí, creas una copia de la carta de memoria que se ha hecho clic (memoBlock) y le cambias la propiedad flipped a true. Esto indica que la carta ha sido volteada.
    let memobloquesbarajadosCopy = [...memobloquesbarajados]; //* Creas una copia del estado actual de las cartas de memoria barajadas
    memobloquesbarajadosCopy.splice(memoBlock.index, 1, MemoBlockInvertido);

    setmemobloquesbarajados(memobloquesbarajadosCopy);
    if(selectedMemoBlock === null){
      setselectedMemoBlock(memoBlock)
    } else if (selectedMemoBlock.emoji === memoBlock.emoji){
      setselectedMemoBlock(null);
    } else{
      setAnimating(true)
      setTimeout(()=>{
        memobloquesbarajadosCopy.splice(memoBlock.index,1,memoBlock)
        memobloquesbarajadosCopy.splice(selectedMemoBlock.index,1,selectedMemoBlock)
        setmemobloquesbarajados(memobloquesbarajadosCopy)
        setselectedMemoBlock(null);
        setAnimating(false);
      },1000)
    }

  };

  return <Tablero 
            memoBlocks={memobloquesbarajados}
            handleMemoClick={handleMemoClick}
            animating={animating} 
          />;
}

export default App;
