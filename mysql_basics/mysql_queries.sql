Place your queries below

-- Feature Set 1
------------------------------
-- Select all students with username like dsebesta
SELECT * FROM `students` WHERE `username` LIKE 'dsebesta'

-- Update email address for student with id = 1
UPDATE `students` SET `email` = 'dsebesta@gmail.com' WHERE `students`.`id` = 1;

-- Create new student
INSERT INTO `students` (`id`, `name`, `email`, `age`, `ssn`, `username`, `password`, `joined`, `status`) VALUES (NULL, 'John Doe', 'jdoe@missingperson.com', '9', '999999999', 'jdoe', SHA1('donttouchmyhair'), NOW(), 'banned');

-- Delete "jdoe" student
DELETE FROM `students` WHERE `username`='jdoe'



-- Feature Set 2
------------------------------
-- Selected all todo_items with user_id = 1
SELECT * FROM todo_items WHERE user_id = 1

-- Insert a new to do item into the table for user_id = 1
INSERT INTO `todo_items` (`id`, `title`, `details`, `timestamp`, `user_id`) VALUES (NULL, 'new_todo', 'new_details', CURRENT_TIME(), '1')

-- Delete to do item for user_id = 1
DELETE FROM `todo_items` WHERE title = 'new_todo'

-- Update to do for user_id = 1
UPDATE `todo_items` SET `title` = 'updated title' WHERE `todo_items`.`title` = 'todo_1'

-- Select user info for id = 1
SELECT * FROM students WHERE id = 1