package env

import (
	"database/sql"
	"os"
)

// InitDB todo_dbの接続の初期化
func InitDB() *sql.DB {
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	dbname := os.Getenv("DB_NAME")

	db, err := sql.Open("mysql", user+":"+password+"@/"+dbname+"?parseTime=true")
	if err != nil {
		panic(err)
	}

	return db
}
