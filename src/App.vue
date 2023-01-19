<script setup lang="ts">
import { ref } from "vue"
import TodoList from "./components/TodoList.vue"
import { TodoItemType } from "@/types"
import { v4 as uuidv4 } from "uuid"

const newTodo = ref<string>("")
const todoList = ref<TodoItemType[]>([])
const emptyTodo: TodoItemType = {
  id: "",
  item: null,
  description: null,
  done: false
}

function saveTodoItem(todo: string) {
  todoList.value.push({
    ...emptyTodo,
    item: todo,
    id: uuidv4()
  })
  newTodo.value = ""
}
function toggleDone(id: string) {
  const todo = todoList.value.find((t) => t.id === id)
  todo.done = !todo.done
}
function updateItem(e: Event, id: string) {
  const todo = todoList.value.find((t) => t.id === id)
  todo.item = e.value
}

function deleteTodoItem(id: string) {
  const todoIndex = todoList.value.map((t) => t.id).indexOf(id)
  todoList.value.splice(todoIndex, 1)
}
</script>

<template>
  <div class="h-screen flex flex-col pb-4">
    <h1 class="text-3xl p-4">Todos</h1>
    <input
      type="text"
      placeholder="Create a new todo..."
      v-model="newTodo"
      class="m-4 rounded border-gray-200 focus:border-red-500 focus:ring-0 placeholder:text-gray-400 text-gray-700"
      @keyup.enter="saveTodoItem(newTodo)"
    />
    <TodoList
      :todo-list="todoList"
      @toggle-done="toggleDone"
      @update-item="updateItem"
      @delete-todo="deleteTodoItem"
    />
  </div>
</template>

<style scoped></style>
