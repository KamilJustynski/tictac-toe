export interface PlayerInt {
  initialName: string;
  mark: string;
  isActive: boolean;
}

export interface GameBoardInt {
  onSelectSquare: (row: number, col: number) => void;
  turns: GameTurnInt[];
}

export interface GameTurnInt {
  square: {
    row: number;
    col: number;
  };
  player: string;
}
