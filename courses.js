// -------------------- Archivo completo: cursos.js --------------------

// BLOQUE 1: General
const cursosGeneral = [
  { nombre: "Gitlab Certification", proveedor: "Gitlab", descripcion: "Free Certifications paths and badges", link: "https://about.gitlab.com/learn/", expiracion: "Unknown", categoria: "General" },
  { nombre: "OCI", proveedor: "Oracle", descripcion: "Oracle Cloud Infrastructure 2023 Foundations Associate", link: "https://education.oracle.com/oracle-cloud-infrastructure-2023-foundations-associate/pexam_1Z0-1085-23", expiracion: "Unlimited", categoria: "General" },
  { nombre: "Machine Learning with Python", proveedor: "freeCodeCamp", descripcion: "Free lesson and certification", link: "https://www.freecodecamp.org/learn/machine-learning-with-python/", expiracion: "Unlimited", categoria: "General" },
  { nombre: "Data Visualization", proveedor: "freeCodeCamp", descripcion: "Free lesson and certification", link: "https://www.freecodecamp.org/learn/data-visualization/", expiracion: "Unlimited", categoria: "General" },
  { nombre: "AI Fundamentals", proveedor: "Databricks", descripcion: "Generative AI Fundamentals", link: "https://www.databricks.com/resources/learn/training/generative-ai-fundamentals", expiracion: "Unlimited", categoria: "General" }
];

// BLOQUE 2: Security
const cursosSecurity = [
  { nombre: "Security Courses", proveedor: "Juniper Networks", descripcion: "Cursos y certificaciones gratuitos", link: "https://learningportal.juniper.net/juniper/user_activity_info.aspx?id=11478", expiracion: "Unknown", categoria: "Security" },
  { nombre: "Cilium Security Visibility", proveedor: "Isovalent", descripcion: "Seguridad avanzada con Cilium y observabilidad", link: "https://isovalent.com/labs/isovalent-cilium-enterprise-security-visibility/", expiracion: "Unknown", categoria: "Security / Networking" },
  { nombre: "TLS Visibility", proveedor: "Isovalent", descripcion: "Visibilidad TLS con Cilium", link: "https://isovalent.com/labs/isovalent-cilium-enterprise-tls-visibility/", expiracion: "Unknown", categoria: "Security / Networking" }
];

// BLOQUE 3: Databases
const cursosDatabases = [
  { nombre: "Neo4j Certified Professional", proveedor: "Neo4j", descripcion: "Certificación gratuita en Neo4j", link: "https://neo4j.com/graphacademy/neo4j-certification/", expiracion: "Unknown", categoria: "Databases" },
  { nombre: "Confluent Fundamentals Accreditation", proveedor: "Confluent", descripcion: "Certificación gratuita en Confluent", link: "https://cloud.contentraven.com/confluent/self-userpackage?pid=MTI5NA%3D%3D", expiracion: "Unknown", categoria: "Databases / Kafka" }
];

// BLOQUE 4: Project Management
const cursosProjectManagement = [
  { nombre: "Confluence Fundamentals", proveedor: "Confluence", descripcion: "Certificación gratuita en Confluence", link: "https://university.atlassian.com/student/path/861302-confluence-fundamentals", expiracion: "Unknown", categoria: "Project Management" }
];

// BLOQUE 5: Marketing
const cursosMarketing = [
  { nombre: "Google Analytics Academy", proveedor: "Google", descripcion: "Cursos gratuitos con certificación en Google Analytics", link: "https://analytics.google.com/analytics/academy/", expiracion: "Unlimited", categoria: "Marketing / Analytics" }
];

// BLOQUE 6: Miscellaneous
const cursosMiscellaneous = [
  { nombre: "Udemy Free Courses", proveedor: "Udemy", descripcion: "Alrededor de 670 cursos gratuitos con certificado", link: "https://www.udemy.com/courses/free/", expiracion: "Unlimited", categoria: "Miscellaneous" },
  { nombre: "Udacity One Free Month", proveedor: "Udacity", descripcion: "Acceso gratis por un mes a nanodegree programs (requiere tarjeta)", link: "https://blog.udacity.com/2020/03/one-month-free-on-nanodegrees.html", expiracion: "Unknown", categoria: "Miscellaneous" },
  { nombre: "Bitdegree Free Certifications", proveedor: "Bitdegree", descripcion: "Plataforma de eLearning para ganar habilidades digitales", link: "https://www.bitdegree.org/free-certifications-online", expiracion: "Unknown", categoria: "Miscellaneous" }
];

