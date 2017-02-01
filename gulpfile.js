const gulp 		= require("gulp");
const sass 		= require("gulp-sass");
const notify 	= require("gulp-notify");

/*

  Task responsável por recuperar todos arquivos no formato .scss e .sass
  e retornar para pasta css que será criada automaticamente.

*/

gulp.task("sass", function(){
	return gulp.src('./source/scss/*.scss')
				.pipe(sass())
				.on("error", notify.onError({title:"erro ao compilar", message:"<%= error.message %>"}))
				.pipe(gulp.dest("./dist/css"))
});

gulp.task("html", function(){
	return gulp.src('./*.html')
				.pipe(htmlmin({collapseWhitespace: true}))
				.on("error", notify.onError({title:"erro ao compilar", message:"<%= error.message %>"}))
				.pipe(gulp.dest("./dist"))
});

/*

	Task responsável por executar de fundo todas a mudanças que houver nos arquivos

*/

gulp.task("watch", function(){
	gulp.watch("./sass/*.scss", ['sass']);
	gulp.watch("./*.html", ['html']);
});

/*
  Task default para iniciar apenas com o comando "gulp" no terminal
*/

gulp.task("default",['sass', 'sass:watch']);