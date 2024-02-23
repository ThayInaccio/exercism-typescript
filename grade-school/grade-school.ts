type StudentRecord = Record<string, number>
interface Student {
  student: string;
  grade: number
}

export class GradeSchool {
  private students: StudentRecord = {};

  roster(): Record<number, Array<string>> {
    const grades = new Set(Object.values(this.students));
    let returnedRoster: Record<number, Array<string>> = {};
    grades.forEach((g) => {
      returnedRoster[g] = this.grade(g)
    })
    return returnedRoster;
  }

  private toList(): Array<Student> {
    const pairs = Object.entries(this.students);
    return pairs.map((pair) => {
      return {
        student: pair[0],
        grade: pair[1]
      }
    })
  }

  add(student: string, grade: number) {
    this.students[student] = grade;
  }

  grade(g: number): Array<string> {
    const students = this.toList().filter(s => s.grade === g).map(s => s.student);
    students.sort();
    return students;
  }
}
