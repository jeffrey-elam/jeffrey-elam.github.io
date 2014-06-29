/*
Object for a person in the system. 
@Author Jeff Elam
*/

var firstName = "";
var lastName = "";
var emailAddress = "";
var school = "";


/**********************
I create a new person
@param fName
@param lName
@param email
@param schl
**********************/
function newUser(fName,lName,email,schl)
{
	this.firstName = fName;
	this.lastName = lName;
	this.emailAddress = email;
	this.school = schl;
}


/**********************
I get users first Name
**********************/
function getFirstName()
{
	return this.firstName;
}

/**********************
I get users last Name
**********************/
function getLastName()
{
	return this.lastName;
}

/**********************
I get users Email
**********************/
function getEmailAddress()
{
	return this.emailAddress;
}

/**********************
I get users school
**********************/
function getSchool()
{
	return this.school;
}

/******************************
I set users first Name

@param fName: User's first Name
******************************/
function setFirstName(fName)
{
	this.firstName = fName;
}

/*****************************
I set users last Name

@param lName: User's last name
*****************************/
function setLastName(lName)
{
	this.lastName = lName;
}

/*************************
I set users email

@param email: User's email
*************************/
function setEmail(email)
{
	this.emailAddress = email;
}

/*************************
I set users school

@param schl: User's school
*************************/
function setSchool(schl)
{
	this.school = schl;
}

/*****************************************
I set the image for the user's profile

@param imageSource: source for image
*****************************************/
function updateProfilePicture(imageSource)
{
	//Nothing yet
}