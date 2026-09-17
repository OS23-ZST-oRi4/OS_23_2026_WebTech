function CourseCard(){
    const course = {
        name: "React/JSX",
        teacher: "Pablo Picasso",
        hours: 25,
        completed: false
    }

    return (
        <>
            <section>
                <h2 className="h2_course_name">Nazwa kursu: {course.name}</h2>
                <p className="p_course_info">Nauczyciel: {course.teacher}</p>
                <p className="p_course_info">Liczba godzin: {course.hours}</p>
                <p className="p_course_info">Liczba minut: {course.hours * 60}</p>
            </section>
        </>
    );
}

export default CourseCard;