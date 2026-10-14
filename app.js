const initialDataset = [
    { id: 1, name: "Los SyntaxError", level: "Colegio", category: "Robogol Fútbol", school: "I.T Tecnico Superior", cap: "Miguel Ángel Alvira Álvarez", capDoc: "TI 1077728337", p2: "Leonardo Castro Rojas", p3: "Emmanuel Piza Escobar", phone: "3213614208", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 2, name: "Clarebot", level: "Colegio", category: "Robogol Fútbol", school: "Claretiano Gustavo Torres Parra", cap: "Mariangela Salgado Ramirez", capDoc: "TI 1077726500", p2: "Camilo Esteban Puentes Ortiz", p3: "Nicolas Galvis Vargas", phone: "3196297600", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 3, name: "Los más capitos", level: "Colegio", category: "Robogol Fútbol", school: "Técnico superior", cap: "Samuel González", capDoc: "TI 1141327340", p2: "Joel Ibáñez Devia", p3: "Susan Mariana Trujillo Vargas", phone: "3237105063", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 4, name: "Chouchas", level: "Colegio", category: "Robogol Fútbol", school: "Técnico superior", cap: "Daniel Santiago Castaño", capDoc: "TI 1076507954", p2: "Jair Enrique Pérez", p3: "Oscar Eduardo", phone: "3227063084", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 5, name: "SDbot Tecnoacademia", level: "Colegio", category: "Robogol Fútbol", school: "Tecnoacademia Neiva", cap: "David Valdes Salas", capDoc: "TI 1077237334", p2: "Samuel Borbón Mesa", p3: "N/A", phone: "3054189533", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 6, name: "Arenosos", level: "Colegio", category: "Robogol Fútbol", school: "I.E Técnico Superior", cap: "SAMUEL ARENAS DURANGO", capDoc: "TI 1077233646", p2: "ERIC DANIEL GOMEZ LOPEZ", p3: "KEINER NIKOLAS GUTIERREZ BRIÑEZ", phone: "3183245104", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 7, name: "Los Indestructibles", level: "Colegio", category: "Robogol Fútbol", school: "I.E Técnico Superior", cap: "JOSE ALEJANDRO ROJAS BAQUERO", capDoc: "TI 1077233627", p2: "ERICK FELIPE MUESES CASTILLO", p3: "MARROQUIN PEREZ MATIAS", phone: "3025758428", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 8, name: "Los moritas", level: "Colegio", category: "Robogol Fútbol", school: "I.E Técnico Superior", cap: "THOMAS CHARRY SANCHEZ", capDoc: "TI 1076908671", p2: "JHON ALEXANDER MORA CORDOBA", p3: "JULIAN GUTIERREZ SANTOFIMIO", phone: "3202804602", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 9, name: "Polaris control", level: "Colegio", category: "Robogol Fútbol", school: "I.E Técnico Superior", cap: "SAMUEL DAVID TOVAR AVILES", capDoc: "TI 1029884414", p2: "CRISTIAN DAVID TELLO MEJIA", p3: "DIEGO ALEJANDRO COMETTA SANCHEZ", phone: "3115762447", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 10, name: "Seguidores De La Grasa", level: "Colegio", category: "Robogol Fútbol", school: "I.E Técnico Superior Neiva", cap: "Edwinn David Romero Tello", capDoc: "TI 1118373469", p2: "Mathías Castañeda Ramirez", p3: "N/A", phone: "3123218679", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 11, name: "Mochos", level: "Colegio", category: "Robogol Fútbol", school: "Técnico superior", cap: "Juan Esteban Moreno García", capDoc: "TI 1076508182", p2: "Chery Yanira", p3: "N/A", phone: "3125441045", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 12, name: "Stansell", level: "Colegio", category: "Robogol Fútbol", school: "Técnico superior", cap: "Williams Alejandro Soto Calderón", capDoc: "TI 1075796734", p2: "Keith Stansell Muñoz Trujillo", p3: "Jhonatan Javier Florez Salazar", phone: "3143813889", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 13, name: "Mecabots", level: "Colegio", category: "Robogol Fútbol", school: "Técnico superior", cap: "Daniel Felipe Vargas Montealegre", capDoc: "TI 1076506464", p2: "Juan Camilo Serrato Patiño", p3: "Bryan Andrés Moralez Montenegro", phone: "3173046288", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 14, name: "Chappi", level: "Colegio", category: "Robogol Fútbol", school: "TecnoAcademia SENA", cap: "Diego Alejandro Rojas Romero", capDoc: "TI 1029886941", p2: "Santiago Motta Cuellar", p3: "Leider Duvan Criollo Parra", phone: "3247775771", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 15, name: "Barcelona 2011", level: "Colegio", category: "Robogol Fútbol", school: "I.E Técnico Superior", cap: "Escobar Gómez Juan José", capDoc: "TI 1076509108", p2: "Camacho Perdomo sergio andres", p3: "Arenas durango Simón", phone: "3125860487", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 16, name: "Peka", level: "Colegio", category: "Robogol Fútbol", school: "Técnico Superior de Neiva", cap: "José Mathias Rentería Penagos", capDoc: "TI 1076508693", p2: "Juan Camilo Tello Mejía", p3: "Brayan Stiven Ariza Mejia", phone: "3126095461", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },

    { id: 17, name: "WALLIE", level: "Colegio", category: "Seguidor de línea velocista", school: "I.E TECNICO SUPERIOR", cap: "LAURA SOFIA CUBILLOS PERDOMO", capDoc: "TI 1077728222", p2: "MARIA JOSE MOLINA PAJOY", p3: "N/A", phone: "3028051533", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 18, name: "Rayobot Tecnoacademia", level: "Colegio", category: "Seguidor de línea velocista", school: "Tecnoacademia Neiva", cap: "Samuel Esteban Plazas Gonzalez", capDoc: "TI 1077236375", p2: "Juan David Claros Perdomo", p3: "N/A", phone: "3188345127", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 19, name: "Halcón", level: "Colegio", category: "Seguidor de línea velocista", school: "TecnoAcademia Neiva", cap: "Diego Alejandro Rojas Romero", capDoc: "TI 1029886941", p2: "Santiago Motta Cuellar", p3: "N/A", phone: "3247775771", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 20, name: "Polaris extreme", level: "Colegio", category: "Seguidor de línea velocista", school: "I.E Técnico Superior", cap: "SAMUEL DAVID TOVAR AVILES", capDoc: "TI 1029884414", p2: "CRISTIAN DAVID TELLO MEJIA", p3: "N/A", phone: "3115762447", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 21, name: "Warrior skull", level: "Colegio", category: "Seguidor de línea velocista", school: "I.E Técnico Superior", cap: "WHALTER STIVEN TRIANA VAQUIRO", capDoc: "CC 1029882400", p2: "JUAN ESTEBAN TRUJILLO NARVAEZ", p3: "N/A", phone: "3173407288", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 22, name: "Seguiflash", level: "Colegio", category: "Seguidor de línea velocista", school: "I.E Técnico Superior", cap: "NIKOL IULIANA QUINTERO REYES", capDoc: "TI 1076907663", p2: "MAELY SOFIA TABARES AGUIRRE", p3: "N/A", phone: "3212780848", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 23, name: "Line force", level: "Colegio", category: "Seguidor de línea velocista", school: "I.E Técnico Superior", cap: "DIEGO ALEJANDRO COMETTA SANCHEZ", capDoc: "CC 1032014138", p2: "N/A", p3: "N/A", phone: "3202719942", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 24, name: "Rainbow racer", level: "Colegio", category: "Seguidor de línea velocista", school: "I.E Técnico Superior", cap: "TALIANA MONTANO PIÑEROS", capDoc: "TI 1077233244", p2: "JUAN MANUEL LOZANO ARIZA", p3: "N/A", phone: "3116943521", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 25, name: "Peka", level: "Colegio", category: "Seguidor de línea velocista", school: "Técnico superior de Neiva", cap: "José Mathias Rentería Penagos", capDoc: "TI 1076508693", p2: "Juan Camilo Tello Mejía", p3: "N/A", phone: "3126095461", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 26, name: "Robotline", level: "Colegio", category: "Seguidor de línea velocista", school: "Instituto tecnico superior", cap: "Jhonattan Javier Florez Salazar", capDoc: "TI 1077233192", p2: "Williams Alejandro Soto Calderón", p3: "N/A", phone: "3165751868", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },

    { id: 27, name: "ESPARTAN", level: "Colegio", category: "Minisumo RC", school: "I.E LICEO DE SANTA LIBRADA", cap: "DUVAN SEBASTIAN JOYA ALARCON", capDoc: "TI 1028786505", p2: "YERLINTON ANDREY RODRIGUES PERDOMO", p3: "KEVIN DANIEL SILVA HOYOS", phone: "3124565720", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 28, name: "AlphaClaret", level: "Colegio", category: "Minisumo RC", school: "I.E. Claretieno Gustavo Torres Parra", cap: "Jhon Alexander Vargas Garnica", capDoc: "TI 1029889094", p2: "Karen Sofia Galvis Vargas", p3: "N/A", phone: "3127907105", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 29, name: "Moobs", level: "Colegio", category: "Minisumo RC", school: "I.E Técnico Superior", cap: "ANA PAULINA MEDINA TRUJILLO", capDoc: "TI 1083895358", p2: "MARIA DEL MAR GUTIERREZ LOSADA", p3: "N/A", phone: "3203687524", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 30, name: "Relé", level: "Colegio", category: "Minisumo RC", school: "I.E Técnico Superior", cap: "THOMAS SEBASTIAN CERQUERA PARRA", capDoc: "TI 1076908637", p2: "N/A", p3: "N/A", phone: "3107683633", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 31, name: "Rayo Mcqueen", level: "Colegio", category: "Minisumo RC", school: "I.E Técnico Superior", cap: "JOSE ALEJANDRO ROJAS BAQUERO", capDoc: "TI 1077233627", p2: "N/A", p3: "N/A", phone: "3025758428", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 32, name: "Power", level: "Colegio", category: "Minisumo RC", school: "I.E Técnico Superior", cap: "THOMAS CHARRY SANCHEZ", capDoc: "TI 1076908671", p2: "JHON ALEXANDER MORA CORDOBA", p3: "N/A", phone: "3202804602", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 33, name: "Peso pluma", level: "Colegio", category: "Minisumo RC", school: "I.E Técnico Superior", cap: "JUAN DAVID CASTILLO GARCIA", capDoc: "TI 1079606435", p2: "N/A", p3: "N/A", phone: "3134774986", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 34, name: "Diomedes", level: "Colegio", category: "Minisumo RC", school: "I.E Técnico Superior", cap: "JORGE LUIS GUERRERO BASTIDAS", capDoc: "TI 1077230622", p2: "CRISTIAN DAVID TRUJILLO RAMIREZ", p3: "N/A", phone: "3133371614", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 35, name: "Papatinas pro", level: "Colegio", category: "Minisumo RC", school: "I.E Técnico Superior", cap: "PALOMA ORTIZ FRANCO", capDoc: "TI 1077234599", p2: "SARETH SOFIA CALDERON TORRES", p3: "N/A", phone: "3124376549", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 36, name: "Atomic Destroyer", level: "Colegio", category: "Minisumo RC", school: "I.E Técnico Superior", cap: "SAMUEL DAVID TOVAR AVILES", capDoc: "TI 1029884414", p2: "CRISTIAN DAVID TELLO MEJIA", p3: "N/A", phone: "3115762447", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 37, name: "Manolito", level: "Colegio", category: "Minisumo RC", school: "I.E Técnico Superior", cap: "DIEGO ALEJANDRO COMETTA SANCHEZ", capDoc: "CC 1032014138", p2: "EMANUEL RIVERA VALENCIA", p3: "N/A", phone: "3202719942", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 38, name: "Minipekka", level: "Colegio", category: "Minisumo RC", school: "I.E Técnico Superior", cap: "JOSE MANUEL COLLAZOS PLAZAS", capDoc: "CC 1076906973", p2: "LAURA STEFANY MONTERO ORREGO", p3: "N/A", phone: "3138282850", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 39, name: "Los osquitar 67", level: "Colegio", category: "Minisumo RC", school: "Técnico superior", cap: "Daniel Santiago Castaño", capDoc: "TI 1076507954", p2: "Samuel González", p3: "N/A", phone: "3227063084", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 40, name: "Mecabots", level: "Colegio", category: "Minisumo RC", school: "Técnico superior", cap: "Brian Andrés Moralez", capDoc: "CC 1077724321", p2: "Juan Serrato Patiño", p3: "Daniel Felipe Vargas", phone: "3157622134", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 41, name: "Soto sumo", level: "Colegio", category: "Minisumo RC", school: "Técnico superior", cap: "Williams Alejandro Soto Calderón", capDoc: "TI 1075796734", p2: "Xiomara Lozada", p3: "N/A", phone: "3143813889", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },

    { id: 42, name: "TitanBots", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "Claretiano Gustavo Torres Parra", cap: "María Camila Ortiz", capDoc: "TI 1076912807", p2: "Juan Manuel Arlmario Rojas", p3: "N/A", phone: "3150458249", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 43, name: "Infinix", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "I.E Técnico Superior", cap: "JORGE LUIS GUERRERO BASTIDAS", capDoc: "TI 1077230622", p2: "N/A", p3: "N/A", phone: "3133371614", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 44, name: "Papatin", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "I.E Técnico Superior", cap: "MATIAS MARROQUIN PEREZ", capDoc: "TI 1029886309", p2: "N/A", p3: "N/A", phone: "3026595421", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 45, name: "AMG", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "I.E Técnico Superior", cap: "THOMAS SEBASTIAN CERQUERA PARRA", capDoc: "TI 1076908637", p2: "N/A", p3: "N/A", phone: "3107683633", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 46, name: "Los reyes", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "I.E Técnico Superior", cap: "THOMAS CHARRY SANCHEZ", capDoc: "TI 1076908671", p2: "N/A", p3: "N/A", phone: "3202804602", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 47, name: "Papá oso", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "I.E Técnico Superior", cap: "SAMUEL ARENAS DURANGO", capDoc: "TI 1077233646", p2: "N/A", p3: "N/A", phone: "3183245104", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 48, name: "Shadow", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "I.E Técnico Superior", cap: "ERICK FELIPE MUESES CASTILLO", capDoc: "TI 1075264002", p2: "N/A", p3: "N/A", phone: "3237331944", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 49, name: "Mate", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "I.E Técnico Superior", cap: "JOSE ALEJANDRO ROJAS BAQUERO", capDoc: "TI 1077233627", p2: "N/A", p3: "N/A", phone: "3025758428", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 50, name: "PRC", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "I.E Técnico Superior", cap: "NICOLAS LEANDRO PALOMA GUTIERREZ", capDoc: "TI 1076508043", p2: "N/A", p3: "N/A", phone: "3332721908", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 51, name: "SotVarg 23", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "Técnico superior", cap: "Williams Alejandro Soto Calderón", capDoc: "TI 1075796734", p2: "Daniel Felipe Vargas Montealegre", p3: "N/A", phone: "3143813889", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 52, name: "Anti sotvarg", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "Técnico superior", cap: "Juan Camilo Serrato", capDoc: "CC 1076740159", p2: "Brian Andrés Moralez", p3: "N/A", phone: "3142586729", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },

    { id: 53, name: "Robo UCC", level: "Universidad", category: "Seguidor de línea velocista", school: "Universidad Cooperativa de Colombia", cap: "Mauro Esteban Figueroa Barreiro", capDoc: "CC 107826624", p2: "Hugo Stiven Fernández Muñoz", p3: "N/A", phone: "3108556673", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 54, name: "STM Tecnoacademia", level: "Universidad", category: "Seguidor de línea velocista", school: "Tecnoacademia Neiva", cap: "Juan David Claros Perdomo", capDoc: "TI 1076911275", p2: "Samuel Esteban Plazas Gonzalez", p3: "N/A", phone: "3208782835", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 55, name: "RoboStrikers", level: "Universidad", category: "Robogol Fútbol", school: "Corhuila", cap: "Álvaro Augusto Andrade Quesada", capDoc: "CC 1077720448", p2: "Juan Pablo Ortega Vargas", p3: "Santiago José Villabon Medina", phone: "3229448977", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 56, name: "Cyberbot", level: "Colegio", category: "Robogol Fútbol", school: "Tecnoacademia Neiva", cap: "Javier Vargas", capDoc: "TI 1076909644", p2: "Yeison Smit Sanchez Serrato", p3: "N/A", phone: "3153728806", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 57, name: "Megatron", level: "Colegio", category: "Robogol Fútbol", school: "Tecnoacademia Neiva", cap: "Leider Duvan Criollo Parra", capDoc: "TI 1024552620", p2: "Diego Alejandro Rojas Romero", p3: "Santiago Motta Cuellar", phone: "3214256303", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 58, name: "Gimnasio San Bernardino 1", level: "Colegio", category: "Robogol Fútbol", school: "Gimnasio San Bernardino", cap: "Samuel Santiago Murcia Gaitan", capDoc: "TI 1076912715", p2: "Christopher Fajardo Arias", p3: "N/A", phone: "3165381002", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 59, name: "Julian Guillermo Ortiz Trujillo", level: "Colegio", category: "Robogol Fútbol", school: "Gimnasio San Bernardino", cap: "Samuel Alejandro Parra Ramirez", capDoc: "TI 1076916409", p2: "Emmanuel Alejandro Leon Achury", p3: "N/A", phone: "3165381002", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 60, name: "Gimnasio San Bernardino 3", level: "Colegio", category: "Robogol Fútbol", school: "Gimnasio San Bernardino", cap: "Juan Jose Yacuma Vallejo", capDoc: "TI 1076917309", p2: "Jeronimo Velazquez", p3: "N/A", phone: "3165381002", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 61, name: "Educakids", level: "Colegio", category: "Robogol Fútbol", school: "Educakids", cap: "Juan Emiliano García Maje", capDoc: "TI 1077244509", p2: "Aaron Martínez Castañeda", p3: "Juan Martín Hermida", phone: "3229352713", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 62, name: "RobotiX 1", level: "Colegio", category: "Robogol Fútbol", school: "Academia RobotiX Lab", cap: "Adrian Vargas", capDoc: "Pendiente", p2: "Emmanuel Ramirez", p3: "N/A", phone: "3185191757", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 63, name: "RobotiX 2", level: "Colegio", category: "Robogol Fútbol", school: "Academia RobotiX Lab", cap: "Simon Rueda Parra", capDoc: "Pendiente", p2: "Juan Jose Pastor Parra", p3: "N/A", phone: "3185191757", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 64, name: "RobotiX 3", level: "Colegio", category: "Robogol Fútbol", school: "Academia RobotiX Lab", cap: "Angel Caicedo", capDoc: "Pendiente", p2: "Samuel Dugarte", p3: "N/A", phone: "3185191757", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 65, name: "RobotiX 4", level: "Colegio", category: "Robogol Fútbol", school: "Academia RobotiX Lab", cap: "Santiago Lara", capDoc: "Pendiente", p2: "Santiago Alvarez", p3: "N/A", phone: "3185191757", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 66, name: "RobotiX 5", level: "Colegio", category: "Robogol Fútbol", school: "Academia RobotiX Lab", cap: "Emmanuel Ninco", capDoc: "Pendiente", p2: "Angel Lorenzo Ospina Lugo", p3: "N/A", phone: "3185191757", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 67, name: "LAB-IA OVALLE", level: "Colegio", category: "Robogol Fútbol", school: "I.E Técnico Superior de Neiva", cap: "JOSÉ JOAQUIN OVALLE", capDoc: "TI 1077241267", p2: "ANNIE SALOMÉ OVALLE BOHÓRQUEZ", p3: "N/A", phone: "3115377167", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 68, name: "GEAR FIFTH", level: "Colegio", category: "Robogol Fútbol", school: "José Hilario López", cap: "Miguel Angel Morales Oliveros", capDoc: "TI 1077233147", p2: "Santiago García Campos", p3: "Keyner Julián Guarnizo Cuéllar", phone: "3116458738", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },

    { id: 69, name: "fasorbot", level: "Universidad", category: "Robogol Fútbol", school: "Usco", cap: "Daniel Santiago Polanco Reyes", capDoc: "CC 1077724545", p2: "Cristian Andrés García Hernández", p3: "N/A", phone: "3115778872", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 70, name: "RoboSparks", level: "Universidad", category: "Robogol Fútbol", school: "Universidad Cooperativa de Colombia", cap: "Rafael Alexander Olaya Gutierrez", capDoc: "CC 1075538915", p2: "Evelin Yohana Gaona Cerquera", p3: "Alejandro Velasquez", phone: "3105633786", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 71, name: "Error 404", level: "Universidad", category: "Robogol Fútbol", school: "Corhuila", cap: "Fabian Andres Zabaleta Polo", capDoc: "CC 1076903390", p2: "Oscar Mauricio Valderrama", p3: "Juan Pablo Matta Parga", phone: "3112857274", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },

    { id: 72, name: "Gimnasio San Bernardino 1", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "Gimnasio San Bernardino", cap: "Sofia Torres Hernandez", capDoc: "TI 1089620800", p2: "Samuel Santiago Murcia Gaitan", p3: "N/A", phone: "3165381002", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 73, name: "Gimnasio San Bernardino 2", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "Gimnasio San Bernardino", cap: "Diana Sofía Gaitán Bocanegra", capDoc: "TI 1077731632", p2: "Christopher Fajardo Arias", p3: "N/A", phone: "3165381002", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 74, name: "Educakids 1", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "Educakids", cap: "Juan Emiliano Martínez", capDoc: "TI 1077244509", p2: "N/A", p3: "N/A", phone: "3229352713", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 75, name: "Educakids 2", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "Educakids", cap: "Aaron Martínez Castañeda", capDoc: "TI 1076919133", p2: "N/A", p3: "N/A", phone: "N/A", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 76, name: "Educakids 3", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "Educakids", cap: "Juan Martín Hermida", capDoc: "TI 1007371167", p2: "N/A", p3: "N/A", phone: "3229352713", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 77, name: "RobotiX 1", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "Academia RobotiX Lab", cap: "Adrian Vargas", capDoc: "Pendiente", p2: "Emmanuel Ramirez", p3: "N/A", phone: "3185191757", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 78, name: "RobotiX 2", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "Academia RobotiX Lab", cap: "Simon Rueda Parra", capDoc: "Pendiente", p2: "Juan Jose Pastor Parra", p3: "N/A", phone: "3185191757", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 79, name: "RobotiX 3", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "Academia RobotiX Lab", cap: "Angel Caicedo", capDoc: "Pendiente", p2: "Samuel Dugarte", p3: "N/A", phone: "3185191757", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 80, name: "RobotiX 4", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "Academia RobotiX Lab", cap: "Santiago Lara", capDoc: "Pendiente", p2: "Santiago Alvarez", p3: "N/A", phone: "3185191757", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 81, name: "RobotiX 5", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "Academia RobotiX Lab", cap: "Emmanuel Ninco", capDoc: "Pendiente", p2: "N/A", p3: "N/A", phone: "3185191757", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 82, name: "GEAR FIFTH", level: "Colegio", category: "BURSTBOT( Batalla de globos)", school: "José Hilario López", cap: "Miguel Angel Morales Oliveros", capDoc: "TI 1077233147", p2: "Keyner Julián Guarnizo Cuéllar", p3: "N/A", phone: "3116458738", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },

    { id: 83, name: "RobotiX 1", level: "Universidad", category: "Robogol Fútbol", school: "Academia RobotiX Lab", cap: "Adrian Vargas", capDoc: "Pendiente", p2: "Emmanuel Ramirez", p3: "N/A", phone: "3185191757", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 84, name: "RobotiX 2", level: "Universidad", category: "Robogol Fútbol", school: "Academia RobotiX Lab", cap: "Simon Rueda Parra", capDoc: "Pendiente", p2: "Juan Jose Pastor Parra", p3: "N/A", phone: "3185191757", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 85, name: "RobotiX 3", level: "Universidad", category: "Robogol Fútbol", school: "Academia RobotiX Lab", cap: "Angel Caicedo", capDoc: "Pendiente", p2: "Samuel Dugarte", p3: "N/A", phone: "3185191757", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 86, name: "RobotiX 4", level: "Universidad", category: "Robogol Fútbol", school: "Academia RobotiX Lab", cap: "Santiago Lara", capDoc: "Pendiente", p2: "Santiago Alvarez Diaz", p3: "N/A", phone: "3185191757", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },

    { id: 87, name: "Gaitana", level: "Colegio", category: "Seguidor de línea velocista", school: "Tecnoacademia Neiva", cap: "Samuel Plazas Gonzalez", capDoc: "TI 1077236375", p2: "Juan David Claros Perdomo", p3: "N/A", phone: "3132173688", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 88, name: "Badline", level: "Colegio", category: "Seguidor de línea velocista", school: "Técnico Superior", cap: "SAMUEL DAVID TOVAR AVILES", capDoc: "TI 1029884414", p2: "CRISTIAN DAVID TELLO MEJIA", p3: "N/A", phone: "3115762447", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 93, name: "Gimnasio San Bernardino", level: "Colegio", category: "Seguidor de línea velocista", school: "Gimnasio San Bernardino", cap: "Christopher Fajardo Arias", capDoc: "TI 1029887521", p2: "Samuel Santiago Murcia Gaitan", p3: "N/A", phone: "3165381002", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 101, name: "Educakids", level: "Colegio", category: "Seguidor de línea velocista", school: "Educakids", cap: "Juan Emiliano Martínez", capDoc: "TI 1077244509", p2: "N/A", p3: "N/A", phone: "3229352713", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 102, name: "Educakids 2", level: "Colegio", category: "Seguidor de línea velocista", school: "Educakids", cap: "Juan Martín Hermida", capDoc: "TI 1007371167", p2: "N/A", p3: "N/A", phone: "3229352713", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 105, name: "RobotiX 6", level: "Colegio", category: "Seguidor de línea velocista", school: "Academia RobotiX Lab", cap: "Angel Lorenzo Ospina Lugo", capDoc: "TI 1014994585", p2: "N/A", p3: "N/A", phone: "3185191757", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 106, name: "WALLIE", level: "Colegio", category: "Seguidor de línea velocista", school: "I.E TECNICO SUPERIOR", cap: "LAURA SOFIA CUBILLOS PERDOMO", capDoc: "TI 1077728222", p2: "MARIA JOSE MOLINA PAJOY", p3: "N/A", phone: "3028051533", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },

    { id: 89, name: "Gimnasio San Bernardino 1", level: "Colegio", category: "Minisumo RC", school: "Gimnasio San Bernardino", cap: "Sofia Torres Hernandez", capDoc: "TI 1089620800", p2: "Diana Sofía Gaitán Bocanegra", p3: "N/A", phone: "3165381002", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 90, name: "Gimnasio San Bernardino 2", level: "Colegio", category: "Minisumo RC", school: "Gimnasio San Bernardino", cap: "Emmanuel Alejandro Leon Achury", capDoc: "TI 1076913239", p2: "Juan Jose Yacuma Vallejo", p3: "N/A", phone: "3165381002", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 91, name: "Gimnasio San Bernardino 3", level: "Colegio", category: "Minisumo RC", school: "Gimnasio San Bernardino", cap: "Samuel Santiago Murcia Gaitan", capDoc: "TI 1076912715", p2: "Christopher Fajardo Arias", p3: "N/A", phone: "3165381002", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 92, name: "Gimnasio San Bernardino 4", level: "Colegio", category: "Minisumo RC", school: "Gimnasio San Bernardino", cap: "Samuel Alejandro Parra Ramirez", capDoc: "TI 1076916409", p2: "Jeronimo Velazquez", p3: "N/A", phone: "3165381002", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 98, name: "Educakids 1", level: "Colegio", category: "Minisumo RC", school: "Educakids", cap: "Juan Emiliano Martínez", capDoc: "TI 1077244509", p2: "N/A", p3: "N/A", phone: "3229352713", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 99, name: "Educakids 2", level: "Colegio", category: "Minisumo RC", school: "Educakids", cap: "Aaron Martínez Castañeda", capDoc: "TI 1076919133", p2: "N/A", p3: "N/A", phone: "3229352713", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 100, name: "Educakids 3", level: "Colegio", category: "Minisumo RC", school: "Educakids", cap: "Juan Martín Hermida", capDoc: "TI 1007371167", p2: "N/A", p3: "N/A", phone: "3229352713", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },

    { id: 94, name: "Isengard", level: "Universidad", category: "Minisumo RC", school: "Usco", cap: "Juan David Corredor Plazas", capDoc: "TI 1077230628", p2: "Jhoan Sebastián Ramos Puentes", p3: "Nicolás Ramírez Rubiano", phone: "3115778872", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 95, name: "Don peperoni", level: "Universidad", category: "Minisumo RC", school: "Usco", cap: "Isabela Muñoz Alvarez", capDoc: "CC 1075222640", p2: "Natalia Ardila Valderrama", p3: "N/A", phone: "3115778872", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 97, name: "Kirishima", level: "Universidad", category: "Minisumo RC", school: "Usco", cap: "María Fernanda Pérez Villanueva", capDoc: "Pendiente", p2: "Zully Daniela García Lugo", p3: "N/A", phone: "3115778872", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 103, name: "RobotiX 5", level: "Universidad", category: "Minisumo RC", school: "Academia RobotiX Lab", cap: "Emmanuel Ninco", capDoc: "Pendiente", p2: "N/A", p3: "N/A", phone: "3185191757", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },

    { id: 96, name: "Rayo mcqueen", level: "Universidad", category: "Seguidor de línea velocista", school: "Usco", cap: "Linda Osiris Escobar Díaz", capDoc: "CC 1077722827", p2: "Lizeth Karina Zambrano Jimenez", p3: "Julian Estupiñan Gonzalez", phone: "3115778872", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 104, name: "RobotiX 6", level: "Universidad", category: "Seguidor de línea velocista", school: "Academia RobotiX Lab", cap: "Angel Lorenzo Ospina Lugo", capDoc: "TI 1014994585", p2: "N/A", p3: "N/A", phone: "3185191757", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },

    { id: 107, name: "GEAR FIFTH", level: "Colegio", category: "Seguidor de línea velocista", school: "José Hilario López", cap: "Miguel Angel Morales Oliveros", capDoc: "TI 1077233147", p2: "Pendiente", p3: "N/A", phone: "3116458738", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },

    { id: 108, name: "Purple Death", level: "Universidad", category: "Minisumo RC", school: "Universidad Cooperativa de Colombia", cap: "Pendiente", capDoc: "Pendiente", p2: "Pendiente", p3: "N/A", phone: "Pendiente", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },

    { id: 109, name: "SpeedBoot", level: "Universidad", category: "Seguidor de línea velocista", school: "Corporación Universitaria del Huila - CORHUILA", cap: "Pendiente", capDoc: "Pendiente", p2: "Pendiente", p3: "N/A", phone: "Pendiente", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 110, name: "Nova Flash", level: "Universidad", category: "Seguidor de línea velocista", school: "Universidad Cooperativa de Colombia", cap: "Pendiente", capDoc: "Pendiente", p2: "Pendiente", p3: "N/A", phone: "Pendiente", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },
    { id: 111, name: "Gallo Negro Racing", level: "Universidad", category: "Seguidor de línea velocista", school: "Corhuila", cap: "Pendiente", capDoc: "Pendiente", p2: "Pendiente", p3: "N/A", phone: "Pendiente", score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0 },

];

