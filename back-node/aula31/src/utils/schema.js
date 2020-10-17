/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-await-in-loop */
const database = require('./database');

const schema = {
	1: `CREATE TABLE IF NOT EXISTS autores (
			id SERIAL,
			nome TEXT NOT NULL,
			sobrenome TEXT NOT NULL,
			email TEXT NOT NULL,
			senha TEXT NOT NULL,
			deletado BOOL DEFAULT FALSE
	);`,
	2: `CREATE TABLE IF NOT EXISTS posts (
			id SERIAL,
			titulo TEXT NOT NULL,
			subtitulo TEXT NOT NULL,
			conteudo TEXT NOT NULL,
			autor INT NOT NULL,
			publicado BOOL DEFAULT FALSE,
			deletado BOOL DEFAULT FALSE
	);`,
};

const drop = async (tableName) => {
	if (tableName) {
		await database.query(`DROP TABLE ${tableName}`);
		console.log('Tabela dropada');
	}
};

const up = async (number = null) => {
	if (!number) {
		for (const value in schema) {
			await database.query({ text: schema[value] });
		}
	} else {
		await database.query({ text: schema[number] });
	}
	console.log('Migração realizada');
};

/**
 * Rode up() ou drop("nomeDaTabela");
 */

up();
//drop('autores');
