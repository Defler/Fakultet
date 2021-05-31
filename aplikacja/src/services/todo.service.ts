import { omdApiKey } from '../key';
import store from '../store';
import { todosActions } from '../store/actions/todos.actions';
import { Todo } from '../store/reducers/todos.reducer';

export class TodoService {
    setNewTodo(todo: Todo) {
        store.dispatch(todosActions.setNewTodo(todo));
    }

    setTodoDone(todo: Todo) {
        store.dispatch(todosActions.setTodoDone(todo.id));
    }

    setDeleteTodo(todo: Todo) {
        store.dispatch(todosActions.setDeleteTodo(todo));
    }

    getAllTodos() {
        const response = await < any > http.get(url, {
            apikey: omdApiKey,
            s: name,
            page
        });

        if (response) {
            store.dispatch(todosActions.setNewTodo({
                id: response.id,
                description: response.description,
                done: response.done,
                label: response.label
            }))
        }
    }

}