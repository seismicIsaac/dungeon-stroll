export const FACING_DIRECTION = ['north', 'east', 'south', 'west'];
const CARDINAL_DIRECTIONS = {
  north: 'north',
  east: 'east',
  south: 'south',
  west: 'west',
}
const MOVE_DIRECTION = {
  leftTurn: -1,
  rightTurn: 1,
  forward: -1,
  backward: 1,
  left: -1,
  right: 1,
}
export const DIRECTION_NAMES = {
  leftTurn: 'leftTurn',
  rightTurn: 'rightTurn',
  forward: 'forward',
  backward: 'backward',
  left: 'left',
  right: 'right',
}

const BASE_MOVEMENT_DELTAS = {
  //Facing north
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
  forward: { x: 0, y: -1},
  backward: { x: 0, y: 1}
}

export function calculateMapPositionUpdate(facingDirection, inputDirection) {
    let deltaX = 0;
    let deltaY = 0;

    if (!inputDirection) {
      return { x: 0, y: 0, facingDirection: facingDirection };
    }
  // If we're turning, calculate the new facing direction.
    if (inputDirection === DIRECTION_NAMES.leftTurn || inputDirection === DIRECTION_NAMES.rightTurn) {
      facingDirection = calculateFacingDirection(facingDirection, inputDirection);
    } // We're moving forward in one of the cardinal directions. 
    else {
      const movementDelta = calculateMovementDelta(facingDirection, inputDirection);
      deltaX += movementDelta.x;
      deltaY += movementDelta.y;
    }
    return { x: deltaX,
             y: deltaY,
             facingDirection: facingDirection
    };
};

function calculateFacingDirection(facingDirection, inputDirection) {
  const currentIndex = FACING_DIRECTION.indexOf(facingDirection);
  let newFacingIndex = currentIndex + MOVE_DIRECTION[inputDirection];
  if (newFacingIndex < 0) {
    newFacingIndex = FACING_DIRECTION.length + newFacingIndex;
  } else if (newFacingIndex > FACING_DIRECTION.length - 1) {
    newFacingIndex = newFacingIndex - FACING_DIRECTION.length;
  }
  return FACING_DIRECTION[newFacingIndex];
};

function calculateMovementDelta(facingDirection, inputDirection) {
  const baseMovementDelta = BASE_MOVEMENT_DELTAS[inputDirection];
  let movementDelta = { x: baseMovementDelta.x, y: baseMovementDelta.y};
  let temp = 0;

  // Movement keys are relative to facing direction. Translate input into a movement
  // delta depending on the current direction we're facing.
  if (facingDirection === CARDINAL_DIRECTIONS.south) {
    movementDelta.x = movementDelta.x * (-1);
    movementDelta.y = movementDelta.y * (-1);
  } else if (facingDirection === CARDINAL_DIRECTIONS.west) {
    temp = movementDelta.x;
    movementDelta.x = movementDelta.y;
    movementDelta.y = temp * (-1);
  } else if (facingDirection === CARDINAL_DIRECTIONS.east) {
    temp = movementDelta.x;
    movementDelta.x = movementDelta.y * (-1);
    movementDelta.y = temp;
  }
  return movementDelta;
}