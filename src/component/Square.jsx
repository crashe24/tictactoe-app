const Square = ({children, isSelected, updateBoard, index}) => {
    const classNameSquare = `square ${isSelected ? 'is-selected': ''}`
  
    const handleClick = () => {
      updateBoard(index)
    }
  
    return (
      <div className={classNameSquare} onClick={handleClick}>
        {children}
      </div>
    )
  }

  export default Square