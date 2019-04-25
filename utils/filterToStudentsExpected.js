function filterToStudentsExpected(allStudents, cohortsToCheck) {
  const studentsExpected = allStudents.filter(student => {
    const filters = [];
    filters.push(cohortsToCheck.includes(student.cohort));
    filters.push(student.student_status === 'Enrolled');
    // filters.push(student.absent_for_next_class === 'FALSE')
    return filters.every(el => el);
  });

  return studentsExpected;
}

module.exports = filterToStudentsExpected;
