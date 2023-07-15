package com.masai.service;

import java.util.List;
import java.util.Set;

import com.masai.model.Student;

public interface StudentService {

	public Student registerStudentInCourse(String cname, Student student);
	
	public Set<Student> getListOfStudentsinCourse(String cname);
}