let appState = {
    isAdmin: false,
    currentLevel: "Colegio",
    currentCategory: "Robogol Fútbol",
    teams: [],
    brackets: {}
};

// CRONÓMETRO GLOBAL
let timerSeconds = 120;
let timerInterval = null;

window.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderDashboard();

    // Sincronización multi-pestaña
    window.addEventListener('storage', (e) => {
        if (e.key === 'uscotron_teams' || e.key === 'uscotron_brackets') {
            loadState();
            renderDashboard();
        }
    });
});

function loadState() {
    const savedTeams = localStorage.getItem('uscotron_teams');
    if (savedTeams) {
        const saved = JSON.parse(savedTeams);
        const savedById = new Map(saved.map(t => [t.id, t]));
        const initialIds = new Set(initialDataset.map(t => t.id));
        let changed = false;

        // 1) Equipos del código: se agregan los nuevos y se actualizan los datos de inscripción,
        //    conservando los puntajes y tiempos ya registrados en este navegador.
        const merged = initialDataset.map(init => {
            const old = savedById.get(init.id);
            if (!old) { changed = true; return { ...init }; }
            const updated = { ...init, score: old.score, t1: old.t1, t2: old.t2, t3: old.t3, bestTime: old.bestTime };
            if (JSON.stringify(updated) !== JSON.stringify(old)) changed = true;
            return updated;
        });

        // 2) Equipos que no están en el código (agregados a mano por el admin): se conservan.
        const extras = saved.filter(t => !initialIds.has(t.id));

        appState.teams = merged.concat(extras);
        if (changed) saveState();
    } else {
        appState.teams = initialDataset.map(t => ({ ...t }));
        saveState();
    }

    // Los cuadros se generan automáticamente al abrir cada categoría; aquí solo se cargan los guardados válidos
    appState.brackets = {};
    try {
        const parsed = JSON.parse(localStorage.getItem('uscotron_brackets') || '{}');
        Object.keys(parsed).forEach(k => {
            const need = k.endsWith('_Minisumo RC') ? LLAVES_VERSION : BRACKET_VERSION;
            if (parsed[k] && parsed[k].v === need) appState.brackets[k] = parsed[k];
        });
    } catch (e) { appState.brackets = {}; }
}

