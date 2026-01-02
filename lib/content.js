import fs from 'fs';
import path from 'path';

const dataDirectory = path.join(process.cwd(), 'data');

/**
 * Load site configuration
 * @returns {Object} Site configuration object
 */
export function getSiteConfig() {
  const filePath = path.join(dataDirectory, 'site-config.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

/**
 * Load navigation menu structure
 * @returns {Object} Navigation configuration
 */
export function getNavigation() {
  const filePath = path.join(dataDirectory, 'navigation.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

/**
 * Load homepage content
 * @returns {Object} Homepage content
 */
export function getHomepageContent() {
  const filePath = path.join(dataDirectory, 'content', 'homepage.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

/**
 * Load about page content
 * @returns {Object} About page content
 */
export function getAboutContent() {
  const aboutDirectory = path.join(dataDirectory, 'about');

  // Load Charles Philips bio
  const charlesPath = path.join(aboutDirectory, 'charles-philips.json');
  const charlesContents = fs.readFileSync(charlesPath, 'utf8');
  const charlesData = JSON.parse(charlesContents);

  // Load company info
  const companyPath = path.join(aboutDirectory, 'company-info.json');
  const companyContents = fs.readFileSync(companyPath, 'utf8');
  const companyData = JSON.parse(companyContents);

  return {
    charles: charlesData,
    company: companyData
  };
}

/**
 * Load a specific service by slug
 * @param {string} slug - Service slug (e.g., 'specialty-research')
 * @returns {Object} Service data
 */
export function getServiceData(slug) {
  const filePath = path.join(dataDirectory, 'services', `${slug}.json`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

/**
 * Get all services
 * @returns {Array} Array of all services
 */
export function getAllServices() {
  const servicesDirectory = path.join(dataDirectory, 'services');

  // Check if directory exists
  if (!fs.existsSync(servicesDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(servicesDirectory);

  return filenames
    .filter(filename => filename.endsWith('.json'))
    .map(filename => {
      const slug = filename.replace('.json', '');
      return getServiceData(slug);
    });
}

/**
 * Get all projects
 * @returns {Array} Array of all projects
 */
export function getAllProjects() {
  const projectsDirectory = path.join(dataDirectory, 'projects');

  // Check if directory exists
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(projectsDirectory);

  return filenames
    .filter(filename => filename.endsWith('.json'))
    .map(filename => {
      const slug = filename.replace('.json', '');
      const filePath = path.join(projectsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContents);
    });
}

/**
 * Get featured projects
 * @param {number} limit - Maximum number of projects to return
 * @returns {Array} Array of featured projects
 */
export function getFeaturedProjects(limit = 3) {
  const projects = getAllProjects();
  return projects
    .filter(project => project.featured)
    .slice(0, limit);
}

/**
 * Get projects by category
 * @param {string} category - Category slug
 * @returns {Array} Array of projects in category
 */
export function getProjectsByCategory(category) {
  const projects = getAllProjects();
  return projects.filter(project => project.category === category);
}
