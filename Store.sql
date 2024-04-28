DROP TABLE IF EXISTS OrderDetails, Item, Categories, Orders, Customers;

Create table Categories(
	CategoryId int not null,
	Name varchar(50) not null,
	Description varchar(255) not null,
	PRIMARY KEY(CategoryId)
);

Create table Item(
	ItemId int not null,
	Name varchar(255) not null,
	Price int not null,
	Description varchar(255) not null,
	StockQuantity int not null,
	CategoryId int not null,
	Producer varchar(255) not null,
	URL varchar(500) not null,
	Discounted boolean not null,
	PRIMARY KEY(ItemId),
	FOREIGN KEY(CategoryId) REFERENCES Categories(CategoryId)
);

Create table Customers(
	CustomerId int not null,
	Name varchar(255) not null,
	LastName varchar(255) not null,
	Adress varchar(255) not null,
	Phone varchar(20) not null,
	Email varchar(255) not null,
	PRIMARY KEY(CustomerId)
);

Create table Orders(
	OrderId int not null,
	CustomerId int not null,
	OrderDate Date not null,
	Status varchar(50) not null,
	TotalPrice int not null,
	FOREIGN KEY(CustomerId) REFERENCES Customers(CustomerId),
	PRIMARY KEY(OrderId)
);

Create table OrderDetails(
	OrderDetailId int not null,
	OrderId int not null,
	ProductId int not null,
	Quantity int not null,
	Price double precision not null,
	FOREIGN KEY(OrderId) REFERENCES Orders(OrderId),
	FOREIGN KEY(ProductId) REFERENCES Item(ItemId),
	PRIMARY KEY(OrderDetailId)
);

Insert into Categories(CategoryId, Name, Description) values (1, 'For Games', 'The "For Games" computer category is designed for gaming enthusiasts, featuring high-end graphics cards, powerful processors, and robust cooling systems to handle demanding games with high performance and reliability.'),
(2, 'For Multimedia', '"For Multimedia" computers are tailored for content creators, offering high-definition displays, superior sound, and powerful graphics capabilities.'),
(3, 'For Work', '"For Work" computers are optimized for professional use with robust performance, enhanced security, and productivity-enhancing tools.'),
(4, 'For study', '"For Study" computers are designed for students, featuring long battery life, durability, and essential software for educational tasks.');


