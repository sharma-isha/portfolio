import { Component,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  professionalProjects = [
    {
      title: 'TeamsDR',
      shortDescription: 'A Module for the L2C journey for TeamsDR Solution',
      image: 'path/to/image.jpg',
      link: 'https://github.com/your-repo',
      features: [
        'Implemented Bundled Voice solutions using Drools, RestClient.',
        'Utilized Flowable an XML-based bpmn tool for predefining O2C flows.'
      ]
    },
    {
      title: 'Webex Calling',
      shortDescription: 'A module for Order Management of Webex Calling solution.',
      image: 'path/to/image.jpg',
      link: 'https://github.com/your-repo',
      features: [
        'Incorporated Order Management of Voice Services, Licenses, and Equipment.',
        'Integrated Inventory Management for existing orders, leading to 4% increase in orders.'
      ]
    },
    {
      title: 'JAMVEE',
      shortDescription: 'A module for the Order Placement, Management, and Delivery of JAMVEE products.',
      image: 'path/to/image.jpg',
      link: 'https://github.com/your-repo',
      features: [
        'Developed Plan MACD feature from Scratch leading to 6% increase in sales.'
      ]
    },
    {
      title: 'GLOBALRAPIDE',
      shortDescription: 'A module that allows bundling of GlobalRapide products and Addons, like Endpoints, SBC, Licenses and Services.',
      image: 'path/to/image.jpg',
      link: 'https://github.com/your-repo',
      features: [
        'Achieved 60% reduction in API response times and optimized Queue calls for improved performance.'
      ]
    }

  ];
  
  personalProjects = [
    {
      id:1,
      title: 'Personal Portfolio Website',
      description: 'Designed and developed a responsive portfolio using Angular.',
      image: 'path/to/image.jpg',
      repoLink: 'https://your-portfolio.com',
      features: [
        'Showcases professional experience and personal projects.',
        'Integrated animations for a visually appealing UI.'
      ],
      showDetails: false,
    },
    {
      id:2,
      title: 'Skooltest',
      description: 'A student-centric WebApp that allows Students and Teachers to collaborate and simplify the process of taking an assessment.',
      image: 'path/to/image.jpg',
      repoLink: 'https://github.com/sharma-isha/skooltest.git',
      features: [
        'Utilized the SpringBoot Multi-Module Architecture and implemented Global Exception Handling.',
        'Implemented User Management, Authentication, Authorisation, PDF Generation, Upload and Download.',
        'Technologies Used: SpringBoot, Spring Security, Keycloak, Thymeleaf, MySQL'
      ],
      showDetails: false,
    }
  ];  

  toggleDetails(id: number): void {
    const project = this.personalProjects.find((p) => p.id === id);
    if (project) {
      project.showDetails = !project.showDetails;
    }
  }
}
