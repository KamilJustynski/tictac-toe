export interface PlayerInt {
  initialName: string;
  mark: string;
  isActive: boolean;
}

export interface GameBoardInt {
  onSelectSquare: () => void;
  activePlayerSymbol: string;
}
