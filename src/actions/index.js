export const ADDTASK = 'ADDTASK';
export const MOVELEFT = 'MOVELEFT';
export const MOVERIGHT = 'MOVERIGHT';


export const addTask = (task) => {
  return {
    type: ADDTASK,
    payload:task
  }
}

export const moveLeft = (text) => {
  return {
    type: MOVELEFT,
    payload:text
  }
}

export const moveRight = (text) => {
  return {
    type: MOVERIGHT,
    payload:text
  }
}