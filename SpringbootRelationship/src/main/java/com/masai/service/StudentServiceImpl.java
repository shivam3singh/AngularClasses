package com.masai.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.masai.model.Course;
import com.masai.model.Student;
import com.masai.repo.CourseRepo;
import com.masai.repo.StudentRepo;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepo studentRepo;
	
	@Autowired
	private CourseRepo courseRepo;
	
	@Override
	public Student registerStudentInCourse(String cname, Student student) {
		// TODO Auto-generated method stub
		Student s=null;
		Course c=courseRepo.findByCourseName(cname);
		if(c!=null) {
			student.getCourses().add(c);
			c.getStudents().add(student);
			s=studentRepo.save(student);
		}
		return s;
		
		
	}

	@Override
	public Set<Student> getListOfStudentsinCourse(String cname) {
		// TODO Auto-generated method stub
		Set<Student> students=	null;
		
		Course c=courseRepo.findByCourseName(cname);
		if(c!=null) {
	 students=	c.getStudents();
			
		}
		return students;
	}

}
