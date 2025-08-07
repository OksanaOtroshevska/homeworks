// Задание 1: 

// Создайте тип Movie и объект movie с вложенными свойствами.
// Опишите тип Movie
// Создайте объект с этим типом:
//    -- Название и год — любые
//    -- info должен содержать длительность (в минутах) и имя режиссёра
//    -- Выведите в консоль имя режиссёра (movie.info.director)
// Дополнительно (по желанию):
//    -- Добавьте поле genres: string[] (например: ["drama", "sci-fi"])
//    -- Уточните, что genres не просто string[], а Genre[]
//    -- Выведите в консоль первый жанр
//    -- Добавьте поле rating?: number как опциональное

type Genre = "drama" | "sci-fi" | "action" | "comedy" | "fantasy" | "melodrama" | "adventures";

type Movie = {
  title: string;
  year: number;
  info: {
    time: number;
    country: string;
    creators: {
      director: string;
      scenarist: string;
      composer: string;
    };
  };
  genres: Genre[];
  rating?: number;
};

const movie: Movie = {
  title: "Interstellar",
  year: 2014,
  info: {
    time: 169,
    country: "USA",
    creators: {
      director: "Christopher Nolan",
      scenarist: "Jonathan Nolan",
      composer: "Hans Zimmer",
    },
  },
  genres: ["drama", "fantasy", "adventures"],
  rating: 9.8
  };

  console.log("Director:", movie.info.creators.director);
  

  // Задание 2: Напишите типы к объекту

type Author = {
  firstName: string;
  lastName: string;
};

type Book = {
  title: string;
  author: Author;
  year: number;
  genres?: string[];    
  available: boolean;
};

type Address = {
  street: string;
  number: string;       
  city: string;
  isOpen: boolean;
};

type Library = {
  name: string;
  address: Address;
  books: Book[];
  staffCount: number;
  isPublic: boolean;
  openingHours: WeekDay[];
};

type WeekDay = [];

  const library = {
  name: "Central Library",
  address: {
    street: "Main St",
    number: 42, // Может содержать не только цифры вроде "42/A"
    city: "Metropolis",
    isOpen: true,
  },
  books: [
    {
      title: "TypeScript Basics",
      author: {
        firstName: "John",
        lastName: "Doe",
      },
      year: 2021,
      genres: ["Programming", "Technology"],
      available: true,
    },
    {
      title: "Advanced JavaScript",
      author: {
        firstName: "Jane",
        lastName: "Smith",
      },
      year: 2019,
      available: false,
    },
  ],
  staffCount: 12,
  isPublic: true,
  openingHours: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], // Могут быть только дни недели, но в любом количестве
};
