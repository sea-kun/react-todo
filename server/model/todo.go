package model

import (
	"database/sql"
	"fmt"
	"time"
)

// Todo データ取得用
type Todo struct {
	ID        int        `json:"id"`
	Title     string     `json:"title"`
	CreatedAt *time.Time `json:"created_at"`
	UpdatedAt *time.Time `json:"updated_at"`
}

// TodoReq データ追加用
type TodoReq struct {
	Title string `json:"title" binding:"required"`
}

// GetAllTodo 全データ取得
func GetAllTodo(db *sql.DB) (*[]Todo, error) {
	rows, err := db.Query("SELECT id, title, created_at, updated_at FROM go_todos")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	todos := make([]Todo, 0)
	for rows.Next() {
		var todo Todo
		if err := rows.Scan(&todo.ID, &todo.Title, &todo.CreatedAt, &todo.UpdatedAt); err != nil {
			panic(err)
		}
		todos = append(todos, todo)
	}

	return &todos, nil
}

// InsertTodo データ追加
func InsertTodo(db *sql.DB, todo TodoReq) (*int64, error) {
	res, err := db.Exec("INSERT INTO go_todos (title) VALUES (?)", todo.Title)
	if err != nil {
		return nil, err
	}

	id, err := res.LastInsertId()
	if err != nil {
		return nil, err
	}

	return &id, nil
}

// DeleteByIDTodo データ削除
func DeleteByIDTodo(db *sql.DB, id int) error {
	res, err := db.Exec("DELETE FROM go_todos WHERE id = ?", id)
	if err != nil {
		return err
	}

	num, err := res.RowsAffected()
	if err != nil {
		return err
	}

	if num != 1 {
		return fmt.Errorf("delete todo: %s", "todo is not affected")
	}

	return nil
}
