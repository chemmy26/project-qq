let scheduleCount = 1;

function addSchedule() {
    const scheduleContainer = document.getElementById('scheduleContainer');

    const scheduleItem = document.createElement('div');
    scheduleItem.classList.add('schedule-item');
    scheduleItem.innerHTML = `
        <h4>Schedule ${scheduleCount}</h4>
        <div class="form-group">
            <label for="classSchedule${scheduleCount}">Class Schedule</label>
            <input type="text" class="form-control" id="classSchedule${scheduleCount}" placeholder="Enter your class schedule" required>
        </div>
        <div class="form-group">
            <label for="teacherName${scheduleCount}">Teacher's Name</label>
            <input type="text" class="form-control" id="teacherName${scheduleCount}" placeholder="Enter your teacher's name" required>
        </div>
        <div class="form-group">
            <label for="roomNumber${scheduleCount}">Room Number</label>
            <input type="text" class="form-control" id="roomNumber${scheduleCount}" placeholder="Enter your room number" required>
        </div>
    `;

    scheduleContainer.appendChild(scheduleItem);
    scheduleCount++;
}

document.getElementById('scheduleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const scheduleTableBody = document.getElementById('scheduleTableBody');
    scheduleTableBody.innerHTML = '';

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    daysOfWeek.forEach(day => {
        const classSchedule = document.getElementById(`classSchedule${daysOfWeek.indexOf(day) + 1}`).value;
        const teacherName = document.getElementById(`teacherName${daysOfWeek.indexOf(day) + 1}`).value;
        const roomNumber = document.getElementById(`roomNumber${daysOfWeek.indexOf(day) + 1}`).value;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${day}</td>
            <td>${classSchedule}</td>
            <td>${teacherName}</td>
            <td>${roomNumber}</td>
        `;

        scheduleTableBody.appendChild(row);
    });

    document.getElementById('scheduleTableContainer').style.display = 'block';
});
