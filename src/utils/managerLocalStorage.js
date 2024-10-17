
export function saveLocalStorage( newTurn, newBoard) {
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', JSON.stringify(newTurn))
}

export function removeLocalStorage() {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}