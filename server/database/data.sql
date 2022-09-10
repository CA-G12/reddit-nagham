BEGIN;

DROP TABLE IF EXISTS posts,users,comments,votes;



CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    user_fullname VARCHAR(100),
    email VARCHAR(100) NOT NULL,
    user_password VARCHAR(100) NOT NULL,
    user_img TEXT 
    );


CREATE TABLE posts(
    post_id SERIAL PRIMARY KEY,
    post_text TEXT,
    userId INT,
    FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    user_fullname VARCHAR(100),
    comment_text TEXT,
    post_id INT,
    userId INT,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(post_id)
);

CREATE TABLE votes(
    id SERIAL PRIMARY KEY,
    post_id INT,
    upvote boolean,
    userId INT,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(post_id)
);


-- INSERT INTO users (user_fullname,email,user_password,user_img) VALUES ('Nagham Abuwarda','nagham@gmail.com','123456','nagham.png');
-- INSERT INTO posts (post_text,userId) VALUES ('GOOD MORNING EVERYONE',1); 


COMMIT;