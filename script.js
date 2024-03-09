document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Kindly Enter Task Name!!!!")
    }

    else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        `;

        // To remove
        let current_tasks = document.querySelectorAll(".delete");
        for (const element of current_tasks) {
            element.onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}