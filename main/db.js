import { app } from 'electron';
import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(app.getPath('userData'), 'finance.db');
const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS chart_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    month TEXT NOT NULL,
    investments INTEGER NOT NULL,
    properties INTEGER NOT NULL,
    realestates INTEGER NOT NULL
  );
`);

export const insertData = (data) => {
  const stmt = db.prepare(`
    INSERT INTO chart_data (month, investments, properties, realestates)
    VALUES (?, ?, ?, ?)
  `);

  const insertMany = db.transaction((data) => {
    for(const item of data) {
      console.log(item.month);
      stmt.run(item.month, item.investments, item.properties, item.realestates);
    }
  });

  insertMany(data);
};

export const getAllData = () => {
  const stmt = db.prepare('SELECT * FROM chart_data');
  return stmt.all();
};