INSERT INTO Item (ItemId, Name, Price, Description, StockQuantity, CategoryId, Producer, URL, Discounted) VALUES
(1, 'Gamer Xtreme', 1200, 'High-end gaming PC with powerful GPU and cooling system.', 10, 1, 'CyberPowerPC', 'http://example.com/gamerxtreme', FALSE),
(2, 'Media Master', 950, 'A perfect PC for content creators and video editors.', 15, 2, 'Dell', 'http://example.com/mediamaster', TRUE),
(3, 'Office Pro', 700, 'Reliable computer for efficient office work.', 20, 3, 'Lenovo', 'http://example.com/officepro', FALSE),
(4, 'Study Buddy', 450, 'Affordable laptop for students.', 30, 4, 'HP', 'http://example.com/studybuddy', TRUE),
(5, 'Gamer Pro', 1500, 'Elite gaming machine with top-tier specs.', 5, 1, 'Alienware', 'http://example.com/gamerpro', FALSE),
(6, 'Multimedia Hub', 1000, 'Designed for multimedia enthusiasts and creators.', 8, 2, 'Apple', 'http://example.com/multimediahub', FALSE),
(7, 'WorkStation X', 850, 'High performance workstation for professionals.', 12, 3, 'ASUS', 'http://example.com/workstationx', TRUE),
(8, 'Study Elite', 500, 'Portable and powerful enough for all study needs.', 25, 4, 'Acer', 'http://example.com/studyelite', FALSE),
(9, 'Gaming Glory', 1300, 'Superior gaming desktop with VR readiness.', 7, 1, 'MSI', 'http://example.com/gamingglory', TRUE),
(10, 'Creator Studio', 1100, 'Stylish and powerful for graphic design and editing.', 10, 2, 'Microsoft', 'http://example.com/creatorstudio', FALSE),
(11, 'Office Max', 600, 'Budget-friendly PC for all your office tasks.', 18, 3, 'Fujitsu', 'http://example.com/officemax', TRUE),
(12, 'Scholar PC', 400, 'Compact and efficient, ideal for schoolwork.', 20, 4, 'Samsung', 'http://example.com/scholarpc', FALSE),
(13, 'Gamestorm', 1400, 'Built for gamers with cutting-edge performance.', 6, 1, 'Razer', 'http://example.com/gamestorm', TRUE),
(14, 'Media Pro Elite', 1050, 'Excellent for professional video and photo editing.', 9, 2, 'Sony', 'http://example.com/mediaproelite', FALSE),
(15, 'Enterprise Desk', 800, 'Secure and powerful for enterprise needs.', 11, 3, 'Panasonic', 'http://example.com/enterprisedesk', TRUE),
(16, 'EduTech Laptop', 550, 'Lightweight and versatile laptop for education.', 22, 4, 'Toshiba', 'http://example.com/edutechlaptop', FALSE),
(17, 'Gaming Beast', 1600, 'Extreme performance for hardcore gamers.', 4, 1, 'Gigabyte', 'http://example.com/gamingbeast', FALSE),
(18, 'Content Magic', 1150, 'Ideal for digital artists and animators.', 14, 2, 'LG', 'http://example.com/contentmagic', TRUE),
(19, 'BizHub Pro', 750, 'Optimized for business and multitasking.', 16, 3, 'IBM', 'http://example.com/bizhubpro', FALSE),
(20, 'Learning Elite', 470, 'Economical choice for students and educators.', 28, 4, 'Dell', 'http://example.com/learningelite', TRUE),
(21, 'Gamer Revolution', 1350, 'Revolutionary gaming rig with the latest tech.', 8, 1, 'CybertronPC', 'http://example.com/gamerrevolution', FALSE),
(22, 'Visual Pro', 980, 'Superb for filmmakers and video professionals.', 13, 2, 'Gateway', 'http://example.com/visualpro', TRUE),
(23, 'Office Elite', 650, 'Top choice for productivity and efficiency.', 17, 3, 'Intel', 'http://example.com/officeelite', FALSE),
(24, 'Scholar Station', 430, 'Ideal laptop for learning and school projects.', 26, 4, 'Chromebook', 'http://example.com/scholarstation', TRUE),
(25, 'Ultimate Gamer', 1700, 'The ultimate gaming experience with no compromises.', 3, 1, 'Corsair', 'http://example.com/ultimategamer', FALSE),
(26, 'Compact Gamer', 1100, 'Compact gaming PC with excellent performance and portable design.', 12, 1, 'NZXT', 'http://example.com/compactgamer', TRUE),
(27, 'Workstation Plus', 900, 'Dependable and powerful, ideal for complex computing tasks.', 10, 3, 'HP', 'http://example.com/workstationplus', FALSE),
(28, 'Creative Vision', 1300, 'Designed for creatives, featuring a large screen and color accuracy.', 6, 2, 'Apple', 'http://example.com/creativevision', FALSE),
(29, 'Budget Office', 300, 'Cost-effective solution for everyday office tasks.', 20, 3, 'Acer', 'http://example.com/budgetoffice', TRUE),
(30, 'Studio Pro', 1600, 'High-end PC optimized for professional audio and video editing.', 4, 2, 'Dell', 'http://example.com/studiopro', FALSE);


