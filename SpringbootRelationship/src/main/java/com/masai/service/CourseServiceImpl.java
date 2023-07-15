package com.masai.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.masai.model.Course;
import com.masai.model.Student;
import com.masai.repo.CourseRepo;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseRepo cDao;

	@Override
	public Course registerNerCourse(Course course) {
		// TODO Auto-generated method stub
		
	    Set<Student> students= course.getStudents();
	//associating each other
	    for(Student s: students ) {
	    	s.getCourses().add(course);
	    }
		
		
		return cDao.save(course);
		
	
	}
	
	

}