// BLOQUE 7: DevOps / Cloud / Testing / API
const cursosDevOps = [
  { nombre: "The Linux Foundation: 23 Free Courses", proveedor: "Linux Foundation", descripcion: "Cursos gratuitos con exámenes finales y confirmación de finalización en DevOps, cloud y open source.", link: "https://training.linuxfoundation.org/resources/?_sft_content_type=free-course", expiracion: "Unknown", categoria: "DevOps / Linux / Cloud" },
  { nombre: "CloudBees University", proveedor: "CloudBees University", descripcion: "Free training through CloudBees University (Jenkins, DevOps).", link: "https://standard.cbu.cloudbees.com/", expiracion: "Unknown", categoria: "DevOps" },
  { nombre: "Gremlin Certified Chaos Engineering Practitioner", proveedor: "Gremlin", descripcion: "Certificación gratuita en ingeniería del caos.", link: "https://gremlin.coassemble.com/unlock/7Jan8Su#/", expiracion: "Unknown", categoria: "Chaos Engineering / DevOps" },
  { nombre: "Gatling Load Testing Certification", proveedor: "Gatling Academy", descripcion: "Curso gratuito para dominar la herramienta Gatling de pruebas de carga.", link: "https://academy.gatling.io/", expiracion: "Unknown", categoria: "Testing / Performance" },
  { nombre: "Appium Advanced Certifications", proveedor: "HeadSpin", descripcion: "Certificaciones avanzadas de Appium gratuitas.", link: "https://www.headspin.io/courses/the-appium-webinar-collection", expiracion: "Unknown", categoria: "Testing / Automation" },
  { nombre: "Selenium Advanced Certifications", proveedor: "LambdaTest", descripcion: "Certificaciones avanzadas de Selenium gratuitas.", link: "https://www.lambdatest.com/certifications/", expiracion: "Unknown", categoria: "Testing / Automation" },
  { nombre: "Automated Testing", proveedor: "Test Automation University", descripcion: "Free certification courses by the Test Automation University.", link: "https://testautomationu.applitools.com/", expiracion: "Unknown", categoria: "Testing / Automation" },
  { nombre: "New Relic Full Stack Observability Exam", proveedor: "New Relic", descripcion: "Examen gratuito de observabilidad full stack.", link: "https://learn.newrelic.com/full-stack-observability-exam", expiracion: "Unknown", categoria: "Observability / Monitoring" },
  { nombre: "New Relic Programmability Certification Exam", proveedor: "New Relic", descripcion: "Certificación gratuita de programabilidad en New Relic.", link: "https://learn.newrelic.com/programmability-certification", expiracion: "Unknown", categoria: "Monitoring / DevOps" },
  { nombre: "AWS Skill Builder", proveedor: "AWS", descripcion: "Más de 700 lecciones gratuitas para aprender AWS, mejorar habilidades y prepararse para certificaciones.", link: "https://explore.skillbuilder.aws/learn/catalog", expiracion: "Unknown", categoria: "Cloud / AWS" },
  { nombre: "AWS re/Start: Full-time Training & Certification", proveedor: "AWS", descripcion: "Formación completa con certificación para desempleados o subempleados en computación en la nube.", link: "https://aws.amazon.com/training/restart/", expiracion: "Unknown", categoria: "Cloud / AWS" },
  { nombre: "AWS Cloud Quest: Cloud Practitioner", proveedor: "AWS", descripcion: "Juego interactivo y formación en AWS Cloud Practitioner con credenciales.", link: "https://explore.skillbuilder.aws/learn/course/11458/aws-cloud-quest-cloud-practitioner", expiracion: "Unknown", categoria: "Cloud / AWS" },
  { nombre: "AWS Solutions Architect Knowledge Badge Readiness Path", proveedor: "AWS", descripcion: "Ruta de preparación gratuita para la certificación de arquitecto de soluciones AWS.", link: "https://explore.skillbuilder.aws/learn/public/learning_plan/view/1044/solutions-architect-knowledge-badge-readiness-path", expiracion: "Unknown", categoria: "Cloud / AWS" },
  { nombre: "Professional API Management Certification", proveedor: "Boomi", descripcion: "Certificación gratuita de gestión profesional de APIs.", link: "https://community.boomi.com/s/learning-plan-detail-standard?ltui__urlRecordId=aOM6S0000008OIyWAM", expiracion: "Unknown", categoria: "Integration / API" },
  { nombre: "Professional Linux Operational Administrator Certification", proveedor: "Boomi", descripcion: "Certificación operativa avanzada en Linux para integraciones de Boomi.", link: "https://community.boomi.com/s/learning-plan-detail-standard?ltui__urlRecordId=aOM6S0000008OI5WAM", expiracion: "Unknown", categoria: "DevOps / Linux / Integration" },
  { nombre: "Professional Windows Operational Administrator Certification", proveedor: "Boomi", descripcion: "Certificación operativa avanzada en Windows para integraciones de Boomi.", link: "https://community.boomi.com/s/learning-plan-detail-standard?ltui__urlRecordId=aOM6S0000008OI6WAM", expiracion: "Unknown", categoria: "DevOps / Windows / Integration" },
  { nombre: "Getting Started with Cilium", proveedor: "Isovalent", descripcion: "Curso introductorio sobre Cilium para Kubernetes y redes.", link: "https://isovalent.com/labs/getting-started-with-cilium/", expiracion: "Unknown", categoria: "Networking / Kubernetes / Cilium" },
  { nombre: "Getting Started with eBPF", proveedor: "Isovalent", descripcion: "Curso introductorio sobre eBPF y observabilidad.", link: "https://isovalent.com/labs/getting-started-with-ebpf/", expiracion: "Unknown", categoria: "Networking / eBPF" },
  { nombre: "Deep Learning Specialization", proveedor: "DeepLearning.AI", descripcion: "Especialización gratuita en Deep Learning, con enfoque en AI avanzada.", link: "https://www.coursera.org/specializations/deep-learning?ranMID=40328&ranEAID=bt30QTxEyjA&ranSiteID=bt30QTxEyjA&siteID=bt30QTxEyjA", expiracion: "Unknown", categoria: "AI / Data Science" }
];

// -------------------- ARRAY MAESTRO --------------------
export const allCourses = [
  ...cursosGeneral,
  ...cursosSecurity,
  ...cursosDatabases,
  ...cursosProjectManagement,
  ...cursosMarketing,
  ...cursosMiscellaneous,
  ...cursosDevOps
];
