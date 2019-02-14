package controller

import (
	"database/sql"
	"fmt"
	"net/http"
	"os"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/sea-kun/react-todo/server/model"
)

// TodoEnv todo_dbの接続環境
type TodoEnv struct {
	DB *sql.DB
}

// GetTodo 全データ取得用API
func (env *TodoEnv) GetTodo(c *gin.Context) {
	todos, err := model.GetAllTodo(env.DB)
	if err != nil {
		c.JSON(http.StatusInternalServerError, nil)
		fmt.Fprintf(os.Stderr, "%v\n", err.Error())
		return
	}

	c.JSON(http.StatusOK, todos)
}

// InsertTodo データ追加用API
func (env *TodoEnv) InsertTodo(c *gin.Context) {
	var todo model.TodoReq
	err := c.ShouldBindJSON(&todo)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	id, err := model.InsertTodo(env.DB, todo)
	if err != nil {
		c.JSON(http.StatusInternalServerError, nil)
		fmt.Fprintf(os.Stderr, "%v\n", err.Error())
		return
	}

	c.JSON(http.StatusOK, id)
}

// DeleteTodo データ削除用API
func (env *TodoEnv) DeleteTodo(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err = model.DeleteByIDTodo(env.DB, id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, nil)
		fmt.Fprintf(os.Stderr, "%v\n", err.Error())
		return
	}

	c.JSON(http.StatusNoContent, nil)
}
