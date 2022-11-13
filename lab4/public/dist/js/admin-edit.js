// Lấy URL
const params = new URL(document.location).searchParams;
// Get ID
let id_book = params.get('id');
// Book list
const book_edit = async () => {
	let response = await axios.get(`http://localhost:5000/api/book/${id_book}`);
	return response;
};
book_edit().then((response) => {
	let data = response.data;
	Array.from(data.result).forEach((item) => {
		// date update
		let d = new Date(`${item.capNhat}`);
		const date_update = document.querySelector('#time_show');
		date_update.innerHTML = `<span>Ngày cập nhật: ${d.toLocaleString()}</span>`;
		//
		const nameBook = document.querySelector('#tenSach');
		nameBook.value = `${item.tenSach}`;
		const moTa = document.querySelector('#moTa');
		moTa.value = `${item.moTa}`;
		const gia = document.querySelector('#gia');
		gia.value = `${item.gia}`;
		const idLoai = document.querySelector('#idLoai');
		idLoai.value = `${item.idLoai}`;
		const imgThumbnail = document.querySelector('#thumbnail');
		imgThumbnail.innerHTML = `<img src="/${item.urlHinh}" alt="thumbnail"/>`;
	});
});

// Xoá
const deletebook = (id) => {
	const ques = confirm('Bạn có chắc chắn xóa sản phẩm?');
	if (ques == false) return;
	axios({
		method: 'DELETE',
		url: `http://localhost:5000/api/delete/${id}`,
	})
		.then(function (res) {
			alert('Đã xóa!');
			document.location = 'http://localhost:5000/admin';
		})
		.catch(function (err) {
			alert('Xoá thất bại!');
			document.location = 'http://localhost:5000/admin';
		});
};
