import { DIRECTION_NAMES } from './movement-helper.js';

export function translateKeyBoardEventToDirection(key) {
  switch (key) {
    case 'a':
    case 'ArrowLeft':
      return DIRECTION_NAMES.leftTurn;
    case 'w':
    case 'ArrowUp':
      return DIRECTION_NAMES.forward;
    case 's': 
    case 'ArrowDown':
      return DIRECTION_NAMES.backward;
    case 'd':
    case 'ArrowRight':
      return DIRECTION_NAMES.rightTurn;
    default: 
      return undefined;
  }
}