export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface TodoTask {
  id: string;
  folderId: string;
  title: string;
  done: boolean;
}

export interface TodoFolder {
  id: string;
  name: string;
}
