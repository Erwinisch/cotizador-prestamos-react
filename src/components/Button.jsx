

function Button({operador, fn}) {

  return (
    <button 
        type='button'
        className='h-10 w-10 flex  justify-center rounded-full bg-lime-500 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500 text-white font-bold text-2xl' 
        onClick={fn}
    >{operador}</button>
  )
}

export default Button;