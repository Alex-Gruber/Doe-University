var students = []

$(document).ready(() => {
    if (localStorage.getItem('students') != null)
        students = JSON.parse(localStorage.getItem('students'));

    renderStudentsTable()
})


function createStudent() {
    let prename = $('#inputPrename').val();
    let lastname = $('#inputLastname').val();
    let id = $('#inputId').val()

    let newStudent = new Student(prename, lastname, id)
    students.push(newStudent)

    localStorage.setItem('students', JSON.stringify(students));

    renderStudentsTable()
}

function renderStudentsTable() {
    $('table tr:gt(0)').remove()

    for (let i = 0; i < students.length; i++) {

        $('table').append('<tr class="mein-hover"></tr>');
        let row = $("tr:last");
        $(row).append('<td>' + students[i].prename + '</td>')
        $(row).append('<td>' + students[i].lastname + '</td>')
        $(row).append('<td>' + students[i].id + '</td>')
    }
}

class Student {
    constructor(prename, lastname, id) {
        this.prename = prename;
        this.lastname = lastname;
        this.id = id;
    }
}