function saveState() {
    localStorage.setItem('uscotron_teams', JSON.stringify(appState.teams));
    localStorage.setItem('uscotron_brackets', JSON.stringify(appState.brackets));
}

function computeBestTime(t1, t2, t3) {
    const validTimes = [t1, t2, t3].map(v => parseFloat(v) || 0).filter(v => v > 0);
    if (validTimes.length === 0) return 0;
    return Math.min(...validTimes);
}




// ===================== CUADROS / LLAVES =====================
// Robogol Fútbol -> eliminación directa
// Minisumo RC    -> llaves: cada equipo juega 2 partidos, los 2 con más puntos avanzan, hasta la final
const BRACKET_VERSION = 3;   // eliminación directa
const LLAVES_VERSION = 4;    // llaves de Minisumo
const PTS_WIN = 3, PTS_DRAW = 1;
const LLAVE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function bracketKey(level, cat) { return `${level}_${cat}`; }
function bracketTypeFor(cat) { return cat === "Minisumo RC" ? "llaves" : "single"; }

function newMatch(id, bracket, round, index) {
    return { id, bracket, round, index, a: null, b: null, scoreA: 0, scoreB: 0,
             completed: false, auto: false, winner: null, loser: null, nextWin: null };
}

// Normaliza el nombre de la institución (en la hoja hay muchas formas de escribir el mismo colegio)
function schoolKey(name) {
    const s = String(name || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
    if (s.includes('tecnico superior')) return 'tecnico superior';
    if (s.includes('tecnoacademia')) return 'tecnoacademia';
    if (s.includes('claret')) return 'claretiano';
    if (s.includes('san bernardino')) return 'san bernardino';
    if (s.includes('educakids')) return 'educakids';
    if (s.includes('robotix')) return 'robotix';
    if (s.includes('santa librada')) return 'santa librada';
    if (s.includes('hilario')) return 'jose hilario lopez';
    if (s.includes('usco')) return 'usco';
    if (s.includes('corhuila')) return 'corhuila';
    if (s.includes('cooperativa')) return 'ucc';
    return s;
}

function teamSchoolKey(id) {
    const t = appState.teams.find(t => t.id === id);
    return t ? schoolKey(t.school) : String(id);
}

function shuffleInPlace(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Ordena los equipos para que en la 1ra ronda se enfrenten contra otros colegios.
function arrangeOrder(ids, randomize) {
    let list = ids.map(id => ({ id, key: teamSchoolKey(id) }));
    if (randomize) shuffleInPlace(list);
    const groups = {};
    list.forEach(x => (groups[x.key] = groups[x.key] || []).push(x));
    let gl = Object.values(groups);
    if (randomize) shuffleInPlace(gl);
    gl.sort((a, b) => b.length - a.length);
    const L = gl.flat();
    const n = L.length, h = Math.ceil(n / 2);
    let pairs = [];
    for (let i = 0; i < Math.floor(n / 2); i++) pairs.push([L[i], L[i + h]]);
    const leftover = n % 2 === 1 ? L[h - 1] : null;
    if (randomize) {
        shuffleInPlace(pairs);
        pairs = pairs.map(p => (Math.random() < 0.5 ? p : [p[1], p[0]]));
    }
    const out = pairs.flat().map(x => x.id);
    if (leftover) out.push(leftover.id);
    return out;
}

// ---------------------------------------------------------------
// ELIMINACIÓN DIRECTA (Robogol)
// ---------------------------------------------------------------
// Empareja las fuentes de dos en dos. Si sobra una (número impar) solo esa pasa directo (BYE).
function createBracket(cat, ids, shuffle) {
    const order = arrangeOrder(ids, shuffle);
    const n = order.length;
    const matches = [];

    // Una "fuente" es un id de equipo, 'BYE', o {from: idPartido, kind: 'win'}
    const place = (m, slot, src) => {
        if (typeof src === 'number' || src === 'BYE') { m[slot] = src; return; }
        const sm = matches.find(x => x.id === src.from);
        sm.nextWin = { id: m.id, slot };
    };
    const pair = (srcs, round) => {
        const ms = [];
        for (let i = 0; i < srcs.length; i += 2) {
            const m = newMatch(`W${round}_${ms.length}`, 'W', round, ms.length);
            place(m, 'a', srcs[i]);
            place(m, 'b', i + 1 < srcs.length ? srcs[i + 1] : 'BYE');
            matches.push(m); ms.push(m);
        }
        return ms;
    };
    // El que pasó por BYE va primero para que en la siguiente ronda juegue y el cupo libre le toque
    // a alguien que ya jugó.
    const winnersOf = (ms) => {
        const w = ms.map(m => ({ from: m.id, kind: 'win' }));
        if (ms[ms.length - 1].b === 'BYE') w.unshift(w.pop());
        return w;
    };

    const wN = {};
    let parts = order.slice();
    let r = 1;
    while (parts.length > 1) {
        wN[r] = parts.length;
        const ms = pair(parts, r);
        parts = winnersOf(ms);
        r++;
    }

    const br = { v: BRACKET_VERSION, type: 'single', size: n, order, wN,
                 teamIds: [...ids].sort((x, y) => x - y), matches };
    resolveByes(br);
    return br;
}

function getMatch(br, id) { return br.matches.find(m => m.id === id); }

function completeMatch(br, m, winner, loser, auto) {
    m.completed = true; m.auto = !!auto; m.winner = winner; m.loser = loser;
    if (m.nextWin) getMatch(br, m.nextWin.id)[m.nextWin.slot] = winner;
}

// Los cupos BYE avanzan solos
function resolveByes(br) {
    let changed = true;
    while (changed) {
        changed = false;
        br.matches.forEach(m => {
            if (m.completed || m.a === null || m.b === null) return;
            if (m.a === 'BYE' && m.b === 'BYE') { completeMatch(br, m, 'BYE', 'BYE', true); changed = true; }
            else if (m.a === 'BYE') { completeMatch(br, m, m.b, 'BYE', true); changed = true; }
            else if (m.b === 'BYE') { completeMatch(br, m, m.a, 'BYE', true); changed = true; }
        });
    }
}

// Borra el resultado de un partido y de todo lo que dependa de él
function resetMatch(br, m) {
    const clearSlot = (link) => {
        if (!link) return;
        const nm = getMatch(br, link.id);
        if (nm.completed) resetMatch(br, nm);
        nm[link.slot] = null;
    };
    m.completed = false; m.auto = false; m.winner = null; m.loser = null; m.scoreA = 0; m.scoreB = 0;
    clearSlot(m.nextWin);
}

function applyResult(br, m, scoreA, scoreB, winnerId) {
    const loserId = winnerId === m.a ? m.b : m.a;
    if (m.completed && m.winner !== winnerId) resetMatch(br, m);
    if (!m.completed) completeMatch(br, m, winnerId, loserId, false);
    m.scoreA = scoreA; m.scoreB = scoreB;
    resolveByes(br);
}

function bracketHasResults(br) {
    if (br.type === 'llaves') return llavesHaveResults(br);
    return br.matches.some(m => m.completed && !m.auto);
}

function getChampion(br) {
    const final = br.matches.filter(m => m.bracket === 'W').slice(-1)[0];
    return final && final.completed ? final.winner : null;
}

function slotName(v) {
    if (v === null || v === undefined) return 'Por definir';
    if (v === 'BYE') return 'BYE (pasa directo)';
    const t = appState.teams.find(t => t.id === v);
    return t ? t.name : '—';
}

function roundTitleByN(n) {
    if (n <= 2) return 'Gran Final';
    if (n <= 4) return 'Semifinales';
    if (n <= 8) return 'Cuartos de final';
    if (n <= 16) return 'Octavos de final';
    if (n <= 32) return 'Dieciseisavos';
    return `Ronda de ${n}`;
}

function renderRoundColumn(title, ms) {
    const visible = ms.filter(m => !(m.a === 'BYE' && m.b === 'BYE'));
    if (!visible.length) return { html: '', cols: 0 };
    return {
        html: `<div class="bracket-round"><div class="round-header">${title}</div>${visible.map(createMatchCardHTML).join('')}</div>`,
        cols: 1
    };
}

function sameIds(a, b) {
    const x = [...a].sort((p, q) => p - q), y = [...b].sort((p, q) => p - q);
    return x.length === y.length && x.every((v, i) => v === y[i]);
}

function renderBracketView(container) {
    const level = appState.currentLevel, cat = appState.currentCategory;
    if (bracketTypeFor(cat) === 'llaves') { renderLlavesView(container); return; }

    const key = bracketKey(level, cat);
    const teams = appState.teams.filter(t => t.level === level && t.category === cat);
    const ids = teams.map(t => t.id);

    if (ids.length < 2) {
        container.innerHTML = `<div class="empty-state"><i class="fa-solid fa-users-slash"></i>
            <h3>Se necesitan al menos 2 equipos inscritos para armar el cuadro (hay ${ids.length}).</h3></div>`;
        return;
    }

    let br = appState.brackets[key];
    let stale = false;
    if (!br || br.v !== BRACKET_VERSION) {
        br = createBracket(cat, ids, false);
        appState.brackets[key] = br;
        saveState();
    } else if (!sameIds(br.teamIds, ids)) {
        if (!bracketHasResults(br)) {
            br = createBracket(cat, ids, false);
            appState.brackets[key] = br;
            saveState();
        } else {
            stale = true;
        }
    }

    const champId = getChampion(br);
    const played = br.matches.filter(m => m.completed && !m.auto).length;
    const byes = br.matches.filter(m => (m.a === 'BYE') !== (m.b === 'BYE')).length;

    const W = {};
    br.matches.forEach(m => { (W[m.round] = W[m.round] || []).push(m); });
    const wRounds = Object.keys(W).map(Number).sort((a, b) => a - b);

    let html = `<div class="bracket-info">
        <div><strong>Eliminación directa</strong>
        · ${ids.length} equipos${byes > 0 ? ` · ${byes} pasa(n) directo por número impar` : ''} · partidos jugados: ${played}</div>
        ${appState.isAdmin ? `<button class="btn btn-outline" onclick="drawBracket()"><i class="fa-solid fa-shuffle"></i> Mezclar equipos al azar</button>` : ''}
    </div>`;

    if (stale) {
        html += `<div class="stale-notice"><i class="fa-solid fa-triangle-exclamation"></i>
            Se inscribieron o cambiaron equipos después de iniciar el torneo. El cuadro conserva los resultados actuales.
            ${appState.isAdmin ? 'Usa "Mezclar equipos al azar" para rehacerlo con todos los equipos (borra los resultados).' : ''}</div>`;
    }

    if (champId !== null && champId !== 'BYE') {
        html += `<div class="champion-banner"><i class="fa-solid fa-trophy"></i> CAMPEÓN: ${escapeHTML(slotName(champId))}</div>`;
    }

    let cols = 0, tree = '';
    wRounds.forEach(r => {
        const c = renderRoundColumn(roundTitleByN(br.wN[r]), W[r]);
        tree += c.html; cols += c.cols;
    });
    html += `<div class="bracket-wrapper">`;
    html += `<div class="bracket-section-title"><i class="fa-solid fa-crown"></i> Cuadro de eliminación directa</div>`;
    html += `<div class="bracket-tree" style="min-width:${Math.max(cols, 3) * 240}px">${tree}</div>`;
    html += `</div>`;
    container.innerHTML = html;
}

// ---------------------------------------------------------------
// MINISUMO: LLAVES (2 partidos por equipo, avanzan los 2 con más puntos)
// ---------------------------------------------------------------
// Tamaño de las llaves: de 3 a 5 equipos (lo más cercano a 4). Con anillo de partidos
// (A-B, B-C, C-D, D-A) cada equipo juega exactamente 2 partidos.
function llaveSizes(n) {
    const lo = Math.max(1, Math.ceil(n / 5)), hi = Math.max(1, Math.floor(n / 3));
    const g = Math.min(hi, Math.max(lo, Math.round(n / 4)));
    const base = Math.floor(n / g), extra = n % g;
    return Array.from({ length: g }, (_, i) => base + (i < extra ? 1 : 0));
}

// Reparte los equipos en llaves evitando juntar equipos del mismo colegio
function arrangeForLlaves(ids, sizes, randomize) {
    let list = ids.map(id => ({ id, key: teamSchoolKey(id) }));
    if (randomize) shuffleInPlace(list);
    const cnt = {}, rank = {};
    list.forEach(x => { cnt[x.key] = (cnt[x.key] || 0) + 1; if (!(x.key in rank)) rank[x.key] = randomize ? Math.random() : 0; });
    list.sort((a, b) => cnt[b.key] - cnt[a.key] || rank[a.key] - rank[b.key] || (a.key < b.key ? -1 : a.key > b.key ? 1 : 0));
    const llaves = sizes.map(() => []);
    list.forEach(x => {
        let best = -1, bestScore = -Infinity;
        llaves.forEach((g, gi) => {
            if (g.length >= sizes[gi]) return;
            const same = g.filter(y => y.key === x.key).length;
            const score = -same * 1000 + (sizes[gi] - g.length) * 10 - gi;
            if (score > bestScore) { bestScore = score; best = gi; }
        });
        llaves[best].push(x);
    });
    return llaves.map(g => { const arr = g.map(x => x.id); return randomize ? shuffleInPlace(arr) : arr; });
}

// Reparte los clasificados de la fase anterior evitando que se vuelvan a cruzar los de una misma llave
function assignSources(items, sizes) {
    const groups = sizes.map(() => []);
    items.forEach(it => {
        let best = -1, bestScore = -Infinity;
        groups.forEach((g, gi) => {
            if (g.length >= sizes[gi]) return;
            const conflict = g.some(x => x.from.l === it.from.l);
            const score = (conflict ? 0 : 1000) + (sizes[gi] - g.length) * 10 - gi;
            if (score > bestScore) { bestScore = score; best = gi; }
        });
        groups[best].push(it);
    });
    return groups;
}

function createLlaves(ids, randomize) {
    const n = ids.length;
    const phases = [];
    let remaining = n, pi = 0, prev = null;
    while (remaining > 2) {
        const sizes = llaveSizes(remaining);
        let slotsPer;
        if (pi === 0) {
            slotsPer = arrangeForLlaves(ids, sizes, randomize);
        } else {
            const items = [];
            prev.forEach((L, li) => items.push({ from: { p: pi - 1, l: li, rank: 1 } }));
            prev.forEach((L, li) => items.push({ from: { p: pi - 1, l: li, rank: 2 } }));
            slotsPer = assignSources(items, sizes);
        }
        const llaves = sizes.map((k, i) => {
            const L = { id: `P${pi + 1}L${i}`, name: LLAVE_LETTERS[i] || String(i + 1), size: k, slots: slotsPer[i],
                        tb: Array.from({ length: k }, () => Math.random()), matches: [] };
            for (let j = 0; j < k; j++) {
                L.matches.push({ id: `${L.id}_M${j}`, ai: j, bi: (j + 1) % k, sa: 0, sb: 0, done: false, ra: null, rb: null });
            }
            return L;
        });
        phases.push({ idx: pi, llaves });
        prev = llaves; remaining = 2 * llaves.length; pi++;
    }
    const finalSlots = n === 2 ? [ids[0], ids[1]]
        : [{ from: { p: pi - 1, l: 0, rank: 1 } }, { from: { p: pi - 1, l: 0, rank: 2 } }];
    return {
        v: LLAVES_VERSION, type: 'llaves', teamIds: [...ids].sort((a, b) => a - b), order: [...ids], phases,
        final: { id: 'FINAL', slots: finalSlots, sa: 0, sb: 0, done: false, ra: null, rb: null, tw: null }
    };
}

function llavesHaveResults(br) {
    return br.phases.some(ph => ph.llaves.some(L => L.matches.some(m => m.done))) || !!(br.final && br.final.done);
}

function phaseName(br, pi) {
    return pi === br.phases.length - 1 ? 'Semifinal' : `Ronda ${pi + 1}`;
}

// Calcula todo a partir de los resultados guardados (equipos de cada llave, tabla, clasificados).
// Si un resultado quedó con equipos distintos a los que se jugaron, se descarta solo.
function computeLlaves(br) {
    const rankOf = {};
    const resolve = (s) => {
        if (typeof s === 'number') return s;
        const r = rankOf[`${s.from.p}.${s.from.l}`];
        return r ? r[s.from.rank - 1] : null;
    };
    const out = { phases: [], final: null, played: 0, total: 0 };

    br.phases.forEach((ph, pi) => {
        const cp = { llaves: [] };
        ph.llaves.forEach((L, li) => {
            const teams = L.slots.map(resolve);
            const ms = L.matches.map(m => {
                const ta = teams[m.ai], tb = teams[m.bi];
                if (m.done && (m.ra !== ta || m.rb !== tb)) { m.done = false; m.sa = 0; m.sb = 0; m.ra = null; m.rb = null; }
                if (m.done) out.played++;
                out.total++;
                return { m, ta, tb, ready: ta != null && tb != null };
            });
            const stats = teams.map((t, i) => ({ id: t, idx: i, pj: 0, g: 0, e: 0, p: 0, rf: 0, rc: 0, dif: 0, pts: 0 }));
            ms.forEach(x => {
                if (!x.m.done) return;
                const A = stats[x.m.ai], B = stats[x.m.bi];
                A.pj++; B.pj++;
                A.rf += x.m.sa; A.rc += x.m.sb; B.rf += x.m.sb; B.rc += x.m.sa;
                if (x.m.sa > x.m.sb) { A.g++; A.pts += PTS_WIN; B.p++; }
                else if (x.m.sb > x.m.sa) { B.g++; B.pts += PTS_WIN; A.p++; }
                else { A.e++; B.e++; A.pts += PTS_DRAW; B.pts += PTS_DRAW; }
            });
            stats.forEach(s => { s.dif = s.rf - s.rc; });
            const sorted = [...stats].sort((a, b) =>
                (b.pts - a.pts) || (b.dif - a.dif) || (b.rf - a.rf) || (L.tb[a.idx] - L.tb[b.idx]));
            const complete = ms.every(x => x.m.done) && teams.every(t => t != null);
            let tied = false;
            if (complete) {
                rankOf[`${pi}.${li}`] = sorted.map(s => s.id);
                const s1 = sorted[1], s2 = sorted[2];
                tied = !!s2 && s1.pts === s2.pts && s1.dif === s2.dif && s1.rf === s2.rf;
            }
            cp.llaves.push({ L, li, teams, ms, sorted, complete, tied });
        });
        out.phases.push(cp);
    });

    const f = br.final;
    const fa = resolve(f.slots[0]), fb = resolve(f.slots[1]);
    if (f.done && (f.ra !== fa || f.rb !== fb)) { f.done = false; f.sa = 0; f.sb = 0; f.ra = null; f.rb = null; f.tw = null; }
    if (f.done) out.played++;
    out.total++;
    const champion = f.done ? (f.sa > f.sb ? fa : (f.sb > f.sa ? fb : f.tw)) : null;
    out.final = { f, ta: fa, tb: fb, ready: fa != null && fb != null, champion };
    return out;
}

function findLlaveMatch(comp, matchId) {
    if (matchId === 'FINAL') return { m: comp.final.f, ta: comp.final.ta, tb: comp.final.tb };
    for (const cp of comp.phases) for (const c of cp.llaves) for (const x of c.ms) {
        if (x.m.id === matchId) return { m: x.m, ta: x.ta, tb: x.tb };
    }
    return null;
}

function saveLlaveResult(br, matchId, sa, sb, tw) {
    const found = findLlaveMatch(computeLlaves(br), matchId);
    if (!found || found.ta == null || found.tb == null) return false;
    const { m, ta, tb } = found;
    m.sa = sa; m.sb = sb; m.done = true; m.ra = ta; m.rb = tb;
    if (matchId === 'FINAL') m.tw = tw == null ? null : tw;
    computeLlaves(br);
    return true;
}

function srcLabel(br, s) {
    if (typeof s === 'number') return slotName(s);
    return `${s.from.rank}º de la Llave ${LLAVE_LETTERS[s.from.l]} (${phaseName(br, s.from.p)})`;
}

function setLlavesTab(i) {
    appState.llavesTab = appState.llavesTab || {};
    appState.llavesTab[bracketKey(appState.currentLevel, appState.currentCategory)] = i;
    renderDashboard();
}

function renderLlavesView(container) {
    const level = appState.currentLevel, cat = appState.currentCategory;
    const key = bracketKey(level, cat);
    const ids = appState.teams.filter(t => t.level === level && t.category === cat).map(t => t.id);

    if (ids.length < 2) {
        container.innerHTML = `<div class="empty-state"><i class="fa-solid fa-users-slash"></i>
            <h3>Se necesitan al menos 2 equipos inscritos para armar las llaves (hay ${ids.length}).</h3></div>`;
        return;
    }

    let br = appState.brackets[key];
    let stale = false;
    if (!br || br.v !== LLAVES_VERSION) {
        br = createLlaves(ids, false);
        appState.brackets[key] = br;
        saveState();
    } else if (!sameIds(br.teamIds, ids)) {
        if (!llavesHaveResults(br)) {
            br = createLlaves(ids, false);
            appState.brackets[key] = br;
            saveState();
        } else {
            stale = true;
        }
    }

    const comp = computeLlaves(br);
    const nPh = br.phases.length;
    appState.llavesTab = appState.llavesTab || {};
    let tab = appState.llavesTab[key];
    if (tab === undefined || tab < 0 || tab > nPh) {
        tab = comp.phases.findIndex(cp => cp.llaves.some(c => !c.complete));
        if (tab === -1) tab = nPh;
    }

    let html = `<div class="bracket-info">
        <div><strong>Llaves de 2 partidos</strong> · ${ids.length} equipos · cada equipo juega 2 partidos por ronda y avanzan los 2 con más puntos
        · partidos jugados: ${comp.played} de ${comp.total}
        <span class="rule-note">Victoria ${PTS_WIN} pts · Empate ${PTS_DRAW} pt · Derrota 0. Desempate: diferencia de rondas, rondas a favor y sorteo.</span></div>
        ${appState.isAdmin ? `<button class="btn btn-outline" onclick="drawBracket()"><i class="fa-solid fa-shuffle"></i> Mezclar equipos al azar</button>` : ''}
    </div>`;

    if (stale) {
        html += `<div class="stale-notice"><i class="fa-solid fa-triangle-exclamation"></i>
            Se inscribieron o cambiaron equipos después de iniciar el torneo. Las llaves conservan los resultados actuales.
            ${appState.isAdmin ? 'Usa "Mezclar equipos al azar" para rehacerlas con todos los equipos (borra los resultados).' : ''}</div>`;
    }

    if (comp.final.champion != null) {
        html += `<div class="champion-banner"><i class="fa-solid fa-trophy"></i> CAMPEÓN: ${escapeHTML(slotName(comp.final.champion))}</div>`;
    }

    // Pestañas de rondas
    html += `<div class="phase-tabs">`;
    comp.phases.forEach((cp, pi) => {
        const done = cp.llaves.every(c => c.complete);
        html += `<button class="phase-tab ${tab === pi ? 'active' : ''} ${done ? 'done' : ''}" onclick="setLlavesTab(${pi})">
            ${done ? '<i class="fa-solid fa-circle-check"></i>' : '<i class="fa-regular fa-circle"></i>'} ${phaseName(br, pi)}
            <small>${cp.llaves.length} llave${cp.llaves.length === 1 ? '' : 's'}</small></button>`;
    });
    html += `<button class="phase-tab ${tab === nPh ? 'active' : ''} ${comp.final.f.done ? 'done' : ''}" onclick="setLlavesTab(${nPh})">
        <i class="fa-solid fa-trophy"></i> Final</button></div>`;

    // Paneles (se imprimen todos; en pantalla solo el activo)
    comp.phases.forEach((cp, pi) => {
        const nextTxt = pi === nPh - 1 ? 'Los 2 primeros pasan a la final' : `Los 2 primeros de cada llave pasan a la ${phaseName(br, pi + 1)}`;
        html += `<section class="phase-panel ${tab === pi ? 'active' : ''}">
            <div class="phase-title"><span>${phaseName(br, pi)}</span><small>${nextTxt}</small></div>
            <div class="llaves-grid">${cp.llaves.map(c => llaveCardHTML(br, c)).join('')}</div></section>`;
    });
    html += `<section class="phase-panel ${tab === nPh ? 'active' : ''}">
        <div class="phase-title"><span>Gran Final</span><small>Se enfrentan los 2 clasificados de la última llave</small></div>
        ${finalCardHTML(br, comp.final)}</section>`;

    container.innerHTML = html;
}

function llaveTeamLabel(br, L, slotIdx, id) {
    return id != null ? escapeHTML(slotName(id)) : `<span class="placeholder">${escapeHTML(srcLabel(br, L.slots[slotIdx]))}</span>`;
}

function llaveCardHTML(br, c) {
    const { L, ms, sorted, complete, tied } = c;
    const rows = sorted.map((s, pos) => {
        const q = complete && pos < 2;
        const click = typeof s.id === 'number' ? ` onclick="showTeamDetail(${s.id})"` : '';
        return `<tr class="${q ? 'qualified' : ''}">
            <td class="pos">${pos + 1}</td>
            <td class="llave-team"${click}>${llaveTeamLabel(br, L, s.idx, s.id)}${q ? ' <i class="fa-solid fa-circle-check" title="Clasificado"></i>' : ''}</td>
            <td>${s.pj}</td><td>${s.g}</td><td>${s.e}</td><td>${s.p}</td>
            <td>${s.dif > 0 ? '+' : ''}${s.dif}</td><td class="pts">${s.pts}</td></tr>`;
    }).join('');

    const matches = ms.map(x => {
        const m = x.m;
        const wa = m.done && m.sa > m.sb, wb = m.done && m.sb > m.sa;
        const nameA = llaveTeamLabel(br, L, m.ai, x.ta), nameB = llaveTeamLabel(br, L, m.bi, x.tb);
        return `<div class="llave-match ${m.done ? 'done' : ''}">
            <span class="lm-team ${wa ? 'win' : ''}">${nameA}</span>
            <span class="lm-score">${m.done ? `${m.sa}<i>-</i>${m.sb}` : 'vs'}</span>
            <span class="lm-team right ${wb ? 'win' : ''}">${nameB}</span>
            ${appState.isAdmin && x.ready ? `<button class="btn-edit-match" onclick="openEditMatchModal('${m.id}')"><i class="fa-solid fa-pen"></i> ${m.done ? 'Editar' : 'Registrar'}</button>` : '<span></span>'}
        </div>`;
    }).join('');

    return `<article class="llave-card ${complete ? 'complete' : ''}">
        <header class="llave-head">
            <span class="llave-name"><i class="fa-solid fa-layer-group"></i> Llave ${L.name}</span>
            <span class="llave-status ${complete ? 'ok' : ''}">${complete ? 'Completa' : `${ms.filter(x => x.m.done).length}/${ms.length} partidos`}</span>
        </header>
        <table class="llave-table">
            <thead><tr><th>#</th><th>Equipo</th><th title="Partidos jugados">PJ</th><th title="Ganados">G</th><th title="Empatados">E</th><th title="Perdidos">P</th><th title="Diferencia de rondas">Dif</th><th>Pts</th></tr></thead>
            <tbody>${rows}</tbody>
        </table>
        ${complete && tied ? '<div class="llave-note"><i class="fa-solid fa-dice"></i> Empate total en el límite de clasificación: se definió por sorteo.</div>' : ''}
        <div class="llave-matches">${matches}</div>
    </article>`;
}

function finalCardHTML(br, fin) {
    const f = fin.f;
    const wa = f.done && fin.champion === fin.ta, wb = f.done && fin.champion === fin.tb;
    const nm = (id, s) => id != null ? escapeHTML(slotName(id)) : `<span class="placeholder">${escapeHTML(srcLabel(br, s))}</span>`;
    return `<article class="final-card">
        <div class="final-side ${wa ? 'win' : ''}">${nm(fin.ta, f.slots[0])}</div>
        <div class="final-score">${f.done ? `${f.sa}<i>-</i>${f.sb}` : 'VS'}</div>
        <div class="final-side right ${wb ? 'win' : ''}">${nm(fin.tb, f.slots[1])}</div>
        ${appState.isAdmin && fin.ready ? `<div class="final-actions"><button class="btn btn-cyan" onclick="openEditMatchModal('FINAL')"><i class="fa-solid fa-pen"></i> ${f.done ? 'Editar resultado' : 'Registrar resultado'}</button></div>` : ''}
    </article>`;
}

function drawBracket() {
    const level = appState.currentLevel, cat = appState.currentCategory;
    const key = bracketKey(level, cat);
    const ids = appState.teams.filter(t => t.level === level && t.category === cat).map(t => t.id);
    if (ids.length < 2) return;
    const old = appState.brackets[key];
    const msg = old && bracketHasResults(old)
        ? "Ya hay resultados registrados. Mezclar de nuevo los BORRARÁ. ¿Continuar?"
        : "¿Mezclar al azar los emparejamientos de esta categoría? (los equipos del mismo colegio se separan al máximo)";
    if (!confirm(msg)) return;
    appState.brackets[key] = bracketTypeFor(cat) === 'llaves' ? createLlaves(ids, true) : createBracket(cat, ids, true);
    saveState();
    renderDashboard();
}

function createMatchCardHTML(m) {
    const row = (v, score, isWinner) => {
        const real = typeof v === 'number';
        const cls = (isWinner ? ' winner' : '') + (v === null ? ' pending' : '') + (v === 'BYE' ? ' is-bye' : '');
        const icon = v === 'BYE' ? 'fa-ban' : (v === null ? 'fa-hourglass-half' : 'fa-shield');
        const sc = (m.completed && !m.auto) ? score : '-';
        return `<div class="match-team${cls}"${real ? ` onclick="showTeamDetail(${v})"` : ''}>
            <span class="team-name"><i class="fa-solid ${icon}"></i> ${escapeHTML(slotName(v))}</span>
            <span class="team-score">${sc}</span></div>`;
    };
    const winA = m.completed && m.winner !== 'BYE' && m.winner === m.a;
    const winB = m.completed && m.winner !== 'BYE' && m.winner === m.b;
    const canEdit = appState.isAdmin && typeof m.a === 'number' && typeof m.b === 'number';
    const sameSchool = typeof m.a === 'number' && typeof m.b === 'number' && teamSchoolKey(m.a) === teamSchoolKey(m.b);

    return `
        <div class="match-card ${m.completed ? 'completed' : ''} ${m.auto ? 'bye' : ''}">
            ${row(m.a, m.scoreA, winA)}
            ${row(m.b, m.scoreB, winB)}
            ${sameSchool ? `<div class="match-note"><i class="fa-solid fa-people-arrows"></i> Mismo colegio</div>` : ''}
            ${canEdit ? `
                <div class="match-actions">
                    <button class="btn-edit-match" onclick="openEditMatchModal('${m.id}')">
                        <i class="fa-solid fa-pen"></i> ${m.completed ? 'Editar' : 'Registrar'}
                    </button>
                </div>` : ''}
        </div>
    `;
}

function currentBracket() {
    return appState.brackets[bracketKey(appState.currentLevel, appState.currentCategory)];
}

function openEditMatchModal(matchId) {
    const br = currentBracket();
    if (!br) return;
    let nameA, nameB, sa, sb;
    if (br.type === 'llaves') {
        const found = findLlaveMatch(computeLlaves(br), matchId);
        if (!found) return;
        nameA = slotName(found.ta); nameB = slotName(found.tb); sa = found.m.sa; sb = found.m.sb;
    } else {
        const m = getMatch(br, matchId);
        if (!m) return;
        nameA = slotName(m.a); nameB = slotName(m.b); sa = m.scoreA; sb = m.scoreB;
    }
    document.getElementById('editMatchId').value = matchId;
    document.getElementById('teamA_label').innerText = nameA;
    document.getElementById('teamB_label').innerText = nameB;
    document.getElementById('teamA_score').value = sa;
    document.getElementById('teamB_score').value = sb;
    document.getElementById('editMatchModal').classList.add('active');
}

function saveMatchScore() {
    const matchId = document.getElementById('editMatchId').value;
    const scoreA = parseInt(document.getElementById('teamA_score').value) || 0;
    const scoreB = parseInt(document.getElementById('teamB_score').value) || 0;
    const br = currentBracket();
    if (!br) return;

    if (br.type === 'llaves') {
        const comp = computeLlaves(br);
        const found = findLlaveMatch(comp, matchId);
        if (!found || found.ta == null || found.tb == null) return;
        let tw = null;
        if (matchId === 'FINAL' && scoreA === scoreB) {
            const aWins = confirm(`Empate ${scoreA}-${scoreB} en la final.\n\nAceptar = gana ${slotName(found.ta)}\nCancelar = gana ${slotName(found.tb)}`);
            tw = aWins ? found.ta : found.tb;
        }
        // ¿Este cambio altera clasificados y borra resultados posteriores?
        const clone = JSON.parse(JSON.stringify(br));
        const before = computeLlaves(clone).played;
        const wasDone = !!findLlaveMatch(computeLlaves(clone), matchId).m.done;
        saveLlaveResult(clone, matchId, scoreA, scoreB, tw);
        const after = computeLlaves(clone).played;
        const invalid = before + (wasDone ? 0 : 1) - after;
        if (invalid > 0 && !confirm(`Este cambio modifica los clasificados y borrará ${invalid} resultado(s) de partidos posteriores. ¿Continuar?`)) return;

        // Se queda en la pestaña donde se está trabajando (no salta sola a la siguiente ronda)
        const tabIdx = [...document.querySelectorAll('.phase-tab')].findIndex(b => b.classList.contains('active'));
        if (tabIdx >= 0) {
            appState.llavesTab = appState.llavesTab || {};
            appState.llavesTab[bracketKey(appState.currentLevel, appState.currentCategory)] = tabIdx;
        }
        saveLlaveResult(br, matchId, scoreA, scoreB, tw);
        saveState();
        closeModal('editMatchModal');
        renderDashboard();
        return;
    }

    const m = getMatch(br, matchId);
    if (!m) return;
    let winnerId;
    if (scoreA > scoreB) winnerId = m.a;
    else if (scoreB > scoreA) winnerId = m.b;
    else {
        // En eliminación no hay empates: se decide el ganador (penales / desempate)
        const aWins = confirm(`Empate ${scoreA}-${scoreB}.\n\nAceptar = gana ${slotName(m.a)}\nCancelar = gana ${slotName(m.b)}`);
        winnerId = aWins ? m.a : m.b;
    }

    if (m.completed && m.winner !== winnerId) {
        if (!confirm("Cambiar el ganador borrará los resultados de los partidos siguientes que dependan de este. ¿Continuar?")) return;
    }

    applyResult(br, m, scoreA, scoreB, winnerId);
    saveState();
    closeModal('editMatchModal');
    renderDashboard();
}

function parseTimes(t) {
    return [t.t1, t.t2, t.t3].map(v => parseFloat(v) || 0).filter(v => v > 0).sort((x, y) => x - y);
}

// Velocista: gana el mejor tiempo de los 3 intentos; si empatan, se compara el siguiente mejor
function compareVelocista(a, b) {
    const ta = parseTimes(a), tb = parseTimes(b);
    if (!ta.length && !tb.length) return 0;
    if (!ta.length) return 1;
    if (!tb.length) return -1;
    for (let i = 0; i < 3; i++) {
        if (ta[i] === undefined && tb[i] === undefined) return 0;
        if (ta[i] === undefined) return 1;
        if (tb[i] === undefined) return -1;
        if (ta[i] !== tb[i]) return ta[i] - tb[i];
    }
    return 0;
}

function syncButtons() {
    document.querySelectorAll('.pill').forEach(b =>
        b.classList.toggle('active', (b.getAttribute('onclick') || '').includes(`'${appState.currentLevel}'`)));
    document.querySelectorAll('.cat-btn').forEach(b =>
        b.classList.toggle('active', (b.getAttribute('onclick') || '').includes(`'${appState.currentCategory}'`)));
}

function switchLevel(level) {
    appState.currentLevel = level;
    const burstBtn = document.getElementById('burstbotBtn');
    if (level === "Universidad") {
        burstBtn.style.display = "none";
        if (appState.currentCategory === "BURSTBOT( Batalla de globos)") appState.currentCategory = "Robogol Fútbol";
    } else {
        burstBtn.style.display = "inline-flex";
    }
    syncButtons();
    renderDashboard();
}

function switchCategory(cat) {
    appState.currentCategory = cat;
    syncButtons();
    renderDashboard();
}

function renderDashboard() {
    document.getElementById('catTitleDisplay').innerHTML = `<i class="fa-solid fa-trophy" style="color: var(--accent-gold);"></i> ${appState.currentCategory}`;
    document.getElementById('levelBadgeDisplay').innerText = `Nivel: ${appState.currentLevel}`;
    const countEl = document.getElementById('teamCountDisplay');
    if (countEl) {
        const n = appState.teams.filter(t => t.level === appState.currentLevel && t.category === appState.currentCategory).length;
        countEl.textContent = `${n} equipo${n === 1 ? '' : 's'}`;
    }

    const viewArea = document.getElementById('viewArea');
    viewArea.innerHTML = "";

    if (appState.currentCategory === "Robogol Fútbol" || appState.currentCategory === "Minisumo RC") {
        renderBracketView(viewArea);
    } else {
        renderLeaderboardView(viewArea);
    }
}



function renderLeaderboardView(container) {
    const filteredTeams = appState.teams.filter(t => t.level === appState.currentLevel && t.category === appState.currentCategory);
    const isVelocista = appState.currentCategory.includes("Seguidor");

    if (isVelocista) {
        filteredTeams.sort(compareVelocista);
    } else {
        filteredTeams.sort((a, b) => b.score - a.score);
    }

    let html = `
        <table class="leaderboard-table">
            <thead>
                <tr>
                    <th>Pos</th>
                    <th>Equipo</th>
                    <th>Institución</th>
                    ${isVelocista ? '<th>Intento 1</th><th>Intento 2</th><th>Intento 3</th><th>Mejor Tiempo</th>' : '<th>Puntuación</th>'}
                    ${appState.isAdmin ? '<th>Acciones</th>' : ''}
                </tr>
            </thead>
            <tbody>
    `;

    if (filteredTeams.length === 0) {
        const cols = isVelocista ? 8 : 5;
        html += `<tr><td colspan="${cols}" style="text-align:center; color: var(--text-muted);">No hay equipos inscritos en esta categoría.</td></tr>`;
    } else {
        filteredTeams.forEach((team, index) => {
            const rankClass = index === 0 ? 'rank-1' : (index === 1 ? 'rank-2' : (index === 2 ? 'rank-3' : ''));

            html += `
                <tr>
                    <td><span class="rank-badge ${rankClass}">${index + 1}</span></td>
                    <td style="font-weight: bold; color: #fff; cursor:pointer;" onclick="showTeamDetail(${team.id})">
                        <i class="fa-solid fa-robot" style="color: var(--accent-cyan); margin-right:8px;"></i> ${team.name}
                    </td>
                    <td style="color: var(--text-muted);">${team.school}</td>
                    ${isVelocista ? `
                        <td>${team.t1 > 0 ? team.t1 + 's' : '<span style="color:var(--accent-red)">0s / DNF</span>'}</td>
                        <td>${team.t2 > 0 ? team.t2 + 's' : '<span style="color:var(--accent-red)">0s / DNF</span>'}</td>
                        <td>${team.t3 > 0 ? team.t3 + 's' : '<span style="color:var(--accent-red)">0s / DNF</span>'}</td>
                        <td style="font-family: 'Orbitron', sans-serif; font-weight:bold; color: var(--accent-gold);">${team.bestTime > 0 ? team.bestTime + 's' : 'Sin marca'}</td>
                    ` : `
                        <td style="font-family: 'Orbitron', sans-serif; font-weight:bold; color: var(--accent-gold);">${team.score} pts</td>
                    `}
                    ${appState.isAdmin ? `
                        <td>
                            <button class="btn btn-outline" style="padding: 4px 10px; font-size: 0.8rem;" onclick="openScoreModal(${team.id})">
                                <i class="fa-solid fa-pen"></i> Marcar
                            </button>
                        </td>
                    ` : ''}
                </tr>
            `;
        });
    }

    html += `</tbody></table>`;
    container.innerHTML = html;
}

function showTeamDetail(teamId) {
    const team = appState.teams.find(t => t.id === teamId);
    if (!team) return;

    document.getElementById('detailTeamName').innerHTML = `<i class="fa-solid fa-robot"></i> ${team.name}`;
    document.getElementById('teamDetailBody').innerHTML = `
        <div class="detail-row"><strong>Institución:</strong> ${team.school}</div>
        <div class="detail-row"><strong>Capitán:</strong> ${team.cap || 'No registrado'} (${team.capDoc || 'N/A'})</div>
        <div class="detail-row"><strong>Integrante 2:</strong> ${team.p2 || 'N/A'}</div>
        <div class="detail-row"><strong>Integrante 3:</strong> ${team.p3 || 'N/A'}</div>
        <div class="detail-row"><strong>Teléfono Contacto:</strong> ${team.phone || 'N/A'}</div>
    `;
    document.getElementById('teamDetailModal').classList.add('active');
}

function showTeamDetailByName(name) {
    const team = appState.teams.find(t => t.name === name);
    if (team) showTeamDetail(team.id);
}

function openLoginModal() {
    if (appState.isAdmin) {
        appState.isAdmin = false;
        document.getElementById('authStatusBadge').className = "auth-badge public";
        document.getElementById('authStatusBadge').innerHTML = '<i class="fa-solid fa-eye"></i> MODO VISITANTE';
        document.getElementById('loginBtn').innerHTML = '<i class="fa-solid fa-lock"></i> Acceso Admin';
        document.getElementById('adminControlsArea').style.display = "none";
        renderDashboard();
    } else {
        document.getElementById('loginModal').classList.add('active');
    }
}

function handleLogin() {
    const user = document.getElementById('adminUser').value;
    const pass = document.getElementById('adminPass').value;

    if (user === "admin" && pass === "uscotron2026") {
        appState.isAdmin = true;
        document.getElementById('authStatusBadge').className = "auth-badge admin";
        document.getElementById('authStatusBadge').innerHTML = '<i class="fa-solid fa-user-check"></i> ADMIN ACTIVADO';
        document.getElementById('loginBtn').innerHTML = '<i class="fa-solid fa-right-from-bracket"></i> Salir Admin';
        document.getElementById('adminControlsArea').style.display = "flex";
        closeModal('loginModal');
        renderDashboard();
    } else {
        alert("Credenciales incorrectas. Intente nuevamente.");
    }
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}



function openScoreModal(teamId) {
    const team = appState.teams.find(t => t.id === teamId);
    if (team) {
        document.getElementById('editTeamIndex').value = teamId;
        document.getElementById('scoreTeamName').value = team.name;

        if (appState.currentCategory.includes("Seguidor")) {
            document.getElementById('velocistaInputs').style.display = "block";
            document.getElementById('standardInput').style.display = "none";
            document.getElementById('t1Value').value = team.t1 || '';
            document.getElementById('t2Value').value = team.t2 || '';
            document.getElementById('t3Value').value = team.t3 || '';
        } else {
            document.getElementById('velocistaInputs').style.display = "none";
            document.getElementById('standardInput').style.display = "block";
            document.getElementById('scoreValue').value = team.score || 0;
        }

        document.getElementById('addScoreModal').classList.add('active');
    }
}

function saveTeamScore() {
    const teamId = parseInt(document.getElementById('editTeamIndex').value);
    const team = appState.teams.find(t => t.id === teamId);

    if (team) {
        if (appState.currentCategory.includes("Seguidor")) {
            team.t1 = parseFloat(document.getElementById('t1Value').value) || 0;
            team.t2 = parseFloat(document.getElementById('t2Value').value) || 0;
            team.t3 = parseFloat(document.getElementById('t3Value').value) || 0;
            team.bestTime = computeBestTime(team.t1, team.t2, team.t3);
        } else {
            team.score = parseInt(document.getElementById('scoreValue').value) || 0;
        }

        saveState();
        closeModal('addScoreModal');
        renderDashboard();
    }
}

// LÓGICA DE CRONÓMETRO CON EFECTOS DE SONIDO WEB AUDIO API
function toggleTimerWidget() {
    const widget = document.getElementById('timerWidget');
    widget.style.display = widget.style.display === "block" ? "none" : "block";
}

function playTone(freq, duration) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "square";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration);
    } catch(e) {}
}

