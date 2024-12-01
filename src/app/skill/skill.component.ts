import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})

export class SkillComponent {
  skills = [
    {
      category: 'Languages',
      items: [
        { name: 'Java', proficiency: 5 },
        { name: 'HTML5', proficiency: 4 },
        { name: 'CSS', proficiency: 4 },
        { name: 'JSON', proficiency: 5 },
        { name: 'SQL', proficiency: 3 },
      ]
    },
    {
      category: 'Frameworks',
      items: [
        { name: 'Spring Boot', proficiency: 4 },
        { name: 'Spring Data JPA', proficiency: 3 },
        { name: 'Spring Security', proficiency: 3 },
        { name: 'Thymeleaf', proficiency: 3 },
        { name: 'JUnit', proficiency: 5 },
        { name: 'Mockito', proficiency: 3 },
        { name: 'Angular', proficiency: 3 },
      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'MySQL', proficiency: 3 },
        { name: 'GitLab', proficiency: 3 },
        { name: 'Flowable Modeler', proficiency: 3 },
        { name: 'Postman', proficiency: 4 },
        { name: 'Jenkins', proficiency: 3 },
        { name: 'Keycloak', proficiency: 3 },
        { name: 'RabbitMQ', proficiency: 3 },
        { name: 'Redis', proficiency: 3 },
        { name: 'Sourcetree', proficiency: 3 },
      ]
    },
    {
      category: 'Technologies',
      items: [
        { name: 'Git', proficiency: 5 },
        { name: 'Maven', proficiency: 5 },
        { name: 'REST APIs', proficiency: 5 },
        { name: 'Microservices', proficiency: 5 },
        { name: 'Docker', proficiency: 3 },
      ]
    }
  ];
}

