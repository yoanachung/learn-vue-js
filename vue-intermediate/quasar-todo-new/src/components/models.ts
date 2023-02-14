export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface TodoTask {
  id: number;
  folderId: number;
  title: string;
  done: boolean;
}

export interface TodoFolder {
  id: number;
  name: string;
}
