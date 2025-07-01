import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent {
  experiences = [
    {
      company: 'Tata Communications',
      role: 'Tech Lead',
      duration: "Mar'25 - Present",
      responsibilities: [
        'Led a newly formed backend team post-transition, aligning quickly on goals and architecture to drive delivery of a high-impact digital product.',
        'Delivered a scalable, production-grade solution under aggressive timelines.',
        'Accelerated sprint velocity by 25% by integrating GenAI solutions into development workflows, optimizing code generation, testing, and documentation.'
      ],
      technologies: ['Java','SpringBoot', 'Spring Security', 'Keycloak', 'Thymeleaf', 'Spring JPA', 'RabbitMQ', 'Redis','Jenkins','Co-Pilot']
    },
    {
      company: 'Tata Communications',
      role: 'Senior Software Engineer',
      duration: "Jul'23 - Mar'25",
      responsibilities: [
        'Led the O2C team for the GlobalRapide product, contributing to 10+ successful deployments with cross-functional teams.',
        'Stepped in as a critical resource for a new project GSC Partner, delivering it ahead of schedule.',
        'Reviewed and optimized code, and developed SQL Cursors, Functions that enhanced backend productivity by 20%',
        'Achieved 60% reduction in API response times and optimized Queue calls for improved performance.'
      ],
      technologies: ['Java','SpringBoot', 'Spring Security', 'Keycloak', 'Thymeleaf', 'Spring JPA', 'RabbitMQ', 'Redis','Jenkins']
    },
    {
      company: 'Tata Communications',
      role: 'Software Engineer',
      duration: "Jul'21 - Jul'23",
      responsibilities: [
        'Developed TeamsDR, Webex, Jamvee, handling their L2C journeys.',
        'Collaborated with cross-functional teams to deliver high-quality solutions.',
        'Ensured adherence to Agile methodologies and timely deliveries.',
        'Debugged and resolved critical production issues.'
      ],
      technologies: ['Java','SpringBoot','Thymeleaf', 'Spring JPA', 'Git', 'GitLab', 'MySQL Workbench']
    },
    {
      company: 'Indira Gandhi Center for Atomic Research(IGCAR)',
      role: 'Application Development Intern',
      duration: "Feb'21 - May'21",
      responsibilities: [
        'Conducted analysis of existing Cloud File Storage and Management system to understand architecture, features, and security measures.',
        'Acquired expertise in AngularJS and PHP CodeIgniter frameworks through hands-on projects and self-guided learning.',
        'Engaged in a continuous feedback loop with management to ensure alignment with project objectives and incorporated suggestions for improvement.'
      ],
      technologies: ['AngularJS', 'Materialize CSS', 'PHP CodeIgniter', 'ClamAV']
    },
    {
      company: 'CloudNow Technologies',
      role: 'Junior Engineer',
      duration: "Nov'19 - Dec'19",
      responsibilities: [
        'Understood the database design of the E-Learning management system being built.',
        'Involved in knowledge exchange sessions on SpringBoot, SQL and ORM-Hibernate',
        'Learned about the day-to-day dynamics of the company, and observing SCRUM Software Development framework in action.'
      ],
      technologies: ['Java','Spring','SpringBoot','Hibernate','MySQL Workbench']
    }
  ];
}
