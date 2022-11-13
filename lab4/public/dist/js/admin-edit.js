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
	const show_book = document.querySelector('.book_info');
	let data = response.data;

	Array.from(data.result).forEach((i) => {
		const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9 };
		const price = new Intl.NumberFormat('vi-VN', config).format(i.gia);
		const item_book = `
			<div class="card col p-3 shadow-sm">
				<img class="img-fluid rounded" src="/${i.urlHinh}" alt="thumbnail"/>
            	<a class="nav-link fs-6 fw-semibold" href="/admin/editbook?id=${i.id}">${i.tenSach}</a>
				<span class="text-center">${price}</span>
                <div class="flex">
                    <a href="#" onclick="deletebook(${i.id})" class="btn btn-warning">Xoá</a>
                </div>
			</div>
		`;
		show_book.innerHTML += item_book;
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
