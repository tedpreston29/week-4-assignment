CREATE TABLE filmRating (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT,
  rating INT,
  comment TEXT 
);

INSERT INTO filmRating (title, rating, comment) VALUES 
('Shrek', 5, 'Just Shrek innit, cant really go wrong.'),
('Interstellar', 5, 'Mind-bending space adventure with a heart-wrenching story.'),
('No Country for Old Men', 4, 'Intense and dark, a masterpiece of suspense.'),
('Napoleon Dynamite', 4, 'Quirky and awkwardly hilarious; cult classic vibes.'),
('The Room', 2, 'So bad it''s funny; Tommy Wiseau is unforgettable.'),
('Parasite', 5, 'Brilliant social commentary wrapped in a thriller.'),
('Jurassic Park', 5, 'Dinosaurs, suspense, and nostalgia – still incredible.'),
('Troll 2', 1, 'Absolutely terrible but so entertaining to watch with friends.'),
('Spider-Man: Into the Spider-Verse', 5, 'Visual feast and heartfelt story; animation at its best.'),
('Guardians of the Galaxy', 4, 'Fun, action-packed, and full of humor and music.');

SELECT * FROM filmrating ORDER BY title ASC

