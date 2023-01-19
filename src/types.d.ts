export interface TodoItemType {
  id: string
  item: string
  description: string
  done: boolean
}

export interface TodoList {
  id: string
  label: string
  description: string
  todos: TodoItem[]
}
