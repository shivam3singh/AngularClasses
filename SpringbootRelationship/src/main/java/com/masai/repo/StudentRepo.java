package com.masai.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.masai.model.Student;

public interface StudentRepo extends JpaRepository<Student,Integer>{

}
