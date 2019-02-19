
export class CoursesService {
    // ng g s // generate service
    getCourses() {
        return [
            { id: 1, name: 'course1' },
            { id: 2, name: 'course2' },
            { id: 3, name: 'course3' },
        ];
    }
}