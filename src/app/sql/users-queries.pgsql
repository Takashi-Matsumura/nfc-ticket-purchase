CREATE TABLE tbl_users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    nfc_id VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tbl_users (name, email, nfc_id, created_at, updated_at) 
VALUES ('Takashi Matsumura', 'mats@hoge.jp', '0116020053187C01', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

SELECT * FROM tbl_users;

SELECT * FROM tbl_users WHERE nfc_id = '0116020053187C01';

SELECT id,nfc_id FROM tbl_users WHERE nfc_id = '0116020053187C01';