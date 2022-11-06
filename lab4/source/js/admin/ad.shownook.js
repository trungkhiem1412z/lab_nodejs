// Lấy URL
const params = new URL(document.location).searchParams;
// Get ID
let cat_id = params.get('id');
// Book list
export const book_cat = async () => {
	let response = await axios.get(`http://localhost:5000/api/book`);
	return response;
};
book_cat().then((response) => {
	const show_book = document.querySelector('.admin_show_book');
	let data = response.data;

	Array.from(data.result).forEach((i) => {
		const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9 };
		const price = new Intl.NumberFormat('vi-VN', config).format(i.gia);
		const item_book = `
			<div class="card col p-3 shadow-sm">
				<img class="img-fluid rounded" src="/${i.urlHinh}" alt="thumbnail"/>
            	<a class="nav-link fs-6 fw-semibold" href="#">${i.tenSach}</a>
				<span class="text-center">${price}</span>
                <div class="flex">
                    <a href="#" class="btn btn-primary">Sửa</a>
                    <a href="#" class="btn btn-warning">Xoá</a>
                </div>
			</div>
		`;
		show_book.innerHTML += item_book;
	});
});
