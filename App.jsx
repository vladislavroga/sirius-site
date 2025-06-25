import React, { useState } from "react";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Жилой комплекс «Солнечный берег»",
      description:
        "Многоэтажное жилое здание с современной инфраструктурой и зонами отдыха.",
      image: "https://placehold.co/600x400/2c3e50/ffffff?text=Project+1",
    },
    {
      title: "Офисный центр «Бизнес-парк»",
      description:
        "Современный бизнес-центр с высокотехнологичной системой вентиляции и освещения.",
      image: "https://placehold.co/600x400/2c3e50/ffffff?text=Project+2",
    },
    {
      title: "Детский сад «Радуга»",
      description:
        "Функциональное и безопасное пространство для детей всех возрастов.",
      image: "https://placehold.co/600x400/2c3e50/ffffff?text=Project+3",
    },
  ];

  const testimonials = [
    {
      name: "Александр Петров",
      role: "Генеральный директор ООО «СтройИнвест»",
      text: "Компания «Сириус» показала себя как надежный партнер. Все работы были выполнены в срок и с соблюдением технических требований.",
    },
    {
      name: "Елена Смирнова",
      role: "Заказчик жилого дома",
      text: "Работали профессионалы своего дела! Внимательны к деталям и всегда на связи. Результат превзошел ожидания!",
    },
    {
      name: "Иван Кузнецов",
      role: "Представитель муниципалитета",
      text: "Проект был реализован с учетом всех нормативных стандартов и экологических требований. Отличная команда!",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Сириус</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <button
                onClick={() => setActiveSection("about")}
                className={`transition-all ${
                  activeSection === "about"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "hover:text-indigo-500"
                }`}
              >
                О нас
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("projects")}
                className={`transition-all ${
                  activeSection === "projects"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "hover:text-indigo-500"
                }`}
              >
                Проекты
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("testimonials")}
                className={`transition-all ${
                  activeSection === "testimonials"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "hover:text-indigo-500"
                }`}
              >
                Отзывы
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("contacts")}
                className={`transition-all ${
                  activeSection === "contacts"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "hover:text-indigo-500"
                }`}
              >
                Контакты
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden bg-white shadow-lg absolute right-6 left-6 rounded-b-lg overflow-hidden">
            <li>
              <button
                onClick={() => {
                  setActiveSection("about");
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-6 py-3 transition-all ${
                  activeSection === "about"
                    ? "bg-indigo-50 text-indigo-600"
                    : "hover:bg-gray-100"
                }`}
              >
                О нас
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveSection("projects");
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-6 py-3 transition-all ${
                  activeSection === "projects"
                    ? "bg-indigo-50 text-indigo-600"
                    : "hover:bg-gray-100"
                }`}
              >
                Проекты
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveSection("testimonials");
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-6 py-3 transition-all ${
                  activeSection === "testimonials"
                    ? "bg-indigo-50 text-indigo-600"
                    : "hover:bg-gray-100"
                }`}
              >
                Отзывы
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveSection("contacts");
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-6 py-3 transition-all ${
                  activeSection === "contacts"
                    ? "bg-indigo-50 text-indigo-600"
                    : "hover:bg-gray-100"
                }`}
              >
                Контакты
              </button>
            </li>
          </ul>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-700 to-blue-500 text-white h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            Профессиональные решения для вашего будущего
          </h2>
          <p className="text-lg md:text-xl max-w-2xl">
            Компания «Сириус» — проектирование и строительство объектов любой
            сложности с гарантией качества.
          </p>
          <button className="mt-8 px-6 py-3 bg-white text-indigo-700 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105">
            Начать проект
          </button>
        </div>
      </section>

      {/* Sections */}
      <section
        id="about"
        className={`${
          activeSection === "about" ? "block" : "hidden"
        } container mx-auto px-6 py-16`}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900">О компании</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-4 leading-relaxed">
              Компания «Сириус» специализируется на полном цикле проектирования
              и строительства объектов различного назначения: от жилых домов до
              крупных коммерческих и промышленных сооружений.
            </p>
            <p className="mb-4 leading-relaxed">
              Мы используем современные технологии, работаем по ГОСТам и
              обеспечиваем точные сроки сдачи проектов.
            </p>
            <p className="mb-4 leading-relaxed">
              Наш опыт более 15 лет, мы выполняем проекты по всей стране и за
              рубежом.
            </p>
          </div>
          <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Наши преимущества:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 mr-2 text-indigo-600">
                  ✔️
                </span>
                <span>Индивидуальный подход к каждому клиенту</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 mr-2 text-indigo-600">
                  ✔️
                </span>
                <span>Высокий уровень качества материалов и работ</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 mr-2 text-indigo-600">
                  ✔️
                </span>
                <span>Соблюдение сроков и бюджета</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 mr-2 text-indigo-600">
                  ✔️
                </span>
                <span>Сертифицированные специалисты</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className={`${
          activeSection === "projects" ? "block" : "hidden"
        } container mx-auto px-6 py-16`}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Наши проекты</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="testimonials"
        className={`${
          activeSection === "testimonials" ? "block" : "hidden"
        } bg-gray-100 py-16`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Отзывы клиентов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="italic mb-4 text-gray-700">
                  "{testimonial.text}"
                </p>
                <h4 className="font-semibold text-indigo-600">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacts"
        className={`${
          activeSection === "contacts" ? "block" : "hidden"
        } container mx-auto px-6 py-16`}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Контакты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <iframe
              src="https://maps.google.com/maps?q=Moscow&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              frameBorder="0"
              className="rounded-lg shadow-md"
              title="Google Map"
            ></iframe>
          </div>
          <div>
            <form className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Введите ваше имя"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Введите email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Напишите нам..."
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded font-semibold hover:bg-indigo-700 transition"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Сириус</h3>
              <p className="text-gray-400">Проектно-строительная компания</p>
            </div>
            <div className="text-sm text-gray-400">
              © 2025 Сириус. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