function updateTimerDisplay() {
    const m = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
    const s = Math.floor(timerSeconds % 60).toString().padStart(2, '0');
    document.getElementById('timerDisplay').innerText = `${m}:${s}.0`;
}

function startTimer() {
    if (timerInterval) return;
    playTone(600, 0.1);
    timerInterval = setInterval(() => {
        if (timerSeconds > 0) {
            timerSeconds--;
            updateTimerDisplay();
            if (timerSeconds <= 3 && timerSeconds > 0) playTone(800, 0.15);
        } else {
            pauseTimer();
            playTone(400, 0.8);
            alert("¡TIEMPO FINALIZADO!");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    pauseTimer();
    timerSeconds = 120;
    updateTimerDisplay();
}

function setPresetTime(sec) {
    pauseTimer();
    timerSeconds = sec;
    updateTimerDisplay();
}

// MODO TV: pantalla completa limpia. Se sale con el botón "Volver al inicio" o con la tecla Esc.
function toggleTVMode(force) {
    const on = typeof force === 'boolean' ? force : !document.body.classList.contains('tv-mode');
    document.body.classList.toggle('tv-mode', on);
    const root = document.documentElement;
    if (on) {
        if (root.requestFullscreen && !document.fullscreenElement) {
            try { const p = root.requestFullscreen(); if (p && p.catch) p.catch(() => {}); } catch (e) {}
        }
    } else {
        if (document.fullscreenElement && document.exitFullscreen) {
            try { const p = document.exitFullscreen(); if (p && p.catch) p.catch(() => {}); } catch (e) {}
        }
        window.scrollTo(0, 0);
    }
}

// Si el usuario sale de pantalla completa (Esc del navegador), también se sale del modo TV
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && document.body.classList.contains('tv-mode')) toggleTVMode(false);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const openModal = document.querySelector('.modal.active');
        if (openModal) openModal.classList.remove('active');
        else if (document.body.classList.contains('tv-mode')) toggleTVMode(false);
    } else if (e.key === 'Enter') {
        const login = document.getElementById('loginModal');
        if (login && login.classList.contains('active')) handleLogin();
    }
});

