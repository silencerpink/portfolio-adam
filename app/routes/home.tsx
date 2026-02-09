import type { Route } from "./+types/home";
import { Github, Mail, Linkedin, Instagram, MapPin } from "lucide-react";
import styles from "./home.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Adam Fitrah Fahrurizal - Portfolio" },
    {
      name: "description",
      content: "Quality Control Specialist | Data Specialist - Professional Portfolio",
    },
  ];
}

const PROFILE_DATA = {
  name: "ADAM FITRAH FAHRURIZAL",
  title: "Quality Control Specialist | Data Specialist",
  location: "Jakarta 14350",
  links: {
    github: "https://github.com/silencerpink",
    email: "adamfitrah3057@gmail.com",
    linkedin: "https://www.linkedin.com/in/adamfitrahf/",
    instagram: "https://instagram.com/adamfitrahf",
  },
  summary:
    "Quality Control and Data Specialist focused on finished goods management. Expert in ensuring product shipping standards for e-commerce and maintaining high-accuracy inventory records for offline retail.",
  skills: [
    {
      category: "Inventory & QC",
      items: [
        "Pre-Shipment Inspection",
        "E-commerce Order Verification",
        "Inventory Record Accuracy (IRA)",
        "Stock Opname & Reconciliation",
      ],
    },
    {
      category: "IT & Hardware",
      items: [
        "PC & Laptop Hardware Troubleshooting",
        "Android & Windows OS Maintenance",
        "NAS Configuration",
        "CCTV Surveillance Systems",
        "Server Rack Management",
        "MikroTik Router Configuration",
        "SOHO Network Deployment",
      ],
    },
    {
      category: "Backend",
      items: ["Python", "Web3 & Blockchain"],
    },
  ],
  experience: [
    {
      role: "Quality Control",
      company: "PT. Agres Info Teknologi, Jakarta",
      period: "July 2024 – Jan 2025",
      responsibilities: [
        "Inspected inbound stock quality for online sales.",
        "Managed inventory flow to packing division.",
        "Verified product integrity before fulfillment.",
      ],
    },
    {
      role: "Warehouse Administrator",
      company: "PT. Sinarlaut Mandiri, Jakarta",
      period: "March 2020 – May 2022",
      responsibilities: [
        "Managed daily inventory database accuracy.",
        "Optimized warehouse stock tracking system.",
        "Streamlined supply chain data reporting.",
      ],
    },
  ],
  education: [
    {
      degree: "High School Equivalence Diploma (Social Sciences)",
      institution: "PKBM Wahyuaji Andadari, Jakarta",
      period: "May 2023",
      description:
        "Focused on self-discipline and time management while independently mastering advanced technical engineering skills.",
    },
  ],
  certifications: [
    {
      title: "Martial Arts/Warga Certification",
      organization: "Persaudaraan Setia Hati Terate, Jakarta",
      period: "Aug 2022",
      description: "Demonstrated high levels of discipline, perseverance, physical & mental conditioning.",
    },
  ],
};

export default function Home() {

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        {/* Line 1: Name */}
        <h1 className={styles.name}>
          {PROFILE_DATA.name}
        </h1>
        
        {/* Line 2: Job Title */}
        <h2 className={styles.title}>
          {PROFILE_DATA.title}
        </h2>
        
        {/* Line 3: Address (Icon + Text) */}
        <div className={styles.address}>
          <MapPin className={styles.addressIcon} />
          <span>{PROFILE_DATA.location}</span>
        </div>
        
        {/* Line 4: Social Icons (4 items) */}
        <div className={styles.socialIcons}>
          <a
            href={PROFILE_DATA.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconLink} ${styles.icon1}`}
          >
            <Github />
          </a>
          <a
            href={`mailto:${PROFILE_DATA.links.email}`}
            className={`${styles.iconLink} ${styles.icon2}`}
          >
            <Mail />
          </a>
          <a
            href={PROFILE_DATA.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconLink} ${styles.icon3}`}
          >
            <Linkedin />
          </a>
          <a
            href={PROFILE_DATA.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconLink} ${styles.icon4}`}
          >
            <Instagram />
          </a>
        </div>
      </header>

      {/* Professional Summary */}
      <section className={styles.section}>
        <h3 className={`${styles.sectionTitle} ${styles.summaryTitle}`}>
          Professional Summary
        </h3>
        <p className={styles.summary}>{PROFILE_DATA.summary}</p>
      </section>

      {/* Skills */}
      <section className={styles.section}>
        <h3 className={`${styles.sectionTitle} ${styles.skillsTitle}`}>
          Skills
        </h3>
        <div className={styles.skillsGrid}>
          {PROFILE_DATA.skills.map((skillGroup, idx) => (
            <div key={skillGroup.category} className={`${styles.skillCategory} ${styles[`category${idx + 1}`]}`}>
              <h4 className={styles.categoryTitle}>{skillGroup.category}</h4>
              <div className={styles.skillTags}>
                {skillGroup.items.map((skill) => (
                  <span key={skill} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional History */}
      <section className={styles.section}>
        <h3 className={`${styles.sectionTitle} ${styles.historyTitle}`}>
          Professional History
        </h3>
        <div className={styles.timeline}>
          {PROFILE_DATA.experience.map((job, index) => (
            <div key={index} className={`${styles.timelineItem} ${styles[`job${index + 1}`]}`}>
              <div className={styles.timelineHeader}>
                <h4 className={styles.jobTitle}>{job.role}</h4>
                <div className={styles.headerRow}>
                  <p className={styles.metadata}>{job.company}</p>
                  <p className={styles.metadata}>{job.period}</p>
                </div>
              </div>
              <ul className={styles.responsibilities}>
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className={styles.section}>
        <h3 className={`${styles.sectionTitle} ${styles.educationTitle}`}>
          Education
        </h3>
        {PROFILE_DATA.education.map((edu, index) => (
          <div key={index} className={styles.educationItem}>
            <h4 className={styles.itemTitle}>{edu.degree}</h4>
            <div className={styles.itemHeader}>
              <p className={styles.metadata}>{edu.institution}</p>
              <p className={styles.metadata}>{edu.period}</p>
            </div>
            <p className={styles.itemDescription}>{edu.description}</p>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section className={styles.section}>
        <h3 className={`${styles.sectionTitle} ${styles.certTitle}`}>
          Licenses & Certifications
        </h3>
        {PROFILE_DATA.certifications.map((cert, index) => (
          <div key={index} className={styles.certificationItem}>
            <h4 className={styles.itemTitle}>{cert.title}</h4>
            <div className={styles.itemHeader}>
              <p className={styles.metadata}>{cert.organization}</p>
              <p className={styles.metadata}>{cert.period}</p>
            </div>
            <p className={styles.itemDescription}>{cert.description}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          © 2026 Adam Fitrah Fahrurizal. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
