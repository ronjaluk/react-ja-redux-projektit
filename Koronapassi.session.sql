create table koronatestit (
    id INT PRIMARY KEY,
    henkilo_id INT,
    pvm DATE,
    tulos VARCHAR(20),
    FOREIGN KEY(henkilo_id) REFERENCES henkilot(id)
);