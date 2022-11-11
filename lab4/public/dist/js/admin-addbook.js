// const addProduct = document.querySelector('#addbook');
// addProduct.onclick = () => {
// 	const url = `http://localhost:5000/api/addbook`;
// 	const book = {
// 		tenSach: document.querySelector('#tenSach').value.trim(),
// 		moTa: document.querySelector('#moTa').value.trim(),
// 		urlHinh: document.querySelector('#urlHinh').files,
// 		gia: document.querySelector('#gia').value.trim(),
// 		idLoai: document.querySelector('#idLoai').value.trim(),
// 		anHien: document.querySelector('#anHien').value.trim(),
// 	};
// const options = {
// 	method: 'POST',
// 	body: JSON.stringify(book),
// 	headers: { 'Content-Type': 'application/json' },
// };
// 	axios
// 		.post('http://localhost:5000/api/addbook', book, {
// 			headers: { 'Content-Type': 'multipart/form-data' },
// 		})
// 		.then(function (res) {
// 			console.log('Thành công!');
// 		})
// 		.catch(function (err) {
// 			console.log(err.message);
// 		});
// };

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const tenSach = document.querySelector('#tenSach');
	const moTa = document.querySelector('#moTa');
	const urlHinh = document.querySelector('#urlHinh');
	const gia = document.querySelector('#gia');
	const idLoai = document.querySelector('#idLoai');
	const anHien = document.querySelector('#anHien');

	const formdata = new FormData(form);
	formdata.append('tenSach', tenSach.value);
	formdata.append('moTa', moTa.value);
	formdata.append('urlHinh', urlHinh.files);
	formdata.append('gia', gia.value);
	formdata.append('idLoai', idLoai.value);
	formdata.append('anHien', anHien.value);

	axios
		.post('http://localhost:5000/api/addbook', formdata, {
			headers: { 'Content-Type': 'multipart/form-data' },
		})
		.then(function (res) {
			console.log('Thành công!');
		})
		.catch(function (err) {
			console.log('Thất bại!');
		});
});
