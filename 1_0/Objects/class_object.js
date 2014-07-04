/*
Object for a class in the system. 
@Author Jeff Elam
*/

var professorName;
var studentList = [];
/*
Need to fund a way to differentiate between MAT 330 and Abstract Algebra 2 as names for classes.
Probably the best way would be to have a name (AA 2) and title (MAT 330).
*/
var className;
var schoolName;


function newClass(profName,clsName)
{
	this.professorName = profName;
	this.className = clsName;
}

function addStudent(studentName)
{
	this.studentList.push(studentName);
}

function setProfessorName(profName)
{
	this.professorName = profName;
}

function getProfessorName()
{
	return this.professorName;
}

function getStudentList()
{
	return this.studentList;
}

function setClassName(newCLassName)
{
	this.className = newClassName;
}

function getClassName()
{
	return this.className;
}

function setSchoolName(newSchoolName)
{
	this.schoolName = newSchoolName;
}

function getSchoolName()
{
	return this.schoolName;
}