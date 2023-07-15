package com.masai.model;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
public class Course {

	
	
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private Integer courseId;
		private String courseName;
		private Integer fee;
		
		@ManyToMany(cascade = CascadeType.ALL,mappedBy = "courses")
		private Set<Student> students= new HashSet<>();

		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			Course other = (Course) obj;
			return Objects.equals(courseId, other.courseId) && Objects.equals(courseName, other.courseName)
					&& Objects.equals(fee, other.fee);
		}

		@Override
		public int hashCode() {
			return Objects.hash(courseId, courseName, fee);
		}

		@Override
		public String toString() {
			return "Course [courseId=" + courseId + ", courseName=" + courseName + ", fee=" + fee + "]";
		}
		
	
}
