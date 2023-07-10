CREATE DATABASE DailyIntake;

CREATE TABLE intake(
  _id SERIAL PRIMARY KEY,
  date VARCHAR(255),
  time VARCHAR(255),
  breastmilk VARCHAR(255),
  formula VARCHAR(255),
  spitup VARCHAR(255)
)