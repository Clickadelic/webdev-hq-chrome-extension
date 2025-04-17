import { create } from "zustand"
import { persist } from "zustand/middleware"

type Todo = {
	id: string
	name: string
	done: boolean
}

type TodoStore = {
	todos: Todo[]
	addTodo: (name: string) => void
	toggleTodo: (id: string) => void
	deleteTodo: (id: string) => void
}

export const useTodoStore = create<TodoStore>()(
	persist(
		(set, get) => ({
			todos: [],
			addTodo: name => {
				const newTodo = { id: crypto.randomUUID(), name, done: false }
				set({ todos: [...get().todos, newTodo] })
			},
			toggleTodo: id => {
				const updated = get().todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo))
				set({ todos: updated })
			},
			deleteTodo: id => {
				set({ todos: get().todos.filter(todo => todo.id !== id) })
			}
		}),
		{
			name: "todo-storage" // key für localStorage
		}
	)
)
