package com.masai.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.masai.model.Student;
import com.masai.service.StudentService;

import jakarta.websocket.server.PathParam;

@RestController
public class StudentController {
	
	@Autowired
	private StudentService studentService;

	@PostMapping("/student/{cname}")
	public ResponseEntity<Student> registerStudentInCourseHandler(@PathVariable("cname") String cname ,@RequestBody Student student){
		
		Student s=studentService.registerStudentInCourse(cname,student);
		return new ResponseEntity<Student>(s,HttpStatus.CREATED);
		
		
	}
	@GetMapping("/students/{cname}")
	public ResponseEntity<Set<Student>> getListOfStudentsInACourseHandler(@PathVariable("cname") String cname){
		
		Set<Student> s=studentService.getListOfStudentsinCourse(cname);
		return new ResponseEntity<Set<Student>>(s,HttpStatus.OK);
	}
	
}