function exportReport() {
    window.print();
}

function resetToDefaultData() {
    if (confirm("¿Está seguro de reiniciar los marcadores a los datos originales?")) {
        localStorage.removeItem('uscotron_teams');
        localStorage.removeItem('uscotron_brackets');
        loadState();
        renderDashboard();
    }
}

// AGREGAR EQUIPO (admin): se guarda en el navegador y no se pierde al actualizar los datos del código
function openAddTeamModal() {
    ['newTeamName', 'newTeamSchool', 'newTeamCap', 'newTeamCapDoc', 'newTeamP2', 'newTeamP3', 'newTeamPhone']
        .forEach(id => { document.getElementById(id).value = ''; });
    document.getElementById('newTeamContext').textContent = `Se agregará a: ${appState.currentCategory} · ${appState.currentLevel}`;
    document.getElementById('addTeamModal').classList.add('active');
}

function saveNewTeam() {
    const g = id => document.getElementById(id).value.trim();
    const name = g('newTeamName'), school = g('newTeamSchool');
    if (!name || !school) {
        alert("El nombre del equipo y la institución son obligatorios.");
        return;
    }

    const nextId = Math.max(1000, ...appState.teams.map(t => t.id)) + 1;
    appState.teams.push({
        id: nextId, name, level: appState.currentLevel, category: appState.currentCategory, school,
        cap: g('newTeamCap') || 'N/A', capDoc: g('newTeamCapDoc') || 'N/A',
        p2: g('newTeamP2') || 'N/A', p3: g('newTeamP3') || 'N/A', phone: g('newTeamPhone') || 'N/A',
        score: 0, t1: 0, t2: 0, t3: 0, bestTime: 0
    });
    saveState();
    closeModal('addTeamModal');
    renderDashboard();
}
