class List{
    constructor(){
        this.data = [];        
    }

    add(data){
        this.data.push(data);
        return this.data;
    }

    static mergeTodo(todo1, todo2){
        var tudo = [];
        return tudo.push(todo1,todo2);        
    }
}


class TodoList extends List{

    constructor(){     
        super();
        this.todos = [];   
    }

    addTodo(){
        this.todos.push('novo todo');
        return this.todos;
    }

}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    var todo1 = MinhaLista.addTodo();
    var todo2 = MinhaLista.add("vamo dale");
    console.log(todo1);
    console.log(todo2);
    console.log(MinhaLista.mergeTodo(todo1, todo2));
}