const students = [];

const GetStudents = (req, res) =>{
    console.log({headers: req.headers })
    const query = req.query

    let studentsArrayDuplicate = students;
    if (query.progam){
        studentsArrayDuplicate = studentsArrayDuplicate.filter(std.progam.includes(query.progam))               
    }

if (query.limit){
  studentsArrayDuplicate = studentsArrayDuplicate.slice(0, req.limi - 1)
}}