export interface PlayerInt {
  initialName: string;
  mark: string;
  isActive: boolean;
}

export interface GameBoardInt {
  onSelectSquare: (row: number, col: number) => void;
  board: string[][];
}

export interface GameTurnInt {
  square: {
    row: number;
    col: number;
  };
  player: string;
}

export interface LogInt {
  turns: GameTurnInt[];
}
