const coursesContainer = document.getElementById('coursesContainer');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

let courses = [];

fetch('courses.json')
  .then(response => response.json())
  .then(data => {
    courses = data;
    populateCategories();
    displayCourses(courses);
  });

function populateCategories() {
  const categories = [...new Set(courses.map(c => c.category))];
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });
}

function displayCourses(list) {
  coursesContainer.innerHTML = '';
  list.forEach(course => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${course.name}</h3>
      <p><strong>Proveedor:</strong> ${course.provider}</p>
      <p>${course.description}</p>
      <p><strong>Expira:</strong> ${course.expiration}</p>
      <a href="${course.link}" target="_blank">Ir al curso</a>
    `;
    coursesContainer.appendChild(card);
  });
}

// Filtros y búsqueda
searchInput.addEventListener('input', filterCourses);
categoryFilter.addEventListener('change', filterCourses);

function filterCourses() {
  const query = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const filtered = courses.filter(c => {
    return (c.name.toLowerCase().includes(query) || c.description.toLowerCase().includes(query))
      && (category === '' || c.category === category);
  });
  displayCourses(filtered);
}
