package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/sea-kun/react-todo/server/controller"
	"github.com/sea-kun/react-todo/server/env"

	_ "github.com/astaxie/beego/session/mysql"
	_ "github.com/go-sql-driver/mysql"
	_ "github.com/sea-kun/react-todo/server/env"
)

func main() {
	// rooter
	r := gin.Default()

	// static
	r.LoadHTMLFiles("dist/index.html")
	r.StaticFile("/bundle.js", "./dist/bundle.js")
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", nil)
	})

	// env
	db := env.InitDB()
	todoEnv := controller.TodoEnv{DB: db}

	// api
	r.GET("/todos", todoEnv.GetTodo)
	r.POST("/todo", todoEnv.InsertTodo)
	r.DELETE("/todo/:id", todoEnv.DeleteTodo)

	r.Run()
}
