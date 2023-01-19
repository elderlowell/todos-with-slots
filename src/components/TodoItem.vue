<script lang="ts" setup>
import { TodoItemType } from "@/types"

const props = defineProps<{
  todo: TodoItemType
}>()

const emit = defineEmits<{
  (e: "toggleDone", id: string): void
  (e: "updateItem", data: Event, id: string): void
  (e: "deleteTodo", id: string): void
}>()
</script>

<template>
  <div class="w-full px-4 flex items-center">
    <input
      type="checkbox"
      :checked="props.todo.done"
      class="h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-500 mr-1"
      @click="emit('toggleDone', props.todo.id)"
    />
    <div class="flex-1 relative">
      <input
        type="text"
        placeholder="untitled"
        :value="props.todo.item"
        @input="emit('updateItem', $event, props.todo.id)"
        class="border-0 focus:border-b focus:border-red-500 w-full focus:ring-0 font-medium text-gray-700 placeholder:text-gray-400"
        :class="{ 'line-through text-gray-400': props.todo.done }"
      />
      <button
        class="absolute right-3 top-0 h-full"
        @click="emit('deleteTodo', props.todo.id)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
