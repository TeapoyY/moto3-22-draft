// ==========================================
// Moto3 Riders Dataset — 84 legends across 6 eras (1990-2026)
// Covers 250cc era + Moto3 class (2012-present)
// OVR: 70-99 scale.
// ==========================================

const ERA_NAMES = {
    1: "250cc Era",
    2: "Early Moto3",
    3: "Mid Moto3",
    4: "Late Moto3",
    5: "Acosta Era",
    6: "2024-2026"
};

const ERA_LABELS = {
    1: "250cc",
    2: "Early",
    3: "Mid",
    4: "Late",
    5: "Acosta",
    6: "Now"
};

const DRIVERS = [
// Era 1: 250cc era (1990s-2011) — Legends who would have been Moto3 if class existed in 2012
    { id: 1, era: 1, name: "Valentino Rossi", country: "ITA", ovr: 99, pos: "M3" },
    { id: 2, era: 1, name: "Dani Pedrosa", country: "ESP", ovr: 99, pos: "M3" },
    { id: 3, era: 1, name: "Jorge Lorenzo", country: "ESP", ovr: 98, pos: "M3" },
    { id: 4, era: 1, name: "Casey Stoner", country: "AUS", ovr: 99, pos: "M3" },
    { id: 5, era: 1, name: "Marco Melandri", country: "ITA", ovr: 94, pos: "M3" },
    { id: 6, era: 1, name: "Sebastien Porto", country: "ARG", ovr: 90, pos: "M3" },
    { id: 7, era: 1, name: "Andrea Dovizioso", country: "ITA", ovr: 95, pos: "M3" },
    { id: 8, era: 1, name: "Hector Barbera", country: "ESP", ovr: 89, pos: "M3" },
    { id: 9, era: 1, name: "Alvaro Bautista", country: "ESP", ovr: 92, pos: "M3" },
    { id: 10, era: 1, name: "Thomas Luthi", country: "SUI", ovr: 91, pos: "M3" },
    { id: 11, era: 1, name: "Julian Simon", country: "ESP", ovr: 90, pos: "M3" },
    { id: 12, era: 1, name: "Mattia Pasini", country: "ITA", ovr: 88, pos: "M3" },
    { id: 13, era: 1, name: "Mike di Meglio", country: "FRA", ovr: 89, pos: "M3" },
    { id: 14, era: 1, name: "Alex Debon", country: "ESP", ovr: 87, pos: "M3" },

// Era 2: Early Moto3 (2012-2015) — First Moto3-class champions
    { id: 15, era: 2, name: "Maverick Viñales", country: "ESP", ovr: 96, pos: "M3" },
    { id: 16, era: 2, name: "Jack Miller", country: "AUS", ovr: 95, pos: "M3" },
    { id: 17, era: 2, name: "Alex Marquez", country: "ESP", ovr: 93, pos: "M3" },
    { id: 18, era: 2, name: "Danny Kent", country: "GBR", ovr: 92, pos: "M3" },
    { id: 19, era: 2, name: "Miguel Oliveira", country: "POR", ovr: 94, pos: "M3" },
    { id: 20, era: 2, name: "Brad Binder", country: "RSA", ovr: 93, pos: "M3" },
    { id: 21, era: 2, name: "Luis Salom", country: "ESP", ovr: 91, pos: "M3" },
    { id: 22, era: 2, name: "Efren Vazquez", country: "ESP", ovr: 88, pos: "M3" },
    { id: 23, era: 2, name: "Romano Fenati", country: "ITA", ovr: 90, pos: "M3" },
    { id: 24, era: 2, name: "Enea Bastianini", country: "ITA", ovr: 91, pos: "M3" },
    { id: 25, era: 2, name: "Niccolo Antonelli", country: "ITA", ovr: 87, pos: "M3" },
    { id: 26, era: 2, name: "Isaac Viñales", country: "ESP", ovr: 86, pos: "M3" },
    { id: 27, era: 2, name: "Jakub Kornfeil", country: "CZE", ovr: 87, pos: "M3" },
    { id: 28, era: 2, name: "Zulfahmi Khairuddin", country: "MAS", ovr: 85, pos: "M3" },

// Era 3: Mid Moto3 (2016-2019) — Binder/Mir/Martin era
    { id: 29, era: 3, name: "Joan Mir", country: "ESP", ovr: 96, pos: "M3" },
    { id: 30, era: 3, name: "Jorge Martin", country: "ESP", ovr: 95, pos: "M3" },
    { id: 31, era: 3, name: "Fabio Di Giannantonio", country: "ITA", ovr: 92, pos: "M3" },
    { id: 32, era: 3, name: "Lorenzo Dalla Porta", country: "ITA", ovr: 89, pos: "M3" },
    { id: 33, era: 3, name: "Albert Arenas", country: "ESP", ovr: 88, pos: "M3" },
    { id: 34, era: 3, name: "Tatsuki Suzuki", country: "JPN", ovr: 87, pos: "M3" },
    { id: 35, era: 3, name: "Marco Bezzecchi", country: "ITA", ovr: 91, pos: "M3" },
    { id: 36, era: 3, name: "Marcos Ramirez", country: "ESP", ovr: 86, pos: "M3" },
    { id: 37, era: 3, name: "Aron Canet", country: "ESP", ovr: 91, pos: "M3" },
    { id: 38, era: 3, name: "Gabriel Rodrigo", country: "ARG", ovr: 85, pos: "M3" },
    { id: 39, era: 3, name: "John McPhee", country: "GBR", ovr: 88, pos: "M3" },
    { id: 40, era: 3, name: "Andrea Migno", country: "ITA", ovr: 86, pos: "M3" },
    { id: 41, era: 3, name: "Philipp Oettl", country: "GER", ovr: 85, pos: "M3" },
    { id: 42, era: 3, name: "Fabio Quartararo", country: "FRA", ovr: 92, pos: "M3" },

// Era 4: Late Moto3 (2020-2022) — Acosta arrives
    { id: 43, era: 4, name: "Pedro Acosta", country: "ESP", ovr: 99, pos: "M3" },
    { id: 44, era: 4, name: "Izan Guevara", country: "ESP", ovr: 92, pos: "M3" },
    { id: 45, era: 4, name: "Sergio Garcia", country: "ESP", ovr: 90, pos: "M3" },
    { id: 46, era: 4, name: "Dennis Foggia", country: "ITA", ovr: 90, pos: "M3" },
    { id: 47, era: 4, name: "Ayumu Sasaki", country: "JPN", ovr: 90, pos: "M3" },
    { id: 48, era: 4, name: "Jaume Masia", country: "ESP", ovr: 91, pos: "M3" },
    { id: 49, era: 4, name: "Xavier Artigas", country: "ESP", ovr: 86, pos: "M3" },
    { id: 50, era: 4, name: "Riccardo Rossi", country: "ITA", ovr: 84, pos: "M3" },
    { id: 51, era: 4, name: "Carlos Tatay", country: "ESP", ovr: 83, pos: "M3" },
    { id: 52, era: 4, name: "Jeremy Alcoba", country: "ESP", ovr: 85, pos: "M3" },
    { id: 53, era: 4, name: "Darryn Binder", country: "RSA", ovr: 86, pos: "M3" },
    { id: 54, era: 4, name: "Stefano Nepa", country: "ITA", ovr: 83, pos: "M3" },
    { id: 55, era: 4, name: "Kaito Toba", country: "JPN", ovr: 82, pos: "M3" },
    { id: 56, era: 4, name: "Filip Salač", country: "CZE", ovr: 84, pos: "M3" },

// Era 5: Acosta/Alonso Era (2023)
    { id: 57, era: 5, name: "David Alonso", country: "COL", ovr: 98, pos: "M3" },
    { id: 58, era: 5, name: "Ayumu Sasaki", country: "JPN", ovr: 91, pos: "M3" },
    { id: 59, era: 5, name: "Daniel Holgado", country: "ESP", ovr: 90, pos: "M3" },
    { id: 60, era: 5, name: "Ivan Ortola", country: "ESP", ovr: 88, pos: "M3" },
    { id: 61, era: 5, name: "Collin Veijer", country: "NED", ovr: 89, pos: "M3" },
    { id: 62, era: 5, name: "Jaume Masia", country: "ESP", ovr: 90, pos: "M3" },
    { id: 63, era: 5, name: "Diogo Moreira", country: "BRA", ovr: 87, pos: "M3" },
    { id: 64, era: 5, name: "Deniz Öncü", country: "TUR", ovr: 86, pos: "M3" },
    { id: 65, era: 5, name: "Stefano Nepa", country: "ITA", ovr: 82, pos: "M3" },
    { id: 66, era: 5, name: "Luca Lunetta", country: "ITA", ovr: 80, pos: "M3" },
    { id: 67, era: 5, name: "Matteo Bertelle", country: "ITA", ovr: 81, pos: "M3" },
    { id: 68, era: 5, name: "Adrian Fernandez", country: "ESP", ovr: 82, pos: "M3" },
    { id: 69, era: 5, name: "Jose Antonio Rueda", country: "ESP", ovr: 87, pos: "M3" },
    { id: 70, era: 5, name: "Filip Salač", country: "CZE", ovr: 84, pos: "M3" },

// Era 6: 2024-2026 — Modern Moto3 era
    { id: 71, era: 6, name: "David Alonso", country: "COL", ovr: 99, pos: "M3" },
    { id: 72, era: 6, name: "Collin Veijer", country: "NED", ovr: 92, pos: "M3" },
    { id: 73, era: 6, name: "Daniel Holgado", country: "ESP", ovr: 91, pos: "M3" },
    { id: 74, era: 6, name: "Ivan Ortola", country: "ESP", ovr: 89, pos: "M3" },
    { id: 75, era: 6, name: "David Muñoz", country: "ESP", ovr: 88, pos: "M3" },
    { id: 76, era: 6, name: "Angel Piqueras", country: "ESP", ovr: 87, pos: "M3" },
    { id: 77, era: 6, name: "Joel Kelso", country: "AUS", ovr: 86, pos: "M3" },
    { id: 78, era: 6, name: "Adrian Fernandez", country: "ESP", ovr: 85, pos: "M3" },
    { id: 79, era: 6, name: "Jose Antonio Rueda", country: "ESP", ovr: 88, pos: "M3" },
    { id: 80, era: 6, name: "Taiyo Furusato", country: "JPN", ovr: 84, pos: "M3" },
    { id: 81, era: 6, name: "Nicola Carraro", country: "ITA", ovr: 80, pos: "M3" },
    { id: 82, era: 6, name: "Xabi Zurutuza", country: "ESP", ovr: 79, pos: "M3" },
    { id: 83, era: 6, name: "Ruche Moodley", country: "RSA", ovr: 78, pos: "M3" },
    { id: 84, era: 6, name: "Veda Pratama", country: "INA", ovr: 76, pos: "M3" }
];
