import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  burger: HTMLElement | null;
  ul: HTMLUListElement | null;
  nav: HTMLElement | null;

  constructor(private renderer: Renderer2) {
    this.burger = null;
    this.ul = null;
    this.nav = null;
  }

  ngOnInit() {
    this.burger = document.querySelector("#burger-menu");
    this.ul = document.querySelector("nav ul");
    this.nav = document.querySelector("nav");

    this.burger?.addEventListener("click", () => {
      this.ul?.classList.toggle("show");
    });

    // Scroll-up button functionality
    const scrollUpButton = document.getElementById("scroll-up") as HTMLElement;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollUpButton.style.display = "block";
      } else {
        scrollUpButton.style.display = "none";
      }
    });
    

    scrollUpButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Function to scroll to a section
    const scrollToSection = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
      }
    };

    // Add event listeners for navigation links
    const aboutLink = document.querySelector("a[href='#about']");
    aboutLink?.addEventListener("click", () => {
      scrollToSection("about");
    });

    const skillsLink = document.querySelector("a[href='#skills']");
    skillsLink?.addEventListener("click", () => {
      scrollToSection("skills");
    });

    const projectsLink = document.querySelector("a[href='#projects']");
    projectsLink?.addEventListener("click", () => {
      scrollToSection("projects");
    });

    const contactLink = document.querySelector("a[href='#contact']");
    contactLink?.addEventListener("click", () => {
      scrollToSection("contact");
    });
  }
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
