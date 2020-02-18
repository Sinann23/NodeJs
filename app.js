var mysql = require('mysql');               // mysql paketleri
var connection = mysql.createConnection({   // mysql bağlantısı
	user: "root",
	password: "",
	database: "test"
});

var express = require('express');           // express modülü
var ejs = require('ejs');                   // ejs modülü
var app = express();                        // express i app olarak tanımlar aşağıda app olarak kullanırız app.get vb
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('.ejs', ejs.__express);          // view engine olarak ejs kullandırır
app.set('views', __dirname + '/views');     // view engine dosyalarını views klasörünün altında arar





app.get("/anasayfa", function (req, res, next) {

	connection.query('SELECT * FROM anasayfa ;', function (err, result) {

		if (err) {
			return next(err)
		} else {
			res.render('anasayfa.ejs', {
				anasayfa: result

			});
		}
		res.end();
	});
});




app.get("/bilgisayar", function (req, res, next) {
	connection.query('SELECT * FROM bilgisayar ;', function (err, result) {

		if (err) {
			return next(err)
		} else {
			res.render('bilgisayar.ejs', {
				bilgisayar: result

			});
		}
		res.end();
	});
});

app.get("/televizyon", function (req, res, next) {
	connection.query('SELECT * FROM televizyon ;', function (err, result) {

		if (err) {
			return next(err)
		} else {
			res.render('televizyon.ejs', {
				televizyon: result

			});
		}
		res.end();
	});
});

app.get("/telefon", function (req, res, next) {
	connection.query('SELECT * FROM telefon ;', function (err, result) {

		if (err) {
			return next(err)
		} else {
			res.render('telefon.ejs', {
				telefon: result

			});
		}
		res.end();
	});
});

app.get("/tablet", function (req, res, next) {
	connection.query('SELECT * FROM tablet ;', function (err, result) {

		if (err) {
			return next(err)
		} else {
			res.render('tablet.ejs', {
				tablet: result

			});
		}
		res.end();
	});
});

app.get("/aksesuar", function (req, res, next) {
	connection.query('SELECT * FROM aksesuar ;', function (err, result) {

		if (err) {
			return next(err)
		} else {
			res.render('aksesuar.ejs', {
				aksesuar: result

			});
		}
		res.end();
	});
});

app.get("/sepet", function (req, res, next) {
	connection.query('SELECT * FROM sepet ;', function (err, result) {

		if (err) {
			return next(err)
		} else {
			res.render('sepet.ejs', {
				sepet: result

			});
		}
		res.end();
	});
});

app.get('/misyonumuz', function (req, res) {
	res.render('misyonumuz.ejs');
});

app.get('/', function (req, res) {
	res.render('giris.ejs');
});



app.get('/kayit', function (req, res) {
	res.render('kayit.ejs');
});





app.post('/kayitEt', function (req, res) {

	var sql = "INSERT INTO kullanıcı (Kadi,Adı,Soyadı,Sifre) VALUES ('" + req.body.kullaniciAdi + "','" + req.body.isim + "','" + req.body.soyisim + "','" + req.body.sifresi + "')";
	var query = connection.query(sql, function (err, result) {
		if (err)
			console.log(err)
		
		console.log("kullanıcı oluşturuldu");
		res.render('giris.ejs', {});
	});

});

app.post('/sil', function (req, res) {

	var sql = "delete  from kullanıcı "
	var query = connection.query(sql, function (err, result) {
		if (err)
			console.log(err)
		
		console.log("kullanıcı oluşturuldu");
		res.render('giris.ejs', {});
	});

});






app.listen(port = 3500, 'localhost', function (params) {
	console.log('İlerlemenin sırrı başlamaktır.');
});