INSERT INTO Customers (CustomerId, Name, LastName, Adress, Phone, Email) VALUES
(1, 'John', 'Doe', '123 Elm St, Springfield', '555-0100', 'john.doe@example.com'),
(2, 'Jane', 'Smith', '456 Oak St, Riverside', '555-0101', 'jane.smith@example.com'),
(3, 'Alice', 'Johnson', '789 Pine St, Greenfield', '555-0102', 'alice.johnson@example.com'),
(4, 'Bob', 'Brown', '321 Maple St, Hilltown', '555-0103', 'bob.brown@example.com'),
(5, 'Carol', 'Davis', '654 Spruce St, Lakeside', '555-0104', 'carol.davis@example.com'),
(6, 'David', 'Wilson', '987 Cedar St, Ridgeville', '555-0105', 'david.wilson@example.com'),
(7, 'Eve', 'Moore', '213 Birch St, Cliffside', '555-0106', 'eve.moore@example.com'),
(8, 'Frank', 'Taylor', '246 Walnut St, Brookside', '555-0107', 'frank.taylor@example.com'),
(9, 'Grace', 'Anderson', '135 Ash St, Creekview', '555-0108', 'grace.anderson@example.com'),
(10, 'Henry', 'Thomas', '975 Fir St, Orchardview', '555-0109', 'henry.thomas@example.com'),
(11, 'Irene', 'Jackson', '258 Poplar St, Eastwood', '555-0110', 'irene.jackson@example.com'),
(12, 'Jerry', 'White', '369 Beech St, Westwood', '555-0111', 'jerry.white@example.com'),
(13, 'Kathy', 'Harris', '852 Willow St, Southgate', '555-0112', 'kathy.harris@example.com'),
(14, 'Larry', 'Martin', '741 Redwood St, Northgate', '555-0113', 'larry.martin@example.com'),
(15, 'Monica', 'Clark', '159 Oak St, Old Town', '555-0114', 'monica.clark@example.com'),
(16, 'Nancy', 'Lewis', '951 Elm St, New Town', '555-0115', 'nancy.lewis@example.com'),
(17, 'Oscar', 'Walker', '357 Maple St, Lakeview', '555-0116', 'oscar.walker@example.com'),
(18, 'Patricia', 'Allen', '642 Pine St, Riverbank', '555-0117', 'patricia.allen@example.com'),
(19, 'Quentin', 'Young', '284 Spruce St, Seaside', '555-0118', 'quentin.young@example.com'),
(20, 'Rachel', 'King', '816 Cedar St, Mountainview', '555-0119', 'rachel.king@example.com');

INSERT INTO Orders (OrderId, CustomerId, OrderDate, Status, TotalPrice) VALUES
(1, 15, '2023-09-01', 'Shipped', 1200),
(2, 14, '2023-09-03', 'Pending', 850),
(3, 13, '2023-09-05', 'Cancelled', 0),
(4, 12, '2023-09-07', 'Shipped', 430),
(5, 11, '2023-09-09', 'Pending', 1100),
(6, 10, '2023-09-11', 'Shipped', 300),
(7, 9, '2023-09-13', 'Pending', 900),
(8, 8, '2023-09-15', 'Shipped', 1350),
(9, 7, '2023-09-17', 'Shipped', 1000),
(10, 6, '2023-09-19', 'Pending', 1600),
(11, 5, '2023-09-21', 'Shipped', 1150),
(12, 4, '2023-09-23', 'Cancelled', 0),
(13, 3, '2023-09-25', 'Shipped', 980),
(14, 2, '2023-09-27', 'Pending', 750),
(15, 1, '2023-09-29', 'Shipped', 550);

INSERT INTO OrderDetails (OrderDetailId, OrderId, ProductId, Quantity, Price) VALUES
(1, 1, 1, 2, 1200.00),
(2, 2, 2, 1, 850.00),
(3, 3, 3, 1, 300.00),
(4, 4, 4, 1, 430.00),
(5, 5, 5, 2, 550.00),
(6, 6, 6, 1, 300.00),
(7, 7, 7, 1, 900.00),
(8, 8, 8, 3, 450.00),
(9, 9, 9, 2, 1000.00),
(10, 10, 10, 1, 1600.00),
(11, 11, 11, 1, 1150.00),
(12, 12, 12, 1, 980.00),
(13, 13, 13, 1, 980.00),
(14, 14, 14, 1, 750.00),
(15, 15, 15, 2, 550.00);

Create INDEX ix_item_id on Item(ItemId)