
export interface IncompleteTodosProps {
  todos: string[];
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
}