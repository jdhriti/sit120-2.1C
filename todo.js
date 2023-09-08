const app = Vue.createApp({
    data() {
        return {
            newTodo: '',
            todos: [],
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() !== '') {
                this.todos.push({ text: this.newTodo, completed: false });
                this.newTodo = '';
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        deleteCompleted() {
            this.todos = this.todos.filter(todo => !todo.completed);
        },
    },
});

app.mount('#app');
