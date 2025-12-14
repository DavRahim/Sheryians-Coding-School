let tasksData = {};

const todo = document.querySelector('#todo');
const progress = document.querySelector('#progress');
const done = document.querySelector('#done');
const columns = [todo, progress, done]
let dragElement = null;



function addTask(title, desc, column) {
    const div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("draggable", "true");
    div.innerHTML = `
      <h2> ${title} </h2>
     <p>${desc}</p>
     <button>Delete</button>
    `
    column.appendChild(div);
    div.addEventListener('drag', (e) => {
        dragElement = div;
    })

    const deleteButton = div.querySelector("button");
    deleteButton.addEventListener("click", () => {
        div.remove();
        updateTaskCount()
    })

    return div;
}

function updateTaskCount() {
    columns.forEach(col => {
        const tasks = col.querySelectorAll('.task');
        const count = col.querySelector('.right');

        tasksData[col.id] = Array.from(tasks).map(t => {
            return {
                title: t.querySelector("h2").innerText,
                desc: t.querySelector("p").innerText
            }
        })
        console.log(tasksData);

        localStorage.setItem('tasks', JSON.stringify(tasksData))
        count.innerText = tasks.length;
    })
}




if (localStorage.getItem("tasks")) {
    const data = JSON.parse(localStorage.getItem("tasks"));

    for (const col in data) {
        const column = document.querySelector(`#${col}`);
        data[col].forEach(task => {
            addTask(task.title, task.desc, column)
            // const div = document.createElement('div');
            // div.classList.add("task");
            // div.setAttribute("draggable", "true");

            // div.innerHTML = `
            //                 <h2> ${task.title} </h2>
            //                 <p>${task.desc}</p>
            //                 <button>Delete</button>
            //                 `
            // column.appendChild(div);
            // div.addEventListener("drag", (e) => {
            //     dragElement = div
            // })

        })

        // const tasks = column.querySelectorAll(".task");
        // const count = column.querySelector('.right');
        // count.innerText = tasks.length;
    }

    updateTaskCount();
}

const tasks = document.querySelectorAll('.task');

tasks.forEach(task => {
    task.addEventListener('drag', (e) => {
        dragElement = task;
    })
})

// progress.addEventListener("dragenter", (e) => {
//     progress.classList.add("hover-over");
//     console.log("da", e);

// })
// progress.addEventListener("dragleave", (e) => {
//     progress.classList.remove("hover-over");
// });

// todo.addEventListener("dragenter", (e) => {
//     todo.classList.add("hover-over");
//     console.log("da", e);

// })
// todo.addEventListener("dragleave", (e) => {
//     todo.classList.remove("hover-over");
// });


// done.addEventListener("dragenter", (e) => {
//     done.classList.add("hover-over");
//     console.log("da", e);

// })
// done.addEventListener("dragleave", (e) => {
//     done.classList.remove("hover-over");
// });




function addDragEventColumn(column) {
    column.addEventListener('dragenter', (e) => {
        e.preventDefault();
        column.classList.add('hover-over')
    });
    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove('hover-over')
    });

    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    })
    column.addEventListener("drop", (e) => {
        e.preventDefault();

        console.log("dropped,", dragElement, column);
        column.appendChild(dragElement);
        column.classList.remove("hover-over")

        // columns.forEach(col => {
        //     const tasks = col.querySelectorAll('.task');
        //     const count = col.querySelector('.right');
        //     count.innerText = tasks.length;
        // })
        // columns.forEach(col => {
        //     const tasks = col.querySelectorAll('.task');
        //     const count = col.querySelector('.right');

        //     tasksData[col.id] = Array.from(tasks).map(t => {
        //         return {
        //             title: t.querySelector("h2").innerText,
        //             desc: t.querySelector("p").innerText
        //         }
        //     })

        //     console.log(tasksData);

        //     localStorage.setItem('tasks', JSON.stringify(tasksData))
        //     count.innerText = tasks.length;
        // })
        updateTaskCount();
    })
}



addDragEventColumn(todo)
addDragEventColumn(progress)
addDragEventColumn(done)

// modal related logic;

const toggleModalButton = document.querySelector("#toggle-modal");
const modalBg = document.querySelector(".bg");
const modal = document.querySelector('.modal');
const addTaskButton = document.querySelector('#add-new-task')

toggleModalButton.addEventListener('click', () => {
    modal.classList.toggle('active')
})

modalBg.addEventListener("click", () => {
    modal.classList.remove("active")
})

addTaskButton.addEventListener('click', () => {
    const taskTitle = document.querySelector('#task-title-input').value;
    const taskDesc = document.querySelector('#task-desc-input').value;

    // const div = document.createElement('div');

    // div.classList.add('task');
    // div.setAttribute('draggable', true);

    // div.innerHTML = `
    //  <h2> ${taskTitle} </h2>
    //  <p>${taskDesc}</p>
    //  <button>Delete</button>
    // `
    // todo.appendChild(div);

    addTask(taskTitle, taskDesc, todo)

    // columns.forEach(col => {
    //     const tasks = col.querySelectorAll('.task');
    //     const count = col.querySelector('.right');

    //     tasksData[col.id] = Array.from(tasks).map(t => {
    //         return {
    //             title: t.querySelector("h2").innerText,
    //             desc: t.querySelector("p").innerText
    //         }
    //     })

    //     console.log(tasksData);

    //     localStorage.setItem('tasks', JSON.stringify(tasksData))
    //     count.innerText = tasks.length;
    // });

    updateTaskCount()

    // div.addEventListener('drag', (e) => {
    //     dragElement = div
    // })

    modal.classList.remove("active")

    document.querySelector('#task-title-input').value = "";
    document.querySelector('#task-desc-input').value = "";


})





