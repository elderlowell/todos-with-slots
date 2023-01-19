<script setup lang="ts">
import { computed } from "vue"
import TodoItem from "@/components/TodoItem.vue"
import { TodoItemType } from "@/types"

const props = defineProps<{
  todoList: TodoItemType[]
}>()
const emit = defineEmits<{
  (e: "toggleDone", id: string): void
  (e: "updateItem", data: Event, id: string): void
  (e: "deleteTodo", id: string): void
}>()
const pendingTodos = computed(() => {
  return props.todoList.filter((t) => !t.done)
})
const doneTodos = computed(() => {
  return props.todoList.filter((t) => t.done)
})
</script>

<template>
  <ul>
    <li v-for="todo in pendingTodos" :key="todo.id">
      <slot :item="todo">
        <TodoItem
          :todo="todo"
          @toggle-done="emit('toggleDone', todo.id)"
          @update-item="emit('updateItem', $event, todo.id)"
          @delete-todo="emit('deleteTodo', todo.id)"
        />
      </slot>
    </li>
  </ul>
  <div class="mt-auto">
    <h2 class="text-xl p-4 text-gray-400">Done</h2>
    <ul>
      <li v-for="todo in doneTodos" :key="todo.id">
        <slot :item="todo">
          <TodoItem
            :todo="todo"
            @toggle-done="emit('toggleDone', todo.id)"
            @update-item="emit('updateItem', $event, todo.id)"
            @delete-todo="emit('deleteTodo', todo.id)"
          />
        </slot>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
